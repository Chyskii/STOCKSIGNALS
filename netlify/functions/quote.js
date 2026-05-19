export default async (req, context) => {
  const url = new URL(req.url);
  const ticker = url.searchParams.get('ticker');

  if (!ticker || !/^[A-Z0-9.^-]{1,10}$/i.test(ticker)) {
    return new Response(JSON.stringify({ error: 'Invalid ticker' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=1d`;

  try {
    const upstream = await fetch(yahooUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; StockSignals/1.0)',
        Accept: 'application/json',
      },
    });

    if (!upstream.ok) {
      return new Response(JSON.stringify({ error: 'Upstream error', status: upstream.status }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await upstream.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Fetch failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const config = { path: '/api/quote' };
