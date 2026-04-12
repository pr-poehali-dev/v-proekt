const tickers = [
  { symbol: "EUR/USD", price: "1.0847", change: "+0.23%", up: true },
  { symbol: "GBP/USD", price: "1.2634", change: "-0.11%", up: false },
  { symbol: "USD/JPY", price: "149.82", change: "+0.34%", up: true },
  { symbol: "BTC/USD", price: "67,240", change: "+1.87%", up: true },
  { symbol: "ETH/USD", price: "3,182", change: "+2.14%", up: true },
  { symbol: "GOLD", price: "2,341", change: "-0.08%", up: false },
  { symbol: "S&P 500", price: "5,234", change: "+0.52%", up: true },
  { symbol: "OIL/WTI", price: "83.47", change: "-0.31%", up: false },
  { symbol: "USD/RUB", price: "91.45", change: "+0.12%", up: true },
  { symbol: "AUD/USD", price: "0.6512", change: "-0.19%", up: false },
];

export default function MarketTicker() {
  const doubled = [...tickers, ...tickers];

  return (
    <div className="overflow-hidden border-b" style={{ borderColor: 'var(--forum-border)', background: 'var(--forum-surface)' }}>
      <div className="ticker-track flex items-center gap-8 py-2 px-4 whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="mono text-xs" style={{ color: 'var(--forum-text-dim)' }}>{t.symbol}</span>
            <span className="mono text-xs font-medium" style={{ color: 'var(--forum-text)' }}>{t.price}</span>
            <span className="mono text-xs font-semibold" style={{ color: t.up ? 'var(--forum-green)' : 'var(--forum-red)' }}>
              {t.change}
            </span>
            <span className="mx-2" style={{ color: 'var(--forum-text-muted)' }}>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
