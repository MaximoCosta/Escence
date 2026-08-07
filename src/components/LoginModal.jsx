import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function LoginModal({ setIsLoginOpen }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="modal-overlay" onClick={() => setIsLoginOpen(false)}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="modal-content" onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={() => setIsLoginOpen(false)}><X size={24}/></button>
        <h2>Welcome to Essence</h2>
        <p>Sign in to access your luxury fragrance collection.</p>
        <input type="email" placeholder="Email address" className="modal-input" />
        <input type="password" placeholder="Password" className="modal-input" />
        <button className="btn-primary" style={{width: '100%', justifyContent: 'center'}}>Sign In</button>
      </motion.div>
    </motion.div>
  );
}
