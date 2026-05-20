import React, { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { EXTENDED_WATCHLIST, CATEGORIES } from '../data/stocks.js';

export default function Screener() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [risk, setRisk] = useState('All');
  const [minAi, setMinAi] = useState(0);

  const results = useMemo(() => EXTENDED_WATCHLIST.filter((item) => {
    const q = query.toLowerCase();
    const matchesQuery = !q || [item.ticker, item.label, item.note, item.category].join(' ').toLowerCase().includes(q);
    const matchesCategory = category === 'All' || item.category === category;
    const matchesRisk = risk === 'All' || item.risk === risk;
    const matchesAi = item.aiScore >= Number(minAi);
    return matchesQuery && matchesCategory && matchesRisk && matchesAi;
  }), [query, category, risk, minAi]);

  return (
    <main className="main">
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <div className="page-header">
        <h2>Screener</h2>
        <span className="page-sub">Filter ideas by theme, risk, AI exposure, dividend yield, and momentum</span>
      </div>

      <section className="screener-panel">
        <label className="search-box"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search ticker, company, or theme" /></label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>{CATEGORIES.map(c => <option key={c}>{c}</option>)}</select>
        <select value={risk} onChange={(e) => setRisk(e.target.value)}>{['All', 'Lower Risk', 'Moderate', 'High Volatility'].map(r => <option key={r}>{r}</option>)}</select>
        <label className="range-box"><SlidersHorizontal size={17} /> Min AI Score: {minAi}<input type="range" min="0" max="100" value={minAi} onChange={(e) => setMinAi(e.target.value)} /></label>
      </section>

      <div className="dashboard-card">
        <div className="screener-count">{results.length} matching ideas</div>
        <div className="screener-grid">
          {results.map(item => (
            <article className="screener-card" key={`${item.ticker}-${item.category}`}>
              <div className="screener-top"><div className="ticker">{item.ticker}</div><span className="category-tag">{item.category}</span></div>
              <h3>{item.label}</h3>
              <p>{item.note}</p>
              <div className="metric-line"><span>AI Score</span><strong>{item.aiScore}/100</strong></div>
              <div className="metric-bar"><i style={{ width: `${item.aiScore}%` }} /></div>
              <div className="metric-line"><span>Risk</span><strong>{item.risk}</strong></div>
              <div className="metric-line"><span>Dividend Yield</span><strong>{item.dividendYield}%</strong></div>
              <div className="metric-line"><span>Valuation</span><strong>{item.valuation}</strong></div>
            </article>
          ))}
        </div>
      </div>

      <p className="dash-note">Screener results are research prompts only. Not financial advice.</p>
    </main>
  );
}
