import Icon from '@/components/ui/icon';

const strategies = [
  {
    title: 'Пин-бар разворот',
    category: 'Свечной анализ',
    author: 'TrendMaster_RU',
    winrate: 72,
    posts: 234,
    views: 18400,
    level: 'Средний',
    timeframe: 'M15–H1',
    description: 'Определение разворотных точек рынка через паттерн пин-бар на уровнях поддержки/сопротивления.',
    tags: ['Форекс', 'Индексы'],
    hot: true,
  },
  {
    title: 'Стратегия Bounceback',
    category: 'Технический анализ',
    author: 'binary_pro_2024',
    winrate: 68,
    posts: 178,
    views: 12800,
    level: 'Начинающий',
    timeframe: 'M5–M30',
    description: 'Торговля отбоя от уровней поддержки с подтверждением через RSI и объём.',
    tags: ['Форекс', 'Crypto'],
    hot: false,
  },
  {
    title: 'Новостная торговля',
    category: 'Фундаментал',
    author: 'NewsTrader_Pro',
    winrate: 65,
    posts: 312,
    views: 24100,
    level: 'Продвинутый',
    timeframe: '1–5 мин.',
    description: 'Вход на волатильности в первые минуты после выхода важных макроэкономических данных.',
    tags: ['Forex', 'Золото'],
    hot: false,
  },
  {
    title: 'Скользящие средние EMA',
    category: 'Индикаторный',
    author: 'AlgoSystem_77',
    winrate: 70,
    posts: 156,
    views: 9870,
    level: 'Средний',
    timeframe: 'H1–H4',
    description: 'Кросс EMA 9/21 с дополнительным фильтром тренда через ADX. Минимум ложных сигналов.',
    tags: ['Акции', 'Индексы'],
    hot: true,
  },
  {
    title: 'Мартингейл 2.0',
    category: 'Мани-менеджмент',
    author: 'RiskControl_M',
    winrate: 61,
    posts: 89,
    views: 7230,
    level: 'Продвинутый',
    timeframe: 'Любой',
    description: 'Модифицированная система мартингейла с жёстким stop-loss и максимумом 3 ступеней.',
    tags: ['Универсальная'],
    hot: false,
  },
  {
    title: 'VWAP + Полосы Боллинджера',
    category: 'Интрадей',
    author: 'DayTrader_X',
    winrate: 74,
    posts: 201,
    views: 15600,
    level: 'Средний',
    timeframe: 'M15–H1',
    description: 'Комбинирование VWAP и полос Боллинджера для определения оптимальных точек входа.',
    tags: ['Акции', 'Crypto'],
    hot: true,
  },
];

const levelColors: Record<string, { color: string; bg: string }> = {
  'Начинающий': { color: 'var(--forum-green)', bg: 'rgba(0,208,132,0.1)' },
  'Средний': { color: 'var(--forum-yellow)', bg: 'rgba(255,165,2,0.1)' },
  'Продвинутый': { color: 'var(--forum-red)', bg: 'rgba(255,71,87,0.1)' },
};

export default function StrategiesSection() {
  return (
    <section className="py-12 px-4 sm:px-6" style={{ background: 'var(--forum-bg)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
              Стратегии
            </h2>
            <p className="text-sm" style={{ color: 'var(--forum-text-dim)' }}>Проверенные методики от сообщества трейдеров</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="mono text-xs px-3 py-1.5 rounded transition-colors"
              style={{ background: 'var(--forum-surface)', border: '1px solid var(--forum-border)', color: 'var(--forum-text-dim)', cursor: 'pointer' }}
            >
              Все стратегии
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['Все', 'Горячие', 'Новые', 'Топ WinRate', 'Начинающим'].map((f, i) => (
            <button
              key={f}
              className="px-3 py-1.5 rounded text-xs font-medium transition-all"
              style={{
                background: i === 0 ? 'var(--forum-btn-bg)' : 'var(--forum-surface)',
                color: i === 0 ? 'var(--forum-btn-text)' : 'var(--forum-text-dim)',
                border: `1px solid ${i === 0 ? 'var(--forum-btn-bg)' : 'var(--forum-border)'}`,
                cursor: 'pointer',
                fontFamily: 'Golos Text, sans-serif',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strategies.map((s, i) => (
            <div key={i} className="forum-card p-5 cursor-pointer">
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <span className="mono text-xs px-2 py-0.5 rounded" style={{ background: 'var(--forum-surface-2)', color: 'var(--forum-text-dim)' }}>
                  {s.category}
                </span>
                <div className="flex items-center gap-1.5">
                  {s.hot && (
                    <span className="mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(255,71,87,0.15)', color: 'var(--forum-red)', border: '1px solid rgba(255,71,87,0.3)' }}>
                      🔥 ХИТ
                    </span>
                  )}
                  <span
                    className="mono text-xs px-2 py-0.5 rounded"
                    style={{ background: levelColors[s.level]?.bg, color: levelColors[s.level]?.color, border: `1px solid ${levelColors[s.level]?.color}30` }}
                  >
                    {s.level}
                  </span>
                </div>
              </div>

              <h3 className="font-bold text-base mb-2" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
                {s.title}
              </h3>

              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>
                {s.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {s.tags.map((tag) => (
                  <span key={tag} className="mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(0,208,132,0.06)', color: 'var(--forum-green)', border: '1px solid rgba(0,208,132,0.15)' }}>
                    {tag}
                  </span>
                ))}
                <span className="mono text-xs px-2 py-0.5 rounded" style={{ background: 'var(--forum-surface-2)', color: 'var(--forum-text-muted)' }}>
                  TF: {s.timeframe}
                </span>
              </div>

              {/* Stats row */}
              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--forum-border)' }}>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="mono text-xs" style={{ color: 'var(--forum-green)' }}>WR</span>
                    <span className="mono text-sm font-bold" style={{ color: 'var(--forum-green)' }}>{s.winrate}%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="MessageSquare" size={12} style={{ color: 'var(--forum-text-muted)' }} />
                    <span className="mono text-xs" style={{ color: 'var(--forum-text-dim)' }}>{s.posts}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Eye" size={12} style={{ color: 'var(--forum-text-muted)' }} />
                    <span className="mono text-xs" style={{ color: 'var(--forum-text-dim)' }}>{(s.views / 1000).toFixed(1)}K</span>
                  </div>
                </div>
                <span className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>@{s.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}