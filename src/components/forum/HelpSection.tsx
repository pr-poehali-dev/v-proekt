import Icon from '@/components/ui/icon';
import { useState } from 'react';

const faq = [
  {
    q: 'Как зарегистрироваться на форуме?',
    a: 'Нажмите кнопку "Войти" в правом верхнем углу и выберите "Зарегистрироваться". Регистрация бесплатная и занимает 1 минуту.',
  },
  {
    q: 'Можно ли доверять стратегиям с форума?',
    a: 'Все стратегии публикуются участниками сообщества. Мы рекомендуем всегда тестировать стратегии на демо-счёте и учитывать риски. WinRate указывается по данным автора.',
  },
  {
    q: 'Как получить статус "Эксперт"?',
    a: 'Статус присваивается модераторами за активное качественное участие в форуме, публикацию проверенных стратегий и помощь новичкам.',
  },
  {
    q: 'Как работают торговые сигналы в чате?',
    a: 'Сигналы публикуются трейдерами в разделе "Сигналы". Это не финансовые рекомендации — решение о сделке принимаете только вы.',
  },
  {
    q: 'Есть ли мобильное приложение?',
    a: 'Сайт полностью адаптирован для мобильных устройств. Нативное приложение находится в разработке.',
  },
  {
    q: 'Как пожаловаться на нарушение правил?',
    a: 'Используйте кнопку "Пожаловаться" под любым сообщением или напишите модераторам в раздел "Связь с командой".',
  },
];

export default function HelpSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6" style={{ background: 'var(--forum-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>Справка</h2>
          <p className="text-sm" style={{ color: 'var(--forum-text-dim)' }}>Ответы на часто задаваемые вопросы</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* FAQ */}
          <div className="lg:col-span-2 space-y-2">
            {faq.map((item, i) => (
              <div key={i} className="forum-card overflow-hidden">
                <button
                  className="w-full text-left px-5 py-4 flex items-center justify-between transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}
                >
                  <span className="font-medium text-sm pr-4">{item.q}</span>
                  <Icon
                    name={openIndex === i ? 'ChevronUp' : 'ChevronDown'}
                    size={16}
                    style={{ color: 'var(--forum-text-dim)', flexShrink: 0 }}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-4">
                    <div style={{ borderTop: '1px solid var(--forum-border)', paddingTop: '12px' }}>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}>
                        {item.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact & links */}
          <div className="space-y-4">
            <div className="forum-card p-5">
              <h3 className="font-bold text-sm mb-4" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
                Быстрые ссылки
              </h3>
              {[
                { icon: 'BookOpen', label: 'Правила форума' },
                { icon: 'GraduationCap', label: 'Обучение для новичков' },
                { icon: 'BarChart2', label: 'Словарь трейдера' },
                { icon: 'AlertTriangle', label: 'Предупреждение о рисках' },
              ].map((link, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded mb-1 text-left transition-colors hover:bg-opacity-10"
                  style={{ background: 'var(--forum-surface-2)', border: 'none', cursor: 'pointer', color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif' }}
                >
                  <Icon name={link.icon} size={14} style={{ color: 'var(--forum-green)' }} />
                  <span className="text-sm">{link.label}</span>
                </button>
              ))}
            </div>

            <div className="forum-card p-5 glow-green">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="MessageCircle" size={16} style={{ color: 'var(--forum-green)' }} />
                <h3 className="font-bold text-sm" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
                  Связаться с командой
                </h3>
              </div>
              <p className="text-xs mb-4" style={{ color: 'var(--forum-text-dim)', fontFamily: 'Golos Text, sans-serif', lineHeight: 1.6 }}>
                Не нашли ответ? Напишите нашим модераторам — ответим в течение 2 часов.
              </p>
              <button
                className="w-full py-2 rounded text-sm font-semibold transition-all"
                style={{ background: 'var(--forum-green)', color: '#000', border: 'none', cursor: 'pointer', fontFamily: 'Golos Text, sans-serif' }}
              >
                Написать модератору
              </button>
            </div>

            {/* Risk warning */}
            <div className="forum-card p-4" style={{ borderColor: 'rgba(255,71,87,0.3)' }}>
              <div className="flex items-start gap-2">
                <Icon name="AlertTriangle" size={14} style={{ color: 'var(--forum-red)', flexShrink: 0, marginTop: 2 }} />
                <p className="mono text-xs leading-relaxed" style={{ color: 'var(--forum-text-dim)' }}>
                  Торговля бинарными опционами связана с высоким риском потери средств. Информация на форуме не является финансовой рекомендацией.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
