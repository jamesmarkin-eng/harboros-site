'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLighthouseScene } from '@/hooks/useLighthouseScene';
import styles from './lighthouse.module.css';

export default function LighthousePage() {
  useScrollReveal();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useLighthouseScene(canvasRef);

  return (
    <>
      <canvas ref={canvasRef} className={styles.scene} />

      <section className="page-hero">
        <div className="container">
          <div className="page-label">The Contextual Lighthouse</div>
          <h1 className="page-headline">Nobody knows your shoreline like <em>you do.</em></h1>
          <p className="page-sub">Your operating logic &mdash; written once, in plain language &mdash; applied to every contract import, automatically. Messy data in. Clean record out.</p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="content-section">
        <div className="container">
          <div className="page-label">The Reframe</div>
          <h2 className="section-headline">Before the Lighthouse, <em>you needed clean data first.</em></h2>
          <div className="section-body">
            <p>The CRM owns deals. The ERP owns invoices. Nobody owns the contract lifecycle. The Lighthouse changes that.</p>
          </div>
          <div className={styles.reframeGrid}>
            <div className={styles.reframeCard}>
              <div className={styles.reframeLabel}>Before</div>
              <div className={styles.reframeQuote}>&ldquo;Bring me clean data and I&rsquo;ll give you intelligence.&rdquo;</div>
              <div className={styles.reframeDetail}>Clean up your Salesforce first. Normalize your records. Then we&rsquo;ll talk.</div>
            </div>
            <div className={styles.reframeCard}>
              <div className={styles.reframeLabel}>With the Lighthouse</div>
              <div className={styles.reframeQuote}>&ldquo;Give us five contracts and we&rsquo;ll have your renewals table live by Friday.&rdquo;</div>
              <div className={styles.reframeDetail}>No clean data required. The Lighthouse handles the interpretation. You handle the exceptions.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="content-section">
        <div className="container">
          <div className="page-label">How It Works</div>
          <h2 className="section-headline">Your operating logic, <em>written down once.</em></h2>
          <div className="section-body">
            <p>Shoreline Details are 3&ndash;8 sentences in plain language. The CFO describes the rules that currently live in their head &mdash; ARR definitions, entity logic, grace periods, FX conventions &mdash; and Harbor applies them to every future extraction automatically.</p>
            <p>Not a configuration form. Not a mapping table. Plain-language operating logic, authored once by the person who actually understands the business. Versioned, immutable, traceable.</p>
          </div>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>01</div>
              <div className={styles.stepTitle}>Write</div>
              <div className={styles.stepBody}>Describe your house rules. What counts as ARR. How entities are assigned. How you interpret auto-renewals. The logic you carry in your head.</div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>02</div>
              <div className={styles.stepTitle}>Import</div>
              <div className={styles.stepBody}>Hand Harbor whatever you have &mdash; PDFs, CSVs, CRM exports. The Lighthouse reads everything through your rules. Exceptions are flagged for review.</div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>03</div>
              <div className={styles.stepTitle}>Stamp</div>
              <div className={styles.stepBody}>Review the exceptions. Approve the rest. One action &mdash; stamped records become live contracts in Renewals, Pipeline, and Compass.</div>
            </div>
          </div>

          <div className={styles.editorMock}>
            <div className={styles.editorBar}>
              <span className={styles.editorTitle}>Shoreline Details</span>
              <span className={styles.editorVersion}>v3 &middot; active</span>
            </div>
            <div className={styles.editorContent}>
              <div className={styles.rule}>
                <div className={styles.ruleCat}>ARR Definition</div>
                <div className={styles.ruleText}>&ldquo;We only count base subscription as ARR. Professional services are walk-in run rate and should be tagged as Service contracts.&rdquo;</div>
              </div>
              <div className={styles.rule}>
                <div className={styles.ruleCat}>Entity Logic</div>
                <div className={styles.ruleText}>&ldquo;Any contract with a VAT number starting in GB belongs to the EMEA entity, even if the contract header says Global Corp.&rdquo;</div>
              </div>
              <div className={styles.rule}>
                <div className={styles.ruleCat}>Grace Periods</div>
                <div className={styles.ruleText}>&ldquo;We use 30-day grace periods. If a contract expired within 30 days, keep it Active &mdash; not Churned.&rdquo;</div>
              </div>
              <div className={styles.rule}>
                <div className={styles.ruleCat}>FX Convention</div>
                <div className={styles.ruleText}>&ldquo;All UK contracts are GBP but reported at a frozen 1.25 rate for the board pack. No live FX rates.&rdquo;</div>
              </div>
              <div className={styles.rule}>
                <div className={styles.ruleCat}>Pricing Strategy</div>
                <div className={styles.ruleText}>&ldquo;We are aggressive on CPI uplifts this year. Tag any price-increase clause as CPI-driven.&rdquo;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="content-section">
        <div className="container">
          <div className="page-label">The Learning Loop</div>
          <h2 className="section-headline">Every correction makes the Lighthouse smarter.</h2>
          <div className="section-body">
            <p>When you correct an exception, the system logs it. After enough corrections of the same type, Harbor suggests a Lighthouse refinement. You approve it. A new version is created. The next import applies it automatically.</p>
            <p>The first import requires the most corrections. By the fifth, the Lighthouse handles 98% of records automatically. Your judgment is applied where it matters &mdash; not spread thinly across hundreds of conforming records.</p>
          </div>
          <div className="belief">The Lighthouse turns HarborOS from &ldquo;the intelligence layer that sits above systems of record&rdquo; into &ldquo;the place where the contract record of truth gets created for the first time.&rdquo; That is the feature that makes the product inevitable.</div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="page-cta">
        <div className="container">
          <h2 className="page-cta-headline">See it run on <em>your data.</em></h2>
          <p className="page-cta-sub">Send us five contracts. We&rsquo;ll build the Lighthouse, run the extraction, and hand you a live renewals table.</p>
          <a href="mailto:hello@harboros.co" className="btn-primary">Request a Demo</a>
        </div>
      </section>
    </>
  );
}
