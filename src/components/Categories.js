import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const CATEGORIES = [
  {
    name: 'Necklaces',
    count: '48 items',
    icon: '📿',
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
  },
  {
    name: 'Rings',
    count: '64 items',
    icon: '💍',
    img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
  },
  {
    name: 'Earrings',
    count: '52 items',
    icon: '✨',
    img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
  },
  {
    name: 'Bracelets',
    count: '36 items',
    icon: '⭕',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
  },
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
