import Icon from '@/components/ui/icon';

const builtins = [
  { icon: 'Bot', title: 'Сигнальные боты', desc: 'Автоматические сигналы BUY и SELL прямо на графике.' },
  { icon: 'PenLine', title: 'Инструменты рисования', desc: 'Тренды, Фибоначчи, каналы и фигуры — более 15 инструментов для анализа.' },
  { icon: 'BarChart2', title: 'Статистика в реальном времени', desc: 'Процент успешных сделок и результаты серий ставок обновляются с каждой сделкой.' },
  { icon: 'BookOpen', title: 'Торговый дневник', desc: 'Автоматическая запись каждой сделки с аналитикой по времени, паре и ботам.' },
  { icon: 'Bell', title: 'Уведомления', desc: 'Push и звуковые оповещения о сигналах — не пропустите ни одного входа.' },
  { icon: 'Smartphone', title: 'Любое устройство', desc: 'Работает в браузере на ПК, планшете и смартфоне без установки.' },
];

const signals = [
  { pair: 'GBP/JPY OTC', signal: null },
  { pair: 'AUD/CAD OTC', signal: 'SELL', up: false },
  { pair: 'EUR/USD OTC', signal: 'BUY', up: true },
  { pair: 'CHF/JPY OTC', signal: 'SELL', up: false },
  { pair: 'GBP/USD OTC', signal: null },
  { pair: 'EUR/JPY OTC', signal: 'SELL', up: false },
  { pair: 'AUD/USD OTC', signal: null },
];

export default function BuiltInSection() {
  return (
    <>
      {/* "Всё встроено" */}
      <section className="py-20 px-4 sm:px-6" style={{ background: 'var(--forum-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-black mb-3"
              style={{ fontFamily: 'Golos Text, sans-serif', color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              Всё необходимое уже встроено
            </h2>
            <p className="text-base" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              Инструменты, которые делают PoSignals полноценной торговой платформой — без расширений и дополнений.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {builtins.map((item) => (
              <div key={item.title} className="forum-card p-5" style={{ background: 'var(--forum-surface)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name={item.icon} size={16} style={{ color: 'var(--forum-green)' }} />
                  <h4 className="font-semibold text-sm" style={{ fontFamily: 'Golos Text, sans-serif', color: 'var(--forum-text)' }}>{item.title}</h4>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Автосигналы Pocket Option */}
      <section className="py-20 px-4 sm:px-6" style={{ background: 'var(--forum-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-14">
            <div>
              <h2
                className="font-black mb-5"
                style={{ fontFamily: 'Golos Text, sans-serif', color: '#ffffff', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                Автосигналы<br />Pocket Option с<br />детальной аналитикой
              </h2>
            </div>
            <div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif', lineHeight: 1.8 }}>
                Сигналы на покупку и продажу поступают в реальном времени по десяткам активов. Каждая сделка фиксируется — вы видите процент побед, результаты по входам и историю торговли.
              </p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              { icon: 'Cpu', title: 'Всё автоматически', desc: 'Сигналы приходят сами — вам не нужно ничего искать или отслеживать вручную.' },
              { icon: 'Globe', title: 'Десятки активов', desc: 'Валюты, индексы, акции, криптовалюты и товары — всё в одном месте.' },
              { icon: 'ShieldCheck', title: 'Страховочная стратегия', desc: 'Двойной вход — основной сигнал + страховочный для снижения рисков.' },
              { icon: 'Zap', title: 'Сигналы мгновенно', desc: 'BUY/SELL появляются на экране в момент срабатывания алгоритма.' },
              { icon: 'BarChart3', title: 'Детальная аналитика', desc: 'Процент побед, статистика по 1-му и 2-му входу, количество сделок.' },
              { icon: 'Filter', title: 'Гибкая фильтрация', desc: 'Сортировка по активности, проценту побед и временным диапазонам.' },
            ].map((f) => (
              <div key={f.title} className="forum-card p-4" style={{ background: 'var(--forum-surface)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name={f.icon} size={14} style={{ color: 'var(--forum-green)' }} />
                  <h4 className="font-semibold text-sm" style={{ fontFamily: 'Golos Text, sans-serif', color: 'var(--forum-text)' }}>{f.title}</h4>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Enigma core visualization */}
          <div className="relative" style={{ minHeight: '300px' }}>
            {/* Center node */}
            <div className="absolute" style={{ left: '8%', top: '50%', transform: 'translateY(-50%)' }}>
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,95,212,0.3), rgba(124,95,212,0.05))',
                  border: '1px solid rgba(124,95,212,0.4)',
                  boxShadow: '0 0 40px rgba(124,95,212,0.2)',
                }}
              >
                <div className="w-8 h-8 rounded-full" style={{ background: 'radial-gradient(circle, #c4b5fd, #7c5fd4)' }} />
              </div>
              <div className="text-center mt-2 mono text-xs" style={{ color: 'var(--forum-text-muted)', letterSpacing: '0.1em' }}>ENIGMA CORE</div>
            </div>

            {/* Signal rows */}
            <div className="ml-[22%] space-y-3 py-4">
              {signals.map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  {/* Connection line visual */}
                  <div className="flex items-center gap-1 flex-shrink-0" style={{ width: '60px' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(124,95,212,0.4)' }} />
                    <div className="flex-1 h-px" style={{ background: 'rgba(124,95,212,0.2)' }} />
                    <div className="w-1 h-1 rounded-full" style={{ background: 'var(--forum-green)', opacity: s.signal ? 1 : 0.2 }} />
                  </div>
                  {/* Color dots */}
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ background: '#7c5fd4' }} />
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ background: '#7c5fd4', opacity: 0.5 }} />
                    {s.signal && <div className="w-2.5 h-2.5 rounded-sm" style={{ background: s.up ? '#26d97f' : '#f59e0b' }} />}
                  </div>
                  {/* Pair name */}
                  <span className="mono text-sm" style={{ color: 'var(--forum-text-dim)', minWidth: '130px' }}>{s.pair}</span>
                  {/* Signal badge */}
                  {s.signal && (
                    <div
                      className="flex items-center gap-1 mono text-xs font-bold px-2.5 py-1 rounded"
                      style={{
                        background: s.up ? 'rgba(38,217,127,0.08)' : 'rgba(255,85,85,0.08)',
                        color: s.up ? '#26d97f' : '#ff5555',
                        border: `1px solid ${s.up ? 'rgba(38,217,127,0.2)' : 'rgba(255,85,85,0.2)'}`,
                      }}
                    >
                      {s.up ? '▲' : '▼'} {s.signal}
                    </div>
                  )}
                  {/* Line to right */}
                  <div className="flex-1 h-px" style={{ background: s.signal ? 'rgba(124,95,212,0.15)' : 'rgba(255,255,255,0.04)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
