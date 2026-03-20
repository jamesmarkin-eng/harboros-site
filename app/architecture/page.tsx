'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './architecture.module.css';

export default function ArchitecturePage() {
  useScrollReveal();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-label">The Contract Primitive</div>
          <h1 className="page-headline">One record. Every view.</h1>
          <p className="page-sub">Every revenue record in HarborOS is a contract. Not a deal, not a renewal, not an invoice. One record with a lifecycle &mdash; and every module is a different lens on that lifecycle.</p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="content-section">
        <div className="container">
          <div className="page-label">The Problem</div>
          <h2 className="section-headline">Every other tool treats revenue as separate domains.</h2>
          <div className="section-body">
            <p>Salesforce owns the pipeline. HubSpot owns the relationships. NetSuite owns the ledger. But none of them own the output a PE-backed CFO actually needs: the ARR bridge, the renewal forecast, the reforecast audit trail, the board pack.</p>
            <p>Those get assembled manually. Under pressure. The night before they&rsquo;re needed. HarborOS exists because that is not a workflow &mdash; it is a failure of architecture.</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="content-section">
        <div className="container">
          <div className="page-label">The Lifecycle</div>
          <h2 className="section-headline">A closed-won deal is already a renewal.</h2>
          <div className="section-body">
            <p>No re-entry. No reconciliation. No handoff between modules. When a deal closes won in Pipeline, the contract record updates. The moment it exists, it appears in Renewals when its term end approaches. Compass reads it directly.</p>
          </div>

          <div className={styles.lifecycle}>
            <div className={`${styles.lifecycleNode} ${styles.lifecycleNodeBorderFix}`}>
              <div className={`${styles.lifecycleStatus} ${styles.sProspect}`}>Prospective</div>
              <div className={styles.lifecycleTitle}>Pipeline</div>
              <div className={styles.lifecycleDesc}>Deal enters the system. Weighted by probability. Feeds coverage.</div>
              <span className={styles.lifecycleArrow}>&rarr;</span>
            </div>
            <div className={`${styles.lifecycleNode} ${styles.lifecycleNodeBorderFix}`}>
              <div className={`${styles.lifecycleStatus} ${styles.sActive}`}>Active</div>
              <div className={styles.lifecycleTitle}>Renewals</div>
              <div className={styles.lifecycleDesc}>Contract is live. Term dates set. Approaching renewals surface automatically.</div>
              <span className={styles.lifecycleArrow}>&rarr;</span>
            </div>
            <div className={`${styles.lifecycleNode} ${styles.lifecycleNodeBorderFix}`}>
              <div className={`${styles.lifecycleStatus} ${styles.sRenewed}`}>Renewed</div>
              <div className={styles.lifecycleTitle}>Compass</div>
              <div className={styles.lifecycleDesc}>Every module feeds the consolidated reforecast. One query. One number.</div>
              <span className={styles.lifecycleArrow}>&rarr;</span>
            </div>
            <div className={styles.lifecycleNode}>
              <div className={`${styles.lifecycleStatus} ${styles.sChurned}`}>Churned</div>
              <div className={styles.lifecycleTitle}>Closed</div>
              <div className={styles.lifecycleDesc}>Non-renewal confirmed. Lifecycle ends. Variance explained in the diff.</div>
            </div>
          </div>

          <div className="belief">Revenue is one continuous lifecycle. A closed-won deal today is a renewal tomorrow. The system should know that without anyone re-entering data.</div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="content-section">
        <div className="container">
          <div className="page-label">What This Makes Possible</div>
          <h2 className="section-headline">Four outputs. One query.</h2>

          <div className={styles.capGrid}>
            <div className={styles.capCard}>
              <div className={styles.capTitle}>ARR Bridge</div>
              <div className={styles.capDesc}>Starting ARR, plus new business, plus expansion, minus contraction, minus churn, equals ending ARR. One query against the contracts table.</div>
            </div>
            <div className={styles.capCard}>
              <div className={styles.capTitle}>Renewal Forecast</div>
              <div className={styles.capDesc}>Every active contract with call outcome, confidence, and forecast ARR. Live, not assembled from a spreadsheet.</div>
            </div>
            <div className={styles.capCard}>
              <div className={styles.capTitle}>GRR / NRR Forward</div>
              <div className={styles.capDesc}>Gross and net retention computed forward from contract-level data, not reported backward from accounting.</div>
            </div>
            <div className={styles.capCard}>
              <div className={styles.capTitle}>Versioned Reforecast</div>
              <div className={styles.capDesc}>Weekly locked snapshots with structured variance explanation. Every dollar traceable to a specific contract decision.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="page-cta">
        <div className="container">
          <h2 className="page-cta-headline">See the architecture in action.</h2>
          <p className="page-cta-sub">Send us five contracts. Renewals table live by Friday.</p>
          <a href="mailto:hello@harboros.co" className="btn-primary">Request Access</a>
        </div>
      </section>
    </>
  );
}
