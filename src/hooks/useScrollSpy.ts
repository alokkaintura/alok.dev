import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { activeSectionState, reducedMotionState } from '../state/atoms';
import type { SectionId } from '../types';

const SECTION_IDS: SectionId[] = [
  'hero',
  'about',
  'work',
  'experience',
  'stack',
  'approach',
  'contact',
];

export function useActiveSectionObserver(): void {
  const setActive = useSetRecoilState(activeSectionState);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top?.target.id) {
          setActive(top.target.id as SectionId);
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [setActive]);
}

export function useReducedMotionSync(): void {
  const setReduced = useSetRecoilState(reducedMotionState);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [setReduced]);
}

export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: none), (pointer: coarse)').matches;
}
