'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useStars } from '@/hooks/useStars';
import styles from './home.module.css';

export default function HomePage() {
  useScrollReveal();
  const starsRef = useRef<HTMLDivElement | null>(null);
  useStars(starsRef);

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div ref={starsRef} className={styles.starsCanvas} />
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} reveal`}>
            Your contracts are a mess.{'\n'}
            We&apos;ll fix that by Friday.
          </h1>
          <p className={`${styles.heroSub} reveal d1`}>
            Give us five contracts — PDFs, CSVs, whatever you have.
            We&apos;ll build the extraction engine, run it, and hand you
            a live renewals table. One session.
          </p>
          <div className={`${styles.heroActions} reveal d2`}>
            <a href="/lighthouse" className={styles.btnPrimary}>
              See How It Works →
            </a>
          </div>
        </div>
        <div className={styles.scrollHint}>
          <span className={styles.scrollLabel}>Scroll</span>
          <div className={styles.scrollArrow}>↓</div>
        </div>
      </section>

      {/* ── THE THREE FACTS ── */}
      <section className={`${styles.factsSection} reveal`}>
        <div className={styles.factsGrid}>
          <div className={`${styles.fact} reveal`}>
            <div className={styles.factNumber}>$0</div>
            <div className={styles.factLabel}>clean data required</div>
            <p className={styles.factSub}>
              Bring whatever you have. We handle the interpretation.
            </p>
          </div>
          <div className={styles.factDivider} />
          <div className={`${styles.fact} reveal d1`}>
            <div className={styles.factNumber}>5</div>
            <div className={styles.factLabel}>contracts to get started</div>
            <p className={styles.factSub}>
              That&apos;s all we need to build your extraction engine and go live.
            </p>
          </div>
          <div className={styles.factDivider} />
          <div className={`${styles.fact} reveal d2`}>
            <div className={styles.factNumber}>1</div>
            <div className={styles.factLabel}>session to a live renewals table</div>
            <p className={styles.factSub}>
              Not a pilot. Not a proof of concept. A working system.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE CLOSE ── */}
      <section className={styles.closeSection}>
        <div className={`${styles.closeLabel} reveal`}>
          Built for PE-backed software companies
        </div>
        <h2 className={`${styles.closeTitle} reveal d1`}>
          The CFO intelligence layer.{'\n'}
          Not a dashboard. Not a tool.{'\n'}
          An operating system.
        </h2>
        <p className={`${styles.closeBody} reveal d2`}>
          Renewals. Pipeline. Compass. All running on one contract primitive.
          Every dollar of ARR traceable. Every forecast defensible.
        </p>
        <div className={`${styles.closeActions} reveal d3`}>
          <a href="/lighthouse" className={styles.btnPrimary}>
            Explore the Lighthouse →
          </a>
          <a href="mailto:hello@harboros.co" className={styles.btnGhost}>
            Request a Demo
          </a>
        </div>
      </section>
    </>
  );
}
