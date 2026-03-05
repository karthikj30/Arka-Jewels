import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import './Home.css';

const TESTIMONIALS = [
  { text: 'Absolutely stunning necklace! The craftsmanship is exquisite and the gold quality is superb. Will definitely be shopping again!', name: 'Priya Sharma', loc: 'Mumbai', avatar: 'https://i.pravatar.cc/100?img=47' },
  { text: 'I bought the diamond solitaire ring for my engagement. My fiancée was in tears — it was perfect. Thank you, Arka Jewels!', name: 'Arjun Mehta', loc: 'Delhi', avatar: 'https://i.pravatar.cc/100?img=12' },
  { text: 'Beautiful earrings that arrived beautifully packaged. Great customer service too. Highly recommended!', name: 'Lakshmi Nair', loc: 'Chennai', avatar: 'https://i.pravatar.cc/100?img=32' },
];

function Home({ addToCart }) {
  return (
    <>
      <Hero />

      {/* Features strip */}
      <div className="features-strip">
        <div className="features-inner">
          {[
            ['fa-truck', 'Free Shipping over ₹5000'],
            ['fa-shield-alt', 'BIS Hallmarked Gold'],
            ['fa-undo', '30-Day Returns'],
            ['fa-certificate', 'Certified Diamonds'],
          ].map(([icon, text]) => (
            <div className="feature-item" key={text}>
              <i className={`fa ${icon}`}></i>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <Categories />

      {/* Featured Products */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">Handpicked jewels for every occasion</p>
          <div className="products-grid">
            {PRODUCTS.slice(0, 8).map(p => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>
          <div className="view-all-wrap">
            <Link to="/shop" className="btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <div className="promo-banner">
        <h2>Up to <span>40% Off</span> on Bridal Collection</h2>
        <p>Limited time offer — shop now and make your special day unforgettable.</p>
        <Link to="/shop" className="btn-primary">Shop the Sale</Link>
      </div>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="gold-divider"></div>
        <p className="section-subtitle">Real stories from real jewellery lovers</p>
        <div className="testimonials-grid">
          {TESTIMONIALS.map(t => (
            <div className="testimonial-card" key={t.name}>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="author-avatar" />
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-loc">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
