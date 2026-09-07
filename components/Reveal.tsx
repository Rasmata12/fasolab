'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';

type RevealAnimation = 'fade-up' | 'fade-in' | 'fade-scale' | 'slide-left' | 'slide-right';

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?: RevealAnimation;
  delay?: number;
}

/**
 * Wraps content and animates it into view the first time it crosses
 * into the viewport while scrolling (IntersectionObserver based).
 * Respects prefers-reduced-motion via CSS (see globals.css).
 */
export function Reveal({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${animation} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </div>
  );
}
