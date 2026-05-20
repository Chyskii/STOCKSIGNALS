import React, { useState } from 'react';
import { CandlestickChart, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',       href: '/' },
  { label: 'Dashboard',  href: '/dashboard' },
  { label: 'Watchlist',  href: '/watchlist' },
  { label: 'Screener',   href: '/screener' },
  { label: 'Portfolio',  href: '/portfolio' },
  { label: 'Education',  href: '/education' },
  { label: 'Community',  href: '/community' },
  { label: 'Newsletter', href: '/#newsletter' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const current = window.location.pathname;

  return (
    <header className="navbar">
      <a href="/" className="brand">
        <div className="brand-icon"><CandlestickChart size={20} /></div>
        <div>
          <h1>Stock Signals</h1>
          <p>Signals over noise.</p>
        </div>
      </a>

      <nav className="nav-links">
        {NAV_LINKS.map(l => (
          <a
            key={l.label}
            href={l.href}
            className={`nav-link ${current === l.href.split('#')[0] ? 'active' : ''}`}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="mobile-drawer">
          {NAV_LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="drawer-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
