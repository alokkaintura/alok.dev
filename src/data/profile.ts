import type { NavItem, Profile } from '../types';

export const navItems: NavItem[] = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

export const profile: Profile = {
  fullName: 'Alok Kaintura',
  shortName: 'Alok',
  titles: ['Software Developer', 'Frontend Developer'],
  summary:
    'Software Developer with over 4.5 years of experience building efficient, user-friendly web applications with React.js, PHP, and modern front-end technologies.',
  narrative: [
    'I build interfaces that feel fast, clear, and intentional — from healthcare platforms to AI-assisted product experiences.',
    'At Scalability Engineers, I own frontend delivery across client products: translating requirements into accessible React systems, shipping search and auth flows, and tightening performance where it matters.',
    'I care about the craft between design and engineering — reusable component systems, thoughtful state, and products people can actually use.',
  ],
  yearsExperienceLabel: '4.5+ years',
  specialties: [
    'React & TypeScript product UIs',
    'AI chat & conversational search',
    'Auth, search, and data visualization',
    'Performance-minded frontend delivery',
  ],
  philosophy:
    'Ship interfaces that respect users: accessible by default, performant under real traffic, and clear enough that the product feels inevitable.',
  contact: {
    email: 'akaintura1@gmail.com',
    phone: '+91 8126371620',
    location: 'Dehradun, India',
    links: [
      {
        label: 'Email',
        href: 'mailto:akaintura1@gmail.com',
      },
      {
        label: 'Resume',
        href: '/Alok_Kaintura_Resume.pdf',
        external: true,
      },
    ],
  },
  education: [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Uttaranchal University',
      location: 'Dehradun, Uttarakhand',
      date: 'July 2021',
    },
    {
      degree: 'Intermediate',
      institution: 'S.G.S.V.M Inter College',
      location: 'Dehradun, Uttarakhand',
      date: 'June 2016',
    },
  ],
};
