import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowLeft, ShieldCheck, Truck, RotateCcw, ShoppingBag } from 'lucide-react';
import { pageVariants } from '../utils/animations';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductDetail({ addToCart }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.slug === slug);

  // Scroll to top when changing products (e.g. clicking a related product)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) return <div style={{padding: '5rem', textAlign: 'center'}}>Product not found.</div>;

  const relatedProducts = PRODUCTS.filter(p => p.gender === product.gender && p.id !== product.id).slice(0, 3);

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} className="page-content" style={{ alignItems: 'center', paddingBottom: '4rem' }}>
      <div className="product-detail-container">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="product-image-col">
          <img src={product.image} alt={product.name} />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="product-info-col">
          <div className="breadcrumb">
            <button className="back-btn" onClick={() => navigate(-1)}><ArrowLeft size={16} /> Back</button>
            <span>/</span> <span>Fragrances</span> <span>/</span> <span style={{color: 'white'}}>{product.name}</span>
          </div>
          
          <h1 className="product-title">{product.name}</h1>
          <div style={{color: 'var(--gray-text)', marginBottom: '1rem', fontStyle: 'italic'}}>{product.gender} Fragrance</div>
          
          <div className="product-rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
            ))}
            <span>{product.rating} ({product.reviews.length * 42 + 12} reviews)</span>
          </div>
          
          <div className="product-price">
            ${product.price}.00 <span className="stock">In Stock</span>
          </div>
          
          <p className="product-description">{product.description}</p>

          <div className="fragrance-notes" style={{marginBottom: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem'}}>
            <h4 style={{marginBottom: '1rem', color: '#fbbf24'}}>Olfactory Notes</h4>
            <div style={{display: 'grid', gap: '0.8rem', fontSize: '0.95rem'}}>
              <div><strong style={{color: 'white'}}>Top:</strong> <span style={{color: 'var(--gray-text)'}}>{product.topNotes}</span></div>
              <div><strong style={{color: 'white'}}>Heart:</strong> <span style={{color: 'var(--gray-text)'}}>{product.heartNotes}</span></div>
              <div><strong style={{color: 'white'}}>Base:</strong> <span style={{color: 'var(--gray-text)'}}>{product.baseNotes}</span></div>
            </div>
          </div>
          
          <div className="action-buttons">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-buy" onClick={() => {addToCart(product); navigate('/shop');}}>
              Buy Now
            </motion.button>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-secondary" onClick={() => addToCart(product)}>
              <ShoppingBag size={20} /> Add to Cart
            </motion.button>
          </div>

          <div className="features-list">
            <div className="feature-item"><Truck size={20} /><span>Free standard shipping on orders over $100</span></div>
            <div className="feature-item"><RotateCcw size={20} /><span>30-day return policy for unopened items</span></div>
            <div className="feature-item"><ShieldCheck size={20} /><span>100% authentic and ethically sourced ingredients</span></div>
          </div>
        </motion.div>
      </div>

      <div className="reviews-section" style={{maxWidth: '1200px', width: '100%', marginTop: '4rem', padding: '0 2rem'}}>
        <h2 style={{borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '2rem'}}>Customer Reviews</h2>
        {product.reviews.length > 0 ? (
          <div style={{display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
            {product.reviews.map((rev, i) => (
              <div key={i} style={{background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                  <strong style={{color: 'white'}}>{rev.user}</strong>
                  <div style={{color: '#fbbf24', display: 'flex'}}>
                    {[...Array(rev.rating)].map((_,j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <p style={{color: 'var(--gray-text)', fontSize: '0.95rem', lineHeight: '1.5'}}>{rev.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p style={{color: 'var(--gray-text)'}}>No reviews yet. Be the first to review this exquisite fragrance.</p>
        )}
      </div>

      {relatedProducts.length > 0 && (
        <div style={{maxWidth: '1200px', width: '100%', marginTop: '4rem', padding: '0 2rem'}}>
          <h2 style={{borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '2rem'}}>You Might Also Like</h2>
          <div className="shop-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem'}}>
            {relatedProducts.map(related => (
              <ProductCard 
                key={related.id}
                product={related}
                onClick={() => navigate(`/product/${related.slug}`)}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
