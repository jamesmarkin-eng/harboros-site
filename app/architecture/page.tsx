'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './architecture.module.css';

export default function ArchitecturePage() {
  useScrollReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={`${styles.heroTitle} reveal`}>The Contract Primitive</h1>
          <p className={`${styles.heroSub} reveal d1`}>
            HarborOS is built on one belief: revenue is a lifecycle, not a series of
            disconnected reports. This page explains the data model and design
            decisions that make that possible.
          </p>
        </div>
      </section>

      {/* ── SECTION 1: The Problem ── */}
      <div className={styles.sectionWhite}>
        <section className={styles.section}>
          <div className={`${styles.sectionEyebrow} reveal`}>The Problem</div>
          <h2 className={`${styles.sectionTitle} reveal`}>
            The Problem With Every Other Tool
          </h2>
          <p className={`${styles.sectionBody} reveal`}>
            Most finance tools treat pipeline, renewals, and forecasting as separate
            data domains. Salesforce owns the pipeline. HubSpot owns the
            relationships. NetSuite owns the ledger. But none of them own the output a
            PE-backed CFO actually needs: the ARR bridge, the renewal forecast, the
            reforecast audit trail, the board pack. Those get assembled manually, under
            pressure, the night before they&apos;re needed. HarborOS exists to end that.
          </p>
        </section>
      </div>

      <hr className={styles.divider} />

      {/* ── SECTION 2: One Record ── */}
      <div className={styles.sectionOffWhite}>
        <section className={styles.section}>
          <div className={`${styles.sectionEyebrow} reveal`}>The Primitive</div>
          <h2 className={`${styles.sectionTitle} reveal`}>
            One Record. Every View.
          </h2>
          <p className={`${styles.sectionBody} reveal`}>
            The foundational decision in HarborOS is that every revenue record is a
            contract. Not a &ldquo;renewal.&rdquo; Not a &ldquo;deal.&rdquo; A contract. A contract has a
            lifecycle: it gets created, renewed, expanded, contracted, and eventually
            churned. Every module in HarborOS is a different lens on the same
            lifecycle.
          </p>

          <div className={`${styles.lifecycle} reveal`}>
            <div className={styles.lifecycleStage}>
              <div className={styles.lifecycleStageLabel}>Prospective</div>
              <div className={styles.lifecycleStageDesc}>
                Deal exists in pipeline. Not yet revenue.
              </div>
            </div>
            <div className={styles.lifecycleArrow}>
              <span>&rarr;</span>
            </div>
            <div className={styles.lifecycleStage}>
              <div className={styles.lifecycleStageLabel}>Active</div>
              <div className={styles.lifecycleStageDesc}>
                Contract closed. ARR is real.
              </div>
            </div>
            <div className={styles.lifecycleArrow}>
              <span>&rarr;</span>
            </div>
            <div className={styles.lifecycleStage}>
              <div className={styles.lifecycleStageLabel}>Renewed</div>
              <div className={styles.lifecycleStageDesc}>
                New term confirmed. Cycle repeats.
              </div>
            </div>
            <div className={styles.lifecycleArrow}>
              <span>&rarr;</span>
            </div>
            <div className={styles.lifecycleStage}>
              <div className={styles.lifecycleStageLabel}>Churned</div>
              <div className={styles.lifecycleStageDesc}>
                Non-renewal confirmed. Lifecycle ends.
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr className={styles.divider} />

      {/* ── SECTION 3: No Re-Entry ── */}
      <section className={styles.sectionNavy}>
        <div className={styles.sectionNavyInner}>
          <div className={`${styles.sectionEyebrow} reveal`}>The Architecture</div>
          <h2 className={`${styles.sectionTitleLight} reveal`}>
            No Re-Entry. No Reconciliation.
          </h2>
          <p className={`${styles.sectionBodyLight} reveal`}>
            When a deal closes won in Pipeline, a contract record is created. The
            moment that record exists, it automatically appears in Renewals when its
            term end approaches. No export. No import. No re-entry. Compass — the
            consolidated reforecast — doesn&apos;t need a data export from Renewals. It
            reads the contracts table directly. The forecast is a lens, not a separate
            system.
          </p>
        </div>
      </section>

      {/* ── SECTION 4: What This Makes Possible ── */}
      <div className={styles.sectionWhite}>
        <section className={styles.section}>
          <div className={`${styles.sectionEyebrow} reveal`}>Capabilities</div>
          <h2 className={`${styles.sectionTitle} reveal`}>
            What This Makes Possible
          </h2>
          <div className={styles.capabilityGrid}>
            <div className={`${styles.capabilityCard} reveal`}>
              <h3>ARR Bridge</h3>
              <p>
                Starting ARR, plus new business, plus expansion, minus contraction,
                minus churn. One query.
              </p>
            </div>
            <div className={`${styles.capabilityCard} reveal`}>
              <h3>Renewal Forecast</h3>
              <p>
                Every active contract with call outcome, confidence, and forecast ARR.
                Live.
              </p>
            </div>
            <div className={`${styles.capabilityCard} reveal`}>
              <h3>GRR / NRR</h3>
              <p>
                Gross and net retention computed forward, not reported backward.
              </p>
            </div>
            <div className={`${styles.capabilityCard} reveal`}>
              <h3>Versioned Reforecast</h3>
              <p>
                Weekly snapshots with structured variance explanation. Every dollar
                traceable.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ── SECTION 5: Built by a Finance Operator ── */}
      <section className={styles.founderSection}>
        <div className={styles.founderInner}>
          <div className={`${styles.founderRule} reveal`} />
          <h2 className={`${styles.founderTitle} reveal`}>
            Built by a Finance Operator
          </h2>
          <p className={`${styles.founderBody} reveal`}>
            HarborOS was not designed from a customer interview. It was built by a VP
            Finance at a PE-backed software company who needed this system and
            couldn&apos;t find it. The contract primitive, the reforecast audit trail, the
            walk-in run rate concept for services — these are solutions to problems
            encountered firsthand, in a live PE board environment.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={`${styles.ctaDivider} reveal`} />
        <h2 className={`${styles.ctaTitle} reveal`}>See HarborOS in Action</h2>
        <p className={`${styles.ctaSub} reveal`}>
          The CFO intelligence layer for PE-backed software companies.
        </p>
        <a
          href="mailto:hello@harboros.co"
          className={`${styles.btnPrimary} reveal`}
        >
          Request Access &rarr;
        </a>
      </section>
    </>
  );
}
