import { Link } from 'react-router-dom';
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
      'End-to-end support for biomedical genomics and life science data workflows. Covering sequencing pipelines, federated data access, and integration with European research data infrastructure.',
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

const Services = () => {
  return (
    <div className="services-page">

      <section className="services-hero">
        <div className="container">
          <h1>Services</h1>
          <p className="services-hero-sub">
            Navigating the complexities of European research infrastructure, Open Science, and
            data-driven collaboration, with both technical depth and strategic clarity.
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

      <section className="services-projects-teaser">
        <div className="container">
          <h2>Proven Project Experience</h2>
          <p>
            A track record spanning GDI, EOSC, and ELIXIR initiatives across the European
            research ecosystem.
          </p>
          <Link to="/projects" className="btn btn-outline">View Projects</Link>
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
