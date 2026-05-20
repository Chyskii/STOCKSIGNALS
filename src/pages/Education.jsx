import React, { useState } from 'react';
import { BookOpen, TrendingUp, CircleDollarSign, Shield, BarChart3, RefreshCw } from 'lucide-react';

const LESSONS = [
  {
    icon: TrendingUp,
    title: 'Long-Term Investing',
    slug: 'long-term',
    summary: 'Why time in the market beats timing the market.',
    content: `Long-term investing is one of the most reliable wealth-building strategies available to everyday investors. Rather than trying to predict short-term price movements, long-term investors focus on the underlying value of companies and allow compounding to work over decades.

Key principles:
• Start early — even small amounts grow significantly over 20–30 years
• Stay consistent — dollar-cost averaging smooths out volatility
• Ignore short-term noise — corrections are normal, bear markets recover
• Diversify — spread risk across sectors and geographies

The S&P 500 has historically returned approximately 10% annually before inflation. That means $10,000 invested at 25 can grow to over $170,000 by age 65 — without adding a single dollar.`
  },
  {
    icon: CircleDollarSign,
    title: 'Dividends Explained',
    slug: 'dividends',
    summary: 'How dividend investing builds passive income over time.',
    content: `Dividends are a portion of a company's profits distributed to shareholders, typically quarterly. They represent a reliable income stream and signal financial health.

Why dividends matter:
• Passive income — cash deposited into your account regularly
• Compounding power — reinvested dividends buy more shares
• Stability signal — companies that raise dividends year over year are typically financially strong
• Inflation hedge — growing dividends can keep pace with rising costs

Key metrics to watch:
• Dividend Yield: annual dividend ÷ stock price (higher isn't always better)
• Payout Ratio: % of earnings paid as dividends (under 60% is generally sustainable)
• Dividend Growth Rate: how fast the dividend has increased year over year

Look for "Dividend Aristocrats" — companies that have raised their dividend for 25+ consecutive years.`
  },
  {
    icon: Shield,
    title: 'Understanding Risk',
    slug: 'risk',
    summary: 'Every investment carries risk. Learn to manage it, not avoid it.',
    content: `Risk is unavoidable in investing — but it's also manageable. The key is understanding the types of risk and building a strategy that matches your comfort level and timeline.

Types of investment risk:
• Market risk — the entire market falls (2008, 2020)
• Company risk — a single stock crashes due to bad earnings or scandal
• Sector risk — a whole industry faces headwinds (e.g., oil price drops)
• Liquidity risk — you can't sell quickly without losing value
• Inflation risk — your returns don't keep pace with rising prices

Risk management strategies:
• Diversification across sectors and asset classes
• Position sizing — never put more than 5–10% in a single stock
• Time horizon — longer timelines absorb volatility better
• Emergency fund — always have 3–6 months of expenses in cash before investing

Remember: volatility is not the same as loss. A stock that drops 20% and recovers is volatility. A company that goes bankrupt is a loss.`
  },
  {
    icon: BarChart3,
    title: 'Reading Market Signals',
    slug: 'signals',
    summary: 'What the market is actually telling you — and how to listen.',
    content: `Markets are driven by expectations, not just reality. Understanding what signals to watch — and what to ignore — is a core investing skill.

Signals worth watching:
• Earnings reports — did the company beat or miss expectations?
• Revenue guidance — are they expecting growth or contraction?
• Fed policy — interest rate decisions affect every asset class
• Sector rotation — where is institutional money moving?
• Volume spikes — unusual trading volume often precedes big moves

Signals to be cautious about:
• Social media hype — retail sentiment drives short squeezes, not fundamentals
• Single-analyst upgrades — one opinion is not a thesis
• Price momentum alone — stocks can keep going up or down well past "reasonable"

Build a signal framework:
1. What does the company actually do?
2. Is the sector growing or shrinking?
3. Are earnings growing?
4. What's the valuation relative to peers?
5. What could go wrong?`
  },
  {
    icon: RefreshCw,
    title: 'Market Cycles',
    slug: 'cycles',
    summary: 'Bull markets, bear markets, and everything in between.',
    content: `Markets move in cycles — understanding where we are in the cycle helps you make better decisions.

The four phases:
1. Accumulation — institutional investors quietly buy after a downturn; prices are flat or slightly rising
2. Markup — prices rise strongly; retail investors start entering; media attention increases
3. Distribution — smart money starts selling; prices are high; euphoria peaks
4. Markdown — prices fall; fear takes over; retail investors often sell at the worst time

How to use cycle awareness:
• Don't panic sell in the markdown phase — it often precedes recovery
• Be cautious when everyone is euphoric — that's often peak distribution
• Look for value in beaten-down sectors during accumulation
• Dollar-cost averaging works across all phases

Historical context: The average bear market lasts 9–16 months. The average bull market lasts 2.7 years. Long-term investors who stayed invested through all cycles have historically come out ahead.`
  },
  {
    icon: Shield,
    title: 'Responsible Investing',
    slug: 'responsible',
    summary: 'Building wealth without gambling your financial future.',
    content: `Investing is a long game. The biggest mistakes happen when investors treat it like gambling, let emotion drive decisions, or invest money they can't afford to lose.

Ground rules for responsible investing:
• Never invest money you need within the next 1–2 years
• Maintain a 3–6 month emergency fund in cash before investing
• Understand what you're buying — if you can't explain it, don't buy it
• Be skeptical of "guaranteed returns" — they don't exist in investing
• Tax-sheltered accounts first (TFSA, RRSP in Canada; 401k, IRA in the US)

Avoiding common mistakes:
• Chasing performance — last year's winner is rarely next year's
• Overtrading — transaction costs and taxes erode returns
• Emotional decisions — fear and greed are your biggest enemies
• Concentration risk — all-in on one stock or sector
• Ignoring fees — a 1% expense ratio on $100k costs $1,000/year

This site is an educational resource. Always consult a licensed financial advisor before making investment decisions.`
  },
];

export default function Education() {
  const [open, setOpen] = useState(null);

  return (
    <main className="main">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <div className="page-header">
        <h2>Education</h2>
        <span className="page-sub">Beginner-friendly investing fundamentals</span>
      </div>

      <div className="edu-grid">
        {LESSONS.map((lesson) => {
          const Icon = lesson.icon;
          const isOpen = open === lesson.slug;
          return (
            <article key={lesson.slug} className={`edu-card ${isOpen ? 'expanded' : ''}`}>
              <div className="edu-card-header" onClick={() => setOpen(isOpen ? null : lesson.slug)}>
                <div className="edu-icon"><Icon size={22} /></div>
                <div className="edu-meta">
                  <h3>{lesson.title}</h3>
                  <p>{lesson.summary}</p>
                </div>
                <span className="edu-toggle">{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && (
                <div className="edu-content">
                  {lesson.content.split('\n').map((line, i) => (
                    line.trim() === '' ? <br key={i} /> :
                    line.startsWith('•') ? <li key={i}>{line.slice(1).trim()}</li> :
                    line.match(/^\d\./) ? <li key={i}>{line.slice(2).trim()}</li> :
                    line.endsWith(':') ? <h4 key={i}>{line}</h4> :
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="edu-disclaimer">
        <BookOpen size={20} />
        <p>All educational content on this page is for general informational purposes only and does not constitute personalized financial advice. <a href="/disclaimer" className="text-link">Read full disclaimer &rarr;</a></p>
      </div>
    </main>
  );
}
