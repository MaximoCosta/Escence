import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { pageVariants, staggerContainer, itemVariant } from '../utils/animations';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop({ saleOnly, addToCart }) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const baseProducts = saleOnly ? PRODUCTS.slice(0, 4) : PRODUCTS;
  const displayProducts = filter === 'All' ? baseProducts : baseProducts.filter(p => p.gender === filter);
  
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} className="placeholder-page">
      <h2>{saleOnly ? 'Special Offers' : 'Shop All'}</h2>
      <p>{saleOnly ? 'Limited time discounts on our most exclusive blends.' : 'Explore our exclusive collection of fine Arabic perfumes and pure Oud.'}</p>
      
      {!saleOnly && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap'}}
        >
          {['All', 'Unisex', 'Female', 'Male'].map(f => (
            <button 
              key={f} 
              onClick={() => setFilter(f)}
              style={{
                background: filter === f ? '#fbbf24' : 'rgba(255,255,255,0.1)',
                color: filter === f ? 'black' : 'white',
                border: 'none',
                padding: '0.5rem 1.5rem',
                borderRadius: '2rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              {f === 'All' ? 'All Collections' : `${f} Fragrances`}
            </button>
          ))}
        </motion.div>
      )}

      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="shop-grid">
        <AnimatePresence>
          {displayProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              saleOnly={saleOnly}
              itemVariant={itemVariant}
              onClick={() => navigate(`/product/${product.slug}`)}
              onAddToCart={addToCart}
            />
          ))}
          {displayProducts.length === 0 && (
            <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--gray-text)'}}>
              No fragrances found for this filter.
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
