import Icon from '@/components/ui/icon';

const team = [
  { name: 'Александр К.', role: 'Основатель · 12 лет в трейдинге', emoji: '👨‍💼' },
  { name: 'Мария Л.', role: 'Главный аналитик · Форекс', emoji: '👩‍💻' },
  { name: 'Дмитрий В.', role: 'Алготрейдинг · Квантовый анализ', emoji: '🤖' },
];

const values = [
  { icon: 'Shield', title: 'Честность', text: 'Мы честно говорим о рисках. Бинарные опционы — это сложный инструмент, и мы это признаём.' },
  { icon: 'Users', title: 'Сообщество', text: 'Более 40,000 трейдеров делятся опытом. Нет токсичности — только профессиональное общение.' },
  { icon: 'BookOpen', title: 'Образование', text: 'Сотни бесплатных стратегий, разборов сделок и обучающих материалов в открытом доступе.' },
  { icon: 'Zap', title: 'Скорость', text: 'Сигналы в реальном времени, мгновенный чат и актуальные рыночные данные 24/7.' },
];

export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6" style={{ background: 'var(--forum-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-black mb-4" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif', lineHeight: 1.2 }}>
              Профессиональное сообщество<br /><span style={{ color: 'var(--forum-green)' }}>трейдеров с 2018 года</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>
              TradeHub — независимый форум, созданный трейдерами для трейдеров. Мы не продаём курсы и не рекламируем брокеров. Наша цель — создать пространство для честного обмена опытом.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { n: '2018', l: 'Год основания' },
                { n: '42K+', l: 'Участников' },
                { n: '1.8K+', l: 'Стратегий' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="mono text-2xl font-bold" style={{ color: 'var(--forum-green)' }}>{s.n}</div>
                  <div className="text-xs" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="space-y-3">
            {team.map((member, i) => (
              <div key={i} className="forum-card p-4 flex items-center gap-4">
                <div className="text-3xl">{member.emoji}</div>
                <div>
                  <p className="font-bold text-sm" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>{member.name}</p>
                  <p className="mono text-xs" style={{ color: 'var(--forum-text-dim)' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>Наши принципы</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={i} className="forum-card p-5">
                <div className="w-8 h-8 rounded flex items-center justify-center mb-3" style={{ background: 'rgba(0,208,132,0.1)' }}>
                  <Icon name={v.icon} size={16} style={{ color: 'var(--forum-green)' }} />
                </div>
                <h4 className="font-bold text-sm mb-2" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>{v.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
