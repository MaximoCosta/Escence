import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../utils/animations';
import { PRODUCTS } from '../data/products';

export default function Showcase() {
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} className="placeholder-page" style={{paddingTop: '2rem'}}>
      <h2>Showcase</h2>
      <p style={{marginBottom: '4rem'}}>A visual journey through our most iconic releases.</p>
      <div className="shop-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem'}}>
         {PRODUCTS.slice(4, 8).map((p, i) => (
           <div key={i} style={{position: 'relative', height: '500px', borderRadius: '1rem', overflow: 'hidden'}}>
             <img src={p.image} alt="Showcase" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
             <div className="overlay" style={{opacity: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'}}></div>
             <div style={{position: 'absolute', bottom: '2rem', left: '2rem', textAlign: 'left'}}>
                <span style={{color: '#fbbf24', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase'}}>{p.gender} Collection</span>
                <h3 style={{fontSize: '2.5rem', margin: '0.5rem 0'}}>{p.name}</h3>
                <p style={{color: 'rgba(255,255,255,0.7)'}}>Starting at ${p.price}</p>
             </div>
           </div>
         ))}
      </div>
    </motion.div>
  )
}
