import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useTypewriter = (text: string, delay: number = 0) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, { text: '' });

    // Create typewriter animation
    gsap.to(element, {
      duration: text.length * 0.1,
      text: text,
      ease: "none",
      delay: delay,
    });
  }, [text, delay]);

  return elementRef;
};