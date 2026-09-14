import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Terminal, X } from 'lucide-react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { terminalOpenState } from '../../state/atoms';
import { DevTerminal } from './DevTerminal';

export function TerminalOverlay() {
  const [open, setOpen] = useRecoilState(terminalOpenState);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setOpen]);

  return (
    <>
      <button
        type="button"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg-elevated)] px-4 py-3 text-sm shadow-[var(--shadow)] md:bottom-8 md:right-8"
        onClick={() => setOpen(true)}
        aria-label="Open developer terminal"
        data-cursor="open"
      >
        <Terminal size={16} />
        <span className="hidden sm:inline">Terminal</span>
        <kbd className="hidden rounded bg-[var(--bg-soft)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--fg-muted)] md:inline">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/55 p-4 backdrop-blur-sm sm:items-center"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Developer terminal"
          >
            <motion.div
              className="relative w-full max-w-2xl"
              initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-elevated)] text-[var(--fg)]"
                onClick={() => setOpen(false)}
                aria-label="Close terminal"
              >
                <X size={16} />
              </button>
              <DevTerminal />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
