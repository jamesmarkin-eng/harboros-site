'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useStars } from '@/hooks/useStars';
import styles from './lighthouse.module.css';

export default function LighthousePage() {
  useScrollReveal();
  const starsRef = useRef<HTMLDivElement | null>(null);
  useStars(starsRef);

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div ref={starsRef} className={styles.starsCanvas} />

        <div className={styles.heroCopy}>
          <div className={`${styles.eyebrow} reveal`}>The Contextual Lighthouse</div>
          <h1 className={`${styles.heroTitle} reveal d1`}>
            Nobody knows your<br />shoreline like <em className={styles.heroTitleEm}>you do.</em>
          </h1>
          <p className={`${styles.heroSub} reveal d2`}>
            Your operating logic — written once, in plain language — applied to every
            contract import, automatically. Messy data in. Clean record out.
          </p>
          <div className={styles.heroLines}>
            <div className={`${styles.heroLine} reveal d2`}>
              <span className={styles.lineNum}>01</span>
              <span className={styles.lineText}>
                &ldquo;Nobody knows your business like you do. Nobody knows your Shoreline like you do.&rdquo;
              </span>
            </div>
            <div className={`${styles.heroLine} reveal d3`}>
              <span className={styles.lineNum}>02</span>
              <span className={styles.lineText}>
                &ldquo;Even the best sailors need a Lighthouse.&rdquo;
              </span>
            </div>
            <div className={`${styles.heroLine} reveal d4`}>
              <span className={styles.lineNum}>03</span>
              <span className={styles.lineText}>
                &ldquo;With a Fresnel Lens to pull the important details into focus.&rdquo;
              </span>
            </div>
          </div>
        </div>

        <div className={styles.heroScene}>
          <svg className={styles.sceneBeam} viewBox="0 0 500 400" fill="none">
            <defs>
              <radialGradient id="bg" cx="100%" cy="0%" r="100%">
                <stop offset="0%" stopColor="#D4A843" stopOpacity="0.26" />
                <stop offset="38%" stopColor="#D4A843" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#D4A843" stopOpacity="0" />
              </radialGradient>
              <filter id="bb"><feGaussianBlur stdDeviation="7" /></filter>
            </defs>
            <path d="M500 0 L0 290 L58 400 Z" fill="url(#bg)" />
            <path d="M500 0 L0 290 L58 400 Z" fill="url(#bg)" filter="url(#bb)" opacity="0.55" />
            <line x1="500" y1="0" x2="16" y2="318" stroke="rgba(212,168,67,0.1)" strokeWidth="0.8" />
            <line x1="500" y1="0" x2="42" y2="374" stroke="rgba(212,168,67,0.07)" strokeWidth="0.5" />
          </svg>
          <div className={styles.sceneRocks}>
            <svg viewBox="0 0 200 44" width="200" height="44" fill="none">
              <path d="M0 40 L18 30 L40 36 L62 24 L84 30 L106 18 L128 24 L150 16 L172 22 L192 16 L200 20 L200 44 L0 44 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
            </svg>
          </div>
          <div className={styles.lh}>
            <div className={styles.lhCap} />
            <div className={styles.lhLamp} />
            <div className={styles.lhGallery} />
            <div className={styles.lhTower} />
            <div className={styles.lhBase} />
          </div>
          <div className={styles.sceneShip}>
            <svg viewBox="0 0 52 40" fill="none" width="52" height="40">
              <path d="M5 26 Q8 35 26 35 Q44 35 47 26" stroke="rgba(247,246,243,0.17)" strokeWidth="1.5" fill="rgba(247,246,243,0.03)" />
              <line x1="5" y1="26" x2="47" y2="26" stroke="rgba(247,246,243,0.2)" strokeWidth="1.2" />
              <line x1="17" y1="26" x2="17" y2="9" stroke="rgba(247,246,243,0.22)" strokeWidth="1" />
              <line x1="27" y1="26" x2="27" y2="6" stroke="rgba(247,246,243,0.22)" strokeWidth="1" />
              <path d="M17 10 L24 15 L17 21 Z" fill="rgba(247,246,243,0.07)" stroke="rgba(247,246,243,0.1)" strokeWidth="0.5" />
              <path d="M27 7 L37 13 L27 21 Z" fill="rgba(247,246,243,0.07)" stroke="rgba(247,246,243,0.1)" strokeWidth="0.5" />
            </svg>
          </div>
          <div className={styles.sceneFlow}>
            <div className={styles.flowLine} />
            <div className={styles.flowDot} />
            <div className={`${styles.flowDot} ${styles.flowDot2}`} />
            <div className={`${styles.flowDot} ${styles.flowDot3}`} />
          </div>
          <div className={styles.sceneFrags}>
            <div className={styles.frag} style={{ top: 0, left: 10 }}>PDF</div>
            <div className={styles.frag} style={{ top: 22, left: 44 }}>csv_FINAL_v3</div>
            <div className={styles.frag} style={{ top: 46, left: 6 }}>&euro; / &pound; / $</div>
            <div className={styles.frag} style={{ top: 14, left: 102 }}>.xlsx</div>
            <div className={styles.frag} style={{ top: 42, left: 86 }}>???</div>
          </div>
          <div className={styles.sceneRecords}>
            <div className={styles.rec}><div className={styles.recDot} /><div className={styles.recText}>Acme Corp &middot; $48,000</div></div>
            <div className={styles.rec}><div className={styles.recDot} /><div className={styles.recText}>Veridian &middot; $120,000</div></div>
            <div className={styles.rec}><div className={styles.recDot} /><div className={styles.recText}>Norbridge &middot; &pound;36,000</div></div>
            <div className={styles.rec}><div className={styles.recDot} /><div className={styles.recText}>Expice B.V. &middot; &euro;84,000</div></div>
          </div>
          <div className={styles.sceneWater} />
          <div className={styles.sceneWl} />
          <div className={`${styles.sceneWave} ${styles.sw1}`}>
            <svg viewBox="0 0 700 4" width="700" height="4" preserveAspectRatio="none"><path d="M0 2 Q87 0 175 2 Q262 4 350 2 Q437 0 525 2 Q612 4 700 2" stroke="rgba(212,168,67,0.3)" fill="none" strokeWidth="1.2" /></svg>
          </div>
          <div className={`${styles.sceneWave} ${styles.sw2}`}>
            <svg viewBox="0 0 700 4" width="700" height="4" preserveAspectRatio="none"><path d="M0 2 Q87 4 175 2 Q262 0 350 2 Q437 4 525 2 Q612 0 700 2" stroke="rgba(212,168,67,0.22)" fill="none" strokeWidth="1" /></svg>
          </div>
          <div className={`${styles.sceneWave} ${styles.sw3}`}>
            <svg viewBox="0 0 700 4" width="700" height="4" preserveAspectRatio="none"><path d="M0 2 Q140 0 280 2 Q420 4 560 2 Q630 0 700 2" stroke="rgba(212,168,67,0.15)" fill="none" strokeWidth="0.8" /></svg>
          </div>
        </div>

        <div className={styles.heroScroll}>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
            <path d="M6 1v10M2 8l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Scroll
        </div>
      </section>

      {/* ── TRANSFORMATION ── */}
      <section className={styles.transform}>
        <div className={styles.transformInner}>
          <h2 className={`${styles.transformTitle} reveal`}>
            A contract enters HarborOS<br />and becomes a system record.
          </h2>
          <div className={`${styles.transformSub} reveal d1`}>
            No rebuild
            <span className={styles.transformSubSpan}>No translation layer</span>
            <span className={styles.transformSubSpan}>No cleanup first</span>
          </div>

          <div className={`${styles.transformFlow} reveal d2`}>
            <div className={styles.tfNode}>
              <div className={`${styles.tfBox} ${styles.tfBoxBefore}`}>
                <span className={styles.tfBoxTag}>Input</span>
                <div className={styles.tfBoxTitle}>Upload contract</div>
                <div className={styles.tfBoxDetail}>
                  PDF &middot; CSV &middot; CRM export<br />
                  Any format. Any source.
                </div>
              </div>
              <div className={`${styles.tfPill} ${styles.tfPillBefore}`}>
                <span className={styles.tfPillDot} /> raw document
              </div>
            </div>

            <div className={styles.tfArrow}>
              <div className={styles.tfArrowLine} />
              <div className={styles.tfArrowLabel}>Lighthouse</div>
            </div>

            <div className={styles.tfNode}>
              <div className={`${styles.tfBox} ${styles.tfBoxAfter}`}>
                <span className={styles.tfBoxTag}>Output</span>
                <div className={styles.tfBoxTitle}>Contract record created</div>
                <div className={styles.tfBoxDetail}>
                  status &middot; arr &middot; entity<br />
                  term_start &middot; term_end
                </div>
              </div>
              <div className={`${styles.tfPill} ${styles.tfPillAfter}`}>
                <span className={styles.tfPillDot} /> system record &middot; active
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REFRAME ── */}
      <section className={styles.reframe}>
        <div className={styles.reframeInner}>
          <div className={`${styles.secLabel} reveal`}>The Reframe</div>
          <h2 className={`${styles.sectionTitle} reveal d1`}>
            Before the Lighthouse,<br />
            <em className={styles.sectionTitleEm}>you needed clean data first.</em>
          </h2>
          <p className={`${styles.secLead} reveal d2`}>
            The CRM owns deals. The ERP owns invoices. Nobody owns the contract
            lifecycle. The Lighthouse changes that.
          </p>
          <div className={styles.reframeCols}>
            <div className={`${styles.rfCard} ${styles.rfBefore} reveal d1`}>
              <span className={styles.rcTag}>Before</span>
              <div className={styles.rcQuote}>
                &ldquo;Bring me clean data and I&apos;ll give you intelligence.&rdquo;
              </div>
              <div className={styles.rcNote}>
                Clean up your Salesforce first.<br />
                Normalize your records.<br />
                Then we&apos;ll talk.
              </div>
            </div>
            <div className={`${styles.rfArrow} reveal d2`}>
              <div className={styles.rfArrowInner}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="#141C2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className={`${styles.rfCard} ${styles.rfAfter} reveal d3`}>
              <span className={styles.rcTag}>With the Lighthouse</span>
              <div className={styles.rcQuote}>
                &ldquo;Give us five contracts and we&apos;ll have your renewals table live by Friday.&rdquo;
              </div>
              <div className={styles.rcNote}>
                <span className={styles.rcNoteStrong}>No clean data required.</span>
                The Lighthouse handles the interpretation. You handle the exceptions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IT IS ── */}
      <section className={styles.what}>
        <div className={styles.whatInner}>
          <div>
            <div className={`${styles.secLabel} reveal`}>What It Is</div>
            <h2 className={`${styles.sectionTitle} reveal d1`}>
              Your operating logic,<br />
              <em className={styles.sectionTitleEm}>written down once.</em>
            </h2>
            <p className={`${styles.whatBody} reveal d2`}>
              Shoreline Details are 3–8 sentences in plain language. The CFO describes the
              rules that currently live in their head — ARR definitions, entity logic, grace
              periods, FX conventions — and Harbor applies them to every future extraction
              automatically.
            </p>
            <p className={`${styles.whatBody} reveal d3`}>
              <strong>Not a configuration form.</strong> Not a mapping table. Plain-language
              operating logic, authored once by the person who actually understands the
              business. Versioned, immutable, traceable.
            </p>
            <div className={`${styles.fresnelLine} reveal d3`}>
              <p>The Lighthouse defines your logic. The Fresnel Lens ensures the details are right.</p>
              <div className={styles.fresnelTerms}>
                <div className={styles.fresnelTerm}>
                  Lighthouse<span className={styles.fresnelTermSpan}>= system</span>
                </div>
                <div className={styles.fresnelTerm}>
                  Fresnel<span className={styles.fresnelTermSpan}>= trust layer</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.whatRight} reveal d2`}>
            <div className={styles.slCard}>
              <div className={styles.slHead}>
                <span className={styles.slHeadLbl}>Shoreline Details</span>
                <span className={styles.slHeadVer}>v3 &middot; active</span>
              </div>
              <div className={styles.slBody}>
                <div className={styles.slRule}>
                  <span className={styles.slRl}>ARR Definition</span>
                  <div className={styles.slRt}>
                    &ldquo;We only count base subscription as ARR. Professional services are walk-in
                    run rate and should be tagged as Service contracts.&rdquo;
                  </div>
                </div>
                <div className={styles.slRule}>
                  <span className={styles.slRl}>Entity Logic</span>
                  <div className={styles.slRt}>
                    &ldquo;Any contract with a VAT number starting in GB belongs to the EMEA entity,
                    even if the contract header says Global Corp.&rdquo;
                  </div>
                </div>
                <div className={styles.slRule}>
                  <span className={styles.slRl}>Grace Periods</span>
                  <div className={styles.slRt}>
                    &ldquo;We use 30-day grace periods. If a contract expired within 30 days, keep it
                    Active — not Churned.&rdquo;
                  </div>
                </div>
                <div className={styles.slRule}>
                  <span className={styles.slRl}>FX Convention</span>
                  <div className={styles.slRt}>
                    &ldquo;All UK contracts are GBP but reported at a frozen 1.25 rate for the board
                    pack. No live FX rates.&rdquo;
                  </div>
                </div>
                <div className={styles.slRule}>
                  <span className={styles.slRl}>Pricing Strategy</span>
                  <div className={styles.slRt}>
                    &ldquo;We are aggressive on CPI uplifts this year. Tag any price-increase clause
                    as CPI-driven.&rdquo;
                  </div>
                </div>
              </div>
              <div className={styles.slFoot}>
                Corrections refine the Lighthouse. Every import gets smarter.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <div className={styles.pq}>
        <div className={styles.pqInner}>
          <div className={`${styles.pqRow} reveal`}>
            <div className={styles.pqRule} />
            <svg className={styles.pqIcon} width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.1" />
              <circle cx="9" cy="9" r="1.8" fill="currentColor" />
              <line x1="9" y1="1" x2="9" y2="4" stroke="currentColor" strokeWidth="1.1" />
              <line x1="9" y1="14" x2="9" y2="17" stroke="currentColor" strokeWidth="1.1" />
              <line x1="1" y1="9" x2="4" y2="9" stroke="currentColor" strokeWidth="1.1" />
              <line x1="14" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.1" />
            </svg>
            <div className={styles.pqRule} />
          </div>
          <p className={`${styles.pqText} reveal d1`}>
            The Lighthouse turns HarborOS from &ldquo;the intelligence layer that sits above
            systems of record&rdquo; into{' '}
            <em className={styles.pqTextEm}>
              &ldquo;the place where the contract record of truth gets created for the first time.&rdquo;
            </em>
          </p>
          <div className={`${styles.pqAttr} reveal d2`}>
            That is the feature that makes the product inevitable.
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={`${styles.ctaDivider} reveal`} />
        <div className={`${styles.ctaEy} reveal d1`}>Request a Demo</div>
        <h2 className={`${styles.ctaTitle} reveal d2`}>
          See it run on <em className={styles.ctaTitleEm}>your data.</em>
        </h2>
        <p className={`${styles.ctaSub} reveal d3`}>
          Bring five contracts. We&apos;ll build the Lighthouse, run the extraction, and
          show you a live renewals table — in one session.
        </p>
        <a
          href="mailto:hello@harboros.co?subject=Demo Request — Contextual Lighthouse"
          className={`${styles.ctaBtn} reveal d3`}
        >
          Request a Demo
        </a>
        <div className={`${styles.ctaNote} reveal d4`}>hello@harboros.co</div>
      </section>
    </>
  );
}
