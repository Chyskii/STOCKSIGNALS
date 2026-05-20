import React from 'react';
import { Users, Newspaper, MessageCircle, Star } from 'lucide-react';
import NewsletterForm from '../components/NewsletterForm.jsx';
import { LINKS } from '../data/siteLinks.js';

const BENEFITS = [
  'Live market discussion with fellow investors',
  'Weekly watchlist breakdowns and signal alerts',
  'Beginner-friendly Q&A channels',
  'Dividend and AI sector deep dives',
  'No hype — just research and education',
  'Early access to new features and content',
];

export default function Community() {
  return (
    <main className="main">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <div className="page-header">
        <h2>Community</h2>
        <span className="page-sub">Connect with investors who think long-term</span>
      </div>

      <div className="community-grid">
        <article className="wide-card community-card">
          <div className="section-title"><Users size={24} /><h3>Discord Room</h3></div>
          <p>Join a private community of investors focused on AI stocks, dividend ideas, and long-term wealth building. No noise. No hype. Just signals.</p>

          <ul className="benefit-list">
            {BENEFITS.map(b => (
              <li key={b}><Star size={14} className="benefit-star" />{b}</li>
            ))}
          </ul>

          {LINKS.discordInvite ? (
            <a className="button button-violet" href={LINKS.discordInvite} target="_blank" rel="noopener noreferrer">
              Join Discord Community
            </a>
          ) : (
            <div className="coming-soon-block">
              <span className="coming-soon-badge">Coming Soon</span>
              <p>Discord community launching soon. Join the newsletter to be first in.</p>
            </div>
          )}
        </article>

        <article className="wide-card">
          <div className="section-title"><Newspaper size={24} /><h3>Stock Signals Weekly</h3></div>
          <p>A weekly newsletter covering AI trends, dividend watchlists, major sector moves, and the signals worth paying attention to.</p>
          <NewsletterForm />
          <div className="mini-grid" style={{ marginTop: 20 }}>
            <span>AI + semiconductor trends</span>
            <span>Dividend spotlight</span>
            <span>Long-term investor notes</span>
          </div>
        </article>
      </div>

      <section className="dash-section">
        <h3 className="section-heading"><MessageCircle size={18} /> What to Expect</h3>
        <div className="expect-grid">
          {[
            { title: 'No Financial Advice',    desc: 'This is an education and discussion community — not a trading room or signal service.' },
            { title: 'Respectful Discussion',  desc: 'All skill levels welcome. Beginners encouraged. Toxic behaviour not tolerated.' },
            { title: 'Research First',         desc: 'We talk about companies, trends, and data — not pump-and-dump schemes or meme stocks.' },
            { title: 'Long-Term Mindset',      desc: 'Our community is built around sustainable, patient investing — not chasing short-term gains.' },
          ].map(e => (
            <div className="expect-card" key={e.title}>
              <h4>{e.title}</h4>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
