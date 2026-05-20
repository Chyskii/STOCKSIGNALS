import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { LINKS } from '../data/siteLinks.js';

export default function Disclaimer() {
  return (
    <main className="main">
      <div className="glow glow-one" />

      <div className="page-header">
        <h2>Disclaimer</h2>
        <span className="page-sub">Please read before using this site</span>
      </div>

      <article className="disclaimer-page">
        <div className="disclaimer-icon"><ShieldCheck size={32} /></div>

        <section className="disclaimer-section">
          <h3>Not Financial Advice</h3>
          <p>All content published on Stock Signals &mdash; including but not limited to watchlists, market signals, newsletter content, educational articles, dashboard data, and community discussions &mdash; is provided for <strong>informational and educational purposes only</strong>.</p>
          <p>Nothing on this site constitutes personalized financial advice, investment recommendations, buy/sell instructions, or a solicitation to trade any security. Past performance is not indicative of future results.</p>
        </section>

        <section className="disclaimer-section">
          <h3>Do Your Own Research</h3>
          <p>Always conduct your own independent research before making any investment decision. Consider your personal financial situation, risk tolerance, investment timeline, and consult with a licensed financial advisor or investment professional before acting on any information found on this site.</p>
        </section>

        <section className="disclaimer-section">
          <h3>Data Accuracy</h3>
          <p>Market data displayed on this site is sourced from third-party providers and is provided on a delayed or best-effort basis. Stock Signals makes no guarantee as to the accuracy, completeness, or timeliness of any price data, financial metrics, or other market information. Always verify data through your brokerage or official financial data sources.</p>
        </section>

        <section className="disclaimer-section">
          <h3>No Liability</h3>
          <p>Stock Signals and its operators accept no liability for any financial loss, investment decisions, or other damages arising from use of this website or its content. By using this site, you acknowledge that all investment decisions are made entirely at your own risk.</p>
        </section>

        <section className="disclaimer-section">
          <h3>Affiliate &amp; Advertising Disclosure</h3>
          <p>This site may contain affiliate links or sponsored content. Any such content will be clearly disclosed. Sponsored content does not constitute an endorsement or recommendation.</p>
        </section>

        <section className="disclaimer-section">
          <h3>Jurisdiction</h3>
          <p>This site is operated from Canada. Content is intended for general audiences and may not be applicable in all jurisdictions. Users are responsible for understanding the laws and regulations applicable to investing in their own region.</p>
        </section>

        {LINKS.ownerEmail && (
          <section className="disclaimer-section">
            <h3>Contact</h3>
            <p>Questions about this disclaimer? <a href={`mailto:${LINKS.ownerEmail}`} className="text-link">{LINKS.ownerEmail}</a></p>
          </section>
        )}

        <p className="disclaimer-updated">Last updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </article>
    </main>
  );
}
