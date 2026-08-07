import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ product, saleOnly, onClick, onAddToCart, itemVariant }) {
  return (
    <motion.div 
      variants={itemVariant} 
      initial={itemVariant ? "hidden" : false} 
      animate={itemVariant ? "show" : false} 
      exit={{ opacity: 0, scale: 0.9 }}
      layout
    >
      <motion.div
        className="shop-card"
        onClick={onClick}
        whileHover={{ y: -10 }}
      >
        <img src={product.image} alt={product.name} />
        
        <div className="shop-card-info">
          <span style={{fontSize: '0.8rem', color: 'var(--gray-text)', textTransform: 'uppercase', letterSpacing: '1px'}}>
            {product.gender}
          </span>
          <h3 style={{margin: '0.5rem 0'}}>{product.name}</h3>
          
          <div style={{display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem'}}>
            {saleOnly && <span style={{textDecoration: 'line-through', color: 'var(--gray-text)'}}>${product.price + 50}.00</span>}
            <p style={{margin: 0, fontSize: '1.2rem', color: saleOnly ? '#fbbf24' : 'white'}}>${product.price}.00</p>
          </div>
          
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          >
            Add to Cart
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
