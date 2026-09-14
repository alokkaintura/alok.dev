import type { TechGroup, TechItem } from '../types';

export const techGroups: TechGroup[] = [
  'Frontend',
  'Backend',
  'Data & Cloud',
  'AI',
  'Tooling',
];

export const technologies: TechItem[] = [
  {
    name: 'React.js',
    group: 'Frontend',
    usage: 'Primary UI library across Hobu, MedyxHealth, Elevora, and client products.',
    related: ['TypeScript', 'Vite', 'Tailwind CSS'],
  },
  {
    name: 'TypeScript',
    group: 'Frontend',
    usage: 'Typed product codebases for Hobu, MedyxHealth, Elevora, and Four Corners.',
    related: ['React.js', 'Vite'],
  },
  {
    name: 'JavaScript',
    group: 'Frontend',
    usage: 'Core language for web application delivery and tooling.',
    related: ['React.js', 'TypeScript'],
  },
  {
    name: 'HTML5/CSS',
    group: 'Frontend',
    usage: 'Semantic markup and styling foundations for responsive interfaces.',
    related: ['Tailwind CSS', 'MUI'],
  },
  {
    name: 'Tailwind CSS',
    group: 'Frontend',
    usage: 'Utility-first styling for MedyxHealth, Elevora, and mobile-first client work.',
    related: ['React.js', 'MUI'],
  },
  {
    name: 'MUI',
    group: 'Frontend',
    usage: 'Component system used on MedyxHealth alongside Tailwind and Emotion.',
    related: ['React.js', 'Tailwind CSS'],
  },
  {
    name: 'Zustand / Jotai',
    group: 'Frontend',
    usage: 'Zustand on Hobu; Jotai on Elevora for lightweight client state.',
    related: ['React.js', 'Recoil'],
  },
  {
    name: 'Recoil',
    group: 'Frontend',
    usage: 'State management (with recoil-persist) on MedyxHealth.',
    related: ['React.js', 'TypeScript'],
  },
  {
    name: 'PHP',
    group: 'Backend',
    usage: 'Backend integration for full-cycle websites at Scalability Engineers.',
    related: ['REST APIs', 'MySQL'],
  },
  {
    name: 'FastAPI (Python)',
    group: 'Backend',
    usage: 'Elevora API layer with SQLAlchemy 2, Alembic, and WebSockets.',
    related: ['MySQL', 'AI Integration (LLM APIs)'],
  },
  {
    name: 'MySQL',
    group: 'Data & Cloud',
    usage: 'Relational schemas and Elevora local persistence; TiDB Cloud in production.',
    related: ['PHP', 'FastAPI (Python)'],
  },
  {
    name: 'Firebase',
    group: 'Data & Cloud',
    usage: 'Firebase Authentication on Hobu — Google OAuth, email/password, and guest flows.',
    related: ['React.js', 'Typesense'],
  },
  {
    name: 'Docker',
    group: 'Tooling',
    usage: 'Multi-stage builds for Hobu (GHCR) and MedyxHealth (nginx on Cloud Run / App Engine).',
    related: ['Git/GitHub'],
  },
  {
    name: 'Git/GitHub',
    group: 'Tooling',
    usage: 'Source control and CI/CD via GitHub Actions for Hobu deployments.',
    related: ['Docker'],
  },
  {
    name: 'AI Integration (LLM APIs)',
    group: 'AI',
    usage: 'Streaming AI chat on Hobu; OpenAI-compatible LLM via NVIDIA NIM on Elevora.',
    related: ['OpenAI-compatible APIs', 'FastAPI (Python)'],
  },
  {
    name: 'OpenAI-compatible APIs',
    group: 'AI',
    usage: 'Integrated NVIDIA NIM for Elevora AI features.',
    related: ['AI Integration (LLM APIs)', 'FastAPI (Python)'],
  },
];
