import { atom, selector } from 'recoil';
import type {
  CursorState,
  SectionId,
  TerminalLine,
  ThemeMode,
} from '../types';

const storedTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'dark';
  const saved = window.localStorage.getItem('alok-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return 'dark';
};

export const themeState = atom<ThemeMode>({
  key: 'themeState',
  default: storedTheme(),
  effects: [
    ({ onSet }) => {
      onSet((mode) => {
        window.localStorage.setItem('alok-theme', mode);
        document.documentElement.dataset.theme = mode;
      });
    },
  ],
});

export const activeSectionState = atom<SectionId>({
  key: 'activeSectionState',
  default: 'hero',
});

export const selectedProjectIdState = atom<string | null>({
  key: 'selectedProjectIdState',
  default: null,
});

export const mobileNavOpenState = atom<boolean>({
  key: 'mobileNavOpenState',
  default: false,
});

export const terminalOpenState = atom<boolean>({
  key: 'terminalOpenState',
  default: false,
});

export const terminalHistoryState = atom<TerminalLine[]>({
  key: 'terminalHistoryState',
  default: [
    {
      id: 'boot-1',
      type: 'system',
      content: 'alok.dev interactive shell — type help to begin',
    },
  ],
});

export const terminalInputState = atom<string>({
  key: 'terminalInputState',
  default: '',
});

export const reducedMotionState = atom<boolean>({
  key: 'reducedMotionState',
  default:
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
});

export const cursorState = atom<CursorState>({
  key: 'cursorState',
  default: { x: 0, y: 0, hovering: false, label: '' },
});

export const isProjectModalOpen = selector({
  key: 'isProjectModalOpen',
  get: ({ get }) => get(selectedProjectIdState) !== null,
});
