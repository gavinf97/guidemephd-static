import { Link } from 'react-router-dom';
import gdiLogo from '../assets/gdi_eu_logo.png';
import eoscLogo from '../assets/eosc.png';
import elixirLogo from '../assets/elixir_logo.png';
import './Projects.css';

const projectsList = [
  {
    name: 'European Genomic Data Infrastructure (GDI)',
    detail: 'Work package contributions to federated genomic data access across European member states, supporting the 1+ Million Genomes initiative.',
    logo: gdiLogo,
    logoClass: '',
    href: 'https://gdi.onemilliongenomes.eu/',
  },
  {
    name: 'EOSC Family',
    detail: 'EOSC-Life, EOSC Future, OSCARS, ENTRUST: advisory roles, communications, and technical delivery across the European Open Science Cloud landscape.',
    logo: eoscLogo,
    logoClass: 'logo-wide',
    href: 'https://eosc.eu/',
  },
  {
    name: 'ELIXIR Family',
    detail: 'CONVERGE, STEERS, Compute Platform: bioinformatics infrastructure development and community engagement across the European life science network.',
    logo: elixirLogo,
    logoClass: '',
    href: 'https://elixir-europe.org/about-us/how-funded/eu-projects',
  },
];

const Projects = () => {
  return (
    <div className="projects-page">

      <section className="projects-hero">
        <div className="container">
          <h1>Projects</h1>
          <p className="projects-hero-sub">
            A proven track record delivering across some of Europe's most ambitious
            research infrastructure programmes.
          </p>
        </div>
      </section>

      <section className="projects-list-section">
        <div className="container">
          <p className="projects-intro">
            Extensive experience delivering work packages for major European Commission-funded
            initiatives across genomics, Open Science, and research infrastructure. Each
            engagement has involved cross-institutional collaboration, stakeholder communication,
            and hands-on technical contribution.
          </p>
          <div className="project-cards">
            {projectsList.map(({ name, detail, logo, logoClass, href }) => (
              <div key={name} className="project-card">
                <div className="project-logo-area">
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <img
                      src={logo}
                      alt={name}
                      className={`project-logo ${logoClass}`}
                    />
                  </a>
                </div>
                <h3>{name}</h3>
                <p>{detail}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit project site
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-cta">
        <div className="container">
          <h2>Interested in working together?</h2>
          <p>Get in touch to discuss how this experience can benefit your project.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>

    </div>
  );
};

export default Projects;
