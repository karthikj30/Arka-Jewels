import React from 'react';
import { Link } from 'react-router-dom';
import necklace1 from '../assets/necklace1.jpg';
import ring1 from '../assets/ring1.jpg';
import earring1 from '../assets/earring1.jpg';
import bracelet1 from '../assets/bracelet1.jpg';
import './Categories.css';

const CATEGORIES = [
  { name: 'Necklaces', count: '48 items', icon: '📿', img: necklace1 },
  { name: 'Rings',     count: '64 items', icon: '💍', img: ring1 },
  { name: 'Earrings',  count: '52 items', icon: '✨', img: earring1 },
  { name: 'Bracelets', count: '36 items', icon: '⭕', img: bracelet1 },
];

function Categories() {
  return (
    <section className="categories-section">
      <h2 className="section-title">Shop by Category</h2>
      <div className="gold-divider"></div>
      <p className="section-subtitle">Explore our curated jewellery collections</p>
      <div className="categories-grid">
        {CATEGORIES.map((cat) => (
          <Link to="/shop" key={cat.name} className="category-card">
            <img src={cat.img} alt={cat.name} className="category-img" />
            <div className="category-overlay">
              <span className="category-icon">{cat.icon}</span>
              <span className="category-name">{cat.name}</span>
              <span className="category-count">{cat.count}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
