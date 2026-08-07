import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageVariants, staggerContainer, itemVariant } from '../utils/animations';
import { PRODUCTS } from '../data/products';

export default function Home() {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => setCarouselIdx((prev) => (prev + 1) % PRODUCTS.length);
  const prevSlide = () => setCarouselIdx((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

  const visibleCarousel = [
    PRODUCTS[carouselIdx],
    PRODUCTS[(carouselIdx + 1) % PRODUCTS.length],
    PRODUCTS[(carouselIdx + 2) % PRODUCTS.length],
    PRODUCTS[(carouselIdx + 3) % PRODUCTS.length]
  ];

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} className="page-content">
      <main className="hero">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="badge">
          Exclusive Oud Collection 2025
        </motion.div>
        
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          Where essence speaks, tradition resonates,<br/>luxury flourishes
        </motion.h1>
        
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          Unveiling a fragrance destination where exotic Arabic blends seamlessly with your individual aura. Discover the liquid gold today.
        </motion.p>

        <motion.button 
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
          className="btn-primary" onClick={() => navigate('/shop')}
        >
          New collection <span className="arrow">→</span>
        </motion.button>
      </main>

      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="gallery-container">
        <motion.button whileHover={{ x: -5 }} className="nav-arrow" onClick={prevSlide}>←</motion.button>
        <div className="gallery accordion-gallery">
          {visibleCarousel.map((prod, idx) => (
            <motion.div 
              key={`${prod.id}-${idx}`} variants={itemVariant} className="gallery-item"
              onClick={() => navigate(`/product/${prod.slug}`)}
            >
              <img src={prod.image} alt={prod.name} />
              <div className="overlay"></div>
              <div className="price-tag">
                <span>{prod.name}</span>
                <span>${prod.price}.00</span>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.button whileHover={{ x: 5 }} className="nav-arrow" onClick={nextSlide}>→</motion.button>
      </motion.div>
    </motion.div>
  );
}
