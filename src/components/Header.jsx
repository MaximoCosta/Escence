import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Header({ cartCount, setIsCartOpen, setIsLoginOpen }) {
  const location = useLocation();
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/sale', label: 'Sale' },
    { path: '/showcase', label: 'Showcase' },
    { path: '/about', label: 'About Us' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <header className="header">
      <Link to="/" className="logo" style={{color: 'inherit', textDecoration: 'none'}}>
        <div className="logo-icon"></div>
        Essence
      </Link>
      <nav className="nav-container">
        {navLinks.map((link) => (
          <Link 
            key={link.path} to={link.path}
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="actions">
        <button className="icon-btn" onClick={() => setIsCartOpen(true)} aria-label="Shopping Cart" style={{position: 'relative'}}>
          <ShoppingBag size={20} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute', top: '-5px', right: '-5px', background: '#fbbf24', 
              color: 'black', fontSize: '0.7rem', fontWeight: 'bold', width: '18px', height: '18px', 
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              {cartCount}
            </span>
          )}
        </button>
        <button className="btn-login" onClick={() => setIsLoginOpen(true)}>Login</button>
        <button className="btn-signup" onClick={() => setIsLoginOpen(true)}>Sign up</button>
      </div>
    </header>
  );
}
