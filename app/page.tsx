'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './home.module.css';

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={`${styles.heroEyebrow} reveal`}>Finance Operating System</div>
          <h1 className={`${styles.heroTitle} reveal d1`}>
            The CFO intelligence layer for <em>PE-backed</em> software companies
          </h1>
          <p className={`${styles.heroSub} reveal d2`}>
            One contract. Every revenue module. A real number and a defensible
            forecast — with every dollar of variance traceable to a specific decision.
          </p>
          <div className={`${styles.heroActions} reveal d3`}>
            <a href="mailto:hello@harboros.co" className={styles.btnPrimary}>
              Request Access
            </a>
            <a href="#gap" className={styles.btnGhost}>
              See How It Works
            </a>
          </div>
        </div>
        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── PRODUCT MOCK ── */}
      <section className={styles.productSection}>
        <div className={`${styles.productFrame} reveal`}>
          <div className={styles.browserBar}>
            <div className={styles.browserDot} />
            <div className={styles.browserDot} />
            <div className={styles.browserDot} />
            <div className={styles.browserUrl}>
              <span className={styles.lock}>🔒</span> app.harboros.co
            </div>
          </div>
          <div className={styles.productMock}>
            <div className={styles.mockTopbar}>
              <div className={styles.mockBrand}>
                <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="10" stroke="var(--gold)" strokeWidth="1.5" />
                  <circle cx="14" cy="14" r="3.5" fill="var(--gold)" />
                  <line x1="14" y1="4" x2="14" y2="10.5" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="14" y1="17.5" x2="14" y2="24" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="4" y1="14" x2="10.5" y2="14" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="17.5" y1="14" x2="24" y2="14" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                HarborOS
              </div>
              <div className={styles.mockCtx}>
                <span>As of</span>
                <span className={styles.mockCtxPill}>Mar 10</span>
                <span style={{ color: 'rgba(20,28,46,0.15)' }}>·</span>
                <span>Portco · Consolidated</span>
              </div>
            </div>
            <div className={styles.mockSidebar}>
              <div className={styles.mockNavLabel}>Overview</div>
              <div className={styles.mockNavItem}>
                <span className={styles.mockNavDot} style={{ background: 'var(--mid-gray)' }} />
                Dashboard
              </div>
              <div className={styles.mockNavLabel} style={{ marginTop: 6 }}>Revenue</div>
              <div className={styles.mockNavItem}>
                <span className={styles.mockNavDot} style={{ background: 'var(--mid-gray)' }} />
                Renewals
              </div>
              <div className={styles.mockNavItem}>
                <span className={styles.mockNavDot} style={{ background: 'var(--mid-gray)' }} />
                Pipeline
              </div>
              <div className={styles.mockNavItemActive}>
                <span className={styles.mockNavDot} style={{ background: 'var(--gold)' }} />
                Compass
              </div>
              <div className={styles.mockNavLabel} style={{ marginTop: 6 }}>System</div>
              <div className={styles.mockNavItem}>
                <span className={styles.mockNavDot} style={{ background: 'var(--mid-gray)' }} />
                Import
              </div>
              <div className={styles.mockNavItem}>
                <span className={styles.mockNavDot} style={{ background: 'var(--mid-gray)' }} />
                Settings
              </div>
            </div>
            <div className={styles.mockMain}>
              <div>
                <div className={styles.mockPageEyebrow}>Revenue Intelligence</div>
                <div className={styles.mockPageTitle}>Compass</div>
              </div>
              <div className={styles.mockKpis}>
                <div className={styles.mockKpi}>
                  <div className={styles.mockKpiLabel}>Current ARR</div>
                  <div className={styles.mockKpiVal}>$22.4M</div>
                  <div className={styles.mockKpiDelta} style={{ color: '#1A6B45' }}>▲ +$480K vs budget</div>
                </div>
                <div className={styles.mockKpi}>
                  <div className={styles.mockKpiLabel}>Forecast GRR</div>
                  <div className={styles.mockKpiVal}>94.8%</div>
                  <div className={styles.mockKpiDelta} style={{ color: '#1A6B45' }}>▲ 120 bps vs prior</div>
                </div>
                <div className={styles.mockKpi}>
                  <div className={styles.mockKpiLabel}>Pipeline Coverage</div>
                  <div className={styles.mockKpiVal}>2.8×</div>
                  <div className={styles.mockKpiDelta} style={{ color: 'var(--mid-gray)' }}>42 deals · $4.6M wtd</div>
                </div>
              </div>
              <div className={styles.mockTable}>
                <div className={styles.mockTh}>
                  <span>Month</span>
                  <span style={{ textAlign: 'right' }}>Starting</span>
                  <span style={{ textAlign: 'right' }}>Net Change</span>
                  <span style={{ textAlign: 'right' }}>Ending</span>
                </div>
                <div className={styles.mockTr}>
                  <span className={styles.name}>Jan 2026</span>
                  <span className={styles.mono} style={{ textAlign: 'right' }}>$21,680,000</span>
                  <span className={`${styles.mono} ${styles.pos}`} style={{ textAlign: 'right' }}>+$312,000</span>
                  <span className={styles.mono} style={{ textAlign: 'right', fontWeight: 500 }}>$21,992,000</span>
                </div>
                <div className={styles.mockTr}>
                  <span className={styles.name}>Feb 2026</span>
                  <span className={styles.mono} style={{ textAlign: 'right' }}>$21,992,000</span>
                  <span className={`${styles.mono} ${styles.pos}`} style={{ textAlign: 'right' }}>+$196,000</span>
                  <span className={styles.mono} style={{ textAlign: 'right', fontWeight: 500 }}>$22,188,000</span>
                </div>
                <div className={styles.mockTr}>
                  <span className={styles.name}>Mar 2026</span>
                  <span className={styles.mono} style={{ textAlign: 'right' }}>$22,188,000</span>
                  <span className={`${styles.mono} ${styles.pos}`} style={{ textAlign: 'right' }}>+$224,000</span>
                  <span className={styles.mono} style={{ textAlign: 'right', fontWeight: 500 }}>$22,412,000</span>
                </div>
                <div className={styles.mockTr}>
                  <span className={styles.name} style={{ opacity: 0.6 }}>Apr 2026</span>
                  <span className={styles.mono} style={{ textAlign: 'right', opacity: 0.6 }}>$22,412,000</span>
                  <span className={styles.mono} style={{ textAlign: 'right', opacity: 0.6 }}>—</span>
                  <span className={styles.mono} style={{ textAlign: 'right', opacity: 0.6 }}>—</span>
                </div>
                <div className={styles.mockTr}>
                  <span className={styles.name} style={{ opacity: 0.6 }}>May 2026</span>
                  <span className={styles.mono} style={{ textAlign: 'right', opacity: 0.6 }}>—</span>
                  <span className={styles.mono} style={{ textAlign: 'right', opacity: 0.6 }}>—</span>
                  <span className={styles.mono} style={{ textAlign: 'right', opacity: 0.6 }}>—</span>
                </div>
              </div>
            </div>
            <div className={styles.mockSide}>
              <div>
                <div className={styles.mockSpLabel}>FY2026 Forecast</div>
                <div className={styles.mockSpVal}>$23.8M</div>
                <div className={styles.mockSpSub} style={{ color: '#1A6B45' }}>▲ $1.1M vs budget</div>
              </div>
              <div>
                <div className={styles.mockSpLabel}>ARR by Month</div>
                <div className={styles.mockBars}>
                  <div className={styles.mockBar} style={{ height: '55%', background: 'rgba(20,28,46,0.12)' }} />
                  <div className={styles.mockBar} style={{ height: '60%', background: 'rgba(20,28,46,0.12)' }} />
                  <div className={styles.mockBar} style={{ height: '72%', background: 'rgba(20,28,46,0.12)' }} />
                  <div className={styles.mockBar} style={{ height: '78%', background: 'rgba(20,28,46,0.12)' }} />
                  <div className={styles.mockBar} style={{ height: '82%', background: 'rgba(20,28,46,0.12)' }} />
                  <div className={styles.mockBar} style={{ height: '88%', background: '#1A6B45', opacity: 0.7 }} />
                  <div className={styles.mockBar} style={{ height: '90%', background: '#1A6B45', opacity: 0.5 }} />
                  <div className={styles.mockBar} style={{ height: '92%', background: '#1A6B45', opacity: 0.35 }} />
                  <div className={styles.mockBar} style={{ height: '94%', background: '#1A6B45', opacity: 0.25 }} />
                  <div className={styles.mockBar} style={{ height: '96%', background: '#1A6B45', opacity: 0.2 }} />
                  <div className={styles.mockBar} style={{ height: '98%', background: '#1A6B45', opacity: 0.15 }} />
                  <div className={styles.mockBar} style={{ height: '100%', background: '#1A6B45', opacity: 0.12 }} />
                </div>
                <div className={styles.mockBarLabels}>
                  <span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span>
                </div>
              </div>
              <div>
                <div className={styles.mockSpLabel}>Top Drivers</div>
                <div className={styles.mockDriver}>
                  <div className={styles.mockDriverDot} style={{ background: '#1A6B45' }} />
                  <div className={styles.mockDriverName}>Northgate — expansion</div>
                  <div className={styles.mockDriverVal} style={{ color: '#1A6B45' }}>+$186K</div>
                </div>
                <div className={styles.mockDriver}>
                  <div className={styles.mockDriverDot} style={{ background: '#1A6B45' }} />
                  <div className={styles.mockDriverName}>Ridgeline — new logo</div>
                  <div className={styles.mockDriverVal} style={{ color: '#1A6B45' }}>+$94K</div>
                </div>
                <div className={styles.mockDriver}>
                  <div className={styles.mockDriverDot} style={{ background: '#B06A00' }} />
                  <div className={styles.mockDriverName}>Keystone — at risk</div>
                  <div className={styles.mockDriverVal} style={{ color: '#B06A00' }}>−$72K</div>
                </div>
                <div className={styles.mockDriver}>
                  <div className={styles.mockDriverDot} style={{ background: '#B06A00' }} />
                  <div className={styles.mockDriverName}>Summit — contraction</div>
                  <div className={styles.mockDriverVal} style={{ color: '#B06A00' }}>−$18K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE GAP ── */}
      <div className={styles.gapWrap} id="gap">
        <section className={styles.gapSection}>
          <div className={`${styles.sectionEyebrow} reveal`}>The Gap</div>
          <h2 className={`${styles.sectionTitle} reveal`}>
            In most subscription businesses, every system carries a different version of the same number.
          </h2>
          <p className={`${styles.sectionBody} reveal`}>
            CRM, billing, spreadsheets, FP&amp;A models, and board decks all diverge. ARR stops tying. Renewal forecasting becomes manual. Cohort analysis becomes fragile. The spreadsheet becomes the system of record.
          </p>
          <div className={styles.gapGrid}>
            <div className={`${styles.gapCard} reveal`}>
              <h3>Disconnected inputs</h3>
              <p>Contracts, renewal dates, pricing changes, and budget assumptions live in different places and are reconciled by hand.</p>
              <div className={styles.gapCardList}>
                <span>CRM says one thing</span>
                <span>Billing says another</span>
                <span>The spreadsheet becomes the system</span>
              </div>
            </div>
            <div className={`${styles.gapCard} reveal`}>
              <h3>Unreliable outputs</h3>
              <p>When the underlying model is weak, every downstream answer becomes harder to trust.</p>
              <div className={styles.gapCardList}>
                <span>ARR inconsistencies across reports</span>
                <span>Forecasts that can&apos;t be traced to contracts</span>
                <span>Board reporting rebuilt from scratch each month</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── THE MODEL ── */}
      <section className={styles.modelSection}>
        <div className={styles.modelInner}>
          <div className={`${styles.sectionEyebrow} reveal`}>The Model</div>
          <h2 className={`${styles.modelTitle} reveal`}>
            One contract model powers every revenue output.
          </h2>
          <p className={`${styles.modelBody} reveal`}>
            HarborOS is not a dashboard layer. It changes the underlying data model. Every contract becomes a structured revenue object. From that single source, the system generates ARR, renewals, cohorts, forecasts, and board-ready reporting.
          </p>

          <div className={`${styles.contractTableWrap} reveal`}>
            <div className={styles.ctLabel}>Contract Table</div>
            <table className={styles.ctTable}>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th className={styles.r}>ARR</th>
                  <th>Renewal</th>
                  <th>Cohort</th>
                  <th>Risk</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.ctName}>Acme Industrial</td>
                  <td className={`${styles.ctMono} ${styles.r}`}>$182K</td>
                  <td className={styles.ctMono}>Jul 2026</td>
                  <td className={styles.ctMono}>Enterprise</td>
                  <td><span className={`${styles.ctBadge} ${styles.ctBadgeGreen}`}>Low</span></td>
                </tr>
                <tr>
                  <td className={styles.ctName}>Northline Systems</td>
                  <td className={`${styles.ctMono} ${styles.r}`}>$96K</td>
                  <td className={styles.ctMono}>Sep 2026</td>
                  <td className={styles.ctMono}>Conversion</td>
                  <td><span className={`${styles.ctBadge} ${styles.ctBadgeAmber}`}>Monitor</span></td>
                </tr>
                <tr>
                  <td className={styles.ctName}>Veris Manufacturing</td>
                  <td className={`${styles.ctMono} ${styles.r}`}>$244K</td>
                  <td className={styles.ctMono}>Nov 2026</td>
                  <td className={styles.ctMono}>Expansion</td>
                  <td><span className={`${styles.ctBadge} ${styles.ctBadgeGreen}`}>Low</span></td>
                </tr>
                <tr>
                  <td className={styles.ctName}>Caldwell Corp</td>
                  <td className={`${styles.ctMono} ${styles.r}`}>$318K</td>
                  <td className={styles.ctMono}>Jan 2027</td>
                  <td className={styles.ctMono}>Strategic</td>
                  <td><span className={`${styles.ctBadge} ${styles.ctBadgeBlue}`}>Stable</span></td>
                </tr>
              </tbody>
            </table>

            <div className={styles.deriveStack}>
              <div className={styles.deriveConnector} />
              <div className={`${styles.deriveCard} reveal`}>
                <div className={`${styles.deriveCardLabel} ${styles.labelDerived}`}>Derived</div>
                <h4>ARR engine</h4>
                <p>Normalized recurring revenue by customer, entity, and month.</p>
              </div>
              <div className={styles.deriveConnector} />
              <div className={`${styles.deriveCard} reveal`}>
                <div className={`${styles.deriveCardLabel} ${styles.labelDerived}`}>Derived</div>
                <h4>Renewals + cohorts</h4>
                <p>Retention exposure, segment performance, and timing.</p>
              </div>
              <div className={styles.deriveConnector} />
              <div className={`${styles.deriveCard} reveal`}>
                <div className={`${styles.deriveCardLabel} ${styles.labelOutput}`}>Output</div>
                <h4>Forecast + board view</h4>
                <p>Bridges, plan comparison, and defensible executive reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <div className={styles.modulesWrap}>
        <section className={styles.modulesSection}>
          <div className={`${styles.sectionEyebrow} reveal`}>Core System</div>
          <h2 className={`${styles.sectionTitle} reveal`}>
            Four modules. One revenue operating system.
          </h2>
          <p className={`${styles.sectionBody} reveal`}>
            We&apos;ve replaced fragmented tools with a unified revenue intelligence layer. Each module anchors back to the contract, eliminating the spreadsheet gap between your CRM and your Board Pack.
          </p>
          <div className={styles.modulesGrid}>
            <div className={`${styles.moduleCard} reveal`}>
              <h3>Contract Engine</h3>
              <p>The source of truth for every subscription contract, including ARR normalization, renewal timing, cohort labeling, and multi-entity structure.</p>
            </div>
            <div className={`${styles.moduleCard} reveal`}>
              <h3>Renewals Engine</h3>
              <p>Visibility into upcoming renewals, renewal base, risk exposure, and retention performance across the customer base.</p>
            </div>
            <div className={`${styles.moduleCard} reveal`}>
              <h3>Forecast Engine</h3>
              <p>A revenue forecast built directly from contracts — with starting ARR, expansion, contraction, and net ARR movement.</p>
            </div>
            <div className={`${styles.moduleCard} reveal`}>
              <h3>Budget Integration</h3>
              <p>Import budget targets and compare live ARR, forecast, and plan in one operating view.</p>
            </div>
          </div>
        </section>
      </div>

      {/* ── OUTPUTS ── */}
      <section className={styles.outputsSection}>
        <div className={styles.outputsInner}>
          <div className={`${styles.sectionEyebrow} reveal`}>What Comes Out</div>
          <h2 className={`${styles.sectionTitle} reveal`}>
            Not just inputs. Decisions.
          </h2>
          <p className={`${styles.sectionBody} reveal`}>
            The value of the system is not data entry. It is the quality of the outputs. HarborOS should leave a CFO, FP&amp;A leader, or operating partner with a live answer they can defend.
          </p>
          <div className={styles.outputsGrid}>
            <div className={`${styles.outputCard} reveal`}>
              <h3>ARR you can trust</h3>
              <p>A single recurring revenue view derived from contracts, not reconciled after the fact.</p>
            </div>
            <div className={`${styles.outputCard} reveal`}>
              <h3>Renewal risk in view</h3>
              <p>Know what is up for renewal, what is expanding, and where retention pressure sits — before it becomes a surprise.</p>
            </div>
            <div className={`${styles.outputCard} reveal`}>
              <h3>Board-ready outputs</h3>
              <p>Revenue bridges, cohort views, budget comparisons, and forecasts without rebuilding the story every month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER QUOTE ── */}
      <section className={styles.founderSection}>
        <div className={styles.founderInner}>
          <div className={`${styles.founderRule} reveal`} />
          <h2 className={`${styles.founderQuote} reveal`}>
            Built by a finance operator who needed it and couldn&apos;t find it.
          </h2>
          <p className={`${styles.founderBody} reveal`}>
            Salesforce owns the pipeline. HubSpot owns the relationships. NetSuite owns the ledger. But none of them own the outputs a PE-backed CFO actually needs: the ARR bridge, the renewal forecast, the reforecast audit trail, the board pack. HarborOS sits above those systems as the intelligence layer that turns their outputs into decisions.
          </p>
          <div className={`${styles.founderSig} reveal`}>HarborOS · 2026</div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={`${styles.ctaDivider} reveal`} />
        <h2 className={`${styles.ctaTitle} reveal`}>
          A real number. A defensible forecast. At any time.
        </h2>
        <p className={`${styles.ctaSub} reveal`}>
          HarborOS is live and running on real portfolio company data.
        </p>
        <a href="mailto:hello@harboros.co" className={`${styles.btnPrimary} reveal`} style={{ position: 'relative' }}>
          Request Access
        </a>
      </section>
    </>
  );
}
