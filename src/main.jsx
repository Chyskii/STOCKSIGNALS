import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BarChart3, Bell, Brain, CandlestickChart, CircleDollarSign, Newspaper, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import './styles.css';

const watchlist = [
  { ticker: 'QQQ', label: 'Tech ETF', note: 'NASDAQ-100 exposure' },
  { ticker: 'MU', label: 'Micron', note: 'Memory + AI infrastructure' },
  { ticker: 'MRVL', label: 'Marvell', note: 'Semiconductors + data centers' },
  { ticker: 'WDC', label: 'Western Digital', note: 'Storage + cloud demand' },
  { ticker: 'NVDA', label: 'NVIDIA', note: 'AI hardware leader' },
  { ticker: 'AMD', label: 'Advanced Micro Devices', note: 'AI chips + compute' }
];

const sections = [
  { icon: TrendingUp, title: 'Market Signals', text: 'Track trending sectors, AI momentum, tech rotation, earnings moves, and major market shifts.' },
  { icon: CircleDollarSign, title: 'Dividend Watch', text: 'Compare dividend yield, payout stability, growth history, and long-term income potential.' },
  { icon: Brain, title: 'AI + Future Tech', text: 'Follow semiconductors, cloud, data centers, cybersecurity, energy demand, and automation trends.' },
  { icon: Bell, title: 'Watchlist Alerts', text: 'Create simple signals for what to watch, what needs research, and what may be getting overheated.' }
];

function App() {
  return (
    <div className="page">
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <div className="glow glow-three" />

      <header className="header">
        <div className="brand">
          <div className="brand-icon"><CandlestickChart size={22} /></div>
          <div>
            <h1>Stock Signals</h1>
            <p>Signals over noise.</p>
          </div>
        </div>
        <a className="button button-light" href="#newsletter">Join the Waitlist</a>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-copy">
            <div className="pill"><BarChart3 size={16} /> Private market intelligence dashboard</div>
            <h2>Track trends. Read the signals. Invest with intention.</h2>
            <p>
              A clean, beginner-friendly investment intelligence hub for AI stocks, dividend ideas, tech trends,
              market watchlists, and long-term investor education.
            </p>
            <div className="actions">
              <a className="button button-cyan" href="#newsletter">Get Weekly Signals <ArrowRight size={16} /></a>
              <a className="button button-outline" href="#dashboard">Enter Dashboard</a>
            </div>
            <small>Educational resource only. Not financial advice. Always do your own research.</small>
          </div>

          <div className="dashboard-card" id="dashboard">
            <div className="card-head">
              <div>
                <span>Dashboard Preview</span>
                <h3>Today’s Watchlist</h3>
              </div>
              <b>Live MVP</b>
            </div>
            <div className="watchlist">
              {watchlist.map((item) => (
                <div className="stock-row" key={item.ticker}>
                  <div className="ticker">{item.ticker}</div>
                  <div className="stock-info">
                    <strong>{item.label}</strong>
                    <span>{item.note}</span>
                  </div>
                  <em>Research</em>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-grid">
          {sections.map(({ icon: Icon, title, text }) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon"><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="split-section" id="newsletter">
          <article className="wide-card">
            <div className="section-title"><Newspaper size={24} /><h3>Stock Signals Weekly</h3></div>
            <p>A weekly newsletter covering AI trends, dividend watchlists, major sector moves, credible investor lessons, and the signals worth paying attention to.</p>
            <form className="signup" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" aria-label="Email address" />
              <button type="submit">Join Newsletter</button>
            </form>
            <div className="mini-grid">
              <span>AI + semiconductor trends</span>
              <span>Dividend spotlight</span>
              <span>Long-term investor notes</span>
            </div>
          </article>

          <article className="wide-card community">
            <div className="section-title"><Users size={24} /><h3>Discord Room</h3></div>
            <p>A private community for market discussion, watchlist notes, alerts, and beginner-friendly investing education.</p>
            <a className="button button-violet" href="#">Join Community</a>
          </article>
        </section>

        <section className="disclaimer">
          <ShieldCheck size={26} />
          <div>
            <h3>Responsible Investing Note</h3>
            <p>
              Stock Signals is for education, research organization, and market awareness only. It does not provide personalized financial advice,
              buy/sell instructions, or guaranteed returns. Always verify data and speak with a licensed financial professional before making investment decisions.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
