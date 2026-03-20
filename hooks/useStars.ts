'use client';

import { useEffect, type RefObject } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
  phase: number;
}

export function useStars(ref: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.style.cssText =
      'position:absolute;inset:0;width:100%;height:100%;pointer-events:none';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = container!.offsetWidth * dpr;
      canvas.height = container!.offsetHeight * dpr;
      ctx!.scale(dpr, dpr);
      seed();
    }

    function seed() {
      const w = container!.offsetWidth;
      const h = container!.offsetHeight;
      const count = Math.floor((w * h) / 4000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.5 + 0.15,
        speed: Math.random() * 0.0008 + 0.0003,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function draw(t: number) {
      const w = container!.offsetWidth;
      const h = container!.offsetHeight;
      ctx!.clearRect(0, 0, w, h);
      for (const s of stars) {
        const flicker = Math.sin(t * s.speed + s.phase) * 0.3 + 0.7;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(247,246,243,${s.opacity * flicker})`;
        ctx!.fill();
      }
      animId = requestAnimationFrame(draw);
    }

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.remove();
    };
  }, [ref]);
}
