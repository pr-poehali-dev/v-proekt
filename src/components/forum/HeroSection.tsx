import Icon from '@/components/ui/icon';

interface HeroProps {
  onNav: (section: string) => void;
}

export default function HeroSection({ onNav }: HeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--forum-bg)', minHeight: '100vh' }}>

      {/* Radial glow top-center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,95,212,0.35) 0%, transparent 70%)',
        }}
      />
      {/* Side glow right */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: 0, top: '20%', width: '40%', height: '60%',
          background: 'radial-gradient(ellipse at right, rgba(124,95,212,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-0 text-center">

        {/* Main headline */}
        <h1
          className="font-black leading-tight mb-4"
          style={{
            fontFamily: 'Golos Text, sans-serif',
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            color: '#ffffff',
            letterSpacing: '-0.02em',
          }}
        >
          Сигнальные<br />
          <span style={{ color: 'var(--forum-green)' }}>боты, графики</span><br />
          и торговый дневник
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-10"
          style={{
            fontFamily: 'Golos Text, sans-serif',
            color: 'var(--forum-text-dim)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: '480px',
          }}
        >
          Автоматические сигналы, продвинутые графики и управление<br className="hidden sm:block" />
          ставками — прямо в браузере, на любом устройстве.
        </p>

        {/* CTA */}
        <button
          onClick={() => onNav('strategies')}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90 hover:scale-[1.02] mb-12"
          style={{
            background: 'rgba(124,95,212,0.75)',
            color: '#ffffff',
            border: '1px solid rgba(196,181,253,0.3)',
            cursor: 'pointer',
            fontFamily: 'Golos Text, sans-serif',
            backdropFilter: 'blur(8px)',
            fontSize: '1rem',
          }}
        >
          <Icon name="Rocket" size={18} />
          Подключиться бесплатно
        </button>

        {/* Platform screenshot mockup */}
        <div
          className="relative mx-auto rounded-xl overflow-hidden"
          style={{
            maxWidth: '900px',
            border: '1px solid rgba(255,255,255,0.08)',
            background: '#0d0d18',
            boxShadow: '0 0 80px rgba(124,95,212,0.15), 0 40px 80px rgba(0,0,0,0.6)',
          }}
        >
          {/* Fake browser bar */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ background: '#13131f', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            </div>
            <div className="flex items-center gap-3 ml-3 flex-1">
              <span className="mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>+ Screen</span>
              <span className="mono text-xs ml-auto" style={{ color: 'rgba(255,255,255,0.3)' }}>⊕ ⊞</span>
            </div>
          </div>

          {/* Charts grid */}
          <div className="grid grid-cols-2" style={{ minHeight: '360px' }}>
            {[
              { pair: 'CAD/JPY OTC', pct: '92%', tf: 'M2', color: '#26d97f', signal: 'BUY', up: true },
              { pair: 'GBP/AUD OTC', pct: '92%', tf: 'M2', color: '#ff5555', signal: 'SELL', up: false },
              { pair: 'GBP/USD OTC', pct: '92%', tf: 'M2', color: '#26d97f', signal: 'BUY', up: true },
              { pair: 'NZD/JPY OTC', pct: '92%', tf: 'M2', color: '#26d97f', signal: null, up: true },
            ].map((chart, i) => (
              <div
                key={i}
                className="relative p-3"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
              >
                {/* Chart header */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="mono text-xs font-semibold" style={{ color: '#ffffff' }}>{chart.pair}</span>
                  <span className="mono text-xs px-1.5 py-0.5 rounded" style={{ background: 'rgba(124,95,212,0.2)', color: 'var(--forum-green)' }}>{chart.pct}</span>
                  <span className="mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{chart.tf}</span>
                </div>

                {/* Fake candlestick chart */}
                <div className="relative" style={{ height: '120px' }}>
                  <svg width="100%" height="100%" viewBox="0 0 300 120" preserveAspectRatio="none">
                    {/* Moving averages */}
                    {[
                      { d: 'M0,90 C40,85 80,75 120,70 C160,65 200,55 240,50 C260,47 280,45 300,42', c: '#ff7f7f', o: 0.5 },
                      { d: 'M0,85 C40,80 80,68 120,62 C160,56 200,46 240,42 C260,39 280,37 300,36', c: '#ffaa7f', o: 0.4 },
                      { d: 'M0,80 C40,74 80,62 120,56 C160,50 200,42 240,38 C260,36 280,35 300,33', c: '#ffdd7f', o: 0.4 },
                      { d: 'M0,75 C40,68 80,56 120,50 C160,44 200,38 240,35 C260,33 280,32 300,31', c: '#7fff7f', o: 0.4 },
                      { d: 'M0,70 C40,63 80,52 120,46 C160,40 200,35 240,32 C260,30 280,29 300,28', c: '#7fffff', o: 0.4 },
                    ].map((line, li) => (
                      <path key={li} d={line.d} stroke={line.c} strokeWidth="1" fill="none" opacity={line.o} />
                    ))}

                    {/* Candles */}
                    {Array.from({ length: 20 }).map((_, ci) => {
                      const x = ci * 14 + 10;
                      const isGreen = Math.random() > 0.45;
                      const open = 50 + Math.random() * 40;
                      const close = open + (isGreen ? 1 : -1) * (5 + Math.random() * 15);
                      const high = Math.min(open, close) - 3 - Math.random() * 5;
                      const low = Math.max(open, close) + 3 + Math.random() * 5;
                      return (
                        <g key={ci}>
                          <line x1={x} y1={high} x2={x} y2={low} stroke={isGreen ? '#26d97f' : '#ff5555'} strokeWidth="1" />
                          <rect x={x - 3} y={Math.min(open, close)} width="6" height={Math.max(Math.abs(close - open), 2)} fill={isGreen ? '#26d97f' : '#ff5555'} />
                        </g>
                      );
                    })}
                  </svg>

                  {/* Signal badge */}
                  {chart.signal && (
                    <div
                      className="absolute bottom-2 left-2 mono text-xs px-2 py-0.5 rounded font-bold"
                      style={{
                        background: chart.up ? 'rgba(38,217,127,0.15)' : 'rgba(255,85,85,0.15)',
                        color: chart.up ? '#26d97f' : '#ff5555',
                        border: `1px solid ${chart.up ? 'rgba(38,217,127,0.3)' : 'rgba(255,85,85,0.3)'}`,
                      }}
                    >
                      {chart.up ? '▲' : '▼'} {chart.signal}
                    </div>
                  )}
                </div>

                {/* RSI mini */}
                <div style={{ height: '24px', marginTop: '4px' }}>
                  <svg width="100%" height="24" viewBox="0 0 300 24" preserveAspectRatio="none">
                    <path d="M0,12 C30,8 60,16 90,10 C120,4 150,18 180,12 C210,6 240,14 270,10 C285,8 295,11 300,10" stroke={chart.color} strokeWidth="1.5" fill="none" opacity="0.7" />
                    <path d="M0,18 C30,14 60,20 90,16 C120,12 150,22 180,18 C210,14 240,20 270,16 C285,14 295,17 300,16" stroke="#8877cc" strokeWidth="1" fill="none" opacity="0.5" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
