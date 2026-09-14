import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { techGroups, technologies } from '../../data/technologies';
import type { TechItem } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';

export function StackSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<TechItem | null>(null);

  return (
    <section id="stack" className="section-pad py-24 md:py-32">
      <div className="max-site">
        <SectionHeading
          eyebrow="Tech ecosystem"
          title="Tools I actually ship with."
          description="No skill bars. Hover a technology to see how it shows up in my work — every item comes from the resume."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            {techGroups.map((group) => {
              const items = technologies.filter((t) => t.group === group);
              if (items.length === 0) return null;
              return (
                <div key={group}>
                  <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]">
                    {group}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {items.map((tech) => {
                      const isActive = active?.name === tech.name;
                      return (
                        <li key={tech.name}>
                          <button
                            type="button"
                            className={`rounded-full border px-4 py-2 text-sm transition ${
                              isActive
                                ? 'border-[var(--accent)] bg-[color-mix(in_oklab,var(--accent)_14%,transparent)] text-[var(--fg)]'
                                : 'border-[var(--line)] text-[var(--fg-muted)] hover:border-[var(--accent)] hover:text-[var(--fg)]'
                            }`}
                            onMouseEnter={() => setActive(tech)}
                            onFocus={() => setActive(tech)}
                            onClick={() => setActive(tech)}
                            aria-pressed={isActive}
                          >
                            {tech.name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          <aside className="surface sticky top-28 h-fit rounded-3xl p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Context
            </p>
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.name}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-display mt-4 text-2xl font-bold">
                    {active.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                    {active.usage}
                  </p>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                    Related
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {active.related.map((r) => (
                      <li
                        key={r}
                        className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.p
                  key="empty"
                  className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]"
                  initial={false}
                  animate={{ opacity: 1 }}
                >
                  Select a technology to see where it shows up in my projects and
                  day-to-day work.
                </motion.p>
              )}
            </AnimatePresence>
          </aside>
        </div>
      </div>
    </section>
  );
}
