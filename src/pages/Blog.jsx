import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../utils/animations';
import { PRODUCTS } from '../data/products';

export default function Blog() {
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} className="placeholder-page">
      <h2>Journal & Insights</h2>
      <p>Discover the art of perfumery, ingredient stories, and styling guides.</p>
      <div className="shop-grid">
         {[1,2,3].map(i => (
           <div key={i} className="shop-card" style={{textAlign: 'left', cursor: 'default'}}>
             <img src={PRODUCTS[i+3].image} alt="Blog" style={{height: '200px'}} />
             <div className="shop-card-info">
               <span style={{color: '#fbbf24', fontSize: '0.8rem', marginBottom: '0.5rem'}}>FRAGRANCE 101</span>
               <h3>The History of Agarwood</h3>
               <p>Learn how this rare resin became the most sought after ingredient in luxury perfumery...</p>
               <button style={{marginTop: 'auto'}}>Read Article</button>
             </div>
           </div>
         ))}
      </div>
    </motion.div>
  )
}
