import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">💎</span>
          <span className="logo-text">Arka <span>Jewels</span></span>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {['/', '/shop', '/about', '/contact'].map((path, i) => {
            const labels = ['Home', 'Shop', 'About', 'Contact'];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {labels[i]}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="navbar-actions">
          <button className="cart-btn" aria-label="Cart">
            <i className="fa fa-shopping-bag"></i>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <ul className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {['/', '/shop', '/about', '/contact'].map((path, i) => {
          const labels = ['Home', 'Shop', 'About', 'Contact'];
          return (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {labels[i]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
