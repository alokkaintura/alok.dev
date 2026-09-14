export type ThemeMode = 'dark' | 'light';

export type SectionId =
  | 'hero'
  | 'about'
  | 'work'
  | 'experience'
  | 'stack'
  | 'approach'
  | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  links: SocialLink[];
}

export interface Profile {
  fullName: string;
  shortName: string;
  titles: string[];
  summary: string;
  narrative: string[];
  yearsExperienceLabel: string;
  specialties: string[];
  philosophy: string;
  contact: ContactInfo;
  education: EducationItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  date: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyBlurb: string;
  location: string;
  role: string;
  start: string;
  end: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  role: string;
  outcome?: string;
  details: string[];
  technologies: string[];
  featured: boolean;
  accent: string;
}

export interface TechItem {
  name: string;
  group: TechGroup;
  usage: string;
  related: string[];
}

export type TechGroup =
  | 'Frontend'
  | 'Backend'
  | 'Data & Cloud'
  | 'AI'
  | 'Tooling';

export interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system' | 'error';
  content: string;
}

export interface CursorState {
  x: number;
  y: number;
  hovering: boolean;
  label: string;
}
