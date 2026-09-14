import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '../../utils/helpers';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  download?: boolean;
  external?: boolean;
  variant?: 'primary' | 'ghost' | 'line';
  'aria-label'?: string;
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  type = 'button',
  download,
  external,
  variant = 'primary',
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-colors',
    variant === 'primary' &&
      'bg-[var(--accent)] text-[var(--accent-fg)] hover:brightness-110',
    variant === 'ghost' &&
      'bg-transparent text-[var(--fg)] border border-[var(--line)] hover:border-[var(--accent)]',
    variant === 'line' &&
      'rounded-none border-b border-[var(--fg)] px-0 py-2 hover:text-[var(--accent)] hover:border-[var(--accent)]',
    className,
  );

  const motionProps = reduce
    ? {}
    : {
        whileHover: { y: -2 },
        whileTap: { scale: 0.98 },
      };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        onClick={onClick}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
