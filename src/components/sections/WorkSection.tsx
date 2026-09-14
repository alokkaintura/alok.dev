import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { projects } from '../../data/projects';
import { selectedProjectIdState } from '../../state/atoms';
import type { ProjectItem } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';

function ProjectVisual({ project }: { project: ProjectItem }) {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--line)]"
      style={{
        background: `linear-gradient(145deg, color-mix(in oklab, ${project.accent} 28%, var(--bg-elevated)), var(--bg-soft))`,
      }}
    >
      <div className="absolute inset-4 rounded-xl border border-[color-mix(in_oklab,var(--fg)_12%,transparent)] bg-[color-mix(in_oklab,var(--bg)_55%,transparent)] p-4 backdrop-blur-sm">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
        <div className="space-y-2">
          <div
            className="h-3 w-2/5 rounded-full"
            style={{ background: project.accent, opacity: 0.85 }}
          />
          <div className="h-2 w-4/5 rounded-full bg-white/15" />
          <div className="h-2 w-3/5 rounded-full bg-white/10" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-white/8"
                style={{
                  borderTop: `2px solid ${project.accent}`,
                  opacity: 0.9 - i * 0.15,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg)]/70">
        UI representation · no fabricated screenshots
      </div>
    </div>
  );
}

export function WorkSection() {
  const [selectedId, setSelectedId] = useRecoilState(selectedProjectIdState);
  const reduce = useReducedMotion();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const selected = useMemo(
    () => projects.find((p) => p.id === selectedId) ?? null,
    [selectedId],
  );

  return (
    <section id="work" className="section-pad py-24 md:py-32">
      <div className="max-site">
        <SectionHeading
          eyebrow="What I build"
          title="Selected work — products with real users and real constraints."
          description="Editorial case frames drawn only from shipped work on my resume. Open a project for the technical story."
        />

        <div className="space-y-16 md:space-y-24">
          {featured.map((project, index) => (
            <motion.article
              key={project.id}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
              initial={reduce ? false : { opacity: 0, y: 36 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className="text-left"
                onClick={() => setSelectedId(project.id)}
                data-cursor="view"
                aria-label={`Open ${project.name} details`}
              >
                <ProjectVisual project={project} />
              </button>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                  0{index + 1} / Featured
                </p>
                <h3 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-lg text-[var(--fg-muted)]">
                  {project.tagline}
                </p>
                <p className="mt-6 max-w-xl leading-relaxed text-[var(--fg-muted)]">
                  {project.problem}
                </p>
                <p className="mt-4 text-sm text-[var(--fg)]">{project.role}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--fg-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--fg)] underline-offset-4 hover:underline"
                  onClick={() => setSelectedId(project.id)}
                >
                  Read the build story
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 border-t border-[var(--line)] pt-12">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]">
            More chapters
          </p>
          <ul className="mt-6 divide-y divide-[var(--line)]">
            {rest.map((project) => (
              <li key={project.id}>
                <button
                  type="button"
                  className="group flex w-full flex-col gap-2 py-6 text-left transition md:flex-row md:items-center md:justify-between"
                  onClick={() => setSelectedId(project.id)}
                  data-cursor="view"
                >
                  <div>
                    <h3 className="font-display text-2xl font-bold group-hover:text-[var(--accent)]">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[var(--fg-muted)]">
                      {project.tagline}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-[var(--fg-muted)]">
                    Details <ArrowUpRight size={14} />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} project details`}
          >
            <motion.div
              className="surface max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl p-6 sm:rounded-3xl sm:p-8"
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                    Case study
                  </p>
                  <h3 className="font-display mt-2 text-3xl font-bold md:text-4xl">
                    {selected.name}
                  </h3>
                  <p className="mt-1 text-[var(--fg-muted)]">{selected.tagline}</p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)]"
                  onClick={() => setSelectedId(null)}
                  aria-label="Close project details"
                >
                  <X size={16} />
                </button>
              </div>

              <ProjectVisual project={selected} />

              <div className="mt-6 space-y-4 text-[var(--fg-muted)]">
                <p>
                  <span className="text-[var(--fg)]">Problem. </span>
                  {selected.problem}
                </p>
                <p>
                  <span className="text-[var(--fg)]">Role. </span>
                  {selected.role}
                </p>
                {selected.outcome ? (
                  <p>
                    <span className="text-[var(--fg)]">Outcome. </span>
                    {selected.outcome}
                  </p>
                ) : null}
              </div>

              <ul className="mt-6 space-y-3">
                {selected.details.map((detail) => (
                  <li
                    key={detail}
                    className="border-l-2 border-[var(--accent)] pl-4 text-sm leading-relaxed text-[var(--fg-muted)]"
                  >
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {selected.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
