'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('is-revealed', 'in');
      });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('is-revealed', 'in');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed', 'in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const observeUnrevealed = () => {
      const elements = document.querySelectorAll('.reveal:not(.is-revealed):not(.in)');
      elements.forEach((el) => observer.observe(el));
    };

    // Initial check
    observeUnrevealed();

    // Secondary pass after layout stabilization
    const timeoutId = setTimeout(observeUnrevealed, 150);

    // Watch for dynamic DOM changes (e.g., category tabs switching, filtered grids)
    const mutationObserver = new MutationObserver(() => {
      observeUnrevealed();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeoutId);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);
}
