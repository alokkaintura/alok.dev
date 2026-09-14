import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    id: 'scalability-engineers',
    company: 'Scalability Engineers',
    companyBlurb:
      "India's leading technology services organization helping fortune companies globally manage database infrastructure — including highly sensitive, demanding data ecosystems and SLAs for one of the top five fortune clients.",
    location: 'Dehradun, India',
    role: 'Software Developer',
    start: 'June 2021',
    end: 'Present',
    highlights: [
      'Delivered full-cycle development of dynamic websites, integrating React.js frontends with PHP backends.',
      'Built the complete front-end UI for MedyxHealth, translating requirements into responsive, accessible React components.',
      'Took ownership of the Hobu frontend (React 19 + TypeScript, Vite, Zustand), shipping real-time streaming AI chat, guest search with login-gated upgrade, and Typesense-powered search.',
      'Developed mobile-first designs with Tailwind CSS and Bootstrap for optimal experience across devices.',
      'Designed and optimized relational database schemas for high-traffic applications.',
      'Created and consumed REST APIs for platforms like Samanvay Samiti.',
      'Implemented advanced search for Samanvay Samiti and Kohive.',
      'Boosted organic reach for Kohive and Paradise Chopta through SEO audits and best practices.',
      'Reduced application load times by 15% for Four Corners via REST API and React component optimization.',
      'Improved engagement for Paradise Chopta with intuitive navigation plus inquiry and booking features.',
      'Created reusable React components for consistent UI/UX across Kohive and Four Corners.',
      'Partnered with clients to gather requirements and deliver tailored solutions on time.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'PHP',
      'Tailwind CSS',
      'Bootstrap',
      'REST APIs',
      'MySQL',
      'Zustand',
      'Vite',
    ],
  },
];
