import Icon from '@/components/ui/icon';

function MiniChart({ color, up }: { color: string; up: boolean }) {
  return (
    <svg width="100%" height="48" viewBox="0 0 120 48" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {up
        ? <>
            <path d="M0,40 C20,35 40,25 60,20 C80,15 100,10 120,6" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M0,40 C20,35 40,25 60,20 C80,15 100,10 120,6 L120,48 L0,48 Z" fill={`url(#grad-${color})`} />
          </>
        : <>
            <path d="M0,6 C20,10 40,20 60,26 C80,32 100,38 120,42" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M0,6 C20,10 40,20 60,26 C80,32 100,38 120,42 L120,48 L0,48 Z" fill={`url(#grad-${color})`} />
          </>
      }
    </svg>
  );
}

const bots = [
  { name: 'MACD Cross Pro', type: 'BOT', color: '#888', active: false },
  { name: 'RSI Divergence v3', type: 'IND', color: '#888', active: false },
  { name: 'Bollinger Squeeze', type: 'APPLIED', color: '#f59e0b', active: true },
  { name: 'Stochastic Pro+', type: 'IND', color: '#26d97f', active: false },
  { name: 'EMA Ribbon Scalper', type: 'BOT', color: '#ff5555', active: false },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6" style={{ background: 'var(--forum-bg)' }}>
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Row 1: Multigrids + Mass actions */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Мультиграфики — wide */}
          <div className="lg:col-span-3 forum-card p-6" style={{ background: 'var(--forum-surface)' }}>
            {/* Mini charts grid */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { pair: 'EUR/USD', tf: '1м', color: '#26d97f', up: true },
                { pair: 'GBP/JPY', tf: '1м', color: '#ff5555', up: false },
                { pair: 'USD/CHF', tf: '1м', color: '#26d97f', up: true },
                { pair: 'EUR/HUF_otc', tf: '1м', color: '#ff5555', up: false },
                { pair: 'USD/CNH_otc', tf: '1м', color: '#c4b5fd', up: true },
                { pair: 'AUD/CAD_otc', tf: '1м', color: '#26d97f', up: true },
              ].map((c) => (
                <div key={c.pair} className="rounded-lg p-2" style={{ background: 'var(--forum-surface-2)', border: '1px solid var(--forum-border)' }}>
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                    <span className="mono text-xs truncate" style={{ color: 'var(--forum-text-dim)', fontSize: '10px' }}>{c.pair}</span>
                    <span className="mono ml-auto" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '9px' }}>{c.tf}</span>
                  </div>
                  <MiniChart color={c.color} up={c.up} />
                  {/* Volume bars */}
                  <div className="flex items-end gap-0.5 mt-1" style={{ height: '12px' }}>
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="flex-1 rounded-sm" style={{ height: `${30 + Math.random() * 70}%`, background: 'rgba(255,255,255,0.1)' }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mb-1">
              <Icon name="LayoutGrid" size={16} style={{ color: 'var(--forum-green)' }} />
              <h3 className="font-bold text-base" style={{ fontFamily: 'Golos Text, sans-serif', color: 'var(--forum-text)' }}>Мультиграфики</h3>
            </div>
            <p className="text-sm" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>
              До 15 графиков одновременно — сетка, вкладки или боковая панель под вашу задачу.
            </p>
          </div>

          {/* Массовые действия — narrow */}
          <div className="lg:col-span-2 forum-card p-6 flex flex-col" style={{ background: 'var(--forum-surface)' }}>
            {/* Mini 4-chart grid */}
            <div className="grid grid-cols-2 gap-2 mb-3 flex-1">
              {[
                { pair: 'EUR/USD', tf: 'M15', color: '#26d97f', up: true },
                { pair: 'BTC/USD', tf: 'M15', color: '#ff5555', up: false },
                { pair: 'GBP/JPY', tf: 'M15', color: '#26d97f', up: true },
                { pair: 'AUD/USD', tf: 'M15', color: '#ff5555', up: false },
              ].map((c) => (
                <div key={c.pair} className="rounded p-2" style={{ background: 'var(--forum-surface-2)', border: '1px solid var(--forum-border)' }}>
                  <div className="flex justify-between mb-1">
                    <span className="mono" style={{ color: 'var(--forum-text-dim)', fontSize: '9px' }}>{c.pair}</span>
                    <span className="mono" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '9px' }}>{c.tf}</span>
                  </div>
                  <MiniChart color={c.color} up={c.up} />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg mb-4" style={{ background: 'rgba(124,95,212,0.1)', border: '1px solid rgba(124,95,212,0.2)' }}>
              <Icon name="RefreshCw" size={12} style={{ color: 'var(--forum-green)' }} />
              <span className="mono text-xs" style={{ color: 'var(--forum-green)' }}>M15 → M5 &nbsp; 4 charts synced</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <Icon name="Layers" size={16} style={{ color: 'var(--forum-green)' }} />
              <h3 className="font-bold text-base" style={{ fontFamily: 'Golos Text, sans-serif', color: 'var(--forum-text)' }}>Массовые действия</h3>
            </div>
            <p className="text-sm" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>
              Смена таймфрейма или добавление бота применяется ко всем графикам сразу.
            </p>
          </div>
        </div>

        {/* Row 2: Каталог + Конструктор */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Каталог сообщества */}
          <div className="forum-card p-6" style={{ background: 'var(--forum-surface)' }}>
            <div className="space-y-1 mb-4">
              {bots.map((bot) => (
                <div
                  key={bot.name}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
                  style={{
                    background: bot.active ? 'rgba(245,158,11,0.06)' : 'transparent',
                    border: bot.active ? '1px solid rgba(245,158,11,0.2)' : '1px solid transparent',
                  }}
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: bot.color }} />
                  <span className="text-sm flex-1" style={{ color: bot.active ? '#ffffff' : 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif', fontWeight: bot.active ? 600 : 400 }}>
                    {bot.name}
                  </span>
                  <span
                    className="mono text-xs px-1.5 py-0.5 rounded"
                    style={{
                      color: bot.active ? '#f59e0b' : 'rgba(255,255,255,0.25)',
                      background: bot.active ? 'rgba(245,158,11,0.1)' : 'transparent',
                      fontSize: '10px',
                    }}
                  >
                    {bot.type}
                  </span>
                  <Icon name="Star" size={12} style={{ color: bot.active ? '#f59e0b' : 'rgba(255,255,255,0.15)' }} />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mb-1">
              <Icon name="BarChart3" size={16} style={{ color: 'var(--forum-green)' }} />
              <h3 className="font-bold text-base" style={{ fontFamily: 'Golos Text, sans-serif', color: 'var(--forum-text)' }}>Каталог сообщества</h3>
            </div>
            <p className="text-sm" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>
              Готовые стратегии от других трейдеров — добавляйте в избранное и применяйте на графиках.
            </p>
          </div>

          {/* Встроенный конструктор */}
          <div className="forum-card p-6 flex flex-col" style={{ background: 'var(--forum-surface)' }}>
            {/* Code preview */}
            <div className="rounded-lg p-4 mb-4 font-mono text-xs leading-relaxed" style={{ background: 'var(--forum-surface-2)', border: '1px solid var(--forum-border)', flex: 1 }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>macd-cross.js</span>
                <span className="px-2 py-0.5 rounded text-xs ml-auto" style={{ background: 'rgba(38,217,127,0.1)', color: '#26d97f', border: '1px solid rgba(38,217,127,0.2)' }}>✓ Скрипт распознан</span>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.35)', lineHeight: '1.8' }}>
                <span style={{ color: '#c4b5fd' }}>export const</span> <span style={{ color: '#7dd3fc' }}>meta</span> <span style={{ color: 'rgba(255,255,255,0.5)' }}>= {'{'}</span><br />
                &nbsp;&nbsp;<span style={{ color: '#86efac' }}>name</span><span style={{ color: 'rgba(255,255,255,0.4)' }}>: </span><span style={{ color: '#fde68a' }}>'MACD Cross'</span><span style={{ color: 'rgba(255,255,255,0.4)' }}>,</span><br />
                &nbsp;&nbsp;<span style={{ color: '#86efac' }}>defaultParams</span><span style={{ color: 'rgba(255,255,255,0.4)' }}>: {'{'}</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#86efac' }}>fast</span><span style={{ color: 'rgba(255,255,255,0.4)' }}>: </span><span style={{ color: '#fb923c' }}>12</span><span style={{ color: 'rgba(255,255,255,0.4)' }}>,</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#86efac' }}>slow</span><span style={{ color: 'rgba(255,255,255,0.4)' }}>: </span><span style={{ color: '#fb923c' }}>26</span><span style={{ color: 'rgba(255,255,255,0.4)' }}>,</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#86efac' }}>signal</span><span style={{ color: 'rgba(255,255,255,0.4)' }}>: </span><span style={{ color: '#fb923c' }}>9</span><br />
                &nbsp;&nbsp;<span style={{ color: 'rgba(255,255,255,0.4)' }}>{'}'}</span><br />
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>{'}'}</span>
              </div>
              {/* Params */}
              <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--forum-border)' }}>
                <div className="mono text-xs mb-2" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}>ПАРАМЕТРЫ</div>
                <div className="grid grid-cols-3 gap-2">
                  {[['FAST', '12'], ['SLOW', '26'], ['SIGNAL', '9']].map(([label, val]) => (
                    <div key={label} className="text-center py-1.5 rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--forum-border)' }}>
                      <div className="mono" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '9px' }}>{label}</div>
                      <div className="mono font-bold text-sm" style={{ color: '#ffffff' }}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <Icon name="Code2" size={16} style={{ color: 'var(--forum-green)' }} />
              <h3 className="font-bold text-base" style={{ fontFamily: 'Golos Text, sans-serif', color: 'var(--forum-text)' }}>Встроенный конструктор</h3>
            </div>
            <p className="text-sm" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>
              Редактор кода для сигнальных ботов и индикаторов — пишите на JavaScript, тестируйте и публикуйте.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
