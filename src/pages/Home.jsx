import { Link } from 'react-router-dom';
import founderPhoto from '../assets/gavinfarrell.jpeg';
import gdiLogo from '../assets/gdi_eu_logo.png';
import eoscLogo from '../assets/eosc.png';
import elixirLogo from '../assets/elixir_logo.png';
import {
  DataIcon,
  BioIcon,
  OpenScienceIcon,
  FundingIcon,
  CommunityIcon,
  CommsIcon,
} from '../components/Icons';
import './Home.css';

const expertiseAreas = [
  { Icon: DataIcon, label: 'Data Infrastructure' },
  { Icon: BioIcon, label: 'Bioinformatics' },
  { Icon: OpenScienceIcon, label: 'Open Science' },
  { Icon: FundingIcon, label: 'EC Projects' },
  { Icon: CommunityIcon, label: 'Community' },
  { Icon: CommsIcon, label: 'Communications' },
];

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-inner container">
          <h1>Expert Consulting for European Research &amp; Open Science</h1>
          <p className="hero-sub">
            Strategic, technical, and communicative expertise across the European research
            ecosystem: FAIR data infrastructure, EC project applications, Open Science advisory,
            and more.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-hero-primary">View Services</Link>
            <Link to="/contact" className="btn btn-hero-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="expertise-strip">
        <div className="container">
          <p className="strip-label">Areas of expertise</p>
          <div className="strip-grid">
            {expertiseAreas.map(({ Icon, label }) => (
              <div key={label} className="strip-item">
                <Icon size={24} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-teaser">
        <div className="container about-teaser-inner">
          <div className="teaser-content">
            <h2>Gavin Farrell Consulting</h2>
            <p>
              Based in Cambridge, UK, Gavin Farrell brings a rare combination of deep technical
              expertise and stakeholder-facing experience to European research. With a background in
              bioinformatics and genomics, Gavin has contributed to major EC-funded initiatives
              including ELIXIR, EOSC, and GDI, leading work packages, building communities, and
              driving data infrastructure strategy across borders.
            </p>
            <Link to="/about" className="btn btn-outline">About Gavin</Link>
          </div>
          <div className="teaser-photo">
            <img src={founderPhoto} alt="Gavin Farrell" />
          </div>
        </div>
      </section>

      <section className="track-record">
        <div className="container">
          <h2>Proven Project Experience</h2>
          <p className="track-sub">
            A consistent track record delivering across some of Europe's most ambitious
            research infrastructure programmes.
          </p>
          <div className="logos-row">
            <a href="https://gdi.onemilliongenomes.eu/" target="_blank" rel="noopener noreferrer" className="logo-link">
              <img src={gdiLogo} alt="European Genomic Data Infrastructure" />
            </a>
            <a href="https://eosc.eu/" target="_blank" rel="noopener noreferrer" className="logo-link">
              <img src={eoscLogo} alt="EOSC" className="logo-wide" />
            </a>
            <a href="https://elixir-europe.org/about-us/how-funded/eu-projects" target="_blank" rel="noopener noreferrer" className="logo-link">
              <img src={elixirLogo} alt="ELIXIR" />
            </a>
          </div>
          <Link to="/projects" className="track-link">View project history →</Link>
        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <h2>Ready to collaborate?</h2>
          <p>Let's discuss how expert consulting can advance your project or institution.</p>
          <Link to="/contact" className="btn btn-hero-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
