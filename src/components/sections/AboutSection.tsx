import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';

export function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="section-pad py-24 md:py-32">
      <div className="max-site">
        <SectionHeading
          eyebrow="Who I am"
          title="I turn complex product requirements into interfaces people trust."
          description={profile.narrative[0]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-lg leading-relaxed text-[var(--fg-muted)]">
            {profile.narrative.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="border-l-2 border-[var(--accent)] pl-5 text-[var(--fg)]">
              {profile.philosophy}
            </p>
          </div>

          <motion.div
            className="surface rounded-3xl p-7 md:p-8"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
              Specialties
            </p>
            <ul className="mt-6 space-y-4">
              {profile.specialties.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b border-[var(--line)] pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-mono text-xs text-[var(--fg-muted)]">
                    0{i + 1}
                  </span>
                  <span className="text-base text-[var(--fg)]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                  Tenure
                </p>
                <p className="mt-2 font-display text-2xl font-bold">
                  {profile.yearsExperienceLabel}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                  Education
                </p>
                <p className="mt-2 text-sm leading-snug text-[var(--fg)]">
                  {profile.education[0].degree}
                  <br />
                  <span className="text-[var(--fg-muted)]">
                    {profile.education[0].institution}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
