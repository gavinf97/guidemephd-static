import './About.css';
import gavinfarrell from '../assets/gavinfarrell.jpeg';

const About = () => {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="container">
          <h1>About</h1>
          <p className="about-intro">
            Gavin Farrell Consulting provides specialist advisory services across European
            research infrastructure, data management, and Open Science. The practice combines
            deep technical knowledge with practical delivery experience across EC-funded
            research programmes.
          </p>
        </div>
      </section>

      <section className="founder-section">
        <div className="container">
          <div className="founder-inner">

            <div className="founder-profile">
              <img src={gavinfarrell} alt="Gavin Farrell" className="founder-image" />
              <div className="founder-identity">
                <h2>Gavin Farrell</h2>
                <p className="founder-title">Consultant &middot; Cambridge, UK</p>
              </div>
            </div>

            <p className="founder-lead">
              Specialist in European research infrastructure, data management, and Open Science,
              with hands-on experience across bioinformatics, EC project delivery, and community
              management. Contributions span flagship programmes including ELIXIR, EOSC, and GDI,
              working at the intersection of technical delivery and stakeholder strategy.
            </p>

            <div className="founder-credentials">
              <div className="credential-item">
                <span className="credential-label">BSc</span>
                <span className="credential-value">Biotechnology, NUI Galway</span>
              </div>
              <div className="credential-item">
                <span className="credential-label">MSc</span>
                <span className="credential-value">Biomedical Genomics, NUI Galway</span>
              </div>
              <div className="credential-item">
                <span className="credential-label">PhD</span>
                <span className="credential-value">Computer Science, University of Padova (in progress)</span>
              </div>
            </div>

            <div className="founder-research">
              <span className="research-label">Current Research</span>
              <p>AI and machine learning best practices for life science applications.</p>
            </div>

            <p className="founder-legal">
              Gavin Farrell Consulting is a trading name of Guide Me PhD Ltd, registered in
              England &amp; Wales (Company No. 16154190).
            </p>

          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Approach &amp; Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Open Science</h3>
              <p>
                A genuine commitment to FAIR data principles, open-access practices, and the
                values underpinning the European Open Science Cloud.
              </p>
            </div>
            <div className="value-card">
              <h3>Technical Rigour</h3>
              <p>
                Deep hands-on experience with bioinformatics workflows, data infrastructure
                architecture, and the technical realities of cross-border research.
              </p>
            </div>
            <div className="value-card">
              <h3>Collaborative Practice</h3>
              <p>
                Effective consulting built on clear communication, stakeholder trust, and
                long-term partnerships within the European research community.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
