import React from 'react';
import { CandlestickChart } from 'lucide-react';
import { LINKS } from '../data/siteLinks.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-icon"><CandlestickChart size={18} /></div>
          <span>Stock Signals</span>
        </div>
        <nav className="footer-links">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/watchlist">Watchlist</a>
          <a href="/screener">Screener</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/education">Education</a>
          <a href="/community">Community</a>
          <a href="/disclaimer">Disclaimer</a>
          {LINKS.ownerEmail && <a href={`mailto:${LINKS.ownerEmail}`}>Contact</a>}
        </nav>
        <p className="footer-disclaimer">
          Educational resource only. Not financial advice. Always do your own research.
        </p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Stock Signals. All rights reserved.</p>
      </div>
    </footer>
  );
}
