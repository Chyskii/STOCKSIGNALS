import React from 'react';
import { TrendingUp, TrendingDown, BarChart3, Brain, CircleDollarSign, Bell } from 'lucide-react';
import PriceTag from '../components/PriceTag.jsx';
import SignalCard from '../components/SignalCard.jsx';
import { useLivePrices } from '../hooks/useLivePrices.js';
import { WATCHLIST, SIGNAL_CARDS, WEEKLY_EVENTS } from '../data/stocks.js';

export default function Dashboard() {
  const tickers = WATCHLIST.map(w => w.ticker);
  const prices = useLivePrices(tickers);

  const priceList = Object.values(prices).filter(Boolean);
  const gainers = priceList.filter(p => p.change >= 0).length;
  const losers  = priceList.filter(p => p.change < 0).length;

  return (
    <main className="main page-dashboard">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <div className="page-header">
        <h2>Dashboard</h2>
        <span className="page-sub">Live market intelligence &mdash; refreshes every 60s</span>
      </div>


      <section className="market-mood">
        <div>
          <span className="mood-label">Market Mood</span>
          <h3>{gainers >= losers ? 'Constructive / Bullish Tilt' : 'Cautious / Risk-Off'}</h3>
          <p>{gainers >= losers ? 'More tracked names are green than red. Focus on confirmation, earnings quality, and risk control.' : 'More tracked names are declining. Watch volatility, position sizing, and major macro headlines.'}</p>
        </div>
        <div className="mood-meter"><i style={{ width: `${priceList.length ? Math.round((gainers / priceList.length) * 100) : 50}%` }} /></div>
      </section>

      <div className="stat-row">
        <div className="stat-card">
          <TrendingUp size={20} className="stat-icon up" />
          <div>
            <span className="stat-num up">{gainers}</span>
            <span className="stat-label">Gaining</span>
          </div>
        </div>
        <div className="stat-card">
          <TrendingDown size={20} className="stat-icon down" />
          <div>
            <span className="stat-num down">{losers}</span>
            <span className="stat-label">Declining</span>
          </div>
        </div>
        <div className="stat-card">
          <BarChart3 size={20} className="stat-icon neutral" />
          <div>
            <span className="stat-num neutral">{tickers.length}</span>
            <span className="stat-label">Tracked</span>
          </div>
        </div>
        <div className="stat-card">
          <Brain size={20} className="stat-icon yellow" />
          <div>
            <span className="stat-num yellow">AI</span>
            <span className="stat-label">Focus Sector</span>
          </div>
        </div>
      </div>

      <section className="dash-section">
        <h3 className="section-heading"><Bell size={18} /> Market Signals</h3>
        <div className="signal-grid">
          {SIGNAL_CARDS.map(s => <SignalCard key={s.label} {...s} />)}
        </div>
      </section>

      <section className="dash-section">
        <h3 className="section-heading"><BarChart3 size={18} /> Watchlist</h3>
        <div className="dashboard-card">
          <div className="watchlist">
            {WATCHLIST.map((item) => (
              <div className="stock-row" key={item.ticker}>
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
      </section>

      <section className="dash-section">
        <h3 className="section-heading"><CircleDollarSign size={18} /> Dividend Tracker</h3>
        <div className="dividend-grid">
          {[
            { ticker: 'AAPL', yield: '0.52%', frequency: 'Quarterly', stability: 'High' },
            { ticker: 'MSFT', yield: '0.74%', frequency: 'Quarterly', stability: 'High' },
            { ticker: 'SCHD', yield: '3.50%', frequency: 'Quarterly', stability: 'High' },
          ].map(d => (
            <div className="dividend-card" key={d.ticker}>
              <div className="ticker">{d.ticker}</div>
              <div className="div-detail"><span>Yield</span><strong>{d.yield}</strong></div>
              <div className="div-detail"><span>Frequency</span><strong>{d.frequency}</strong></div>
              <div className="div-detail"><span>Stability</span><strong className="up">{d.stability}</strong></div>
            </div>
          ))}
        </div>
      </section>


      <section className="dash-section">
        <h3 className="section-heading"><Brain size={18} /> Weekly Signal Report</h3>
        <div className="report-grid">
          {WEEKLY_EVENTS.map(item => (
            <div className="report-card" key={item.event}>
              <strong>{item.event}</strong>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="dash-note">Data is for educational purposes only. Not financial advice.</p>
    </main>
  );
}
