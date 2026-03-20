'use client';

import { useEffect, type RefObject } from 'react';

interface Star {
  x: number;
  y: number;
  r: number;
  ph: number;
  sp: number;
}

interface Particle {
  t: number;
  sp: number;
  r: number;
  op: number;
}

function bezPt(
  t: number,
  x0: number, y0: number,
  cx1: number, cy1: number,
  cx2: number, cy2: number,
  x3: number, y3: number
): [number, number] {
  const m = 1 - t;
  return [
    m * m * m * x0 + 3 * m * m * t * cx1 + 3 * m * t * t * cx2 + t * t * t * x3,
    m * m * m * y0 + 3 * m * m * t * cy1 + 3 * m * t * t * cy2 + t * t * t * y3,
  ];
}

export function useLighthouseScene(ref: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number, sY = 0;
    let animId: number;

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }

    function onScroll() {
      sY = window.pageYOffset;
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll);

    // Stars
    const stars: Star[] = [];
    for (let i = 0; i < 140; i++) {
      stars.push({
        x: Math.random() * 3000,
        y: Math.random() * 1400,
        r: Math.random() * 1.2 + 0.3,
        ph: Math.random() * 6.28,
        sp: Math.random() * 0.8 + 0.3,
      });
    }

    // Data particles
    const pts: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      pts.push({
        t: Math.random(),
        sp: Math.random() * 0.0003 + 0.00015,
        r: Math.random() * 2 + 1.2,
        op: Math.random() * 0.35 + 0.15,
      });
    }

    const lhX = () => W * 0.82;
    const lhBY = () => H * 0.88;

    function draw(time: number) {
      const X = ctx!;
      X.clearRect(0, 0, W, H);
      const sp = sY * 0.1;

      // Stars
      stars.forEach((s) => {
        const sy = s.y - sp;
        if (sy < -20 || sy > H + 20) return;
        const tw = 0.15 + Math.sin(time * 0.001 * s.sp + s.ph) * 0.25;
        X.fillStyle = `rgba(247,246,243,${tw})`;
        X.beginPath();
        X.arc(s.x % W, sy, s.r, 0, 6.28);
        X.fill();
      });

      const fade = Math.max(0, 1 - sY / (H * 1.5));
      if (fade < 0.01) {
        animId = requestAnimationFrame(draw);
        return;
      }
      X.save();
      X.globalAlpha = fade;

      const bx = lhX();
      const by = lhBY();
      const pp = sY * 0.02;

      // Waterline
      X.strokeStyle = 'rgba(247,246,243,0.04)';
      X.lineWidth = 1;
      X.beginPath();
      X.moveTo(0, H * 0.9 - pp);
      X.lineTo(W, H * 0.9 - pp);
      X.stroke();

      // Ship
      const sx = 70 + Math.sin(time * 0.0004) * 12;
      const sy2 = H * 0.87 + Math.sin(time * 0.001) * 2.5 - sY * 0.04;
      X.save();
      X.translate(sx, sy2);
      X.globalAlpha = fade * 0.18;
      X.fillStyle = 'rgba(247,246,243,1)';
      X.beginPath();
      X.moveTo(0, 0);
      X.lineTo(45, 0);
      X.lineTo(40, 9);
      X.lineTo(-5, 9);
      X.closePath();
      X.fill();
      X.fillRect(14, -9, 18, 9);
      X.fillRect(20, -16, 4, 7);
      X.strokeStyle = 'rgba(247,246,243,1)';
      X.lineWidth = 1.2;
      X.beginPath();
      X.moveTo(22, -16);
      X.lineTo(22, -22);
      X.lineTo(25, -22);
      X.stroke();
      X.restore();

      // Data flow path
      const sxP = 140;
      const exP = bx - 20;
      const byP = by - pp;
      const cx1 = sxP + (exP - sxP) * 0.3;
      const cy1 = byP - 25;
      const cx2 = sxP + (exP - sxP) * 0.7;
      const cy2 = byP + 15;
      const eyP = byP - 70;

      // Dotted line
      X.strokeStyle = 'rgba(247,246,243,0.06)';
      X.lineWidth = 1;
      X.setLineDash([3, 9]);
      X.beginPath();
      X.moveTo(sxP, byP);
      X.bezierCurveTo(cx1, cy1, cx2, cy2, exP, eyP);
      X.stroke();
      X.setLineDash([]);

      // Static nodes
      for (let i = 0; i < 7; i++) {
        const t = (i + 1) / 8;
        const [nx, ny] = bezPt(t, sxP, byP, cx1, cy1, cx2, cy2, exP, eyP);
        X.fillStyle = 'rgba(247,246,243,0.1)';
        X.beginPath();
        X.arc(nx, ny, 2.5, 0, 6.28);
        X.fill();
      }

      // Moving particles
      pts.forEach((p) => {
        p.t += p.sp;
        if (p.t > 1) p.t -= 1;
        const [px, py] = bezPt(p.t, sxP, byP, cx1, cy1, cx2, cy2, exP, eyP);
        const g = X.createRadialGradient(px, py, 0, px, py, p.r * 5);
        g.addColorStop(0, `rgba(247,246,243,${p.op * 0.5})`);
        g.addColorStop(1, 'rgba(247,246,243,0)');
        X.fillStyle = g;
        X.beginPath();
        X.arc(px, py, p.r * 5, 0, 6.28);
        X.fill();
        X.fillStyle = `rgba(247,246,243,${p.op})`;
        X.beginPath();
        X.arc(px, py, p.r, 0, 6.28);
        X.fill();
      });

      // Lighthouse tower
      X.fillStyle = 'rgba(247,246,243,0.07)';
      X.beginPath();
      X.moveTo(bx - 14, by - pp);
      X.lineTo(bx - 9, by - pp - 75);
      X.lineTo(bx + 9, by - pp - 75);
      X.lineTo(bx + 14, by - pp);
      X.fill();
      for (let i = 0; i < 5; i++) {
        const sy3 = by - pp - 8 - i * 14;
        X.fillStyle = i % 2 === 0 ? 'rgba(200,57,43,0.12)' : 'rgba(247,246,243,0.03)';
        X.fillRect(bx - 13 + i * 0.3, sy3, 26 - i * 0.6, 7);
      }

      // Lamp
      X.fillStyle = 'rgba(247,246,243,0.1)';
      X.fillRect(bx - 11, by - pp - 85, 22, 10);
      const gi = 0.1 + Math.sin(time * 0.002) * 0.05;
      const gl = X.createRadialGradient(bx, by - pp - 87, 2, bx, by - pp - 87, 70);
      gl.addColorStop(0, `rgba(212,160,74,${gi * 2.2})`);
      gl.addColorStop(0.4, `rgba(212,160,74,${gi * 0.4})`);
      gl.addColorStop(1, 'rgba(212,160,74,0)');
      X.fillStyle = gl;
      X.beginPath();
      X.arc(bx, by - pp - 87, 70, 0, 6.28);
      X.fill();

      // Beam
      const ba = Math.PI + Math.sin(time * 0.0007) * 0.35;
      const bl = W * 0.5;
      X.save();
      X.globalAlpha = 0.035 + Math.sin(time * 0.002) * 0.015;
      X.beginPath();
      X.moveTo(bx, by - pp - 87);
      X.lineTo(bx + Math.cos(ba - 0.05) * bl, by - pp - 87 + Math.sin(ba - 0.05) * bl * 0.25);
      X.lineTo(bx + Math.cos(ba + 0.05) * bl, by - pp - 87 + Math.sin(ba + 0.05) * bl * 0.25);
      X.closePath();
      X.fillStyle = 'rgba(212,160,74,0.7)';
      X.fill();
      X.restore();

      // Cap
      X.fillStyle = 'rgba(247,246,243,0.09)';
      X.beginPath();
      X.moveTo(bx - 7, by - pp - 85);
      X.lineTo(bx, by - pp - 96);
      X.lineTo(bx + 7, by - pp - 85);
      X.fill();

      X.restore();
      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, [ref]);
}
