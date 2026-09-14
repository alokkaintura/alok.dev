import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { navItems, profile } from '../../data/profile';
import {
  activeSectionState,
  mobileNavOpenState,
  terminalOpenState,
} from '../../state/atoms';
import { scrollToSection } from '../../utils/helpers';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Navigation() {
  const active = useRecoilValue(activeSectionState);
  const [open, setOpen] = useRecoilState(mobileNavOpenState);
  const [, setTerminalOpen] = useRecoilState(terminalOpenState);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-pad">
        <nav
          className="mx-auto mt-4 flex max-w-[1180px] items-center justify-between rounded-full border border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_78%,transparent)] px-4 py-2.5 backdrop-blur-xl md:px-5"
          aria-label="Primary"
        >
          <button
            type="button"
            className="font-display text-lg font-bold tracking-tight"
            onClick={() => go('hero')}
          >
            {profile.shortName}
            <span className="text-[var(--accent)]">.</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => go(item.id)}
                  className={`rounded-full px-3.5 py-2 text-sm transition ${
                    active === item.id
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--fg-muted)] hover:text-[var(--fg)]'
                  }`}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hidden rounded-full border border-[var(--line)] px-3 py-2 font-mono text-xs text-[var(--fg-muted)] transition hover:border-[var(--accent)] hover:text-[var(--fg)] sm:inline-flex"
              onClick={() => setTerminalOpen(true)}
            >
              ~/term
            </button>
            <a
              href="/Alok_Kaintura_Resume.pdf"
              download
              className="hidden rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-fg)] sm:inline-flex"
            >
              Resume
            </a>
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--bg)] md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col justify-end px-6 pb-16 pt-28">
              <ul className="space-y-2">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      type="button"
                      className="font-display w-full text-left text-4xl font-bold"
                      onClick={() => go(item.id)}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="/Alok_Kaintura_Resume.pdf"
                  download
                  className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent-fg)]"
                >
                  Download Resume
                </a>
                <button
                  type="button"
                  className="rounded-full border border-[var(--line)] px-5 py-3 font-mono text-sm"
                  onClick={() => {
                    setOpen(false);
                    setTerminalOpen(true);
                  }}
                >
                  Open terminal
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
