import { Moon, Sun } from 'lucide-react';
import { useRecoilState } from 'recoil';
import { themeState } from '../../state/atoms';

export function ThemeToggle() {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--fg)] transition hover:border-[var(--accent)]"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
