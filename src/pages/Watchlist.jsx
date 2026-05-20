import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import PriceTag from '../components/PriceTag.jsx';
import { useLivePrices } from '../hooks/useLivePrices.js';
import { EXTENDED_WATCHLIST, CATEGORIES } from '../data/stocks.js';

export default function Watchlist() {
  const [active, setActive] = useState('All');
  const tickers = [...new Set(EXTENDED_WATCHLIST.map(w => w.ticker))];
  const prices = useLivePrices(tickers);

  const filtered = active === 'All'
    ? EXTENDED_WATCHLIST
    : EXTENDED_WATCHLIST.filter(w => w.category === active);

  const seen = new Set();
  const unique = filtered.filter(w => {
    const key = `${w.ticker}-${w.category}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return (
    <main className="main">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <div className="page-header">
        <h2>Watchlist</h2>
        <span className="page-sub">AI, cloud, cybersecurity, dividends &mdash; all in one place</span>
      </div>

      <div className="filter-bar">
        <Filter size={16} className="filter-icon" />
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${active === cat ? 'active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="dashboard-card watchlist-page">
        <div className="watchlist-header">
          <span>Ticker</span>
          <span>Company</span>
          <span>Theme</span>
          <span>Category</span>
          <span style={{ textAlign: 'right' }}>Price</span>
        </div>
        <div className="watchlist">
          {unique.map((item) => (
            <div className="stock-row" key={`${item.ticker}-${item.category}`}>
              <div className="ticker">{item.ticker}</div>
              <div className="stock-info">
                <strong>{item.label}</strong>
                <span>{item.note}</span>
              </div>
              <span className="category-tag">{item.category}</span>
              <PriceTag data={prices[item.ticker]} />
            </div>
          ))}
        </div>
      </div>

      <p className="dash-note">Data is for educational purposes only. Not financial advice.</p>
    </main>
  );
}
