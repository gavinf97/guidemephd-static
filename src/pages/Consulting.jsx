import React from 'react';
import './Consulting.css';

const Consulting = () => {
  return (
    <div className="consulting-page">
      {/* Consulting Hero */}
      <section className="consulting-hero">
        <div className="container">
          <h1>Gavin Farrell Consulting</h1>
          <h2>Specialist advisory in Open Science, Bioinformatics, and Data Infrastructure.</h2>
          <p className="tagline">Navigating the complexities of the European research landscape.</p>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="expertise-section">
        <div className="container">
          <h2 className="section-title">Specialised Services</h2>
          <div className="expertise-grid">
            <div className="expert-card">
              <div className="icon">🧬</div>
              <h3>Bioinformatics & Infrastructure</h3>
              <p>Optimising computational pipelines, data workflows, and storage solutions tailored for modern research.</p>
            </div>
            <div className="expert-card">
              <div className="icon">🔓</div>
              <h3>Open Science Policy</h3>
              <p>Expertise in FAIR principles (Findable, Accessible, Interoperable, Reusable) and open-source tool development to ensure transparency.</p>
            </div>
            <div className="expert-card">
              <div className="icon">🇪🇺</div>
              <h3>European Funding Frameworks</h3>
              <p>Guiding organisations through Horizon 2020 and other EU funding programmes to maximise impact and compliance.</p>
            </div>
            <div className="expert-card">
              <div className="icon">🤝</div>
              <h3>Stakeholder Engagement</h3>
              <p>Building strong relationships across public and private sectors to drive consensus in scientific communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="track-record-section">
        <div className="container">
          <h2 className="section-title">Project Experience</h2>
          <p className="track-record-intro">We hold a wealth of experience in delivering work packages for major European Commission-funded projects.</p>

          <div className="project-highlights">
            <div className="project-item">
              <h3>European Genomic Data Infrastructure (GDI)</h3>
            </div>
            <div className="project-item">
              <h3>EOSC Family</h3>
              <p>EOSC-Life, EOSC Future, OSCARS, ENTRUST</p>
            </div>
            <div className="project-item">
              <h3>ELIXIR Family</h3>
              <p>CONVERGE, STEERS, Compute Platform</p>
            </div>
          </div>

          {/* Visual Hint Placeholder */}
          <div className="logos-banner">
            <span>GDI</span> • <span>EOSC</span> • <span>ELIXIR</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
