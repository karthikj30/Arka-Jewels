import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">✦ New Collection 2026</span>
        <h1 className="hero-title">
          Timeless <span>Elegance</span>,<br />Crafted for You
        </h1>
        <p className="hero-subtitle">
          Discover our exquisite range of handcrafted gold, diamond, and gemstone jewellery —
          designed to celebrate every precious moment in your life.
        </p>
        <div className="hero-buttons">
          <Link to="/shop" className="btn-primary">Explore Collection</Link>
          <Link to="/about" className="btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Our Story</Link>
        </div>
      </div>
      <div className="hero-scroll">
        <i className="fa fa-chevron-down"></i>
      </div>
    </section>
  );
}

export default Hero;
