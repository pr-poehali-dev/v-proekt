import Icon from '@/components/ui/icon';

interface ForumCategoryProps {
  categoryId: string;
  onBack: () => void;
  onThread: (id: string) => void;
}

const categoryMeta: Record<string, { icon: string; title: string; description: string }> = {
  'general-talk': { icon: '💬', title: 'Общение трейдеров', description: 'Свободное общение, знакомства, обсуждение торговли вне стратегий' },
  'newbies': { icon: '🎓', title: 'Новичкам', description: 'Вопросы начинающих трейдеров, базовые понятия и первые шаги' },
  'binary-strategies': { icon: '📈', title: 'Стратегии бинарных опционов', description: 'Разбор торговых систем, тестирование, WinRate и обсуждение результатов' },
  'technical': { icon: '📊', title: 'Технический анализ', description: 'Свечные паттерны, уровни поддержки/сопротивления, индикаторы' },
  'fundamental': { icon: '📰', title: 'Фундаментальный анализ', description: 'Новости, макроэкономика, влияние событий на рынок' },
  'forex': { icon: '💱', title: 'Форекс', description: 'EUR/USD, GBP/USD, USD/JPY и другие валютные пары' },
  'crypto': { icon: '₿', title: 'Криптовалюты', description: 'Bitcoin, Ethereum, альткоины — торговля и анализ' },
  'stocks': { icon: '🏦', title: 'Акции и индексы', description: 'S&P 500, NASDAQ, отдельные акции и ETF' },
  'commodities': { icon: '🥇', title: 'Сырьё и металлы', description: 'Золото, нефть, серебро — анализ и торговые идеи' },
  'signals': { icon: '⚡', title: 'Торговые сигналы', description: 'Публикация и обсуждение сигналов, результаты и статистика' },
  'money-management': { icon: '💰', title: 'Мани-менеджмент', description: 'Управление капиталом, риск-менеджмент, размер ставок' },
  'robots': { icon: '🤖', title: 'Роботы и автоматизация', description: 'Алгоритмическая торговля, боты, автоматические стратегии' },
};

const threads = [
  { id: 't1', pinned: true, title: 'Правила раздела — обязательно к прочтению', author: 'Moderator_RU', role: 'Модератор', replies: 0, views: 12400, lastReply: { user: 'Moderator_RU', time: '12 янв. 2026' }, tags: ['📌 Закреплено'] },
  { id: 't2', pinned: false, hot: true, title: 'Пин-бар на M15 — моя система с WR 72% за 6 месяцев', author: 'TrendMaster_RU', role: 'Эксперт', replies: 234, views: 18400, lastReply: { user: 'binary_pro_2024', time: '5 мин. назад' }, tags: ['📈 Стратегия', '⭐ Рекомендуем'] },
  { id: 't3', pinned: false, title: 'EMA 9/21 кросс + ADX фильтр — подробный разбор', author: 'AlgoSystem_77', role: 'Алготрейдер', replies: 156, views: 9870, lastReply: { user: 'DayTrader_X', time: '1 ч. назад' }, tags: ['📊 Индикаторы'] },
  { id: 't4', pinned: false, title: 'Стратегия Bounceback для новичков — пошагово', author: 'binary_pro_2024', role: 'Трейдер', replies: 178, views: 12800, lastReply: { user: 'rookie_2024', time: '2 ч. назад' }, tags: ['🎓 Начинающим'] },
  { id: 't5', pinned: false, hot: true, title: 'VWAP + Полосы Боллинджера: точки входа на M15', author: 'DayTrader_X', role: 'Трейдер', replies: 201, views: 15600, lastReply: { user: 'TrendMaster_RU', time: '3 ч. назад' }, tags: ['📊 Индикаторы', '💱 Форекс'] },
  { id: 't6', pinned: false, title: 'Новостная торговля: вход на волатильности NFP', author: 'NewsTrader_Pro', role: 'Аналитик', replies: 312, views: 24100, lastReply: { user: 'forex_daily_ru', time: '4 ч. назад' }, tags: ['📰 Новости'] },
  { id: 't7', pinned: false, title: 'Мартингейл 2.0 — модификация с жёстким стопом', author: 'RiskControl_M', role: 'Эксперт', replies: 89, views: 7230, lastReply: { user: 'AlgoSystem_77', time: '5 ч. назад' }, tags: ['💰 Риск-менеджмент'] },
  { id: 't8', pinned: false, title: 'Торгую только по RSI — результаты за месяц', author: 'forex_daily_ru', role: 'Трейдер', replies: 67, views: 5840, lastReply: { user: 'binary_pro_2024', time: '6 ч. назад' }, tags: ['📊 Индикаторы'] },
  { id: 't9', pinned: false, title: 'Как я слил 3 депозита и что из этого вынес', author: 'rookie_2024', role: 'Трейдер', replies: 445, views: 32100, lastReply: { user: 'TrendMaster_RU', time: '8 ч. назад' }, tags: ['💬 Опыт'] },
  { id: 't10', pinned: false, title: 'Паттерн "Поглощение" — разбор 50 сделок', author: 'TrendMaster_RU', role: 'Эксперт', replies: 123, views: 8960, lastReply: { user: 'DayTrader_X', time: '9 ч. назад' }, tags: ['📈 Паттерны'] },
  { id: 't11', pinned: false, title: 'Scalping на 60 секунд — кто торгует?', author: 'crypto_signals_24', role: 'Трейдер', replies: 88, views: 6420, lastReply: { user: 'AlgoSystem_77', time: '11 ч. назад' }, tags: ['⚡ Скальпинг'] },
  { id: 't12', pinned: false, title: 'Опрос: какой брокер платит вовремя?', author: 'gold_signal_ru', role: 'Трейдер', replies: 567, views: 41200, lastReply: { user: 'NewsTrader_Pro', time: '12 ч. назад' }, tags: ['📊 Опрос'] },
];

const roleColors: Record<string, string> = {
  'Модератор': '#ffd166',
  'Эксперт': 'var(--forum-green)',
  'Аналитик': '#ffd166',
  'Алготрейдер': '#7c8fff',
  'Трейдер': 'var(--forum-text-dim)',
};

export default function ForumCategory({ categoryId, onBack, onThread }: ForumCategoryProps) {
  const meta = categoryMeta[categoryId] || { icon: '📋', title: 'Раздел', description: '' };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs mono" style={{ color: 'var(--forum-text-muted)' }}>
        <button onClick={onBack} className="hover:underline" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--forum-green)', fontFamily: 'IBM Plex Mono, monospace' }}>
          Форум
        </button>
        <Icon name="ChevronRight" size={12} />
        <span style={{ color: 'var(--forum-text-dim)' }}>{meta.title}</span>
      </div>

      {/* Section header */}
      <div className="forum-card px-5 py-4 mb-4 flex items-start gap-4">
        <span className="text-3xl">{meta.icon}</span>
        <div className="flex-1">
          <h2 className="font-bold text-lg mb-1" style={{ fontFamily: 'Golos Text, sans-serif' }}>{meta.title}</h2>
          <p className="text-sm" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>{meta.description}</p>
        </div>
        <button
          className="px-4 py-2 rounded font-semibold text-sm flex-shrink-0 flex items-center gap-2"
          style={{ background: 'var(--forum-btn-bg)', color: 'var(--forum-btn-text)', border: 'none', cursor: 'pointer', fontFamily: 'Golos Text, sans-serif' }}
        >
          <Icon name="Plus" size={14} />
          Новая тема
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex gap-2">
          {['Все темы', 'Горячие', 'Без ответов', 'Мои темы'].map((f, i) => (
            <button
              key={f}
              className="px-3 py-1.5 rounded text-xs font-medium"
              style={{
                background: i === 0 ? 'var(--forum-green)' : 'var(--forum-surface)',
                color: i === 0 ? '#07070d' : 'var(--forum-text-dim)',
                border: `1px solid ${i === 0 ? 'var(--forum-green)' : 'var(--forum-border)'}`,
                cursor: 'pointer',
                fontFamily: 'Golos Text, sans-serif',
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>
          {threads.length} тем
        </div>
      </div>

      {/* Thread list */}
      <div className="forum-card overflow-hidden">
        {/* Header row */}
        <div className="hidden sm:grid px-5 py-2 border-b mono text-xs" style={{ gridTemplateColumns: '1fr 80px 80px 200px', borderColor: 'var(--forum-border)', color: 'var(--forum-text-muted)' }}>
          <span>Тема</span>
          <span className="text-right">Ответов</span>
          <span className="text-right">Просмотров</span>
          <span className="pl-4">Последний ответ</span>
        </div>

        <div className="divide-y" style={{ borderColor: 'var(--forum-border)' }}>
          {threads.map((thread) => (
            <div
              key={thread.id}
              className="sm:grid px-5 py-3.5 items-center cursor-pointer transition-colors hover:bg-white/[0.02]"
              style={{ gridTemplateColumns: '1fr 80px 80px 200px' }}
              onClick={() => onThread(thread.id)}
            >
              {/* Title + meta */}
              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  {thread.pinned && <Icon name="Pin" size={12} style={{ color: 'var(--forum-yellow)', flexShrink: 0 }} />}
                  {(thread as { hot?: boolean }).hot && <span className="mono text-xs" style={{ color: 'var(--forum-red)' }}>🔥</span>}
                  <span
                    className="font-semibold text-sm hover:underline truncate"
                    style={{ color: thread.pinned ? 'var(--forum-yellow)' : '#ffffff', fontFamily: 'Golos Text, sans-serif' }}
                  >
                    {thread.title}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="mono text-xs" style={{ color: roleColors[thread.role] }}>@{thread.author}</span>
                  <span className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>·</span>
                  <span className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>{thread.role}</span>
                  {thread.tags.map((tag) => (
                    <span key={tag} className="mono text-xs px-1.5 py-0.5 rounded" style={{ background: 'var(--forum-surface-2)', color: 'var(--forum-text-dim)', border: '1px solid var(--forum-border)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Replies */}
              <div className="hidden sm:block text-right">
                <span className="mono text-sm" style={{ color: thread.replies > 100 ? 'var(--forum-green)' : 'var(--forum-text)' }}>{thread.replies}</span>
              </div>

              {/* Views */}
              <div className="hidden sm:block text-right">
                <span className="mono text-sm" style={{ color: 'var(--forum-text-dim)' }}>
                  {thread.views >= 1000 ? `${(thread.views / 1000).toFixed(1)}K` : thread.views}
                </span>
              </div>

              {/* Last reply */}
              <div className="hidden sm:flex items-center gap-2 pl-4">
                <div className="w-6 h-6 rounded-full flex items-center justify-center mono text-xs font-bold flex-shrink-0" style={{ background: 'var(--forum-surface-2)', color: 'var(--forum-green)' }}>
                  {thread.lastReply.user[0].toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="mono text-xs truncate" style={{ color: 'var(--forum-text-dim)' }}>@{thread.lastReply.user}</p>
                  <p className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>{thread.lastReply.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-1 mt-4">
        {[1,2,3,'...',48].map((p, i) => (
          <button
            key={i}
            className="w-8 h-8 rounded mono text-xs font-medium"
            style={{
              background: p === 1 ? 'var(--forum-green)' : 'var(--forum-surface)',
              color: p === 1 ? '#07070d' : 'var(--forum-text-dim)',
              border: `1px solid ${p === 1 ? 'var(--forum-green)' : 'var(--forum-border)'}`,
              cursor: 'pointer',
            }}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
