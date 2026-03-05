import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you — our team is always here to help</p>
      </div>

      <section className="contact-section">
        <div className="contact-inner">
          {/* Info */}
          <div className="contact-info">
            <h2>Visit Our Showroom</h2>
            <div className="gold-divider"></div>
            <p>
              Come experience the magic of Arka Jewels in person. Our expert consultants will
              help you find the perfect piece for every occasion.
            </p>

            {[
              { icon: 'fa-map-marker-alt', label: 'Address', value: '12, Jewel Street, T. Nagar\nChennai, Tamil Nadu – 600001' },
              { icon: 'fa-phone', label: 'Phone', value: '+91 98765 43210\n+91 44 2345 6789' },
              { icon: 'fa-envelope', label: 'Email', value: 'hello@arkajewels.in\nsupport@arkajewels.in' },
              { icon: 'fa-clock', label: 'Hours', value: 'Monday – Saturday: 10am – 8pm\nSunday: 11am – 6pm' },
            ].map(item => (
              <div className="info-card" key={item.label}>
                <div className="info-icon"><i className={`fa ${item.icon}`}></i></div>
                <div>
                  <div className="info-label">{item.label}</div>
                  <div className="info-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <h3>Send a Message</h3>
            {submitted ? (
              <div className="form-success">
                ✅ Thank you! We'll get back to you within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Priya Sharma" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="priya@email.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange}>
                      <option value="">Select a subject</option>
                      <option>Custom Order</option>
                      <option>Product Inquiry</option>
                      <option>Repair & Restoration</option>
                      <option>General Query</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none' }}>
                  <i className="fa fa-paper-plane" style={{ marginRight: 8 }}></i> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="map-section">
        <div className="map-placeholder">
          <i className="fa fa-map-marked-alt"></i>
          <p>📍 12, Jewel Street, T. Nagar, Chennai</p>
          <small>Interactive map integration available with Google Maps API</small>
        </div>
      </div>
    </>
  );
}

export default Contact;
