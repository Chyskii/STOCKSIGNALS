import { useEffect, useMemo, useState } from 'react';

const MOCK_PRICES = {
  QQQ: 430.12, MU: 121.44, MRVL: 78.9, WDC: 70.21, NVDA: 125.61, AMD: 164.32,
  AVGO: 1390.5, MSFT: 424.58, AMZN: 185.73, GOOGL: 176.45, CRWD: 335.8, PANW: 302.4,
  ZS: 187.2, AAPL: 191.3, SCHD: 78.15,
};

function fallbackPrice(ticker) {
  const base = MOCK_PRICES[ticker] || 100;
  const swing = ((ticker.charCodeAt(0) + ticker.length) % 7) - 3;
  const change = base * (swing / 100);
  return { price: base + change, change, pct: swing };
}

export function useLivePrices(tickers = []) {
  const [prices, setPrices] = useState({});
  const key = useMemo(() => [...new Set(tickers)].sort().join(','), [tickers]);

  useEffect(() => {
    const unique = key ? key.split(',') : [];
    if (unique.length === 0) return;

    let cancelled = false;

    async function fetchAll() {
      const results = {};
      await Promise.all(unique.map(async (ticker) => {
        try {
          const res = await fetch(`/.netlify/functions/quote?ticker=${encodeURIComponent(ticker)}`);
          if (!res.ok) throw new Error('Quote unavailable');
          const data = await res.json();
          const meta = data?.chart?.result?.[0]?.meta;
          const price = Number(meta?.regularMarketPrice);
          const prev = Number(meta?.chartPreviousClose || meta?.previousClose);
          if (!Number.isFinite(price) || !Number.isFinite(prev) || prev === 0) throw new Error('Bad quote shape');
          const change = price - prev;
          const pct = (change / prev) * 100;
          results[ticker] = { price, change, pct, live: true };
        } catch {
          results[ticker] = { ...fallbackPrice(ticker), live: false };
        }
      }));
      if (!cancelled) setPrices(results);
    }

    fetchAll();
    const interval = setInterval(fetchAll, 60000);
    return () => { cancelled = true; clearInterval(interval); };
  }, [key]);

  return prices;
}
