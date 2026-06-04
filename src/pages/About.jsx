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
          <h2>Gavin Farrell</h2>
          <div className="founder-content">
            <img src={gavinfarrell} alt="Gavin Farrell" className="founder-image" />
            <div className="founder-bio">
              <p>
                Gavin holds a BSc in Biotechnology and an MSc in Biomedical Genomics from the
                National University of Ireland, Galway. With a background spanning wet-lab
                research, computational bioinformatics, and large-scale European research
                initiatives, he brings both technical and strategic expertise to every engagement.
              </p>
              <p>
                He has contributed to flagship EC-funded programmes including ELIXIR, EOSC, and
                the European Genomic Data Infrastructure (GDI), working across work package
                leadership, community management, communications, and data infrastructure
                strategy. His approach is collaborative and governance-minded, bridging the gap
                between technical delivery and stakeholder alignment.
              </p>
              <p>
                Gavin is currently completing a PhD in Computer Science, with research focused
                on AI and machine learning best practices for life science applications. This
                academic work directly informs and sharpens his practical consulting expertise.
              </p>
              <p>
                Gavin Farrell Consulting is a trading name of Guide Me PhD Ltd, registered in
                England &amp; Wales (Company No. 16154190).
              </p>
            </div>
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
