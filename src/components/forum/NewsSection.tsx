import Icon from '@/components/ui/icon';

const news = [
  {
    category: 'Макроэкономика',
    title: 'ФРС сохранила ставку на уровне 5.25–5.5%, намекнула на снижение в июне',
    time: '2 ч. назад',
    impact: 'high',
    excerpt: 'Федеральная резервная система оставила базовую ставку без изменений. Рынки отреагировали ростом S&P 500.',
    author: 'market_watch_pro',
    reads: 4820,
    comments: 87,
  },
  {
    category: 'Криптовалюты',
    title: 'Bitcoin пробил уровень $67,000 на фоне притока в ETF и сокращения предложения',
    time: '4 ч. назад',
    impact: 'high',
    excerpt: 'BTC обновил максимум с марта на фоне рекордных притоков в спотовые ETF и приближающегося халвинга.',
    author: 'crypto_signals_24',
    reads: 6340,
    comments: 143,
  },
  {
    category: 'Форекс',
    title: 'EUR/USD вернулся выше 1.085 после слабых данных по занятости в США',
    time: '6 ч. назад',
    impact: 'medium',
    excerpt: 'Пара EUR/USD показала резкий отскок после публикации NFP ниже прогноза — 175K против ожидаемых 240K.',
    author: 'forex_daily_ru',
    reads: 2180,
    comments: 34,
  },
  {
    category: 'Аналитика',
    title: 'Сезон отчётности Q1 2026: кто показал лучшие результаты среди техгигантов',
    time: '8 ч. назад',
    impact: 'medium',
    excerpt: 'Apple, Microsoft и Nvidia превысили ожидания аналитиков. Подробный разбор отчётов и влияние на рынок опционов.',
    author: 'earnings_hunter',
    reads: 3450,
    comments: 58,
  },
  {
    category: 'Золото',
    title: 'Золото консолидируется у $2,340 перед данными по инфляции CPI',
    time: '10 ч. назад',
    impact: 'low',
    excerpt: 'XAUUSD остаётся в узком диапазоне $2,320–$2,360. Трейдеры ждут данные по CPI в четверг.',
    author: 'gold_signal_ru',
    reads: 1760,
    comments: 22,
  },
];

const impactStyles: Record<string, { label: string; color: string; bg: string }> = {
  high: { label: '🔴 Высокий', color: 'var(--forum-red)', bg: 'rgba(255,71,87,0.1)' },
  medium: { label: '🟡 Средний', color: 'var(--forum-yellow)', bg: 'rgba(255,165,2,0.1)' },
  low: { label: '🟢 Низкий', color: 'var(--forum-green)', bg: 'rgba(0,208,132,0.1)' },
};

export default function NewsSection() {
  return (
    <section className="py-12 px-4 sm:px-6" style={{ background: 'var(--forum-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
              Новости рынков
            </h2>
            <p className="text-sm" style={{ color: 'var(--forum-text-dim)' }}>Актуальная аналитика и события, влияющие на торговлю</p>
          </div>
          <div className="mono text-xs px-3 py-1.5 rounded flex items-center gap-1.5" style={{ background: 'var(--forum-surface)', border: '1px solid var(--forum-border)', color: 'var(--forum-text-dim)' }}>
            <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--forum-green)' }}></div>
            Live-обновление
          </div>
        </div>

        {/* Economic calendar strip */}
        <div className="forum-card p-4 mb-6 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Icon name="Calendar" size={14} style={{ color: 'var(--forum-green)' }} />
            <span className="mono text-xs font-semibold" style={{ color: 'var(--forum-text)' }}>СЕГОДНЯ</span>
          </div>
          {[
            { time: '15:30', event: 'CPI США (м/м)', impact: 'high' },
            { time: '17:00', event: 'Запасы нефти EIA', impact: 'medium' },
            { time: '20:00', event: 'ФРС Протокол', impact: 'high' },
          ].map((ev, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>{ev.time}</span>
              <span className="mono text-xs" style={{ color: 'var(--forum-text-dim)' }}>{ev.event}</span>
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: ev.impact === 'high' ? 'var(--forum-red)' : 'var(--forum-yellow)' }}
              ></span>
            </div>
          ))}
        </div>

        {/* News list */}
        <div className="space-y-3">
          {news.map((item, i) => (
            <div key={i} className="forum-card p-5 cursor-pointer flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="mono text-xs px-2 py-0.5 rounded" style={{ background: 'var(--forum-surface-2)', color: 'var(--forum-text-dim)' }}>
                    {item.category}
                  </span>
                  <span className="mono text-xs px-2 py-0.5 rounded" style={{ background: impactStyles[item.impact].bg, color: impactStyles[item.impact].color }}>
                    {impactStyles[item.impact].label}
                  </span>
                  <span className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>{item.time}</span>
                </div>
                <h3 className="font-bold text-sm mb-1.5 leading-snug" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>
                  {item.excerpt}
                </p>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 sm:min-w-[80px]">
                <span className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>@{item.author}</span>
                <div className="flex sm:flex-col items-end gap-2">
                  <div className="flex items-center gap-1">
                    <Icon name="Eye" size={11} style={{ color: 'var(--forum-text-muted)' }} />
                    <span className="mono text-xs" style={{ color: 'var(--forum-text-dim)' }}>{(item.reads / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="MessageSquare" size={11} style={{ color: 'var(--forum-text-muted)' }} />
                    <span className="mono text-xs" style={{ color: 'var(--forum-text-dim)' }}>{item.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
