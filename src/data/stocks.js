export const WATCHLIST = [
  { ticker: 'QQQ', label: 'Tech ETF', note: 'NASDAQ-100 exposure', category: 'ETF', risk: 'Moderate', aiScore: 72, dividendYield: 0.6, momentum: 76, valuation: 'Premium' },
  { ticker: 'MU', label: 'Micron', note: 'Memory + AI infrastructure', category: 'AI Chips', risk: 'High Volatility', aiScore: 82, dividendYield: 0.4, momentum: 81, valuation: 'Cyclical' },
  { ticker: 'MRVL', label: 'Marvell', note: 'Semiconductors + data centers', category: 'AI Chips', risk: 'High Volatility', aiScore: 78, dividendYield: 0.3, momentum: 74, valuation: 'Premium' },
  { ticker: 'WDC', label: 'Western Digital', note: 'Storage + cloud demand', category: 'Cloud', risk: 'High Volatility', aiScore: 69, dividendYield: 0, momentum: 66, valuation: 'Cyclical' },
  { ticker: 'NVDA', label: 'NVIDIA', note: 'AI hardware leader', category: 'AI Chips', risk: 'High Volatility', aiScore: 96, dividendYield: 0.03, momentum: 92, valuation: 'Premium' },
  { ticker: 'AMD', label: 'Advanced Micro Devices', note: 'AI chips + compute', category: 'AI Chips', risk: 'High Volatility', aiScore: 86, dividendYield: 0, momentum: 79, valuation: 'Growth' },
];

export const EXTENDED_WATCHLIST = [
  ...WATCHLIST,
  { ticker: 'AVGO', label: 'Broadcom', note: 'Custom AI chips + networking', category: 'AI Chips', risk: 'Moderate', aiScore: 88, dividendYield: 1.4, momentum: 84, valuation: 'Premium' },
  { ticker: 'MSFT', label: 'Microsoft', note: 'Azure + OpenAI investment', category: 'Cloud', risk: 'Lower Risk', aiScore: 91, dividendYield: 0.7, momentum: 77, valuation: 'Premium' },
  { ticker: 'AMZN', label: 'Amazon', note: 'AWS cloud dominance', category: 'Cloud', risk: 'Moderate', aiScore: 84, dividendYield: 0, momentum: 73, valuation: 'Growth' },
  { ticker: 'GOOGL', label: 'Alphabet', note: 'GCP + Gemini AI', category: 'Cloud', risk: 'Moderate', aiScore: 83, dividendYield: 0.5, momentum: 70, valuation: 'Reasonable' },
  { ticker: 'CRWD', label: 'CrowdStrike', note: 'AI-native cybersecurity', category: 'Cybersecurity', risk: 'High Volatility', aiScore: 79, dividendYield: 0, momentum: 82, valuation: 'Premium' },
  { ticker: 'PANW', label: 'Palo Alto', note: 'Enterprise security platform', category: 'Cybersecurity', risk: 'Moderate', aiScore: 74, dividendYield: 0, momentum: 72, valuation: 'Premium' },
  { ticker: 'ZS', label: 'Zscaler', note: 'Zero-trust cloud security', category: 'Cybersecurity', risk: 'High Volatility', aiScore: 71, dividendYield: 0, momentum: 68, valuation: 'Growth' },
  { ticker: 'AAPL', label: 'Apple', note: 'Dividend growth + buybacks', category: 'Dividend', risk: 'Lower Risk', aiScore: 67, dividendYield: 0.5, momentum: 63, valuation: 'Premium' },
  { ticker: 'SCHD', label: 'Schwab Dividend ETF', note: 'High-yield dividend ETF', category: 'ETF', risk: 'Lower Risk', aiScore: 32, dividendYield: 3.5, momentum: 58, valuation: 'Income' },
];

export const CATEGORIES = ['All', 'AI Chips', 'Cloud', 'Cybersecurity', 'Dividend', 'ETF'];

export const SIGNAL_CARDS = [
  { label: 'AI Momentum', status: 'Bullish', note: 'Semiconductor and infrastructure names remain the strongest theme.' },
  { label: 'Cloud Spend', status: 'Bullish', note: 'Enterprise AI workloads continue to support cloud demand.' },
  { label: 'Fed Rate Watch', status: 'Neutral', note: 'Rate expectations can affect high-growth tech valuations.' },
  { label: 'Earnings Season', status: 'Watch', note: 'Watch guidance, margins, AI revenue, and capex commentary.' },
];

export const GLOSSARY = [
  { term: 'Dividend Yield', definition: 'Annual dividend divided by share price. Higher yield is not always safer.' },
  { term: 'P/E Ratio', definition: 'Price divided by earnings. It helps compare valuation, but must be read with growth.' },
  { term: 'Volatility', definition: 'How much an investment moves up or down. Volatility is not the same as permanent loss.' },
  { term: 'Momentum', definition: 'A measure of recent price strength compared with prior movement.' },
  { term: 'Watchlist', definition: 'A saved list of stocks to research. It is not a buy list.' },
  { term: 'Risk Label', definition: 'A plain-English label that helps beginners understand how aggressive an idea may be.' },
];

export const WEEKLY_EVENTS = [
  { event: 'AI Infrastructure', detail: 'Follow chip, memory, networking, and data center demand.' },
  { event: 'Dividend Quality', detail: 'Focus on payout stability, cash flow, and dividend growth.' },
  { event: 'Macro Watch', detail: 'Rates, inflation, and earnings guidance may drive market mood.' },
];
