import React, { useEffect, useMemo, useState } from 'react';
import { Plus, Trash2, WalletCards } from 'lucide-react';
import PriceTag from '../components/PriceTag.jsx';
import { useLivePrices } from '../hooks/useLivePrices.js';

const STARTING_CASH = 10000;

export default function Portfolio() {
  const [ticker, setTicker] = useState('NVDA');
  const [shares, setShares] = useState(1);
  const [holdings, setHoldings] = useState(() => {
    try { return JSON.parse(localStorage.getItem('stockSignalsPortfolio')) || []; } catch { return []; }
  });
  const tickers = [...new Set(holdings.map(h => h.ticker))];
  const prices = useLivePrices(tickers);

  useEffect(() => localStorage.setItem('stockSignalsPortfolio', JSON.stringify(holdings)), [holdings]);

  const totalValue = useMemo(() => holdings.reduce((sum, h) => sum + ((prices[h.ticker]?.price || h.entryPrice) * h.shares), 0), [holdings, prices]);
  const invested = holdings.reduce((sum, h) => sum + (h.entryPrice * h.shares), 0);
  const gain = totalValue - invested;

  function addHolding(e) {
    e.preventDefault();
    const cleanTicker = ticker.trim().toUpperCase();
    if (!cleanTicker || Number(shares) <= 0) return;
    const live = prices[cleanTicker]?.price || 100;
    setHoldings(prev => [...prev, { id: crypto.randomUUID(), ticker: cleanTicker, shares: Number(shares), entryPrice: live }]);
    setTicker('');
    setShares(1);
  }

  return (
    <main className="main">
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <div className="page-header">
        <h2>Paper Portfolio</h2>
        <span className="page-sub">Practice tracking ideas without using real money</span>
      </div>

      <div className="stat-row portfolio-stats">
        <div className="stat-card"><WalletCards className="stat-icon yellow" size={20} /><div><span className="stat-num yellow">${STARTING_CASH.toLocaleString()}</span><span className="stat-label">Practice Account</span></div></div>
        <div className="stat-card"><div><span className="stat-num neutral">${totalValue.toFixed(2)}</span><span className="stat-label">Tracked Value</span></div></div>
        <div className="stat-card"><div><span className={`stat-num ${gain >= 0 ? 'up' : 'down'}`}>{gain >= 0 ? '+' : ''}${gain.toFixed(2)}</span><span className="stat-label">Paper Gain/Loss</span></div></div>
      </div>

      <form className="portfolio-form" onSubmit={addHolding}>
        <input value={ticker} onChange={(e) => setTicker(e.target.value)} placeholder="Ticker e.g. NVDA" />
        <input type="number" min="0.01" step="0.01" value={shares} onChange={(e) => setShares(e.target.value)} placeholder="Shares" />
        <button className="button button-yellow" type="submit"><Plus size={16} /> Add Paper Holding</button>
      </form>

      <section className="dashboard-card">
        <div className="watchlist">
          {holdings.length === 0 && <p className="empty-state">Add a paper holding to start tracking a practice portfolio.</p>}
          {holdings.map(h => (
            <div className="stock-row" key={h.id}>
              <div className="ticker">{h.ticker}</div>
              <div className="stock-info"><strong>{h.shares} shares</strong><span>Entry: ${h.entryPrice.toFixed(2)}</span></div>
              <PriceTag data={prices[h.ticker] || { price: h.entryPrice, change: 0, pct: 0 }} />
              <button className="icon-button" onClick={() => setHoldings(prev => prev.filter(x => x.id !== h.id))} aria-label="Remove holding"><Trash2 size={16} /></button>
            </div>
          ))}
        </div>
      </section>
      <p className="dash-note">Paper portfolio data saves in this browser only using localStorage.</p>
    </main>
  );
}
