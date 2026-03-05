import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import './Shop.css';

const CATEGORIES = ['All', 'Necklaces', 'Rings', 'Earrings', 'Bracelets'];

function Shop({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = activeCategory === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);
    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, sortBy]);

  return (
    <>
      {/* Shop Header */}
      <div className="shop-header">
        <h1>Our Jewellery Collection</h1>
        <p>Explore {PRODUCTS.length}+ exquisite pieces crafted with love</p>
      </div>

      <div className="shop-page">
        {/* Mobile Filter Toggle */}
        <button className="filter-toggle-btn" onClick={() => setSidebarOpen(o => !o)}>
          <i className="fa fa-sliders-h"></i> {sidebarOpen ? 'Hide Filters' : 'Show Filters'}
        </button>

        <div className="shop-layout">
          {/* Sidebar */}
          <aside className={`shop-sidebar${sidebarOpen ? ' open' : ''}`}>
            <div className="filter-group">
              <div className="sidebar-title">Categories</div>
              {CATEGORIES.map(cat => (
                <label
                  key={cat}
                  className={`filter-option${activeCategory === cat ? ' selected' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <input type="radio" name="category" readOnly checked={activeCategory === cat} />
                  {cat}
                </label>
              ))}
            </div>

            <div className="filter-group">
              <div className="sidebar-title">Price Range</div>
              <div className="price-inputs">
                <input type="number" placeholder="Min ₹" />
                <span>—</span>
                <input type="number" placeholder="Max ₹" />
              </div>
            </div>

            <div className="filter-group">
              <div className="sidebar-title">Rating</div>
              {[5, 4, 3].map(r => (
                <label key={r} className="filter-option">
                  <input type="checkbox" />
                  {'★'.repeat(r)}{'☆'.repeat(5 - r)} & above
                </label>
              ))}
            </div>
          </aside>

          {/* Product area */}
          <div>
            <div className="shop-toolbar">
              <span className="result-count">
                Showing <strong>{filtered.length}</strong> products
              </span>
              <select className="sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="default">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
            <div className="products-grid">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} addToCart={addToCart} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
