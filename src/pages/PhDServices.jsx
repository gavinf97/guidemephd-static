import React from 'react';
import { Link } from 'react-router-dom';
import './PhDServices.css';

const PhDServices = () => {
  return (
    <div className="phd-services-page">
      {/* Hero Section */}
      <section className="phd-hero">
        <div className="container">
          <h1>Secure Your Dream PhD Position</h1>
          <p className="hero-sub">Professional application reviews, editing support, and interview preparation resources.</p>
        </div>
      </section>

      {/* Service List */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon">📝</div>
              <h3>PhD Application Review</h3>
              <p>Stand out from the competition. We review your full application package to identify best practices and refine your approach.</p>
              <Link to="/contact" className="btn btn-primary">Enquire for Pricing</Link>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon">📄</div>
              <h3>CV & Proposal Refinement</h3>
              <p>Tailored guidance to ensure your CV and research proposal meet the high standards of top-tier universities.</p>
              <Link to="/contact" className="btn btn-primary">Enquire for Pricing</Link>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="service-icon">🎤</div>
              <h3>Interview Preparation</h3>
              <p>Comprehensive guides, slide templates, and over 50+ practice questions to help you perform with confidence.</p>
              <Link to="/contact" className="btn btn-outline">Request Resources</Link>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-icon">✉️</div>
              <h3>Supervisor Contact</h3>
              <p>Professional email and cover letter templates to help you make the perfect first impression with potential supervisors.</p>
              <Link to="/contact" className="btn btn-outline">Request Templates</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="container">
          <h3>Curated Digital Resources</h3>
          <p>We offer a growing library of digital templates and guides. These resources are available upon request to ensure they are tailored to your specific needs.</p>
          <Link to="/contact" className="btn btn-secondary">Contact us to discuss</Link>
        </div>
      </section>
    </div>
  );
};

export default PhDServices;
