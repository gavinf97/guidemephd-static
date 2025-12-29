import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Empowering Your Academic Journey & Research Infrastructure</h1>
          <p className="hero-sub">From securing your dream PhD position to navigating complex open science landscapes. Expert guidance based in Cambridge, UK.</p>
          <div className="hero-buttons">
            <Link to="/phd-services" className="btn btn-primary">Explore PhD Services</Link>
            <Link to="/consulting" className="btn btn-secondary">Discover Technical Consulting</Link>
          </div>
        </div>
        <div className="hero-visuals">
          <div className="visual-half academic-visual">
            <div className="visual-overlay">
              <span>Academic Excellence</span>
            </div>
          </div>
          <div className="visual-half tech-visual">
            <div className="visual-overlay">
              <span>Research Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2>Expertise You Can Trust</h2>
          <p className="lead-text">
            Guide Me PhD Ltd is dedicated to empowering aspiring researchers to fulfil their ambitions. We simplify the daunting process of applying for PhD programmes while simultaneously offering high-level consultancy for research institutions.
          </p>
          <div className="mission-icons">
            <div className="icon-box">
              <span className="icon" role="img" aria-label="Graduation Cap">🎓</span>
              <p>PhD Success</p>
            </div>
            <div className="icon-box">
              <span className="icon" role="img" aria-label="DNA Helix">🧬</span>
              <p>Bioinformatics</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <div className="container">
          <div className="offer-grid">
            <div className="offer-card applicant-card">
              <h3>For Applicants</h3>
              <h4>PhD Application Support</h4>
              <p>Comprehensive resources to help you stand out in a competitive pool of candidates. We provide tailored guidance on proposals, CVs, and interviews.</p>
              <Link to="/phd-services" className="link-arrow">Read More in Services →</Link>
            </div>
            <div className="offer-card institution-card">
              <h3>For Institutions</h3>
              <h4>Gavin Farrell Consulting</h4>
              <p>Specialised advisory services in open science, bioinformatics, and life science data infrastructure.</p>
              <Link to="/consulting" className="link-arrow">Read More in Consulting →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
