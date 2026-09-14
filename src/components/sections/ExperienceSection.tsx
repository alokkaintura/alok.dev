import { motion, useReducedMotion } from 'framer-motion';
import { experience } from '../../data/experience';
import { SectionHeading } from '../ui/SectionHeading';

export function ExperienceSection() {
  const reduce = useReducedMotion();
  const job = experience[0];

  return (
    <section id="experience" className="section-pad py-24 md:py-32">
      <div className="max-site">
        <SectionHeading
          eyebrow="Career timeline"
          title="One chapter, deep ownership."
          description="Interactive timeline of my role at Scalability Engineers — the full story from my resume, presented as a progressive chapter."
        />

        <div className="relative grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
              Now
            </p>
            <h3 className="font-display mt-3 text-3xl font-bold">{job.company}</h3>
            <p className="mt-2 text-sm text-[var(--fg-muted)]">{job.location}</p>
            <p className="mt-6 font-mono text-xs text-[var(--fg-muted)]">
              {job.start} — {job.end}
            </p>
            <p className="mt-2 text-lg font-medium">{job.role}</p>
          </aside>

          <div className="relative">
            <div
              className="absolute bottom-0 left-[11px] top-2 w-px bg-[var(--line)] md:left-[15px]"
              aria-hidden
            />
            <ol className="space-y-8">
              {job.highlights.map((item, index) => (
                <motion.li
                  key={item}
                  className="relative grid grid-cols-[28px_1fr] gap-4 md:grid-cols-[36px_1fr]"
                  initial={reduce ? false : { opacity: 0, x: 18 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-8%' }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.3) }}
                >
                  <div className="relative z-10 flex justify-center pt-1.5">
                    <span className="h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_4px_color-mix(in_oklab,var(--accent)_20%,transparent)]" />
                  </div>
                  <div className="surface rounded-2xl p-5 md:p-6">
                    <p className="font-mono text-[11px] text-[var(--fg-muted)]">
                      Chapter {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-2 leading-relaxed text-[var(--fg)]">{item}</p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <motion.div
              className="mt-10 rounded-3xl border border-[var(--line)] bg-[var(--bg-soft)] p-6 md:p-8"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Company context
              </p>
              <p className="mt-3 leading-relaxed text-[var(--fg-muted)]">
                {job.companyBlurb}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--line)] px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
