'use client'

import { useRef, useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useStars } from '@/hooks/useStars'
import s from './lighthouse.module.css'

export default function LighthousePage() {
  const starsRef = useRef<HTMLDivElement>(null)
  useStars(starsRef)
  useScrollReveal()

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(`.${s.hero} .reveal`).forEach(el => el.classList.add('visible'))
    }, 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section className={s.hero}>
        <div className={s.heroStars} ref={starsRef}></div>

        <div className={s.heroCopy}>
          <div className={`${s.eyebrow} reveal`}>The Contextual Lighthouse</div>
          <h1 className={`${s.heroTitle} reveal d1`}>
            Nobody knows your<br />shoreline like <em>you do.</em>
          </h1>
          <p className={`${s.heroSub} reveal d2`}>
            Your operating logic — written once, in plain language — applied to every contract import, automatically. Messy data in. Clean record out.
          </p>
          <div className={s.heroLines}>
            <div className={`${s.heroLine} reveal d2`}>
              <span className={s.lineNum}>01</span>
              <span className={s.lineText}>&ldquo;Nobody knows your business like you do. Nobody knows your Shoreline like you do.&rdquo;</span>
            </div>
            <div className={`${s.heroLine} reveal d3`}>
              <span className={s.lineNum}>02</span>
              <span className={s.lineText}>&ldquo;Even the best sailors need a Lighthouse.&rdquo;</span>
            </div>
            <div className={`${s.heroLine} reveal d4`}>
              <span className={s.lineNum}>03</span>
              <span className={s.lineText}>&ldquo;With a Fresnel Lens to pull the important details into focus.&rdquo;</span>
            </div>
          </div>
        </div>

        <div className={s.heroScene}>
          <svg className={s.sceneBeam} viewBox="0 0 500 400" fill="none">
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

          <div className={s.sceneRocks}>
            <svg viewBox="0 0 200 44" width="200" height="44" fill="none">
              <path d="M0 40 L18 30 L40 36 L62 24 L84 30 L106 18 L128 24 L150 16 L172 22 L192 16 L200 20 L200 44 L0 44 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
            </svg>
          </div>

          <div className={s.lh}>
            <div className={s.lhCap}></div>
            <div className={s.lhLamp}></div>
            <div className={s.lhGallery}></div>
            <div className={s.lhTower}></div>
            <div className={s.lhBase}></div>
          </div>

          <div className={s.sceneShip}>
            <svg viewBox="0 0 52 40" fill="none" width="52" height="40">
              <path d="M5 26 Q8 35 26 35 Q44 35 47 26" stroke="rgba(247,246,243,0.17)" strokeWidth="1.5" fill="rgba(247,246,243,0.03)" />
              <line x1="5" y1="26" x2="47" y2="26" stroke="rgba(247,246,243,0.2)" strokeWidth="1.2" />
              <line x1="17" y1="26" x2="17" y2="9" stroke="rgba(247,246,243,0.22)" strokeWidth="1" />
              <line x1="27" y1="26" x2="27" y2="6" stroke="rgba(247,246,243,0.22)" strokeWidth="1" />
              <path d="M17 10 L24 15 L17 21 Z" fill="rgba(247,246,243,0.07)" stroke="rgba(247,246,243,0.1)" strokeWidth="0.5" />
              <path d="M27 7 L37 13 L27 21 Z" fill="rgba(247,246,243,0.07)" stroke="rgba(247,246,243,0.1)" strokeWidth="0.5" />
            </svg>
          </div>

          <div className={s.sceneFlow}>
            <div className={s.flowLine}></div>
            <div className={s.flowDot}></div>
            <div className={`${s.flowDot} ${s.flowDot2}`}></div>
            <div className={`${s.flowDot} ${s.flowDot3}`}></div>
          </div>

          <div className={s.sceneFrags}>
            <div className={s.frag} style={{ top: 0, left: 10, ['--fd' as string]: '6s', ['--fdl' as string]: '0s' }}>PDF</div>
            <div className={s.frag} style={{ top: 22, left: 44, ['--fd' as string]: '7.5s', ['--fdl' as string]: '1.2s' }}>csv_FINAL_v3</div>
            <div className={s.frag} style={{ top: 46, left: 6, ['--fd' as string]: '5.5s', ['--fdl' as string]: '0.7s' }}>&euro; / &pound; / $</div>
            <div className={s.frag} style={{ top: 14, left: 102, ['--fd' as string]: '8s', ['--fdl' as string]: '0.4s' }}>.xlsx</div>
            <div className={s.frag} style={{ top: 42, left: 86, ['--fd' as string]: '6.5s', ['--fdl' as string]: '1.8s' }}>???</div>
          </div>

          <div className={s.sceneRecords}>
            <div className={s.rec}><div className={s.recDot}></div><div className={s.recText}>Acme Corp &middot; $48,000</div></div>
            <div className={s.rec}><div className={s.recDot}></div><div className={s.recText}>Veridian &middot; $120,000</div></div>
            <div className={s.rec}><div className={s.recDot}></div><div className={s.recText}>Norbridge &middot; &pound;36,000</div></div>
            <div className={s.rec}><div className={s.recDot}></div><div className={s.recText}>Expice B.V. &middot; &euro;84,000</div></div>
          </div>

          <div className={s.sceneWater}></div>
          <div className={s.sceneWl}></div>
          <div className={`${s.sceneWave} ${s.sw1}`}>
            <svg viewBox="0 0 700 4" width="700" height="4" preserveAspectRatio="none"><path d="M0 2 Q87 0 175 2 Q262 4 350 2 Q437 0 525 2 Q612 4 700 2" stroke="rgba(212,168,67,0.3)" fill="none" strokeWidth="1.2" /></svg>
          </div>
          <div className={`${s.sceneWave} ${s.sw2}`}>
            <svg viewBox="0 0 700 4" width="700" height="4" preserveAspectRatio="none"><path d="M0 2 Q87 4 175 2 Q262 0 350 2 Q437 4 525 2 Q612 0 700 2" stroke="rgba(212,168,67,0.22)" fill="none" strokeWidth="1" /></svg>
          </div>
          <div className={`${s.sceneWave} ${s.sw3}`}>
            <svg viewBox="0 0 700 4" width="700" height="4" preserveAspectRatio="none"><path d="M0 2 Q140 0 280 2 Q420 4 560 2 Q630 0 700 2" stroke="rgba(212,168,67,0.15)" fill="none" strokeWidth="0.8" /></svg>
          </div>
        </div>

        <div className={s.heroScroll}>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none"><path d="M6 1v10M2 8l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Scroll
        </div>
      </section>

      {/* ── TRANSFORMATION ── */}
      <section className={s.transform}>
        <div className={s.transformInner}>
          <h2 className={`${s.transformTitle} reveal`}>
            A contract enters HarborOS<br />and becomes a system record.
          </h2>
          <div className={`${s.transformSub} reveal d1`}>
            No rebuild<span>No translation layer</span><span>No cleanup first</span>
          </div>

          <div className={`${s.transformFlow} reveal d2`}>
            <div className={s.tfNode}>
              <div className={`${s.tfBox} ${s.tfBoxBefore}`}>
                <span className={s.tfBoxTag}>Input</span>
                <div className={s.tfBoxTitle}>Upload contract</div>
                <div className={s.tfBoxDetail}>
                  PDF &middot; CSV &middot; CRM export<br />
                  Any format. Any source.
                </div>
              </div>
              <div className={`${s.tfPill} ${s.tfPillBefore}`}>
                <span className={s.tfPillDot}></span>raw document
              </div>
            </div>

            <div className={s.tfArrow}>
              <div className={s.tfArrowLine}></div>
              <div className={s.tfArrowLabel}>Lighthouse</div>
            </div>

            <div className={s.tfNode}>
              <div className={`${s.tfBox} ${s.tfBoxAfter}`}>
                <span className={s.tfBoxTag}>Output</span>
                <div className={s.tfBoxTitle}>Contract record created</div>
                <div className={s.tfBoxDetail}>
                  status &middot; arr &middot; entity<br />
                  term_start &middot; term_end
                </div>
              </div>
              <div className={`${s.tfPill} ${s.tfPillAfter}`}>
                <span className={s.tfPillDot}></span>system record &middot; active
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REFRAME ── */}
      <section className={s.reframe}>
        <div className={s.reframeInner}>
          <div className={`${s.secLabel} reveal`}>The Reframe</div>
          <h2 className={`${s.sectionH2} reveal d1`}>
            Before the Lighthouse,<br /><em>you needed clean data first.</em>
          </h2>
          <p className={`${s.secLead} reveal d2`}>
            The CRM owns deals. The ERP owns invoices. Nobody owns the contract lifecycle. The Lighthouse changes that.
          </p>
          <div className={s.reframeCols}>
            <div className={`${s.rfCard} ${s.rfBefore} reveal d1`}>
              <span className={s.rcTag}>Before</span>
              <div className={s.rcQuote}>&ldquo;Bring me clean data and I&rsquo;ll give you intelligence.&rdquo;</div>
              <div className={s.rcNote}>
                Clean up your Salesforce first.<br />
                Normalize your records.<br />
                Then we&rsquo;ll talk.
              </div>
            </div>
            <div className={`${s.rfArrow} reveal d2`}>
              <div className={s.rfArrowInner}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="#141C2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className={`${s.rfCard} ${s.rfAfter} reveal d3`}>
              <span className={s.rcTag}>With the Lighthouse</span>
              <div className={s.rcQuote}>&ldquo;Give us five contracts and we&rsquo;ll have your renewals table live by Friday.&rdquo;</div>
              <div className={s.rcNote}>
                <strong className={s.rcNoteStrong}>No clean data required.</strong>
                The Lighthouse handles the interpretation. You handle the exceptions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IT IS ── */}
      <section className={s.what}>
        <div className={s.whatInner}>
          <div>
            <div className={`${s.secLabel} reveal`}>What It Is</div>
            <h2 className={`${s.sectionH2} reveal d1`}>
              Your operating logic,<br /><em>written down once.</em>
            </h2>
            <p className={`${s.whatBody} reveal d2`}>
              Shoreline Details are 3–8 sentences in plain language. The CFO describes the rules that currently live in their head — ARR definitions, entity logic, grace periods, FX conventions — and Harbor applies them to every future extraction automatically.
            </p>
            <p className={`${s.whatBody} reveal d3`}>
              <strong>Not a configuration form.</strong> Not a mapping table. Plain-language operating logic, authored once by the person who actually understands the business. Versioned, immutable, traceable.
            </p>
            <div className={`${s.fresnelLine} reveal d3`}>
              <p>The Lighthouse defines your logic. The Fresnel Lens ensures the details are right.</p>
              <div className={s.fresnelTerms}>
                <div className={s.fresnelTerm}>Lighthouse<span>= system</span></div>
                <div className={s.fresnelTerm}>Fresnel<span>= trust layer</span></div>
              </div>
            </div>
          </div>
          <div className={`${s.whatRight} reveal d2`}>
            <div className={s.slCard}>
              <div className={s.slHead}>
                <span className={s.slHeadLbl}>Shoreline Details</span>
                <span className={s.slHeadVer}>v3 &middot; active</span>
              </div>
              <div className={s.slBody}>
                <div className={s.slRule}>
                  <span className={s.slRl}>ARR Definition</span>
                  <div className={s.slRt}>&ldquo;We only count base subscription as ARR. Professional services are walk-in run rate and should be tagged as Service contracts.&rdquo;</div>
                </div>
                <div className={s.slRule}>
                  <span className={s.slRl}>Entity Logic</span>
                  <div className={s.slRt}>&ldquo;Any contract with a VAT number starting in GB belongs to the EMEA entity, even if the contract header says Global Corp.&rdquo;</div>
                </div>
                <div className={s.slRule}>
                  <span className={s.slRl}>Grace Periods</span>
                  <div className={s.slRt}>&ldquo;We use 30-day grace periods. If a contract expired within 30 days, keep it Active — not Churned.&rdquo;</div>
                </div>
                <div className={s.slRule}>
                  <span className={s.slRl}>FX Convention</span>
                  <div className={s.slRt}>&ldquo;All UK contracts are GBP but reported at a frozen 1.25 rate for the board pack. No live FX rates.&rdquo;</div>
                </div>
                <div className={s.slRule}>
                  <span className={s.slRl}>Pricing Strategy</span>
                  <div className={s.slRt}>&ldquo;We are aggressive on CPI uplifts this year. Tag any price-increase clause as CPI-driven.&rdquo;</div>
                </div>
              </div>
              <div className={s.slFoot}>Corrections refine the Lighthouse. Every import gets smarter.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <div className={s.pq}>
        <div className={s.pqInner}>
          <div className={`${s.pqRow} reveal`}>
            <div className={s.pqRule}></div>
            <svg className={s.pqIcon} width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.1" />
              <circle cx="9" cy="9" r="1.8" fill="currentColor" />
              <line x1="9" y1="1" x2="9" y2="4" stroke="currentColor" strokeWidth="1.1" />
              <line x1="9" y1="14" x2="9" y2="17" stroke="currentColor" strokeWidth="1.1" />
              <line x1="1" y1="9" x2="4" y2="9" stroke="currentColor" strokeWidth="1.1" />
              <line x1="14" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.1" />
            </svg>
            <div className={s.pqRule}></div>
          </div>
          <p className={`${s.pqText} reveal d1`}>
            The Lighthouse turns HarborOS from &ldquo;the intelligence layer that sits above systems of record&rdquo; into <em>&ldquo;the place where the contract record of truth gets created for the first time.&rdquo;</em>
          </p>
          <div className={`${s.pqAttr} reveal d2`}>That is the feature that makes the product inevitable.</div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className={s.cta}>
        <div className={`${s.ctaDivider} reveal`}></div>
        <div className={`${s.ctaEy} reveal d1`}>Request a Demo</div>
        <h2 className={`${s.ctaTitle} reveal d2`}>See it run on <em>your data.</em></h2>
        <p className={`${s.ctaSub} reveal d3`}>
          Bring five contracts. We&rsquo;ll build the Lighthouse, run the extraction, and show you a live renewals table — in one session.
        </p>
        <a href="mailto:hello@harboros.co?subject=Demo Request — Contextual Lighthouse" className={`${s.ctaBtn} reveal d3`}>
          Request a Demo
        </a>
        <div className={`${s.ctaNote} reveal d4`}>hello@harboros.co</div>
      </section>
    </>
  )
}
