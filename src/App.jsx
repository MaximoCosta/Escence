import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import CartModal from './components/CartModal';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Showcase from './pages/Showcase';
import About from './pages/About';
import Blog from './pages/Blog';
import './index.css';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
    toast.success(`${product.name} added to cart!`, {
      style: { background: '#333', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }
    });
  };

  const updateCartQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
    toast.success('Item removed', {
      style: { background: '#333', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Toaster position="bottom-right" />
      <Header cartCount={cartCount} setIsCartOpen={setIsCartOpen} setIsLoginOpen={setIsLoginOpen} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/sale" element={<Shop saleOnly addToCart={addToCart} />} />
          <Route path="/product/:slug" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </AnimatePresence>

      <AnimatePresence>
        {isLoginOpen && <LoginModal setIsLoginOpen={setIsLoginOpen} />}
      </AnimatePresence>

      <AnimatePresence>
        {isCartOpen && (
          <CartModal 
            cart={cart} cartCount={cartCount} cartTotal={cartTotal} 
            setIsCartOpen={setIsCartOpen} updateCartQty={updateCartQty} removeFromCart={removeFromCart} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
