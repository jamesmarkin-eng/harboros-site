'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './founder.module.css';

export default function FounderPage() {
  useScrollReveal();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-label">The Founder</div>
          <h1 className="page-headline">Built by the person who <em>needed it most.</em></h1>
          <p className="page-sub">HarborOS was not designed from a customer interview. It was built by a VP Finance at a PE-backed software company who needed this system and couldn&rsquo;t find it.</p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="content-section">
        <div className="container">
          <div className="page-label">The Origin</div>
          <h2 className="section-headline">From the board room, <em>not the whiteboard.</em></h2>
          <div className={styles.sectionBodyWide}>
            <p>Every PE-backed CFO knows the drill. The board pack is due Friday. The CRM says one thing. The spreadsheet says another. The renewal forecast lives in someone&rsquo;s head. And you spend the week before every board meeting reconciling systems that were never designed to talk to each other.</p>
            <p>HarborOS was born from that exact frustration. The contract primitive, the reforecast audit trail, the walk-in run rate concept for services &mdash; these are solutions to problems encountered firsthand, in a live PE board environment. Not abstractions. Not guesses. Real answers to real gaps.</p>
            <p>The Contextual Lighthouse &mdash; the feature that lets a CFO write their operating logic in plain language and have it applied to every contract import &mdash; exists because no tool ever asked the finance operator what they actually knew. They all asked for clean data instead.</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="content-section">
        <div className="container">
          <div className="page-label">Design Principles</div>
          <h2 className="section-headline">What we believe.</h2>

          <div className={styles.principles}>
            <div className={styles.principle}>
              <div className={styles.principleNum}>01</div>
              <div className={styles.principleTitle}>The contract is the primitive</div>
              <div className={styles.principleDesc}>Every revenue record is a contract. Not a deal, not a renewal, not an invoice. One record, every view.</div>
            </div>
            <div className={styles.principle}>
              <div className={styles.principleNum}>02</div>
              <div className={styles.principleTitle}>No clean data required</div>
              <div className={styles.principleDesc}>Bring whatever you have. PDFs, CSVs, CRM exports. The Lighthouse handles interpretation. You handle exceptions.</div>
            </div>
            <div className={styles.principle}>
              <div className={styles.principleNum}>03</div>
              <div className={styles.principleTitle}>Finance operators know more than they think</div>
              <div className={styles.principleDesc}>The rules in the CFO&rsquo;s head &mdash; ARR definitions, entity logic, grace periods &mdash; are the most valuable data in the company.</div>
            </div>
            <div className={styles.principle}>
              <div className={styles.principleNum}>04</div>
              <div className={styles.principleTitle}>Every dollar traceable</div>
              <div className={styles.principleDesc}>Versioned, immutable, auditable. Every forecast decision has a trail. Every ARR movement has a source contract.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="content-section">
        <div className="container">
          <div className={styles.founderQuote}>
            <div className={styles.founderQuoteText}>&ldquo;I built HarborOS because I was tired of rebuilding the same board pack every quarter from systems that didn&rsquo;t talk to each other. The contract record of truth should exist somewhere.&rdquo;</div>
            <div>
              <div className={styles.founderQuoteName}>Jim Arkin</div>
              <div className={styles.founderQuoteRole}>Founder, HarborOS</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="content-section">
        <div className="container">
          <div className="page-label">Not a Prototype</div>
          <h2 className="section-headline">Live. Production. Real data.</h2>
          <div className={styles.sectionBodyWide}>
            <p>HarborOS runs on live production data at a PE-backed software company. Real contracts. Real board prep. Real weekly operating rhythm.</p>
            <p>Multiple tenants are live. The system handles multi-entity, multi-currency operations across US and EMEA. The architecture was designed for PE portfolio deployment from day one.</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="page-cta">
        <div className="container">
          <h2 className="page-cta-headline">Let&rsquo;s talk about <em>your contracts.</em></h2>
          <p className="page-cta-sub">Send us five contracts. We&rsquo;ll build the Lighthouse and hand you a live renewals table.</p>
          <a href="mailto:hello@harboros.co" className="btn-primary">Get in Touch</a>
        </div>
      </section>
    </>
  );
}
