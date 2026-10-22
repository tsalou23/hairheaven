import { useEffect, useRef } from 'react';

/**
 * Feeds scroll + pointer position into CSS variables on the cloud scene,
 * so the three depth layers can drift at different speeds. Transform only.
 */
export default function useCloudParallax() {
  const ref = useRef(null);

  useEffect(() => {
    const scene = ref.current;
    if (!scene) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const finePointer = window.matchMedia('(pointer: fine)');
    let scrollOffset = 0;
    let pointerX = 0;
    let pointerY = 0;
    let frame = 0;

    const paint = () => {
      frame = 0;
      scene.style.setProperty('--cloud-sy', `${scrollOffset.toFixed(2)}px`);
      scene.style.setProperty('--cloud-mx', `${(pointerX * 18).toFixed(2)}px`);
      scene.style.setProperty('--cloud-my', `${(pointerY * 12).toFixed(2)}px`);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const readScroll = () => {
      const rect = scene.getBoundingClientRect();
      const centre = rect.top + rect.height / 2;
      const raw = (window.innerHeight / 2 - centre) * 0.22;
      scrollOffset = Math.max(-120, Math.min(120, raw));
      schedule();
    };

    const readPointer = (event) => {
      if (!finePointer.matches) return;
      pointerX = event.clientX / window.innerWidth - 0.5;
      pointerY = event.clientY / window.innerHeight - 0.5;
      schedule();
    };

    readScroll();
    window.addEventListener('scroll', readScroll, { passive: true });
    window.addEventListener('resize', readScroll);
    window.addEventListener('mousemove', readPointer, { passive: true });

    return () => {
      window.removeEventListener('scroll', readScroll);
      window.removeEventListener('resize', readScroll);
      window.removeEventListener('mousemove', readPointer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}