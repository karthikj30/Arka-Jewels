import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <span className="logo-text">Arka <span>Jewels</span></span>
          <p>
            Crafting timeless jewellery since 1992. Every piece we create tells a story of
            elegance, tradition, and unmatched craftsmanship.
          </p>
          <div className="social-links">
            {[['fa-facebook-f','#'],['fa-instagram','#'],['fa-pinterest-p','#'],['fa-youtube','#']].map(([icon, href]) => (
              <a key={icon} href={href} className="social-link" target="_blank" rel="noreferrer">
                <i className={`fab ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {[['Home','/'],['Shop','/shop'],['About Us','/about'],['Contact','/contact']].map(([label, path]) => (
              <li key={path}><Link to={path}>{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li><i className="fa fa-map-marker-alt"></i> 12, Jewel Street, Chennai, Tamil Nadu - 600001</li>
            <li><i className="fa fa-phone"></i> +91 98765 43210</li>
            <li><i className="fa fa-envelope"></i> hello@arkajewels.in</li>
            <li><i className="fa fa-clock"></i> Mon–Sat: 10am – 8pm</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h4>Newsletter</h4>
          {subscribed ? (
            <p style={{ color: '#b8860b', fontSize: '0.9rem' }}>✦ Thank you for subscribing!</p>
          ) : (
            <form className="footer-newsletter" onSubmit={handleSubscribe}>
              <input
                type="email" placeholder="Your email address"
                value={email} onChange={e => setEmail(e.target.value)} required
              />
              <button type="submit">Subscribe Now</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 <span>Arka Jewels</span>. All rights reserved. Made with ♥ in India.</p>
      </div>
    </footer>
  );
}

export default Footer;
