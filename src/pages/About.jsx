import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../utils/animations';

export default function About() {
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} className="page-content" style={{alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center'}}>
      <h2 style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>About Essence</h2>
      <p style={{color: 'var(--gray-text)', fontSize: '1.2rem', maxWidth: '700px', lineHeight: '1.8', marginBottom: '4rem'}}>
        At Essence, we believe that fragrance is the ultimate invisible accessory. 
        Our curated collection of Arabic and Oud perfumes brings centuries of Middle Eastern 
        perfumery tradition to the modern connoisseur. Every bottle holds a story, 
        expertly crafted with the rarest and most precious ingredients sourced globally.
      </p>

      <div style={{background: 'rgba(255,255,255,0.03)', padding: '3rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)'}}>
        <h3 style={{color: '#fbbf24', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '1rem'}}>The Creators</h3>
        <p style={{fontSize: '1.5rem', fontWeight: '500', margin: 0}}>
          Page Developed by <br/>
          <span style={{color: 'white', fontSize: '2rem', display: 'block', marginTop: '1rem'}}>Francesco Ramirez</span>
          <span style={{color: 'var(--gray-text)', fontSize: '1rem', display: 'block', margin: '0.5rem 0'}}>&</span>
          <span style={{color: 'white', fontSize: '2rem'}}>Maximo Costa</span>
        </p>
      </div>
    </motion.div>
  )
}
