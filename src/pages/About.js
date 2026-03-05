import React from 'react';
import './About.css';

const TEAM = [
  { name: 'Rajan Arora', role: 'Founder & Master Craftsman', avatar: 'https://i.pravatar.cc/150?img=60' },
  { name: 'Meena Arora', role: 'Creative Director', avatar: 'https://i.pravatar.cc/150?img=47' },
  { name: 'Vikram Arora', role: 'Head of Operations', avatar: 'https://i.pravatar.cc/150?img=15' },
];

function About() {
  return (
    <>
      <div className="about-hero">
        <h1>Our Story</h1>
        <p>Three decades of crafting jewellery that tells your story</p>
      </div>

      {/* Story */}
      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-img">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/09/29/adult-1868750_640.jpg"
              alt="Our Workshop"
            />
          </div>
          <div className="about-text">
            <h2>Crafting Dreams Since 1992</h2>
            <div className="gold-divider"></div>
            <p>
              Arka Jewels was born from a simple belief — that every piece of jewellery should be
              as unique as the person wearing it. Founded by master craftsman Rajan Arora in Chennai,
              we have been creating heirloom-quality jewellery for over three decades.
            </p>
            <p>
              Our artisans blend traditional Indian craftsmanship with contemporary design to create
              pieces that are timeless. From Kundan and Meenakari work to diamond-studded modern
              designs, every jewel is handcrafted with passion and precision.
            </p>
            <p>
              We source only the finest BIS-certified gold, GIA-certified diamonds, and ethically
              procured gemstones — because what goes into our jewellery is as important as what comes out.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-row">
        {[['30+', 'Years Experience'], ['50,000+', 'Happy Customers'], ['200+', 'Master Craftsmen'], ['5000+', 'Designs']].map(([num, label]) => (
          <div className="stat-item" key={label}>
            <div className="stat-num">{num}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      {/* Team */}
      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="gold-divider"></div>
        <p className="section-subtitle">The passionate people behind Arka Jewels</p>
        <div className="team-grid">
          {TEAM.map(m => (
            <div className="team-card" key={m.name}>
              <img src={m.avatar} alt={m.name} className="team-avatar" />
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
