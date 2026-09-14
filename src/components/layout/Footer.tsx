import { profile } from '../../data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="section-pad">
        <div className="max-site flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl font-bold">
              {profile.fullName}
            </p>
            <p className="mt-1 text-sm text-[var(--fg-muted)]">
              {profile.titles.join(' · ')}
            </p>
          </div>
          <div className="space-y-2 text-sm text-[var(--fg-muted)]">
            <p className="font-mono text-xs">
              Designed & engineered with React + TypeScript.
            </p>
            <p>© {year} {profile.fullName}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
