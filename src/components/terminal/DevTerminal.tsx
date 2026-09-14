import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { experience } from '../../data/experience';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import { technologies } from '../../data/technologies';
import {
  terminalHistoryState,
  terminalInputState,
} from '../../state/atoms';
import type { TerminalLine } from '../../types';

function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function runCommand(raw: string): TerminalLine[] {
  const cmd = raw.trim().toLowerCase();
  const out = (content: string): TerminalLine => ({
    id: makeId(),
    type: 'output',
    content,
  });

  if (!cmd) return [];

  switch (cmd) {
    case 'help':
      return [
        out('Available commands:'),
        out('  whoami      — identity'),
        out('  skills      — technical stack'),
        out('  experience  — career chapter'),
        out('  projects    — selected work'),
        out('  contact     — reach out'),
        out('  clear       — clear screen'),
        out('  help        — this list'),
      ];
    case 'whoami':
      return [
        out(`${profile.fullName}`),
        out(`${profile.titles.join(' · ')}`),
        out(`${profile.yearsExperienceLabel} · ${profile.contact.location}`),
        out(profile.summary),
      ];
    case 'skills':
      return [
        out('Technical skills from resume:'),
        ...technologies.map((t) => out(`  • ${t.name}`)),
      ];
    case 'experience': {
      const job = experience[0];
      return [
        out(`${job.role} @ ${job.company}`),
        out(`${job.start} — ${job.end} · ${job.location}`),
        out(job.companyBlurb),
        out('Highlights:'),
        ...job.highlights.slice(0, 5).map((h) => out(`  • ${h}`)),
        out('  … (scroll the Experience section for the full chapter)'),
      ];
    }
    case 'projects':
      return [
        out('Selected work:'),
        ...projects.map((p) => out(`  • ${p.name} — ${p.tagline}`)),
      ];
    case 'contact':
      return [
        out(`email   ${profile.contact.email}`),
        out(`phone   ${profile.contact.phone}`),
        out(`based   ${profile.contact.location}`),
      ];
    case 'clear':
      return [];
    default:
      return [
        {
          id: makeId(),
          type: 'error',
          content: `Command not found: ${raw}. Try help.`,
        },
      ];
  }
}

interface DevTerminalProps {
  compact?: boolean;
  className?: string;
}

export function DevTerminal({ compact = false, className = '' }: DevTerminalProps) {
  const [history, setHistory] = useRecoilState(terminalHistoryState);
  const [input, setInput] = useRecoilState(terminalInputState);
  const setHistoryDirect = useSetRecoilState(terminalHistoryState);

  const submit = useCallback(() => {
    const value = input;
    const trimmed = value.trim().toLowerCase();

    if (trimmed === 'clear') {
      setHistoryDirect([
        {
          id: makeId(),
          type: 'system',
          content: 'alok.dev interactive shell — type help to begin',
        },
      ]);
      setInput('');
      return;
    }

    const inputLine: TerminalLine = {
      id: makeId(),
      type: 'input',
      content: value,
    };
    const result = runCommand(value);
    setHistory((prev) => [...prev, inputLine, ...result]);
    setInput('');
  }, [input, setHistory, setHistoryDirect, setInput]);

  return (
    <div
      className={`surface overflow-hidden rounded-2xl shadow-[var(--shadow)] ${className}`}
      data-cursor="terminal"
    >
      <div className="flex items-center gap-2 border-b border-[var(--line)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-[var(--fg-muted)]">
          alok@portfolio:~
        </span>
      </div>
      <div
        className={`font-mono text-sm leading-relaxed ${
          compact ? 'max-h-64' : 'max-h-80'
        } overflow-y-auto p-4`}
        role="log"
        aria-live="polite"
      >
        {history.map((line) => (
          <p
            key={line.id}
            className={
              line.type === 'input'
                ? 'text-[var(--accent)]'
                : line.type === 'error'
                  ? 'text-red-400'
                  : line.type === 'system'
                    ? 'text-[var(--fg-muted)]'
                    : 'text-[var(--fg)]'
            }
          >
            {line.type === 'input' ? (
              <>
                <span className="text-[var(--fg-muted)]">$ </span>
                {line.content}
              </>
            ) : (
              line.content
            )}
          </p>
        ))}
      </div>
      <form
        className="flex items-center gap-2 border-t border-[var(--line)] px-4 py-3"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <span className="font-mono text-[var(--accent)]" aria-hidden>
          $
        </span>
        <label className="sr-only" htmlFor="terminal-input">
          Terminal command
        </label>
        <input
          id="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent font-mono text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-muted)]"
          placeholder="whoami"
          autoComplete="off"
          spellCheck={false}
        />
      </form>
    </div>
  );
}
