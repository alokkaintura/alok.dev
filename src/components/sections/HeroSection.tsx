import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import type { MouseEvent } from 'react';
import { profile } from '../../data/profile';
import { scrollToSection } from '../../utils/helpers';
import { MagneticButton } from '../ui/MagneticButton';
import { DevTerminal } from '../terminal/DevTerminal';

export function HeroSection() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${mx}% ${my}%, color-mix(in oklab, var(--accent) 16%, transparent), transparent 55%)`;

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section
      id="hero"
      className="grain relative min-h-[100svh] overflow-hidden pt-28"
      onMouseMove={onMove}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: spotlight }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, color-mix(in oklab, var(--fg) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--fg) 6%, transparent) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(ellipse at center, black 20%, transparent 75%)',
        }}
        aria-hidden
      />

      <div className="section-pad relative z-10">
        <div className="max-site grid items-center gap-12 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28">
          <div>
            <motion.p
              className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent)]"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Software Developer · {profile.contact.location}
            </motion.p>

            <motion.h1
              className="font-display text-[clamp(3.4rem,11vw,7.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em]"
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {profile.fullName.split(' ')[0]}
              <br />
              <span className="text-[color-mix(in_oklab,var(--fg)_55%,transparent)]">
                {profile.fullName.split(' ')[1]}
              </span>
            </motion.h1>

            <motion.p
              className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              {profile.titles.join(' · ')}. I craft React & TypeScript products —
              AI chat, search, auth, and interfaces that stay fast under real use.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
            >
              <MagneticButton onClick={() => scrollToSection('work')}>
                View Work
                <ArrowDownRight size={16} />
              </MagneticButton>
              <MagneticButton
                variant="ghost"
                onClick={() => scrollToSection('experience')}
              >
                Explore Experience
              </MagneticButton>
              <MagneticButton
                variant="ghost"
                href="/Alok_Kaintura_Resume.pdf"
                download
              >
                Download Resume
              </MagneticButton>
              <MagneticButton
                variant="line"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </MagneticButton>
            </motion.div>

            <motion.dl
              className="mt-14 grid max-w-lg grid-cols-2 gap-6 border-t border-[var(--line)] pt-8"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
                  Experience
                </dt>
                <dd className="mt-2 font-display text-3xl font-bold">
                  {profile.yearsExperienceLabel}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
                  Focus
                </dt>
                <dd className="mt-2 text-base text-[var(--fg)]">
                  Frontend systems · AI product UX
                </dd>
              </div>
            </motion.dl>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--accent)_22%,transparent),transparent_65%)]" />
            <DevTerminal compact />
            <p className="mt-4 font-mono text-xs text-[var(--fg-muted)]">
              Try <span className="text-[var(--accent)]">whoami</span>,{' '}
              <span className="text-[var(--accent)]">skills</span>, or{' '}
              <span className="text-[var(--accent)]">projects</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
