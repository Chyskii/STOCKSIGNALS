import React from 'react';

const STATUS_STYLES = {
  Bullish: { bg: 'rgba(74,222,128,.12)', color: '#4ade80', border: 'rgba(74,222,128,.2)' },
  Bearish: { bg: 'rgba(248,113,113,.12)', color: '#f87171', border: 'rgba(248,113,113,.2)' },
  Neutral: { bg: 'rgba(253,230,138,.12)', color: '#fde68a', border: 'rgba(253,230,138,.2)' },
  Watch:   { bg: 'rgba(196,181,253,.12)', color: '#c4b5fd', border: 'rgba(196,181,253,.2)' },
};

export default function SignalCard({ label, status, note }) {
  const style = STATUS_STYLES[status] || STATUS_STYLES.Neutral;
  return (
    <div className="signal-card">
      <div className="signal-top">
        <span className="signal-label">{label}</span>
        <span
          className="signal-status"
          style={{ background: style.bg, color: style.color, border: `1px solid ${style.border}` }}
        >
          {status}
        </span>
      </div>
      <p className="signal-note">{note}</p>
    </div>
  );
}
