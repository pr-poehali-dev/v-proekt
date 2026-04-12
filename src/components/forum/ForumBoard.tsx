import Icon from '@/components/ui/icon';

interface ForumBoardProps {
  onCategory: (id: string) => void;
}

const categories = [
  {
    id: 'general',
    group: 'Общий форум',
    sections: [
      {
        id: 'general-talk',
        icon: '💬',
        title: 'Общение трейдеров',
        description: 'Свободное общение, знакомства, обсуждение торговли вне стратегий',
        topics: 1842,
        posts: 34210,
        lastPost: { user: 'TrendMaster_RU', title: 'Как вы начинали торговать?', time: '12 мин. назад' },
        hot: false,
      },
      {
        id: 'newbies',
        icon: '🎓',
        title: 'Новичкам',
        description: 'Вопросы начинающих трейдеров, базовые понятия и первые шаги',
        topics: 3241,
        posts: 58930,
        lastPost: { user: 'rookie_2024', title: 'Что такое экспирация в бинарных?', time: '34 мин. назад' },
        hot: false,
      },
    ],
  },
  {
    id: 'strategies',
    group: 'Стратегии и анализ',
    sections: [
      {
        id: 'binary-strategies',
        icon: '📈',
        title: 'Стратегии бинарных опционов',
        description: 'Разбор торговых систем, тестирование, WinRate и обсуждение результатов',
        topics: 2187,
        posts: 87340,
        lastPost: { user: 'binary_pro_2024', title: 'Пин-бар на M15 — моя система с WR 72%', time: '5 мин. назад' },
        hot: true,
      },
      {
        id: 'technical',
        icon: '📊',
        title: 'Технический анализ',
        description: 'Свечные паттерны, уровни поддержки/сопротивления, индикаторы',
        topics: 1654,
        posts: 42100,
        lastPost: { user: 'AlgoSystem_77', title: 'EMA 9/21 — лучший кросс для M5?', time: '1 ч. назад' },
        hot: false,
      },
      {
        id: 'fundamental',
        icon: '📰',
        title: 'Фундаментальный анализ',
        description: 'Новости, макроэкономика, влияние событий на рынок',
        topics: 892,
        posts: 18760,
        lastPost: { user: 'NewsTrader_Pro', title: 'CPI США: как торговать выход данных', time: '2 ч. назад' },
        hot: false,
      },
    ],
  },
  {
    id: 'instruments',
    group: 'Инструменты и рынки',
    sections: [
      {
        id: 'forex',
        icon: '💱',
        title: 'Форекс',
        description: 'EUR/USD, GBP/USD, USD/JPY и другие валютные пары',
        topics: 3410,
        posts: 102300,
        lastPost: { user: 'forex_daily_ru', title: 'EUR/USD: разворот или продолжение?', time: '18 мин. назад' },
        hot: true,
      },
      {
        id: 'crypto',
        icon: '₿',
        title: 'Криптовалюты',
        description: 'Bitcoin, Ethereum, альткоины — торговля и анализ',
        topics: 2890,
        posts: 94120,
        lastPost: { user: 'crypto_signals_24', title: 'BTC пробил 67K — что дальше?', time: '3 мин. назад' },
        hot: true,
      },
      {
        id: 'stocks',
        icon: '🏦',
        title: 'Акции и индексы',
        description: 'S&P 500, NASDAQ, отдельные акции и ETF',
        topics: 1120,
        posts: 28400,
        lastPost: { user: 'earnings_hunter', title: 'Apple отчёт Q1 2026 — разбор', time: '4 ч. назад' },
        hot: false,
      },
      {
        id: 'commodities',
        icon: '🥇',
        title: 'Сырьё и металлы',
        description: 'Золото, нефть, серебро — анализ и торговые идеи',
        topics: 680,
        posts: 14200,
        lastPost: { user: 'gold_signal_ru', title: 'Gold у 2340 — покупать или ждать?', time: '6 ч. назад' },
        hot: false,
      },
    ],
  },
  {
    id: 'tools',
    group: 'Инструменты трейдера',
    sections: [
      {
        id: 'signals',
        icon: '⚡',
        title: 'Торговые сигналы',
        description: 'Публикация и обсуждение сигналов, результаты и статистика',
        topics: 4320,
        posts: 198700,
        lastPost: { user: 'TrendMaster_RU', title: 'Сигнал EUR/USD CALL 15:45', time: '2 мин. назад' },
        hot: true,
      },
      {
        id: 'money-management',
        icon: '💰',
        title: 'Мани-менеджмент',
        description: 'Управление капиталом, риск-менеджмент, размер ставок',
        topics: 743,
        posts: 19800,
        lastPost: { user: 'RiskControl_M', title: 'Правило 2%: как считать правильно', time: '3 ч. назад' },
        hot: false,
      },
      {
        id: 'robots',
        icon: '🤖',
        title: 'Роботы и автоматизация',
        description: 'Алгоритмическая торговля, боты, автоматические стратегии',
        topics: 512,
        posts: 11300,
        lastPost: { user: 'AlgoSystem_77', title: 'Python бот для бинарных — исходник', time: '7 ч. назад' },
        hot: false,
      },
    ],
  },
];

const totalStats = {
  topics: categories.reduce((a, g) => a + g.sections.reduce((b, s) => b + s.topics, 0), 0),
  posts: categories.reduce((a, g) => a + g.sections.reduce((b, s) => b + s.posts, 0), 0),
  members: 42380,
  online: 1247,
};

export default function ForumBoard({ onCategory }: ForumBoardProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

      {/* Board stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Тем', value: totalStats.topics.toLocaleString('ru') },
          { label: 'Сообщений', value: totalStats.posts.toLocaleString('ru') },
          { label: 'Участников', value: totalStats.members.toLocaleString('ru') },
          { label: 'Онлайн сейчас', value: totalStats.online.toLocaleString('ru') },
        ].map((s) => (
          <div key={s.label} className="forum-card px-4 py-3 flex items-center justify-between">
            <span className="text-xs" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>{s.label}</span>
            <span className="mono text-sm font-bold" style={{ color: 'var(--forum-green)' }}>{s.value}</span>
          </div>
        ))}
      </div>

      {/* Category groups */}
      <div className="space-y-6">
        {categories.map((group) => (
          <div key={group.id}>
            {/* Group header */}
            <div className="flex items-center gap-3 mb-2 px-1">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--forum-text-muted)', fontFamily: 'Golos Text, sans-serif' }}>
                {group.group}
              </span>
              <div className="flex-1 h-px" style={{ background: 'var(--forum-border)' }} />
            </div>

            {/* Sections */}
            <div className="forum-card overflow-hidden divide-y" style={{ borderColor: 'var(--forum-border)' }}>
              {group.sections.map((section, idx) => (
                <div
                  key={section.id}
                  className="flex items-start gap-4 px-5 py-4 cursor-pointer transition-colors hover:bg-white/[0.02]"
                  onClick={() => onCategory(section.id)}
                >
                  {/* Icon */}
                  <div className="text-2xl flex-shrink-0 mt-0.5 w-9 text-center">{section.icon}</div>

                  {/* Main info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3
                        className="font-bold text-sm hover:underline"
                        style={{ color: '#ffffff', fontFamily: 'Golos Text, sans-serif', cursor: 'pointer' }}
                      >
                        {section.title}
                      </h3>
                      {section.hot && (
                        <span className="mono text-xs px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,107,122,0.15)', color: 'var(--forum-red)', border: '1px solid rgba(255,107,122,0.3)' }}>
                          🔥
                        </span>
                      )}
                    </div>
                    <p className="text-xs" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>
                      {section.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="hidden sm:flex items-center gap-6 flex-shrink-0">
                    <div className="text-center">
                      <div className="mono text-sm font-semibold" style={{ color: 'var(--forum-text)' }}>{section.topics.toLocaleString('ru')}</div>
                      <div className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>тем</div>
                    </div>
                    <div className="text-center">
                      <div className="mono text-sm font-semibold" style={{ color: 'var(--forum-text)' }}>{section.posts.toLocaleString('ru')}</div>
                      <div className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>постов</div>
                    </div>
                  </div>

                  {/* Last post */}
                  <div className="hidden lg:block flex-shrink-0 w-52">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center mono text-xs font-bold flex-shrink-0 mt-0.5" style={{ background: 'var(--forum-surface-2)', color: 'var(--forum-green)' }}>
                        {section.lastPost.user[0].toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs truncate font-medium" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
                          {section.lastPost.title}
                        </p>
                        <p className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>
                          @{section.lastPost.user} · {section.lastPost.time}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Active users strip */}
      <div className="forum-card mt-6 px-5 py-3 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full pulse-dot" style={{ background: 'var(--forum-green)' }} />
          <span className="mono text-xs font-semibold" style={{ color: 'var(--forum-green)' }}>Сейчас онлайн:</span>
        </div>
        {['TrendMaster_RU', 'binary_pro_2024', 'crypto_signals_24', 'AlgoSystem_77', 'NewsTrader_Pro', 'DayTrader_X', 'gold_signal_ru', 'RiskControl_M'].map((u) => (
          <span key={u} className="mono text-xs" style={{ color: 'var(--forum-text-dim)' }}>
            {u}
          </span>
        ))}
        <span className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>и ещё 1,239...</span>
      </div>
    </div>
  );
}
