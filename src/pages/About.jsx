import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Who We Are */}
        <section className="about-section">
          <h1>About Guide Me PhD Ltd</h1>
          <p className="about-intro">
            Founded with the vision of simplifying the complex journey of academic research, we combine expert guidance with digital innovation. Based in Cambridge, UK—one of the world's foremost academic hubs—we are uniquely positioned to draw from a rich heritage of research excellence to support your goals.
          </p>
        </section>

        {/* The Founder */}
        <section className="founder-section">
          <h2>About Gavin Farrell</h2>
          <div className="founder-content">
            <div className="founder-image-placeholder">
              <span>Photo of Gavin Farrell</span>
            </div>
            <div className="founder-bio">
              <p>
                Gavin Farrell holds a BSc in Biotechnology and an MSc in Biomedical Genomics from the National University of Ireland, Galway (NUIG). With a background in both wet-lab research and computational bioinformatics, Gavin has extensive experience in large-scale European and global research initiatives, including ELIXIR and EOSC.
              </p>
              <p className="founder-note">
                <strong>Note:</strong> Gavin Farrell Consulting operates as a specialist trading name under Guide Me PhD Ltd.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Ethical Support</h3>
              <p>We are committed to offering expert, ethical, and tailored services.</p>
            </div>
            <div className="value-card">
              <h3>Open Science</h3>
              <p>We believe in making research transparent, accessible, and collaborative.</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>Leveraging deep academic experience to maximise success rates.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
