'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './home.module.css';

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroLabel}>The CFO Intelligence Layer for PE-Backed Software Companies</div>
          <h1 className={styles.heroHeadline}>Give us your contracts.<br />We&rsquo;ll build your renewals model.</h1>
          <div className={styles.heroThree}>
            <p className={styles.heroLine}>You give Harbor your contracts.</p>
            <p className={styles.heroLine}>Harbor builds your renewals model.</p>
            <p className={styles.heroLine}><strong>You get a weekly, defensible forecast.</strong></p>
          </div>
          <div className={styles.heroCtaRow}>
            <a href="mailto:hello@harboros.co" className="btn-primary">Build your Lighthouse</a>
            <a href="#lighthouse" className={styles.btnGhost}>See how it works</a>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <div className={styles.heroScrollLine} />
          <span className={styles.heroScrollText}>Scroll</span>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <div className="section-divider" />
      <section className={styles.problem} id="problem">
        <div className="container">
          <div className={styles.problemGrid}>
            <div className="reveal">
              <div className="page-label">The Problem</div>
              <h2 className={styles.problemHeadline}>Nobody owns the contract lifecycle.</h2>
              <div className={styles.problemBody}>
                <p>The CRM owns deals. The ERP owns invoices. The CSM platform owns health scores. But the contract lifecycle &mdash; the single dataset a PE board uses to underwrite recurring revenue quality &mdash; lives in a spreadsheet that gets rebuilt from scratch every quarter.</p>
                <p>The renewal pipeline is in someone&rsquo;s head. The reforecast is a guess dressed up in Excel. The board pack gets assembled manually, under pressure, the night before it&rsquo;s needed.</p>
              </div>
            </div>
            <div className="reveal d1">
              <div className={styles.problemOwners}>
                <div className={styles.ownerRow}>
                  <span className={styles.ownerSystem}>Salesforce</span>
                  <span className={styles.ownerArrow}>&rarr;</span>
                  <span className={styles.ownerOwns}>owns the deals</span>
                </div>
                <div className={styles.ownerRow}>
                  <span className={styles.ownerSystem}>NetSuite</span>
                  <span className={styles.ownerArrow}>&rarr;</span>
                  <span className={styles.ownerOwns}>owns the invoices</span>
                </div>
                <div className={styles.ownerRow}>
                  <span className={styles.ownerSystem}>HubSpot</span>
                  <span className={styles.ownerArrow}>&rarr;</span>
                  <span className={styles.ownerOwns}>owns the relationships</span>
                </div>
                <div className={styles.ownerRow}>
                  <span className={styles.ownerSystem}>PlanHat</span>
                  <span className={styles.ownerArrow}>&rarr;</span>
                  <span className={styles.ownerOwns}>owns the health scores</span>
                </div>
                <div className={`${styles.ownerRow} ${styles.ownerRowEmpty}`}>
                  <span className={styles.ownerSystem}>???</span>
                  <span className={styles.ownerArrow}>&rarr;</span>
                  <span className={styles.ownerOwns}>the contract lifecycle</span>
                </div>
                <div className={`${styles.ownerRow} ${styles.ownerRowHarbor}`}>
                  <span className={styles.ownerSystem}>HarborOS</span>
                  <span className={styles.ownerArrow}>&rarr;</span>
                  <span className={styles.ownerOwns}>the contract lifecycle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIGHTHOUSE ── */}
      <div className="section-divider" />
      <section className={styles.lighthouseSection} id="lighthouse">
        <div className="container">
          <div className={`${styles.lighthouseCenter} reveal`}>
            <div className={`page-label ${styles.lighthouseLabelCenter}`}>The Contextual Lighthouse</div>
            <h2 className={styles.lighthouseHeadline}>Write your rules once.<br />Harbor applies them forever.</h2>
            <p className={styles.lighthouseSub}>You describe how your contracts work in plain language &mdash; five sentences. Harbor reads every document, every CSV, every CRM export through your rules. The renewals table builds itself.</p>
          </div>

          <div className={`${styles.lighthouseSteps} reveal d1`}>
            <div className={styles.lhStep}>
              <div className={styles.lhStepNum}>01</div>
              <div className={styles.lhStepTitle}>Write</div>
              <div className={styles.lhStepBody}>Describe your house rules. What counts as ARR. How entities are assigned. How you interpret auto-renewals. The logic you carry in your head.</div>
            </div>
            <div className={styles.lhStep}>
              <div className={styles.lhStepNum}>02</div>
              <div className={styles.lhStepTitle}>Import</div>
              <div className={styles.lhStepBody}>Hand Harbor whatever you have &mdash; PDFs, CSVs, CRM exports. The Lighthouse reads everything through your rules. Exceptions are flagged for your review.</div>
            </div>
            <div className={styles.lhStep}>
              <div className={styles.lhStepNum}>03</div>
              <div className={styles.lhStepTitle}>Stamp</div>
              <div className={styles.lhStepBody}>Review the exceptions. Approve the rest. One action &mdash; stamped records become live contracts. They appear in Renewals, Pipeline, and Compass instantly.</div>
            </div>
          </div>

          <div className="reveal d2">
            <div className={styles.lhEditorMock}>
              <div className={styles.lhEditorBar}>
                <span className={styles.lhEditorTitle}>Shoreline Details</span>
                <span className={styles.lhEditorVersion}>v3 &middot; active</span>
              </div>
              <div className={styles.lhEditorContent}>
                <div className={styles.lhRule}>
                  <div className={styles.lhRuleCat}>ARR Definition</div>
                  <div className={styles.lhRuleText}>Base subscription and maintenance count as ARR. Professional services are walk-in run rate &mdash; tag as Service contracts, do not include in the renewals base.</div>
                </div>
                <div className={styles.lhRule}>
                  <div className={styles.lhRuleCat}>Entity Logic</div>
                  <div className={styles.lhRuleText}>Contracts billed in GBP belong to the EMEA entity. US contracts use USD or are identified by absence of a VAT number.</div>
                </div>
                <div className={styles.lhRule}>
                  <div className={styles.lhRuleCat}>Grace Periods</div>
                  <div className={styles.lhRuleText}>30-day grace periods on renewals. Contracts expired within 30 days remain Active status. Beyond 30 days, flag for review.</div>
                </div>
                <div className={styles.lhRule}>
                  <div className={styles.lhRuleCat}>FX Convention</div>
                  <div className={styles.lhRuleText}>All UK contracts reported at a frozen 1.25 GBP/USD rate for the board pack. No live FX.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ── */}
      <div className="section-divider" />
      <section className={styles.archSection} id="architecture">
        <div className="container">
          <div className="reveal">
            <div className="page-label">One Contract</div>
            <h2 className={styles.archHeadline}>A closed-won deal is already a renewal. No re-entry. No reconciliation.</h2>
          </div>

          <div className={`${styles.archFlow} reveal d1`}>
            <div className={`${styles.archNode} ${styles.archNodeBorderFix}`}>
              <div className={`${styles.archNodeStatus} ${styles.statusProspective}`}>Prospective</div>
              <div className={styles.archNodeTitle}>Pipeline</div>
              <div className={styles.archNodeDesc}>Deal enters the system. Weighted by probability. Feeds coverage.</div>
              <span className={styles.archNodeArrow}>&rarr;</span>
            </div>
            <div className={`${styles.archNode} ${styles.archNodeBorderFix}`}>
              <div className={`${styles.archNodeStatus} ${styles.statusActive}`}>Active</div>
              <div className={styles.archNodeTitle}>Renewals</div>
              <div className={styles.archNodeDesc}>Contract is live. Term dates set. Approaching renewals surface automatically.</div>
              <span className={styles.archNodeArrow}>&rarr;</span>
            </div>
            <div className={styles.archNode}>
              <div className={`${styles.archNodeStatus} ${styles.statusRenewed}`}>Renewed</div>
              <div className={styles.archNodeTitle}>Compass</div>
              <div className={styles.archNodeDesc}>Every module feeds the consolidated reforecast. One query. One number.</div>
            </div>
          </div>

          <div className={`${styles.archBelief} reveal d2`}>
            Revenue is one continuous lifecycle. Every module is a view of the same contract. The data model is the product.
          </div>
        </div>
      </section>

      {/* ── OUTPUT ── */}
      <div className="section-divider" />
      <section className={styles.output} id="output">
        <div className="container">
          <div className={styles.outputGrid}>
            <div className="reveal">
              <div className="page-label">The Output</div>
              <h2 className={styles.outputHeadline}>A versioned reforecast. Every week. Every variance explained.</h2>
              <p className={styles.outputBody}>The CFO locks a snapshot. The system compares it to last week. Every dollar of movement is traced to a specific contract decision. The audit trail PE firms have never had.</p>
              <p className={styles.outputBody}>Every number is paired with an assumption. Not just what Harbor extracted &mdash; <strong>why</strong> it made that call.</p>
              <div className={styles.outputFeatures}>
                <div className={styles.outputFeature}>
                  <div className={styles.outputFeatureIcon}>&#9670;</div>
                  <div className={styles.outputFeatureText}>
                    <h4>Lock Snapshot</h4>
                    <p>A deliberate act. The CFO reviews, commits, reports. Immutable once locked. The number is a fact.</p>
                  </div>
                </div>
                <div className={styles.outputFeature}>
                  <div className={styles.outputFeatureIcon}>&#9671;</div>
                  <div className={styles.outputFeatureText}>
                    <h4>Compare</h4>
                    <p>Any two snapshots, side by side. Headline deltas, contract-level changes, rollforward movement. The diff writes itself.</p>
                  </div>
                </div>
                <div className={styles.outputFeature}>
                  <div className={styles.outputFeatureIcon}>&#9674;</div>
                  <div className={styles.outputFeatureText}>
                    <h4>Narrative</h4>
                    <p>AI-generated variance summary from the diff. The CFO reads it, confirms it matches judgment, and sends. The board pack paragraph writes itself.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal d1">
              <div className={styles.snapshotMock}>
                <div className={styles.snapshotBar}>
                  <span className={`${styles.snapPill} ${styles.snapPillActive}`}>Current</span>
                  <span className={styles.snapPill}>Mar 14 &mdash; Week 1</span>
                  <span className={styles.snapPill}>Mar 7 &mdash; Pre-Board</span>
                </div>
                <div className={styles.snapshotContent}>
                  <div className={styles.snapMetrics}>
                    <div>
                      <div className={styles.snapMetricLabel}>Total ARR</div>
                      <div className={styles.snapMetricValue}>$14.7M</div>
                      <div className={styles.snapMetricDelta}>+$166K &uarr;</div>
                    </div>
                    <div>
                      <div className={styles.snapMetricLabel}>GRR</div>
                      <div className={styles.snapMetricValue}>99.0%</div>
                      <div className={styles.snapMetricDelta}>+0 bps</div>
                    </div>
                    <div>
                      <div className={styles.snapMetricLabel}>NRR</div>
                      <div className={styles.snapMetricValue}>100.5%</div>
                      <div className={styles.snapMetricDelta}>+20 bps &uarr;</div>
                    </div>
                  </div>
                  <div className={styles.snapDivider} />
                  <div className={styles.snapRow}>
                    <span className={styles.snapRowName}>Expice B.V.</span>
                    <span className={`${styles.snapRowBadge} ${styles.badgeNew}`}>New</span>
                    <span className={styles.snapRowVal}>+$166K</span>
                  </div>
                  <div className={styles.snapRow}>
                    <span className={styles.snapRowName}>DataForge Ltd</span>
                    <span className={`${styles.snapRowBadge} ${styles.badgeUp}`}>Uplift</span>
                    <span className={styles.snapRowVal}>+$28K</span>
                  </div>
                  <div className={styles.snapRow}>
                    <span className={styles.snapRowName}>CloudSync Corp</span>
                    <span className={`${styles.snapRowBadge} ${styles.badgeUp}`}>Uplift</span>
                    <span className={styles.snapRowVal}>+$17K</span>
                  </div>
                  <div className={styles.snapRow}>
                    <span className={styles.snapRowName}>Northern Rail PLC</span>
                    <span className={`${styles.snapRowBadge} ${styles.badgeFlat}`}>Flat</span>
                    <span className={styles.snapRowVal}>&mdash;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <div className="section-divider" />
      <section className={styles.founderSection}>
        <div className="container">
          <div className={`${styles.founderInner} reveal`}>
            <div className="page-label">Built by a Finance Operator</div>
            <h2 className={styles.founderHeadline}>This is not a prototype.</h2>
            <div className={styles.founderBody}>
              <p>HarborOS runs on live production data at a PE-backed software company. Real contracts. Real board prep. Real weekly operating rhythm.</p>
              <p>It was built by the VP of Finance who needed it &mdash; not a product team that studied the problem from the outside. Every feature exists because it solved a specific, recurring pain in the weekly reforecast workflow.</p>
              <p>Multiple tenants are live. The system handles multi-entity, multi-currency operations across US and EMEA. The architecture was designed for PE portfolio deployment from day one.</p>
            </div>
            <div className={styles.founderSig}>
              <div className={styles.founderName}>Jim Arkin</div>
              <div className={styles.founderTitle}>Founder, HarborOS</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="section-divider" />
      <section className={styles.ctaSection}>
        <div className="container reveal">
          <h2 className={styles.ctaHeadline}>Build your Lighthouse.</h2>
          <p className={styles.ctaSub}>Send us five contracts. Renewals table live by Friday.</p>
          <a href="mailto:hello@harboros.co" className={`btn-primary ${styles.ctaBtnLarge}`}>Request Access</a>
        </div>
      </section>
    </>
  );
}
