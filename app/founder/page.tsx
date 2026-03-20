'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './founder.module.css';

export default function FounderPage() {
  useScrollReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={`${styles.eyebrow} reveal`}>The Founder</div>
          <h1 className={`${styles.heroTitle} reveal d1`}>
            Built by the person who<br />
            <em className={styles.heroTitleEm}>needed it most.</em>
          </h1>
          <p className={`${styles.heroSub} reveal d2`}>
            HarborOS was not designed from a customer interview. It was built by a VP
            Finance at a PE-backed software company who needed this system and
            couldn&apos;t find it.
          </p>
        </div>
      </section>

      {/* ── ORIGIN ── */}
      <section className={styles.origin}>
        <div className={styles.originInner}>
          <div className={`${styles.secLabel} reveal`}>The Origin</div>
          <h2 className={`${styles.sectionTitle} reveal d1`}>
            From the board room,<br />
            <em className={styles.sectionTitleEm}>not the whiteboard.</em>
          </h2>
          <p className={`${styles.body} reveal d2`}>
            Every PE-backed CFO knows the drill. The board pack is due Friday. The CRM
            says one thing. The spreadsheet says another. The renewal forecast lives in
            someone&apos;s head. And you spend the week before every board meeting
            reconciling systems that were never designed to talk to each other.
          </p>
          <p className={`${styles.body} reveal d3`}>
            <strong>HarborOS was born from that exact frustration.</strong> The contract
            primitive, the reforecast audit trail, the walk-in run rate concept for
            services — these are solutions to problems encountered firsthand, in a live
            PE board environment. Not abstractions. Not guesses. Real answers to real
            gaps.
          </p>
          <p className={`${styles.body} reveal d4`}>
            The Contextual Lighthouse — the feature that lets a CFO write their operating
            logic in plain language and have it applied to every contract import — exists
            because no tool ever asked the finance operator what they actually knew. They
            all asked for clean data instead.
          </p>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className={styles.principles}>
        <div className={styles.principlesInner}>
          <div className={`${styles.secLabel} reveal`}>Design Principles</div>
          <h2 className={`${styles.sectionTitle} reveal d1`}>
            What we believe.
          </h2>
          <div className={styles.principleGrid}>
            <div className={`${styles.principleCard} reveal`}>
              <div className={styles.principleNum}>01</div>
              <div className={styles.principleTitle}>The contract is the primitive</div>
              <div className={styles.principleDesc}>
                Every revenue record is a contract. Not a deal, not a renewal, not an
                invoice. One record, every view.
              </div>
            </div>
            <div className={`${styles.principleCard} reveal d1`}>
              <div className={styles.principleNum}>02</div>
              <div className={styles.principleTitle}>No clean data required</div>
              <div className={styles.principleDesc}>
                Bring whatever you have. PDFs, CSVs, CRM exports. The Lighthouse handles
                interpretation. You handle exceptions.
              </div>
            </div>
            <div className={`${styles.principleCard} reveal d2`}>
              <div className={styles.principleNum}>03</div>
              <div className={styles.principleTitle}>Finance operators know more than they think</div>
              <div className={styles.principleDesc}>
                The rules in the CFO&apos;s head — ARR definitions, entity logic, grace
                periods — are the most valuable data in the company.
              </div>
            </div>
            <div className={`${styles.principleCard} reveal d3`}>
              <div className={styles.principleNum}>04</div>
              <div className={styles.principleTitle}>Every dollar traceable</div>
              <div className={styles.principleDesc}>
                Versioned, immutable, auditable. Every forecast decision has a trail. Every
                ARR movement has a source contract.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <div className={styles.pq}>
        <div className={styles.pqInner}>
          <div className={`${styles.pqRule} reveal`} />
          <p className={`${styles.pqText} reveal d1`}>
            &ldquo;I built HarborOS because I was tired of rebuilding the same board pack
            every quarter from systems that didn&apos;t talk to each other.{' '}
            <em className={styles.pqTextEm}>
              The contract record of truth should exist somewhere.
            </em>
            &rdquo;
          </p>
          <div className={`${styles.pqAttr} reveal d2`}>Founder &middot; HarborOS</div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={`${styles.ctaDivider} reveal`} />
        <h2 className={`${styles.ctaTitle} reveal d1`}>
          Let&apos;s talk about <em className={styles.ctaTitleEm}>your contracts.</em>
        </h2>
        <p className={`${styles.ctaSub} reveal d2`}>
          Bring five contracts. We&apos;ll build the Lighthouse, run the extraction, and
          show you a live renewals table — in one session.
        </p>
        <a
          href="mailto:hello@harboros.co?subject=Let's Talk — HarborOS"
          className={`${styles.ctaBtn} reveal d3`}
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}
