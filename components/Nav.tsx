'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const navClass = ['nav'];
  if (isHome) {
    if (scrolled) navClass.push('scrolled');
  } else {
    navClass.push('solid');
  }

  return (
    <nav className={navClass.join(' ')}>
      <Link href="/" className="nav-brand">
        <svg className="nav-logo" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
          <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.7"/>
          <line x1="16" y1="2" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <line x1="16" y1="22" x2="16" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <line x1="2" y1="16" x2="10" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <line x1="22" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <line x1="6.1" y1="6.1" x2="11.6" y2="11.6" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
          <line x1="20.4" y1="20.4" x2="25.9" y2="25.9" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
          <line x1="25.9" y1="6.1" x2="20.4" y2="11.6" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
          <line x1="11.6" y1="20.4" x2="6.1" y2="25.9" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
        </svg>
        <span className="nav-wordmark">Harbor<sup>OS</sup></span>
      </Link>
      <div className="nav-links">
        {!isHome && <Link href="/" className="nav-link">Home</Link>}
        <Link href="/architecture" className={`nav-link${pathname === '/architecture' ? ' active' : ''}`}>Architecture</Link>
        <Link href="/lighthouse" className={`nav-link${pathname === '/lighthouse' ? ' active' : ''}`}>Lighthouse</Link>
        <Link href="/founder" className={`nav-link${pathname === '/founder' ? ' active' : ''}`}>Founder</Link>
        <a href="mailto:hello@harboros.co" className="nav-cta">Request Access</a>
      </div>
    </nav>
  );
}
