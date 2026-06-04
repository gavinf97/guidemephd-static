import { Link } from 'react-router-dom';
import gdiLogo from '../assets/gdi_eu_logo.png';
import eoscLogo from '../assets/eosc.png';
import elixirLogo from '../assets/elixir_logo.png';
import {
  DataIcon,
  BioIcon,
  OpenScienceIcon,
  ResearchInfraIcon,
  FundingIcon,
  ProjectMgmtIcon,
  CommsIcon,
  WorkshopIcon,
  CommunityIcon,
  GovernanceIcon,
  WebSupportIcon,
} from '../components/Icons';
import './Services.css';

const servicesList = [
  {
    Icon: DataIcon,
    title: 'Data Infrastructure & FAIR',
    description:
      'Design and implementation of FAIR-compliant data management strategies. From persistent identifiers and metadata standards to data management plans and long-term preservation.',
  },
  {
    Icon: ResearchInfraIcon,
    title: 'Research Infrastructure',
    description:
      'Architecture and support for federated computational environments, HPC systems, cloud-native workflows, and large-scale data pipelines across multi-partner research consortia.',
  },
  {
    Icon: OpenScienceIcon,
    title: 'Open Science & Policy',
    description:
      'Strategic alignment with EOSC policies and open-access mandates. Advisory on open-source tool development, open data workflows, and scholarly communication best practices.',
  },
  {
    Icon: BioIcon,
    title: 'Bioinformatics',
    description:
      'End-to-end support for genomic and life science data workflows. Specialised in variant analysis, sequencing pipelines, federated data access, and integration with European data repositories.',
  },
  {
    Icon: FundingIcon,
    title: 'EC Project Applications',
    description:
      'Proposal development for Horizon Europe, EOSC, and other EC-funded programmes. Work package design, grant writing, partner coordination, and budget planning.',
  },
  {
    Icon: ProjectMgmtIcon,
    title: 'Project Management & Delivery',
    description:
      'Day-to-day management of funded research projects. Milestone tracking, deliverable preparation, EC reporting, and cross-consortium coordination.',
  },
  {
    Icon: CommsIcon,
    title: 'Communications & Dissemination',
    description:
      'Scientific communication strategy, web content production, newsletter management, conference presentations, and social media for research projects and institutions.',
  },
  {
    Icon: WorkshopIcon,
    title: 'Workshops & Training',
    description:
      'Design and facilitation of workshops on Open Science, FAIR data, bioinformatics tools, and research infrastructure. Tailored sessions for researchers, institutions, and policymakers.',
  },
  {
    Icon: CommunityIcon,
    title: 'Community Management & National Alignment',
    description:
      'National node coordination, working group facilitation, and community building across European research networks. Alignment of national strategies with European-level initiatives.',
  },
  {
    Icon: GovernanceIcon,
    title: 'Governance & Strategic Planning',
    description:
      'Development of governance frameworks, strategic roadmaps, and operational models for research consortia and institutions. Cross-partner alignment and decision-making structures.',
  },
  {
    Icon: WebSupportIcon,
    title: 'Web Support & Digital Presence',
    description:
      'Project website development, content management, and digital strategy for research initiatives. Clean, accessible web solutions that support dissemination goals.',
  },
];

const projectsList = [
  {
    name: 'European Genomic Data Infrastructure (GDI)',
    detail: 'Work package contributions to federated genomic data access across European member states.',
    logo: gdiLogo,
    logoClass: '',
    href: 'https://gdi.onemilliongenomes.eu/',
  },
  {
    name: 'EOSC Family',
    detail: 'EOSC-Life · EOSC Future · OSCARS · ENTRUST — advisory, communications, and technical delivery.',
    logo: eoscLogo,
    logoClass: 'logo-wide',
    href: 'https://eosc.eu/',
  },
  {
    name: 'ELIXIR Family',
    detail: 'CONVERGE · STEERS · Compute Platform — bioinformatics infrastructure and community engagement.',
    logo: elixirLogo,
    logoClass: '',
    href: 'https://elixir-europe.org/about-us/how-funded/eu-projects',
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Services</h1>
          <p className="services-hero-sub">
            Navigating the complexities of European research infrastructure, Open Science, and
            data-driven collaboration — with both technical depth and strategic clarity.
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {servicesList.map(({ Icon, title, description }) => (
              <div key={title} className="service-card">
                <div className="service-card-icon">
                  <Icon size={32} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="track-record-section">
        <div className="container">
          <h2>Proven Project Experience</h2>
          <p className="track-intro">
            Extensive experience delivering work packages for major European Commission-funded
            initiatives across genomics, Open Science, and research infrastructure.
          </p>
          <div className="project-list">
            {projectsList.map(({ name, detail, logo, logoClass, href }) => (
              <div key={name} className="project-item">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <img src={logo} alt={name} className={`project-logo ${logoClass}`} />
                </a>
                <h3>{name}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Ready to collaborate?</h2>
          <p>Get in touch to discuss how these services can support your project or institution.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
