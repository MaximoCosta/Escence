var cart = [];

function mostrarPagina(nombre) {
    var paginas = document.getElementsByClassName("page");
    for (var i = 0; i < paginas.length; i++) {
        paginas[i].classList.remove("active");
    }
    document.getElementById("page-" + nombre).classList.add("active");
}

function showToast(message) {
    var container = document.getElementById("toast-container");
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function () {
        toast.classList.add("leaving");
        setTimeout(function () {
            toast.remove();
        }, 300);
    }, 2800);
}

function openModal(id) {
    document.getElementById(id).classList.add("open");
}

function closeModal(id) {
    document.getElementById(id).classList.remove("open");
}

function initModals() {
    document.querySelectorAll("[data-close]").forEach(function (el) {
        el.addEventListener("click", function () {
            closeModal(el.dataset.close);
        });
    });
    document.querySelectorAll(".modal-overlay").forEach(function (overlay) {
        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) closeModal(overlay.id);
        });
    });
    document.getElementById("login-btn").addEventListener("click", function () {
        openModal("login-overlay");
    });
    document.getElementById("signup-btn").addEventListener("click", function () {
        openModal("login-overlay");
    });
    document.getElementById("cart-btn").addEventListener("click", function () {
        openModal("cart-overlay");
    });
}

function addToCart(product) {
    var existing = cart.find(function (i) {
        return i.id === product.id;
    });
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    renderCart();
    openModal("cart-overlay");
    showToast(product.name + " added to cart!");
}

function updateQty(id, delta) {
    var item = cart.find(function (i) {
        return i.id === id;
    });
    if (!item) return;
    item.quantity = Math.max(1, item.quantity + delta);
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(function (i) {
        return i.id !== id;
    });
    renderCart();
    showToast("Item removed");
}

function cartTotal() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].price * cart[i].quantity;
    }
    return total;
}

function cartCount() {
    var count = 0;
    for (var i = 0; i < cart.length; i++) {
        count = count + cart[i].quantity;
    }
    return count;
}

function renderCart() {
    var count = cartCount();
    document.getElementById("cart-count").textContent = count;
    var badge = document.getElementById("cart-badge");
    badge.textContent = count;
    badge.hidden = count === 0;

    var itemsEl = document.getElementById("cart-items");
    var footerEl = document.getElementById("cart-footer");

    if (cart.length === 0) {
        itemsEl.innerHTML = "<p class='empty-cart'>Your cart is empty.<br/>Add some exquisite fragrances.</p>";
        footerEl.hidden = true;
        return;
    }

    footerEl.hidden = false;
    itemsEl.innerHTML = "";

    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        itemsEl.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">$${item.price * item.quantity}.00</div>
                    <div class="qty-control">
                        <div class="qty-box">
                            <button data-qty="-1" data-id="${item.id}">−</button>
                            <span>${item.quantity}</span>
                            <button data-qty="1" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove-btn" data-remove="${item.id}">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById("cart-subtotal").textContent = "$" + cartTotal() + ".00";

    itemsEl.querySelectorAll("[data-qty]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            updateQty(Number(btn.dataset.id), Number(btn.dataset.qty));
        });
    });
    itemsEl.querySelectorAll("[data-remove]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            removeFromCart(Number(btn.dataset.remove));
        });
    });
}

function agregarAlCarrito(id, nombre, precio, imagen) {
    addToCart({
        id: id,
        name: nombre,
        price: precio,
        image: imagen
    });
}

// cargo los productos del servidor
var contenedor = document.querySelector("#productos");

fetch("/productos")
    .then(respuesta => respuesta.json())
    .then(datos => {

        datos.forEach(producto => {
            contenedor.innerHTML += `
                <article>
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio}</p>
                    <a href="#" onclick="verProducto(${producto.id}); return false;">Ver producto</a>
                </article>
            `;
        });

    });

function verProducto(id) {
    fetch("/productos/" + id)
        .then(respuesta => respuesta.json())
        .then(producto => {
            var seccion = document.getElementById("page-product");
            seccion.innerHTML = `
                <div class="product-detail-container">
                    <div class="product-image-col">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                    </div>
                    <div class="product-info-col">
                        <button class="back-btn" onclick="mostrarPagina('shop')">Volver a la tienda</button>
                        <h1 class="product-title">${producto.nombre}</h1>
                        <p class="product-price">$${producto.precio}</p>
                        <button class="btn-primary" onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio}, '${producto.imagen}')">Agregar al carrito</button>
                    </div>
                </div>
            `;
            mostrarPagina("product");
        });
}

function detectCardType(number) {
    var digits = number.replace(/\D/g, "");
    if (/^4/.test(digits)) return "visa";
    if (/^(5[1-5]|2[2-7])/.test(digits)) return "mastercard";
    if (/^3[47]/.test(digits)) return "amex";
    return "unknown";
}

function formatCardNumber(value) {
    var digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value) {
    var digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
}

function formatCVC(value) {
    return value.replace(/\D/g, "").slice(0, 3);
}

var visaSVG = '<svg width="46" height="16" viewBox="0 0 46 16" xmlns="http://www.w3.org/2000/svg"><text x="0" y="13" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="16" fill="#ffffff" letter-spacing="0.5">VISA</text></svg>';
var mastercardSVG = '<svg width="40" height="26" viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="13" r="13" fill="#EB001B" fill-opacity="0.9"/><circle cx="26" cy="13" r="13" fill="#F79E1B" fill-opacity="0.9"/><path d="M20 3.5a13 13 0 0 1 0 19 13 13 0 0 1 0-19Z" fill="#FF5F00" fill-opacity="0.95"/></svg>';

function initCheckout() {
    document.getElementById("checkout-btn").addEventListener("click", function () {
        if (cart.length === 0) return;
        closeModal("cart-overlay");
        resetCheckoutForm();
        openModal("checkout-overlay");
    });
    document.getElementById("checkout-close").addEventListener("click", function () {
        closeModal("checkout-overlay");
    });

    var nameInput = document.getElementById("pay-name");
    var numberInput = document.getElementById("pay-number");
    var expiryInput = document.getElementById("pay-expiry");
    var cvcInput = document.getElementById("pay-cvc");
    var card = document.getElementById("credit-card");

    nameInput.addEventListener("input", function () {
        document.getElementById("cc-name").textContent = nameInput.value.trim() ? nameInput.value.toUpperCase() : "YOUR NAME";
    });

    numberInput.addEventListener("input", function () {
        var digits = numberInput.value.replace(/\D/g, "").slice(0, 16);
        numberInput.value = formatCardNumber(digits);
        document.getElementById("cc-number").textContent = digits ? formatCardNumber(digits) : "•••• •••• •••• ••••";
        var type = detectCardType(digits);
        var brandEl = document.getElementById("card-brand-icon");
        brandEl.innerHTML = type === "visa" ? visaSVG : type === "mastercard" ? mastercardSVG : "";
    });

    expiryInput.addEventListener("input", function () {
        expiryInput.value = formatExpiry(expiryInput.value);
        document.getElementById("cc-expiry").textContent = expiryInput.value || "MM/YY";
    });

    cvcInput.addEventListener("input", function () {
        cvcInput.value = formatCVC(cvcInput.value);
        document.getElementById("cc-cvc").textContent = cvcInput.value.padEnd(3, "•");
    });
    cvcInput.addEventListener("focus", function () {
        card.classList.add("flipped");
    });
    cvcInput.addEventListener("blur", function () {
        card.classList.remove("flipped");
    });

    document.getElementById("payment-form").addEventListener("submit", handlePaySubmit);
}

function resetCheckoutForm() {
    ["pay-name", "pay-number", "pay-expiry", "pay-cvc"].forEach(function (id) {
        document.getElementById(id).value = "";
        document.getElementById(id).classList.remove("input-error");
    });
    document.getElementById("cc-name").textContent = "YOUR NAME";
    document.getElementById("cc-number").textContent = "•••• •••• •••• ••••";
    document.getElementById("cc-expiry").textContent = "MM/YY";
    document.getElementById("cc-cvc").textContent = "•••";
    document.getElementById("card-brand-icon").innerHTML = "";
    document.getElementById("credit-card").classList.remove("flipped");
    document.getElementById("checkout-form-view").hidden = false;
    document.getElementById("checkout-success-view").hidden = true;
    document.getElementById("checkout-close").hidden = false;

    var total = cartTotal();
    document.getElementById("payment-summary-label").textContent = "Total (" + cartCount() + " items)";
    document.getElementById("payment-summary-total").textContent = "$" + total + ".00";
    document.getElementById("pay-btn-label").textContent = "Pay $" + total + ".00";
    setPayButtonState("idle");
}

function setPayButtonState(state) {
    var btn = document.getElementById("pay-btn");
    var label = document.getElementById("pay-btn-label");
    if (state === "processing") {
        btn.disabled = true;
        label.innerHTML = '<span class="pay-spinner"></span>';
        btn.querySelector("svg").style.display = "none";
    } else {
        btn.disabled = false;
        label.textContent = "Pay $" + cartTotal() + ".00";
        btn.querySelector("svg").style.display = "";
    }
}

function handlePaySubmit(e) {
    e.preventDefault();
    var name = document.getElementById("pay-name");
    var number = document.getElementById("pay-number");
    var expiry = document.getElementById("pay-expiry");
    var cvc = document.getElementById("pay-cvc");
    var digits = number.value.replace(/\D/g, "");

    var validName = name.value.trim().length > 1;
    var validNumber = digits.length === 16;
    var validExpiry = expiry.value.length === 5;
    var validCvc = cvc.value.length === 3;

    name.classList.toggle("input-error", !validName);
    number.classList.toggle("input-error", !validNumber);
    expiry.classList.toggle("input-error", !validExpiry);
    cvc.classList.toggle("input-error", !validCvc);

    if (!validName || !validNumber || !validExpiry || !validCvc) return;

    setPayButtonState("processing");
    document.getElementById("checkout-close").hidden = true;

    setTimeout(function () {
        var type = detectCardType(digits);
        document.getElementById("success-message").textContent =
            "$" + cartTotal() + ".00 charged to your " + (type !== "unknown" ? type : "card") + " ending in " + digits.slice(-4) + ".";
        document.getElementById("checkout-form-view").hidden = true;
        document.getElementById("checkout-success-view").hidden = false;

        setTimeout(function () {
            cart = [];
            renderCart();
            closeModal("checkout-overlay");
            showToast("Order placed! Thank you for shopping with Essence.");
        }, 1900);
    }, 1600);
}

initModals();
initCheckout();
renderCart();
