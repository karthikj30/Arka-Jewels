import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={product.image} alt={product.name} className="product-img" />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button
          className={`wishlist-btn${wished ? ' active' : ''}`}
          onClick={() => setWished(w => !w)}
          aria-label="Wishlist"
        >
          <i className={`fa${wished ? 's' : 'r'} fa-heart`}></i>
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>

        <div className="product-rating">
          <span className="stars">
            {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
          </span>
          <span className="rating-count">({product.reviews})</span>
        </div>

        <div className="product-price-row">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          {product.oldPrice && (
            <span className="product-price-old">₹{product.oldPrice.toLocaleString('en-IN')}</span>
          )}
        </div>

        <button className="add-cart-btn" onClick={handleAdd}>
          <i className="fa fa-shopping-bag"></i>
          {added ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
