import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

const principles = [
  {
    title: 'Own the frontend end-to-end',
    body: 'From marketing surfaces and auth flows to product pages — I take over codebases and ship features that hold up under real usage, as with Hobu after inheriting the frontend.',
  },
  {
    title: 'Make complex systems feel simple',
    body: 'Healthcare workflows, property insights, search, and streaming AI chat should feel approachable. I translate dense requirements into accessible React interfaces.',
  },
  {
    title: 'Measure and tighten performance',
    body: 'I optimize REST calls and React components where it counts — including a measured 15% load-time reduction on Four Corners.',
  },
  {
    title: 'Build with the stack that fits',
    body: 'Recoil, Zustand, or Jotai; Vite; Dockerized deploys; LLM APIs when the product needs conversational intelligence — chosen for the problem, not the trend.',
  },
];

export function ApproachSection() {
  const reduce = useReducedMotion();

  return (
    <section id="approach" className="section-pad py-24 md:py-32">
      <div className="max-site">
        <SectionHeading
          eyebrow="Engineering approach"
          title="How I think when I build."
          description="Principles distilled from the work itself — not slogans invented for a portfolio."
        />

        <ol className="grid gap-6 md:grid-cols-2">
          {principles.map((item, index) => (
            <motion.li
              key={item.title}
              className="rounded-3xl border border-[var(--line)] p-7"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <span className="font-mono text-xs text-[var(--accent)]">
                0{index + 1}
              </span>
              <h3 className="font-display mt-3 text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--fg-muted)]">
                {item.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
