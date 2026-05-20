import React from 'react';
import { ArrowRight, BarChart3, Bell, Brain, CircleDollarSign, Newspaper, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import NewsletterForm from '../components/NewsletterForm.jsx';
import PriceTag from '../components/PriceTag.jsx';
import { useLivePrices } from '../hooks/useLivePrices.js';
import { WATCHLIST } from '../data/stocks.js';
import { LINKS } from '../data/siteLinks.js';

const FEATURES = [
  { icon: TrendingUp,       title: 'Market Signals',   text: 'Track trending sectors, AI momentum, tech rotation, earnings moves, and major market shifts.' },
  { icon: CircleDollarSign, title: 'Dividend Watch',   text: 'Compare dividend yield, payout stability, growth history, and long-term income potential.' },
  { icon: Brain,            title: 'AI + Future Tech', text: 'Follow semiconductors, cloud, data centers, cybersecurity, energy demand, and automation trends.' },
  { icon: Bell,             title: 'Watchlist Alerts', text: 'Create simple signals for what to watch, what needs research, and what may be getting overheated.' },
];

export default function Home() {
  const tickers = WATCHLIST.map(w => w.ticker);
  const prices = useLivePrices(tickers);

  return (
    <>
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <div className="glow glow-three" />

      <main className="main">
        <section className="hero">
          <div className="hero-copy">
            <div className="pill"><BarChart3 size={16} /> Private market intelligence dashboard</div>
            <h2>Track trends. Read the signals. Invest with intention.</h2>
            <p>A clean, beginner-friendly investment intelligence hub for AI stocks, dividend ideas, tech trends, market watchlists, and long-term investor education.</p>
            <div className="actions">
              <a className="button button-yellow" href="#newsletter">Get Weekly Signals <ArrowRight size={16} /></a>
              <a className="button button-outline" href="/dashboard">Enter Dashboard</a>
              <a className="button button-outline" href="/screener">Open Screener</a>
            </div>
            <small>Educational resource only. Not financial advice. Always do your own research.</small>
          </div>

          <div className="dashboard-card" id="dashboard-preview">
            <div className="card-head">
              <div>
                <span>Dashboard Preview</span>
                <h3>Today's Watchlist</h3>
              </div>
              <b className="live-badge">Live MVP</b>
            </div>
            <div className="watchlist">
              {WATCHLIST.map((item) => (
                <div className="stock-row" key={item.ticker}>
                  <div className="ticker">{item.ticker}</div>
                  <div className="stock-info">
                    <strong>{item.label}</strong>
                    <span>{item.note}</span>
                  </div>
                  <PriceTag data={prices[item.ticker]} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="path-strip">
        <a href="/education">Beginner Learn Mode</a>
        <a href="/watchlist">AI Watchlists</a>
        <a href="/screener">Research Screener</a>
        <a href="/portfolio">Paper Portfolio</a>
      </section>

        <section className="feature-grid">
          {FEATURES.map(({ icon: Icon, title, text }) => (
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
            <NewsletterForm />
            <div className="mini-grid">
              <span>AI + semiconductor trends</span>
              <span>Dividend spotlight</span>
              <span>Long-term investor notes</span>
            </div>
          </article>

          <article className="wide-card community" id="community-section">
            <div className="section-title"><Users size={24} /><h3>Discord Room</h3></div>
            <p>A private community for market discussion, watchlist notes, alerts, and beginner-friendly investing education.</p>
            <a
              className="button button-violet"
              href={LINKS.discordInvite || '#community-section'}
              target={LINKS.discordInvite ? '_blank' : undefined}
              rel="noopener noreferrer"
            >
              Join Community
            </a>
          </article>
        </section>

        <section className="disclaimer">
          <ShieldCheck size={26} />
          <div>
            <h3>Responsible Investing Note</h3>
            <p>Stock Signals is for education, research organization, and market awareness only. It does not provide personalized financial advice, buy/sell instructions, or guaranteed returns. Always verify data and speak with a licensed financial professional before making investment decisions. <a href="/disclaimer" className="text-link">Read full disclaimer &rarr;</a></p>
          </div>
        </section>
      </main>
    </>
  );
}
