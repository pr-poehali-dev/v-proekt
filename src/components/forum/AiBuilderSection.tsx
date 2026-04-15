import Icon from '@/components/ui/icon';

const steps = [
  {
    num: 1,
    title: 'Опишите идею нейросети',
    content: (
      <div className="rounded-xl overflow-hidden" style={{ background: '#0d0d18', border: '1px solid rgba(255,255,255,0.07)' }}>
        {/* Window bar */}
        <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#13131f', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
          </div>
          <span className="mono text-xs ml-2" style={{ color: 'rgba(255,255,255,0.25)' }}>✦ AI Chat</span>
        </div>
        <div className="p-4 space-y-3">
          {/* User bubble */}
          <div className="flex justify-end">
            <div className="px-3 py-2 rounded-xl rounded-tr-sm text-sm max-w-xs" style={{ background: 'var(--forum-green)', color: '#07070d', fontFamily: 'Golos Text, sans-serif', fontSize: '13px' }}>
              Создай бот для MACD кроссовера с периодами 12, 26, 9
            </div>
          </div>
          {/* AI bubble */}
          <div>
            <div className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Golos Text, sans-serif' }}>Готовый код</div>
            <div className="rounded-lg p-3 font-mono text-xs leading-relaxed" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <span style={{ color: '#c4b5fd' }}>export const</span> <span style={{ color: '#7dd3fc' }}>meta</span> <span style={{ color: 'rgba(255,255,255,0.4)' }}>= {'{'}</span><br />
              &nbsp;&nbsp;<span style={{ color: '#86efac' }}>name</span><span style={{ color: 'rgba(255,255,255,0.4)' }}>: </span><span style={{ color: '#fde68a' }}>'MACD Cross'</span>,<br />
              &nbsp;&nbsp;<span style={{ color: '#86efac' }}>defaultParams</span><span style={{ color: 'rgba(255,255,255,0.4)' }}>: {'{'}</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#86efac' }}>fast</span>: <span style={{ color: '#fb923c' }}>12</span>, <span style={{ color: '#86efac' }}>slow</span>: <span style={{ color: '#fb923c' }}>26</span><br />
              &nbsp;&nbsp;<span style={{ color: 'rgba(255,255,255,0.4)' }}>{'}'}</span><br />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>{'}'}</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: 2,
    title: 'Вставьте код в конструктор',
    content: (
      <div className="rounded-xl overflow-hidden" style={{ background: '#0d0d18', border: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex items-center justify-between px-4 py-2.5" style={{ background: '#13131f', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <span className="mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>macd-cross.js</span>
          <span className="mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(38,217,127,0.1)', color: '#26d97f' }}>✓ Скрипт распознан</span>
        </div>
        <div className="p-4">
          <div className="font-mono text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {['export const meta = {', "  name: 'MACD Cross',", '  defaultParams: {', '    fast: 12, slow: 26,', '    signal: 9', '  }', '}'].map((line, i) => (
              <div key={i} className="flex gap-3">
                <span style={{ color: 'rgba(255,255,255,0.2)', minWidth: '16px' }}>{i + 1}</span>
                <span style={{ color: i === 0 || i === 6 ? '#c4b5fd' : i >= 3 && i <= 4 ? '#fde68a' : 'rgba(255,255,255,0.5)' }}>{line}</span>
              </div>
            ))}
          </div>
          <div className="mono text-xs mb-2" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}>ПАРАМЕТРЫ</div>
          <div className="grid grid-cols-3 gap-2">
            {[['FAST', '12'], ['SLOW', '26'], ['SIGNAL', '9']].map(([l, v]) => (
              <div key={l} className="text-center py-2 rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="mono" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '9px' }}>{l}</div>
                <div className="mono font-bold" style={{ color: '#ffffff' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    num: 3,
    title: 'Получайте сигналы на графике',
    content: (
      <div className="rounded-xl overflow-hidden" style={{ background: '#0d0d18', border: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex items-center justify-between px-4 py-2.5" style={{ background: '#13131f', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-2">
            <span className="mono text-xs" style={{ color: '#ffffff' }}>EUR/USD</span>
            <span className="mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>OTC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(124,95,212,0.2)', color: 'var(--forum-green)' }}>MACD Cross</span>
          </div>
        </div>
        <div className="p-4">
          {/* Chart */}
          <div style={{ height: '100px' }}>
            <svg width="100%" height="100" viewBox="0 0 300 100" preserveAspectRatio="none">
              {/* Candles */}
              {Array.from({ length: 22 }).map((_, i) => {
                const x = i * 13 + 6;
                const isG = [1,2,3,5,7,8,10,12,14,15,17,19,20].includes(i);
                const o = 40 + Math.sin(i * 0.5) * 20 + Math.random() * 10;
                const c = o + (isG ? 1 : -1) * (5 + Math.random() * 12);
                const h = Math.min(o, c) - 3;
                const l = Math.max(o, c) + 3;
                return (
                  <g key={i}>
                    <line x1={x} y1={h} x2={x} y2={l} stroke={isG ? '#26d97f' : '#ff5555'} strokeWidth="1" />
                    <rect x={x - 4} y={Math.min(o, c)} width="8" height={Math.max(Math.abs(c - o), 2)} fill={isG ? '#26d97f' : '#ff5555'} />
                  </g>
                );
              })}
              {/* BUY signal */}
              <text x="60" y="88" textAnchor="middle" fill="#26d97f" fontSize="8" fontFamily="monospace">▲</text>
              <text x="60" y="96" textAnchor="middle" fill="#26d97f" fontSize="7" fontFamily="monospace">BUY</text>
              {/* SELL signal */}
              <text x="200" y="18" textAnchor="middle" fill="#ff5555" fontSize="8" fontFamily="monospace">▼</text>
              <text x="200" y="12" textAnchor="middle" fill="#ff5555" fontSize="7" fontFamily="monospace">SELL</text>
            </svg>
          </div>
          {/* Signal list */}
          <div className="space-y-1.5 mt-2">
            {[
              { dir: 'BUY', pair: 'EUR/USD', time: '14:32', up: true },
              { dir: 'SELL', pair: 'EUR/USD', time: '14:38', up: false },
            ].map((s) => (
              <div key={s.time} className="flex items-center gap-3 px-3 py-2 rounded" style={{ background: s.up ? 'rgba(38,217,127,0.06)' : 'rgba(255,85,85,0.06)', border: `1px solid ${s.up ? 'rgba(38,217,127,0.15)' : 'rgba(255,85,85,0.15)'}` }}>
                <Icon name={s.up ? 'TrendingUp' : 'TrendingDown'} size={12} style={{ color: s.up ? '#26d97f' : '#ff5555' }} />
                <span className="mono text-xs font-bold" style={{ color: s.up ? '#26d97f' : '#ff5555' }}>{s.dir}</span>
                <span className="mono text-xs" style={{ color: 'var(--forum-text-dim)' }}>{s.pair}</span>
                <span className="mono text-xs ml-auto" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function AiBuilderSection() {
  return (
    <section className="py-20 px-4 sm:px-6" style={{ background: 'var(--forum-bg)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <div key={step.num}>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center mono text-xs font-bold flex-shrink-0"
                  style={{ background: 'var(--forum-green)', color: '#07070d' }}
                >
                  {step.num}
                </div>
                <span className="text-sm font-semibold" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
                  {step.title}
                </span>
              </div>
              {step.content}
            </div>
          ))}
        </div>

        {/* AI caption */}
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">✦</span>
            <h3 className="font-bold text-lg" style={{ fontFamily: 'Golos Text, sans-serif', color: 'var(--forum-text)' }}>
              AI напишет код за вас
            </h3>
          </div>
          <p className="text-sm" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif', lineHeight: 1.7 }}>
            Используйте готовые промпты или опишите идею в любой нейросети и вставьте результат в конструктор.
          </p>
        </div>
      </div>
    </section>
  );
}
