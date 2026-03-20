'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navLogo}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.1" opacity="0.35"/>
          <circle cx="10" cy="10" r="2" fill="currentColor"/>
          <line x1="10" y1="1.5" x2="10" y2="4.5" stroke="currentColor" strokeWidth="1.1"/>
          <line x1="10" y1="15.5" x2="10" y2="18.5" stroke="currentColor" strokeWidth="1.1"/>
          <line x1="1.5" y1="10" x2="4.5" y2="10" stroke="currentColor" strokeWidth="1.1"/>
          <line x1="15.5" y1="10" x2="18.5" y2="10" stroke="currentColor" strokeWidth="1.1"/>
          <line x1="4" y1="4" x2="6.2" y2="6.2" stroke="currentColor" strokeWidth="1.1"/>
          <line x1="13.8" y1="13.8" x2="16" y2="16" stroke="currentColor" strokeWidth="1.1"/>
          <line x1="16" y1="4" x2="13.8" y2="6.2" stroke="currentColor" strokeWidth="1.1"/>
          <line x1="6.2" y1="13.8" x2="4" y2="16" stroke="currentColor" strokeWidth="1.1"/>
        </svg>
        <span className={styles.navWm}>Harbor<sup>OS</sup></span>
      </Link>
      <div className={styles.navRight}>
        <Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link>
        <Link href="/architecture" className={pathname === '/architecture' ? styles.active : ''}>Architecture</Link>
        <Link href="/lighthouse" className={pathname === '/lighthouse' ? styles.active : ''}>Lighthouse</Link>
        <Link href="/founder" className={pathname === '/founder' ? styles.active : ''}>Founder</Link>
        <a href="mailto:hello@harboros.co?subject=Demo Request" className={styles.navCta}>Request Demo</a>
      </div>
    </nav>
  )
}
