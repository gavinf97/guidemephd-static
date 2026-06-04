const iconProps = (size, rest) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.5',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  ...rest,
});

export const DataIcon = ({ size = 28, ...props }) => (
  <svg {...iconProps(size, props)}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    <path d="M3 9v5c0 1.66 4.03 3 9 3s9-1.34 9-3V9" />
    <path d="M3 14v5c0 1.66 4.03 3 9 3s9-1.34 9-3v-5" />
  </svg>
);

export const BioIcon = ({ size = 28, ...props }) => (
  <svg {...iconProps(size, props)}>
    <path d="M8 3c0 5 8 5 8 10s-8 5-8 10" />
    <path d="M16 3c0 5-8 5-8 10s8 5 8 10" />
    <line x1="8" y1="8" x2="16" y2="8" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="8" y1="16" x2="16" y2="16" />
  </svg>
);

export const OpenScienceIcon = ({ size = 28, ...props }) => (
  <svg {...iconProps(size, props)}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

export const ResearchInfraIcon = ({ size = 28, ...props }) => (
  <svg {...iconProps(size, props)}>
    <rect x="2" y="3" width="20" height="4" rx="1" />
    <rect x="2" y="10" width="20" height="4" rx="1" />
    <rect x="2" y="17" width="20" height="4" rx="1" />
    <circle cx="6" cy="5" r="1" fill="currentColor" />
    <circle cx="6" cy="12" r="1" fill="currentColor" />
    <circle cx="6" cy="19" r="1" fill="currentColor" />
  </svg>
);

export const FundingIcon = ({ size = 28, ...props }) => (
  <svg {...iconProps(size, props)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="13" />
    <polyline points="9 15 12 12 15 15" />
  </svg>
);

export const ProjectMgmtIcon = ({ size = 28, ...props }) => (
  <svg {...iconProps(size, props)}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <polyline points="9 16 11 18 15 14" />
  </svg>
);

export const CommsIcon = ({ size = 28, ...props }) => (
  <svg {...iconProps(size, props)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const WorkshopIcon = ({ size = 28, ...props }) => (
  <svg {...iconProps(size, props)}>
    <path d="M2 3h20" />
    <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
    <path d="M7 21l5-5 5 5" />
    <line x1="12" y1="16" x2="12" y2="21" />
  </svg>
);

export const CommunityIcon = ({ size = 28, ...props }) => (
  <svg {...iconProps(size, props)}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const GovernanceIcon = ({ size = 28, ...props }) => (
  <svg {...iconProps(size, props)}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <polyline points="9 12 11 14 15 10" />
    <line x1="9" y1="17" x2="15" y2="17" />
  </svg>
);

export const WebSupportIcon = ({ size = 28, ...props }) => (
  <svg {...iconProps(size, props)}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
