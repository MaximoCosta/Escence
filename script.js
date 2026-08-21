// ---------- Data ----------
const PRODUCTS = [
  { id: 1, slug: 'royal-oud-intense', name: "Royal Oud Intense", price: 150, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600&h=800", gender: "Unisex",
    rating: 4.8, topNotes: "Saffron, Nutmeg, Lavender", heartNotes: "Agarwood (Oud), Patchouli", baseNotes: "Musk, Amber, Vetiver",
    description: "A deeply mesmerizing and authentic Arabic Oud, crafted with the finest agarwood. Royal Oud Intense opens with a powerful burst of rich spices, settling into a heart of dark woods and amber. It is a timeless classic, perfect for evening wear and special occasions where leaving an impression is paramount.",
    reviews: [
      { user: "Amina K.", text: "Absolutely stunning. It lasts for days on my clothes.", rating: 5 },
      { user: "James T.", text: "A bit too strong at first, but dries down beautifully.", rating: 4 }
    ] },
  { id: 2, slug: 'desert-rose-amber', name: "Desert Rose & Amber", price: 120, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=600&h=800", gender: "Female",
    rating: 4.5, topNotes: "Pink Pepper, Bergamot", heartNotes: "Taif Rose, Jasmine", baseNotes: "Amber, Sandalwood, Vanilla",
    description: "A floral masterpiece combining the delicate sweetness of Taif rose with warm, glowing amber. A scent that captures the essence of a desert sunset, wrapping the wearer in a comforting yet sophisticated aura.",
    reviews: [ { user: "Sarah W.", text: "The perfect rose scent. Not too sweet, very elegant.", rating: 5 } ] },
  { id: 3, slug: 'midnight-saffron', name: "Midnight Saffron", price: 185, image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=600&h=800", gender: "Unisex",
    rating: 4.9, topNotes: "Saffron, Black Pepper", heartNotes: "Rose, Cardamom", baseNotes: "Musk, Leather, Guaiac Wood",
    description: "Exotic saffron intertwined with spicy cardamom and a base of pure musk. A truly opulent and luxurious fragrance that speaks of ancient spice routes and midnight rendezvous.",
    reviews: [
      { user: "Mohammed", text: "The saffron is incredibly authentic. Pure luxury.", rating: 5 },
      { user: "Elena P.", text: "My absolute signature scent now.", rating: 5 }
    ] },
  { id: 4, slug: 'sandalwood-majesty', name: "Sandalwood Majesty", price: 135, image: "https://images.unsplash.com/photo-1594032194509-0056023973b2?auto=format&fit=crop&q=80&w=600&h=800", gender: "Unisex",
    rating: 4.7, topNotes: "Bergamot, Cardamom", heartNotes: "Violet, Iris", baseNotes: "Sandalwood, Vanilla, Tonka Bean",
    description: "Creamy, smooth sandalwood from Mysore, elevated by hints of vanilla and tonka bean. Soothing yet profoundly elegant, this fragrance acts as a second skin.",
    reviews: [ { user: "David L.", text: "Smooth and creamy, very relaxing scent.", rating: 4 } ] },
  { id: 5, slug: 'oud-wood-reserve', name: "Oud Wood Reserve", price: 210, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600&h=800", gender: "Male",
    rating: 5.0, topNotes: "Rosewood, Cardamom", heartNotes: "Oud, Sandalwood, Vetiver", baseNotes: "Tonka Bean, Amber",
    description: "One of the rarest, most highly sought-after ingredients in a perfume maker's arsenal. Oud Wood Reserve is a masterclass in woody perfection, blended with rare spices and smooth vetiver.",
    reviews: [ { user: "Richard M.", text: "The holy grail of Oud fragrances.", rating: 5 } ] },
  { id: 6, slug: 'golden-musk', name: "Golden Musk", price: 95, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=600&h=800", gender: "Unisex",
    rating: 4.4, topNotes: "Aldehydes, White Rose", heartNotes: "White Musk, Jasmine", baseNotes: "Cedarwood, Powdery Notes",
    description: "A gentle, alluring musk that stays close to the skin, offering a powdery, clean aura. Perfect for everyday wear.",
    reviews: [] },
  { id: 7, slug: 'velvet-jasmine', name: "Velvet Jasmine", price: 110, image: "https://images.unsplash.com/photo-1594032194509-0056023973b2?auto=format&fit=crop&q=80&w=600&h=800", gender: "Female",
    rating: 4.6, topNotes: "Mandarin, Peach", heartNotes: "Jasmine Sambac, Tuberose", baseNotes: "Patchouli, Vanilla",
    description: "Blooming night jasmine blended with white patchouli. A sensual, velvety floral that commands attention and leaves a lingering trail of mystery.",
    reviews: [ { user: "Clara", text: "Very intense jasmine, smells incredibly natural.", rating: 5 } ] },
  { id: 8, slug: 'spiced-leather', name: "Spiced Leather", price: 160, image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=600&h=800", gender: "Male",
    rating: 4.8, topNotes: "Saffron, Raspberry", heartNotes: "Olibanum, Night Blooming Jasmine", baseNotes: "Leather, Suede, Amber",
    description: "Rich, supple leather meets middle-eastern spices. Bold, confident, and deeply intoxicating. For those who dare to stand out.",
    reviews: [] },
  { id: 9, slug: 'amber-nuit', name: "Amber Nuit", price: 175, image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=600&h=800", gender: "Unisex",
    rating: 4.7, topNotes: "Pink Pepper, Bergamot", heartNotes: "Turkish Rose", baseNotes: "Amber, Cedar",
    description: "A deeply sensual and mysterious fragrance blending warm amber with spicy pink pepper.",
    reviews: [] },
  { id: 10, slug: 'black-orchid-extrait', name: "Black Orchid Extrait", price: 220, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=600&h=800", gender: "Female",
    rating: 4.9, topNotes: "Truffle, Ylang-Ylang", heartNotes: "Black Orchid, Rum", baseNotes: "Patchouli, Sandalwood, Dark Chocolate",
    description: "A luxurious and deeply floral fragrance featuring rare black orchids and dark chocolate notes.",
    reviews: [] },
  { id: 11, slug: 'taif-rose-absolute', name: "Taif Rose Absolute", price: 145, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=600&h=800", gender: "Female",
    rating: 4.6, topNotes: "Geranium, Lemon", heartNotes: "Taif Rose, Bulgarian Rose", baseNotes: "Musk, Honey",
    description: "The purest essence of Taif roses, known for their intense and complex floral scent.",
    reviews: [] },
  { id: 12, slug: 'mystic-frankincense', name: "Mystic Frankincense", price: 190, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=600&h=800", gender: "Unisex",
    rating: 4.8, topNotes: "Frankincense, Pink Pepper", heartNotes: "Myrrh, Iris", baseNotes: "Vanilla, Woods",
    description: "A deeply spiritual and grounding fragrance based on Omani frankincense and myrrh.",
    reviews: [] },
];

// ---------- State ----------
let cart = [];
let shopFilter = 'All';
let galleryIdx = 0;

// ---------- Theme ----------
function initTheme() {
  const stored = localStorage.getItem('essence-theme');
  const theme = stored === 'light' || stored === 'dark'
    ? stored
    : (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', theme);
  renderThemeIcon(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('essence-theme', next);
  renderThemeIcon(next);
}

function renderThemeIcon(theme) {
  const thumb = document.getElementById('theme-thumb');
  const sun = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  const moon = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>';
  thumb.innerHTML = theme === 'light' ? sun : moon;
}

// ---------- Navigation ----------
function goToPage(page, pushHash = true) {
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.toggle('active', el.dataset.nav === page);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (pushHash && location.hash !== `#${page}`) history.pushState(null, '', `#${page}`);
}

function goToProduct(slug) {
  const product = PRODUCTS.find(p => p.slug === slug);
  if (!product) return;
  renderProductDetail(product);
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  document.getElementById('page-product').classList.add('active');
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (location.hash !== `#product/${slug}`) history.pushState(null, '', `#product/${slug}`);
}

function handleRoute() {
  const hash = location.hash.replace('#', '');
  if (hash.startsWith('product/')) {
    goToProduct(hash.replace('product/', ''));
  } else {
    goToPage(hash || 'home', false);
  }
}

function initNav() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      goToPage(el.dataset.nav);
    });
  });
  window.addEventListener('popstate', handleRoute);
  handleRoute();
}

// ---------- Toasts ----------
function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('leaving');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ---------- Modals ----------
function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

function initModals() {
  document.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', () => closeModal(el.dataset.close));
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });
  document.getElementById('login-btn').addEventListener('click', () => openModal('login-overlay'));
  document.getElementById('signup-btn').addEventListener('click', () => openModal('login-overlay'));
  document.getElementById('cart-btn').addEventListener('click', () => openModal('cart-overlay'));
}

// ---------- Cart ----------
function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
  openModal('cart-overlay');
  showToast(`${product.name} added to cart!`);
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.quantity = Math.max(1, item.quantity + delta);
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
  showToast('Item removed');
}

function cartTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
}
function cartCount() {
  return cart.reduce((sum, i) => sum + i.quantity, 0);
}

function renderCart() {
  const count = cartCount();
  document.getElementById('cart-count').textContent = count;
  const badge = document.getElementById('cart-badge');
  badge.textContent = count;
  badge.hidden = count === 0;

  const itemsEl = document.getElementById('cart-items');
  const footerEl = document.getElementById('cart-footer');

  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="empty-cart">Your cart is empty.<br/>Add some exquisite fragrances.</p>';
    footerEl.hidden = true;
    return;
  }

  footerEl.hidden = false;
  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
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
  `).join('');

  document.getElementById('cart-subtotal').textContent = `$${cartTotal()}.00`;

  itemsEl.querySelectorAll('[data-qty]').forEach(btn => {
    btn.addEventListener('click', () => updateQty(Number(btn.dataset.id), Number(btn.dataset.qty)));
  });
  itemsEl.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(Number(btn.dataset.remove)));
  });
}

// ---------- Shop Grid ----------
function shopCardHTML(product, saleOnly) {
  return `
    <div class="shop-card" data-slug="${product.slug}">
      <img src="${product.image}" alt="${product.name}" />
      <div class="shop-card-info">
        <span class="shop-card-tag">${product.gender}</span>
        <h3>${product.name}</h3>
        <div class="shop-card-price-row">
          ${saleOnly ? `<span class="old-price">$${product.price + 50}.00</span>` : ''}
          <p class="cur-price ${saleOnly ? 'sale' : ''}">$${product.price}.00</p>
        </div>
        <button data-add="${product.id}">Add to Cart</button>
      </div>
    </div>
  `;
}

function renderShopGrid(containerId, products, saleOnly) {
  const el = document.getElementById(containerId);
  el.innerHTML = products.map(p => shopCardHTML(p, saleOnly)).join('');
  el.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const product = PRODUCTS.find(p => p.id === Number(btn.dataset.add));
      addToCart(product);
    });
  });
  el.querySelectorAll('.shop-card[data-slug]').forEach(card => {
    card.addEventListener('click', () => goToProduct(card.dataset.slug));
  });
}

function initShopFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      shopFilter = btn.dataset.filter;
      renderShopPage();
    });
  });
}

function renderShopPage() {
  const filtered = shopFilter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.gender === shopFilter);
  renderShopGrid('shop-grid', filtered, false);
}

// ---------- Home Gallery (accordion, 4 visible) ----------
function renderGallery() {
  const visible = [0, 1, 2, 3].map(i => PRODUCTS[(galleryIdx + i) % PRODUCTS.length]);
  const el = document.getElementById('gallery-items');
  el.innerHTML = visible.map(p => `
    <div class="gallery-item" data-slug="${p.slug}">
      <img src="${p.image}" alt="${p.name}" />
      <div class="overlay"></div>
      <div class="price-tag"><span>${p.name}</span><span>$${p.price}.00</span></div>
    </div>
  `).join('');
}

function initHomeGallery() {
  const el = document.getElementById('gallery-items');
  el.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) goToProduct(item.dataset.slug);
  });
  renderGallery();
  document.getElementById('gallery-prev').addEventListener('click', () => {
    galleryIdx = (galleryIdx - 1 + PRODUCTS.length) % PRODUCTS.length;
    renderGallery();
  });
  document.getElementById('gallery-next').addEventListener('click', () => {
    galleryIdx = (galleryIdx + 1) % PRODUCTS.length;
    renderGallery();
  });
}

// ---------- Carousel ----------
function initCarousel() {
  const items = PRODUCTS.slice(0, 6);
  const viewport = document.getElementById('carousel-viewport');
  const dotsEl = document.getElementById('carousel-dots');
  let index = 0;
  let timer = null;

  items.forEach((p, i) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <div class="carousel-scrim"></div>
      <div class="carousel-caption">
        <span class="carousel-eyebrow">${p.gender} Fragrance</span>
        <h3>${p.name}</h3>
        <p>$${p.price}.00</p>
      </div>
    `;
    slide.addEventListener('click', () => goToProduct(p.slug));
    viewport.insertBefore(slide, viewport.firstChild);

    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => setSlide(i));
    dotsEl.appendChild(dot);
  });

  const slides = viewport.querySelectorAll('.carousel-slide');
  const dots = dotsEl.querySelectorAll('.carousel-dot');

  function setSlide(newIndex) {
    slides[index].classList.remove('active');
    dots[index].classList.remove('active');
    index = (newIndex + items.length) % items.length;
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function next() { setSlide(index + 1); }
  function prev() { setSlide(index - 1); }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(next, 4500);
  }
  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  document.getElementById('carousel-next').addEventListener('click', () => { next(); startAutoplay(); });
  document.getElementById('carousel-prev').addEventListener('click', () => { prev(); startAutoplay(); });
  viewport.addEventListener('mouseenter', stopAutoplay);
  viewport.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
}

// ---------- Showcase & Blog ----------
function renderShowcase() {
  const items = PRODUCTS.slice(4, 8);
  const el = document.getElementById('showcase-grid');
  el.innerHTML = items.map(p => `
    <div class="showcase-item" data-slug="${p.slug}">
      <img src="${p.image}" alt="${p.name}" />
      <div class="overlay"></div>
      <div class="showcase-caption">
        <span>${p.gender} Collection</span>
        <h3>${p.name}</h3>
        <p>Starting at $${p.price}</p>
      </div>
    </div>
  `).join('');
  el.querySelectorAll('.showcase-item').forEach(item => {
    item.addEventListener('click', () => goToProduct(item.dataset.slug));
  });
}

// ---------- Product Detail ----------
function starsHTML(rating) {
  let out = '';
  for (let i = 0; i < 5; i++) {
    out += `<svg width="16" height="16" viewBox="0 0 24 24" fill="${i < Math.floor(rating) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }
  return out;
}

function renderProductDetail(product) {
  const related = PRODUCTS.filter(p => p.gender === product.gender && p.id !== product.id).slice(0, 3);

  document.getElementById('page-product').innerHTML = `
    <div class="product-detail-container">
      <div class="product-image-col">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-info-col">
        <div class="breadcrumb">
          <button class="back-btn" id="product-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back
          </button>
          <span>/</span> <span>Fragrances</span> <span>/</span> <span style="color:var(--text-color)">${product.name}</span>
        </div>

        <h1 class="product-title">${product.name}</h1>
        <div style="color:var(--gray-text);margin-bottom:1rem;font-style:italic">${product.gender} Fragrance</div>

        <div class="product-rating">
          ${starsHTML(product.rating)}
          <span>${product.rating} (${product.reviews.length * 42 + 12} reviews)</span>
        </div>

        <div class="product-price">$${product.price}.00 <span class="stock">In Stock</span></div>

        <p class="product-description">${product.description}</p>

        <div class="fragrance-notes" style="margin-bottom:2rem;padding:1.5rem;background:var(--surface-2);border-radius:1rem">
          <h4 style="margin-bottom:1rem;color:var(--accent-text)">Olfactory Notes</h4>
          <div style="display:grid;gap:0.8rem;font-size:0.95rem">
            <div><strong style="color:var(--text-color)">Top:</strong> <span style="color:var(--gray-text)">${product.topNotes}</span></div>
            <div><strong style="color:var(--text-color)">Heart:</strong> <span style="color:var(--gray-text)">${product.heartNotes}</span></div>
            <div><strong style="color:var(--text-color)">Base:</strong> <span style="color:var(--gray-text)">${product.baseNotes}</span></div>
          </div>
        </div>

        <div class="action-buttons">
          <button class="btn-buy" id="product-buy">Buy Now</button>
          <button class="btn-secondary" id="product-add">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add to Cart
          </button>
        </div>

        <div class="features-list">
          <div class="feature-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg><span>Free standard shipping on orders over $100</span></div>
          <div class="feature-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg><span>30-day return policy for unopened items</span></div>
          <div class="feature-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg><span>100% authentic and ethically sourced ingredients</span></div>
        </div>
      </div>
    </div>

    <div class="reviews-section" style="max-width:1200px;width:100%;margin-top:4rem;padding:0 2rem">
      <h2 style="border-bottom:1px solid var(--border-color);padding-bottom:1rem;margin-bottom:2rem">Customer Reviews</h2>
      ${product.reviews.length > 0 ? `
        <div style="display:grid;gap:2rem;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr))">
          ${product.reviews.map(rev => `
            <div style="background:var(--surface-2);padding:1.5rem;border-radius:1rem">
              <div style="display:flex;justify-content:space-between;margin-bottom:1rem">
                <strong style="color:var(--text-color)">${rev.user}</strong>
                <div style="color:var(--accent-text);display:flex">${starsHTML(rev.rating)}</div>
              </div>
              <p style="color:var(--gray-text);font-size:0.95rem;line-height:1.5">${rev.text}</p>
            </div>
          `).join('')}
        </div>
      ` : `<p style="color:var(--gray-text)">No reviews yet. Be the first to review this exquisite fragrance.</p>`}
    </div>

    ${related.length > 0 ? `
      <div style="max-width:1200px;width:100%;margin-top:4rem;padding:0 2rem 4rem">
        <h2 style="border-bottom:1px solid var(--border-color);padding-bottom:1rem;margin-bottom:2rem">You Might Also Like</h2>
        <div class="shop-grid" style="grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:2rem;padding:0">
          ${related.map(p => shopCardHTML(p, false)).join('')}
        </div>
      </div>
    ` : ''}
  `;

  document.getElementById('product-back').addEventListener('click', () => history.back());
  document.getElementById('product-add').addEventListener('click', () => addToCart(product));
  document.getElementById('product-buy').addEventListener('click', () => { addToCart(product); goToPage('shop'); });

  const relatedGrid = document.getElementById('page-product').querySelector('.shop-grid');
  if (relatedGrid) {
    relatedGrid.querySelectorAll('[data-add]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(PRODUCTS.find(p => p.id === Number(btn.dataset.add)));
      });
    });
    relatedGrid.querySelectorAll('.shop-card[data-slug]').forEach(card => {
      card.addEventListener('click', () => goToProduct(card.dataset.slug));
    });
  }
}

function renderBlog() {
  const items = PRODUCTS.slice(4, 7);
  const el = document.getElementById('blog-grid');
  el.innerHTML = items.map(() => `
    <div class="shop-card blog-card">
      <img src="${PRODUCTS[4].image}" alt="Blog" style="height:200px" />
      <div class="shop-card-info">
        <span class="blog-tag">FRAGRANCE 101</span>
        <h3>The History of Agarwood</h3>
        <p>Learn how this rare resin became the most sought after ingredient in luxury perfumery...</p>
        <button type="button">Read Article</button>
      </div>
    </div>
  `).join('');
}

// ---------- Card utils ----------
function detectCardType(number) {
  const digits = number.replace(/\D/g, '');
  if (/^4/.test(digits)) return 'visa';
  if (/^(5[1-5]|2[2-7])/.test(digits)) return 'mastercard';
  if (/^3[47]/.test(digits)) return 'amex';
  return 'unknown';
}
function formatCardNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(.{4})/g, '$1 ').trim();
}
function formatExpiry(value) {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}
function formatCVC(value) {
  return value.replace(/\D/g, '').slice(0, 3);
}

const visaSVG = '<svg width="46" height="16" viewBox="0 0 46 16" xmlns="http://www.w3.org/2000/svg"><text x="0" y="13" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="16" fill="#ffffff" letter-spacing="0.5">VISA</text></svg>';
const mastercardSVG = '<svg width="40" height="26" viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="13" r="13" fill="#EB001B" fill-opacity="0.9"/><circle cx="26" cy="13" r="13" fill="#F79E1B" fill-opacity="0.9"/><path d="M20 3.5a13 13 0 0 1 0 19 13 13 0 0 1 0-19Z" fill="#FF5F00" fill-opacity="0.95"/></svg>';

// ---------- Checkout ----------
function initCheckout() {
  document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) return;
    closeModal('cart-overlay');
    resetCheckoutForm();
    openModal('checkout-overlay');
  });
  document.getElementById('checkout-close').addEventListener('click', () => closeModal('checkout-overlay'));

  const nameInput = document.getElementById('pay-name');
  const numberInput = document.getElementById('pay-number');
  const expiryInput = document.getElementById('pay-expiry');
  const cvcInput = document.getElementById('pay-cvc');
  const card = document.getElementById('credit-card');

  nameInput.addEventListener('input', () => {
    document.getElementById('cc-name').textContent = nameInput.value.trim() ? nameInput.value.toUpperCase() : 'YOUR NAME';
  });

  numberInput.addEventListener('input', () => {
    const digits = numberInput.value.replace(/\D/g, '').slice(0, 16);
    numberInput.value = formatCardNumber(digits);
    document.getElementById('cc-number').textContent = digits ? formatCardNumber(digits) : '•••• •••• •••• ••••';
    const type = detectCardType(digits);
    const brandEl = document.getElementById('card-brand-icon');
    brandEl.innerHTML = type === 'visa' ? visaSVG : type === 'mastercard' ? mastercardSVG : '';
  });

  expiryInput.addEventListener('input', () => {
    expiryInput.value = formatExpiry(expiryInput.value);
    document.getElementById('cc-expiry').textContent = expiryInput.value || 'MM/YY';
  });

  cvcInput.addEventListener('input', () => {
    cvcInput.value = formatCVC(cvcInput.value);
    document.getElementById('cc-cvc').textContent = cvcInput.value.padEnd(3, '•');
  });
  cvcInput.addEventListener('focus', () => card.classList.add('flipped'));
  cvcInput.addEventListener('blur', () => card.classList.remove('flipped'));

  document.getElementById('payment-form').addEventListener('submit', handlePaySubmit);
}

function resetCheckoutForm() {
  ['pay-name', 'pay-number', 'pay-expiry', 'pay-cvc'].forEach(id => {
    document.getElementById(id).value = '';
    document.getElementById(id).classList.remove('input-error');
  });
  document.getElementById('cc-name').textContent = 'YOUR NAME';
  document.getElementById('cc-number').textContent = '•••• •••• •••• ••••';
  document.getElementById('cc-expiry').textContent = 'MM/YY';
  document.getElementById('cc-cvc').textContent = '•••';
  document.getElementById('card-brand-icon').innerHTML = '';
  document.getElementById('credit-card').classList.remove('flipped');
  document.getElementById('checkout-form-view').hidden = false;
  document.getElementById('checkout-success-view').hidden = true;
  document.getElementById('checkout-close').hidden = false;

  const total = cartTotal();
  document.getElementById('payment-summary-label').textContent = `Total (${cartCount()} items)`;
  document.getElementById('payment-summary-total').textContent = `$${total}.00`;
  document.getElementById('pay-btn-label').textContent = `Pay $${total}.00`;
  setPayButtonState('idle');
}

function setPayButtonState(state) {
  const btn = document.getElementById('pay-btn');
  const label = document.getElementById('pay-btn-label');
  if (state === 'processing') {
    btn.disabled = true;
    label.innerHTML = '<span class="pay-spinner"></span>';
    btn.querySelector('svg').style.display = 'none';
  } else {
    btn.disabled = false;
    label.textContent = `Pay $${cartTotal()}.00`;
    btn.querySelector('svg').style.display = '';
  }
}

function handlePaySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('pay-name');
  const number = document.getElementById('pay-number');
  const expiry = document.getElementById('pay-expiry');
  const cvc = document.getElementById('pay-cvc');
  const digits = number.value.replace(/\D/g, '');

  const valid = {
    name: name.value.trim().length > 1,
    number: digits.length === 16,
    expiry: expiry.value.length === 5,
    cvc: cvc.value.length === 3,
  };
  [name, number, expiry, cvc].forEach((input, i) => {
    const key = ['name', 'number', 'expiry', 'cvc'][i];
    input.classList.toggle('input-error', !valid[key]);
  });
  if (!Object.values(valid).every(Boolean)) return;

  setPayButtonState('processing');
  document.getElementById('checkout-close').hidden = true;

  setTimeout(() => {
    const type = detectCardType(digits);
    document.getElementById('success-message').textContent =
      `$${cartTotal()}.00 charged to your ${type !== 'unknown' ? type : 'card'} ending in ${digits.slice(-4)}.`;
    document.getElementById('checkout-form-view').hidden = true;
    document.getElementById('checkout-success-view').hidden = false;

    setTimeout(() => {
      cart = [];
      renderCart();
      closeModal('checkout-overlay');
      showToast('Order placed! Thank you for shopping with Essence.');
    }, 1900);
  }, 1600);
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  initNav();
  initModals();
  initShopFilters();
  initCheckout();
  initHomeGallery();
  initCarousel();

  renderCart();
  renderShopPage();
  renderShopGrid('sale-grid', PRODUCTS.slice(0, 4), true);
  renderShowcase();
  renderBlog();
});
