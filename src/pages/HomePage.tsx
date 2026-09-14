import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { CustomCursor } from '../components/layout/CustomCursor';
import { TerminalOverlay } from '../components/terminal/TerminalOverlay';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { WorkSection } from '../components/sections/WorkSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { StackSection } from '../components/sections/StackSection';
import { ApproachSection } from '../components/sections/ApproachSection';
import { ContactSection } from '../components/sections/ContactSection';
import { useActiveSectionObserver, useReducedMotionSync } from '../hooks/useScrollSpy';

export function HomePage() {
  useActiveSectionObserver();
  useReducedMotionSync();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[var(--accent-fg)]"
      >
        Skip to content
      </a>
      <CustomCursor />
      <Navigation />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ExperienceSection />
        <StackSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
      <TerminalOverlay />
    </>
  );
}
