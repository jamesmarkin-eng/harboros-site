import type { Metadata } from "next";
import { Instrument_Serif, Syne, DM_Sans, DM_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "HarborOS",
  description:
    "HarborOS — The CFO intelligence layer for PE-backed software companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
      >
        <nav className="site-nav">
          <Link href="/" className="nav-logo">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.1" opacity="0.35" />
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <line x1="10" y1="1.5" x2="10" y2="4.5" stroke="currentColor" strokeWidth="1.1" />
              <line x1="10" y1="15.5" x2="10" y2="18.5" stroke="currentColor" strokeWidth="1.1" />
              <line x1="1.5" y1="10" x2="4.5" y2="10" stroke="currentColor" strokeWidth="1.1" />
              <line x1="15.5" y1="10" x2="18.5" y2="10" stroke="currentColor" strokeWidth="1.1" />
              <line x1="4" y1="4" x2="6.2" y2="6.2" stroke="currentColor" strokeWidth="1.1" />
              <line x1="13.8" y1="13.8" x2="16" y2="16" stroke="currentColor" strokeWidth="1.1" />
              <line x1="16" y1="4" x2="13.8" y2="6.2" stroke="currentColor" strokeWidth="1.1" />
              <line x1="6.2" y1="13.8" x2="4" y2="16" stroke="currentColor" strokeWidth="1.1" />
            </svg>
            <span className="nav-wm">
              Harbor<sup>OS</sup>
            </span>
          </Link>
          <div className="nav-right">
            <Link href="/">Home</Link>
            <Link href="/architecture">Architecture</Link>
            <Link href="/lighthouse">Lighthouse</Link>
            <a href="mailto:hello@harboros.co?subject=Demo Request" className="nav-cta">
              Request Demo
            </a>
          </div>
        </nav>

        {children}

        <footer className="site-footer">
          <div className="ft-left">
            <span className="ft-mark">HarborOS</span>
            <div className="ft-sep" />
            <span className="ft-copy">&copy; 2026</span>
          </div>
          <div className="ft-right">
            The CFO intelligence layer for PE-backed software companies.
          </div>
        </footer>
      </body>
    </html>
  );
}
