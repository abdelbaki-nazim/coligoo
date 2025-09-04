import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const targetRef = useRef<HTMLElement>(null);

  const { triggerOnce = true, ...observerOptions } = options;

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersectingNow = entry.isIntersecting;
        setIsIntersecting(isIntersectingNow);

        if (isIntersectingNow && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
        ...observerOptions,
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [hasIntersected, observerOptions]);

  return {
    targetRef,
    isIntersecting,
    hasIntersected: triggerOnce ? hasIntersected : isIntersecting,
  };
}
