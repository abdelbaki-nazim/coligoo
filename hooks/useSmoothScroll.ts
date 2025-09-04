import { useEffect, useRef, useCallback } from "react";

interface UseSmoothScrollOptions {
  speed?: number;
  direction?: "left" | "right";
  enabled?: boolean;
}

interface UseSmoothScrollReturn {
  ref: React.RefObject<HTMLDivElement | null>;
  pause: () => void;
  resume: () => void;
  setSpeed: (newSpeed: number) => void;
}

export const useSmoothScroll = (
  options: UseSmoothScrollOptions = {}
): UseSmoothScrollReturn => {
  const { speed = 0.5, direction = "left", enabled = true } = options;

  const elementRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const positionRef = useRef<number>(0);
  const speedRef = useRef<number>(speed);
  const isPausedRef = useRef<boolean>(false);

  const animate = useCallback((): void => {
    if (!elementRef.current || isPausedRef.current) {
      animationFrameRef.current = requestAnimationFrame(animate);
      return;
    }

    const element = elementRef.current;
    const currentSpeed =
      direction === "left" ? speedRef.current : -speedRef.current;

    positionRef.current += currentSpeed;

    const totalWidth = element.scrollWidth;
    const visibleWidth = element.parentElement?.clientWidth || 0;
    const resetPoint = totalWidth / 2;

    if (direction === "left" && positionRef.current >= resetPoint) {
      positionRef.current = 0;
    } else if (direction === "right" && positionRef.current <= -resetPoint) {
      positionRef.current = 0;
    }

    element.style.transform = `translateX(-${positionRef.current}px)`;

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [direction]);

  const pause = useCallback((): void => {
    isPausedRef.current = true;
  }, []);

  const resume = useCallback((): void => {
    isPausedRef.current = false;
  }, []);

  const setSpeed = useCallback((newSpeed: number): void => {
    speedRef.current = newSpeed;
  }, []);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    if (!enabled) return;

    animationFrameRef.current = requestAnimationFrame(animate);

    return (): void => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [animate, enabled]);

  useEffect(() => {
    const handleVisibilityChange = (): void => {
      if (document.hidden) {
        pause();
      } else {
        resume();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return (): void => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pause, resume]);

  return {
    ref: elementRef,
    pause,
    resume,
    setSpeed,
  };
};
