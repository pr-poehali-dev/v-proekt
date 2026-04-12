import Icon from '@/components/ui/icon';

const stats = [
  { label: 'Участников', value: '42,380', icon: 'Users' },
  { label: 'Стратегий', value: '1,840', icon: 'BookOpen' },
  { label: 'Сообщений', value: '318K', icon: 'MessageSquare' },
  { label: 'Сигналов сегодня', value: '94', icon: 'Zap' },
];

interface HeroProps {
  onNav: (section: string) => void;
}

export default function HeroSection({ onNav }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6" style={{ background: 'var(--forum-bg)' }}>
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(var(--forum-green) 1px, transparent 1px), linear-gradient(90deg, var(--forum-green) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, var(--forum-green), transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 fade-in-up fade-in-up-1" style={{ background: 'rgba(0,208,132,0.1)', border: '1px solid rgba(0,208,132,0.25)' }}>
            <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--forum-green)' }}></div>
            <span className="mono text-xs" style={{ color: 'var(--forum-green)' }}>Рынок открыт · NYSE, NASDAQ, Forex</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl font-black leading-tight mb-4 fade-in-up fade-in-up-2"
            style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif', lineHeight: 1.15 }}
          >
            Форум профессиональных<br />
            <span style={{ color: 'var(--forum-green)' }}>трейдеров</span>
          </h1>

          <p className="text-base mb-8 fade-in-up fade-in-up-3 max-w-xl" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif', lineHeight: 1.7 }}>
            Стратегии бинарных опционов, торговые сигналы, аналитика рынков и живое общение с опытными трейдерами в режиме реального времени.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 fade-in-up fade-in-up-4">
            <button
              onClick={() => onNav('strategies')}
              className="px-6 py-3 rounded font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: 'var(--forum-green)', color: '#000', border: 'none', cursor: 'pointer', fontFamily: 'Golos Text, sans-serif' }}
            >
              Смотреть стратегии
            </button>
            <button
              onClick={() => onNav('chat')}
              className="px-6 py-3 rounded font-semibold text-sm transition-all"
              style={{ background: 'transparent', color: 'var(--forum-text)', border: '1px solid var(--forum-border)', cursor: 'pointer', fontFamily: 'Golos Text, sans-serif' }}
            >
              Войти в чат
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12">
          {stats.map((stat, i) => (
            <div key={i} className="forum-card p-4 fade-in-up" style={{ animationDelay: `${0.3 + i * 0.1}s`, opacity: 0 }}>
              <div className="flex items-center gap-2 mb-2">
                <Icon name={stat.icon} size={14} className="opacity-50" style={{ color: 'var(--forum-green)' }} />
                <span className="text-xs" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>{stat.label}</span>
              </div>
              <div className="mono text-xl font-semibold" style={{ color: 'var(--forum-text)' }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}