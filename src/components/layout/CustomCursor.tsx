import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { cursorState } from '../../state/atoms';
import { isTouchDevice } from '../../hooks/useScrollSpy';

export function CustomCursor() {
  const [cursor, setCursor] = useRecoilState(cursorState);
  const isTouch = isTouchDevice();

  useEffect(() => {
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      setCursor((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, [data-cursor], input, textarea',
      );
      setCursor((prev) => ({
        ...prev,
        hovering: Boolean(interactive),
        label: interactive?.getAttribute('data-cursor') ?? '',
      }));
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [isTouch, setCursor]);

  if (isTouch) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      aria-hidden
      style={{
        transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)] transition-all duration-200 ${
          cursor.hovering
            ? 'h-14 w-14 bg-[color-mix(in_oklab,var(--accent)_18%,transparent)]'
            : 'h-3 w-3 bg-[var(--accent)]'
        }`}
      />
      {cursor.label ? (
        <span className="absolute left-8 top-0 whitespace-nowrap rounded-full bg-[var(--fg)] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--bg)]">
          {cursor.label}
        </span>
      ) : null}
    </div>
  );
}
