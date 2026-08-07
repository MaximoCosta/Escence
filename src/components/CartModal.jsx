import React from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

export default function CartModal({ cart, cartCount, cartTotal, setIsCartOpen, updateCartQty, removeFromCart }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="modal-overlay cart-overlay" onClick={() => setIsCartOpen(false)}
    >
      <motion.div 
        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="cart-sidebar" onClick={e => e.stopPropagation()}
      >
        <div className="cart-header">
          <h2>Your Cart ({cartCount})</h2>
          <button className="modal-close" onClick={() => setIsCartOpen(false)}><X size={24}/></button>
        </div>
        
        <div className="cart-items" style={{flex: 1, overflowY: 'auto', paddingRight: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          {cart.length === 0 ? (
            <p style={{color: 'var(--gray-text)', textAlign: 'center', marginTop: '3rem'}}>Your cart is empty.<br/>Add some exquisite fragrances.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} style={{display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '1rem'}}>
                <img src={item.image} alt={item.name} style={{width: '60px', height: '80px', objectFit: 'cover', borderRadius: '0.5rem'}} />
                <div style={{flex: 1}}>
                  <h4 style={{margin: '0 0 0.5rem 0', fontSize: '0.95rem'}}>{item.name}</h4>
                  <div style={{color: '#fbbf24', fontWeight: 'bold'}}>${item.price * item.quantity}.00</div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.5rem', borderRadius: '0.5rem'}}>
                      <button onClick={() => updateCartQty(item.id, -1)} style={{background: 'none', border: 'none', color: 'white', cursor: 'pointer'}}><Minus size={14}/></button>
                      <span style={{fontSize: '0.9rem'}}>{item.quantity}</span>
                      <button onClick={() => updateCartQty(item.id, 1)} style={{background: 'none', border: 'none', color: 'white', cursor: 'pointer'}}><Plus size={14}/></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} style={{background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: 0, display: 'flex'}}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {cart.length > 0 && (
          <div style={{marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 'bold'}}>
              <span>Subtotal</span>
              <span>${cartTotal}.00</span>
            </div>
            <button className="btn-primary" style={{width: '100%', justifyContent: 'center'}}>Secure Checkout</button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
