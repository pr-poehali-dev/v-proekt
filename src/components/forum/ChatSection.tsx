import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  user: string;
  role: string;
  text: string;
  time: string;
  badge?: string;
}

const initialMessages: Message[] = [
  { id: 1, user: 'TrendMaster_RU', role: 'Эксперт', text: 'EUR/USD формирует бычий пин-бар на H1. Жду подтверждения на M15 и вход на CALL.', time: '14:32', badge: '⭐' },
  { id: 2, user: 'binary_pro_2024', role: 'Трейдер', text: 'Согласен, уровень 1.0840 выглядит как хорошая поддержка. Подождём закрытия свечи.', time: '14:33' },
  { id: 3, user: 'NewsTrader_Pro', role: 'Аналитик', text: '⚠️ В 15:30 выходит CPI. Рекомендую воздержаться от входов за 30 минут до выхода данных.', time: '14:35', badge: '📰' },
  { id: 4, user: 'crypto_signals_24', role: 'Трейдер', text: 'BTC пробил 67K! Смотрю на 68.5K как следующий таргет. Настроения бычьи.', time: '14:37' },
  { id: 5, user: 'AlgoSystem_77', role: 'Алготрейдер', text: 'Мой бот взял 3 сигнала на EUR/USD сегодня. WR: 2/3. Продолжаем.', time: '14:39', badge: '🤖' },
  { id: 6, user: 'DayTrader_X', role: 'Трейдер', text: 'Gold держится у 2340. Хороший уровень для скальпа PUT если цена не удержится.', time: '14:41' },
  { id: 7, user: 'RiskControl_M', role: 'Эксперт', text: 'Напомню всем: после 3 подряд убыточных сделок — обязательный перерыв. Риск-менеджмент прежде всего!', time: '14:42', badge: '⭐' },
  { id: 8, user: 'forex_daily_ru', role: 'Аналитик', text: 'NFP вышел слабее прогноза. Доллар под давлением. EUR и GBP могут продолжить рост.', time: '14:44', badge: '📰' },
];

const onlineUsers = [
  { name: 'TrendMaster_RU', role: 'Эксперт', badge: '⭐', active: true },
  { name: 'binary_pro_2024', role: 'Трейдер', active: true },
  { name: 'NewsTrader_Pro', role: 'Аналитик', badge: '📰', active: true },
  { name: 'AlgoSystem_77', role: 'Алготрейдер', badge: '🤖', active: true },
  { name: 'DayTrader_X', role: 'Трейдер', active: false },
  { name: 'crypto_signals_24', role: 'Трейдер', active: true },
  { name: 'RiskControl_M', role: 'Эксперт', badge: '⭐', active: true },
  { name: 'gold_signal_ru', role: 'Трейдер', active: false },
  { name: 'forex_daily_ru', role: 'Аналитик', badge: '📰', active: true },
  { name: 'earnings_hunter', role: 'Трейдер', active: false },
];

const roleColors: Record<string, string> = {
  'Эксперт': 'var(--forum-green)',
  'Аналитик': 'var(--forum-yellow)',
  'Алготрейдер': '#7c8fff',
  'Трейдер': 'var(--forum-text-dim)',
};

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [activeRoom, setActiveRoom] = useState('Общий чат');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const rooms = ['Общий чат', 'Форекс', 'Криптовалюты', 'Сигналы', 'Новички'];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: messages.length + 1,
      user: 'Вы',
      role: 'Трейдер',
      text: input,
      time: new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, newMsg]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6" style={{ background: 'var(--forum-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
            Чат трейдеров
          </h2>
          <p className="text-sm" style={{ color: 'var(--forum-text-dim)' }}>Общение в реальном времени — делитесь сигналами и опытом</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4" style={{ height: '520px' }}>
          {/* Sidebar: rooms + users */}
          <div className="lg:col-span-1 flex flex-col gap-3 overflow-hidden">
            {/* Rooms */}
            <div className="forum-card p-3">
              <p className="mono text-xs mb-2" style={{ color: 'var(--forum-text-muted)' }}>КОМНАТЫ</p>
              <div className="space-y-0.5">
                {rooms.map((room) => (
                  <button
                    key={room}
                    onClick={() => setActiveRoom(room)}
                    className="w-full text-left px-2.5 py-1.5 rounded text-sm transition-all flex items-center gap-2"
                    style={{
                      background: activeRoom === room ? 'rgba(0,208,132,0.1)' : 'transparent',
                      color: activeRoom === room ? 'var(--forum-green)' : 'var(--forum-text-dim)',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Golos Text, sans-serif',
                    }}
                  >
                    <span className="text-base">#</span>
                    {room}
                  </button>
                ))}
              </div>
            </div>

            {/* Online users */}
            <div className="forum-card p-3 flex-1 overflow-y-auto">
              <p className="mono text-xs mb-2" style={{ color: 'var(--forum-text-muted)' }}>ОНЛАЙН — {onlineUsers.filter(u => u.active).length}</p>
              <div className="space-y-2">
                {onlineUsers.map((u, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center mono text-xs font-bold" style={{ background: 'var(--forum-surface-2)', color: roleColors[u.role] }}>
                        {u.name[0].toUpperCase()}
                      </div>
                      <div
                        className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border"
                        style={{ background: u.active ? 'var(--forum-green)' : 'var(--forum-text-muted)', borderColor: 'var(--forum-surface)' }}
                      ></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
                        {u.badge && <span className="mr-0.5">{u.badge}</span>}{u.name}
                      </p>
                      <p className="mono text-xs" style={{ color: roleColors[u.role], opacity: 0.8 }}>{u.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main chat */}
          <div className="lg:col-span-3 forum-card flex flex-col overflow-hidden">
            {/* Chat header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid var(--forum-border)' }}>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}># {activeRoom}</span>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded" style={{ background: 'rgba(0,208,132,0.08)' }}>
                  <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--forum-green)' }}></div>
                  <span className="mono text-xs" style={{ color: 'var(--forum-green)' }}>{onlineUsers.filter(u => u.active).length} онлайн</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded transition-colors" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--forum-text-dim)' }}>
                  <Icon name="Search" size={14} />
                </button>
                <button className="p-1.5 rounded transition-colors" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--forum-text-dim)' }}>
                  <Icon name="Settings" size={14} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className="flex gap-3 msg-in group">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center mono text-xs font-bold flex-shrink-0 mt-0.5" style={{ background: 'var(--forum-surface-2)', color: roleColors[msg.role] }}>
                    {msg.user[0].toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-xs font-bold" style={{ color: roleColors[msg.role], fontFamily: 'Golos Text, sans-serif' }}>
                        {msg.badge && <span className="mr-0.5">{msg.badge}</span>}{msg.user}
                      </span>
                      <span className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>{msg.role}</span>
                      <span className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>{msg.time}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
                      {msg.text}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3" style={{ borderTop: '1px solid var(--forum-border)' }}>
              <div className="flex gap-2 items-end">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded" style={{ background: 'var(--forum-surface-2)', border: '1px solid var(--forum-border)' }}>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Написать в чат..."
                    className="flex-1 bg-transparent text-sm outline-none"
                    style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}
                  />
                  <button className="p-1 rounded transition-colors" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--forum-text-dim)' }}>
                    <Icon name="Smile" size={14} />
                  </button>
                </div>
                <button
                  onClick={sendMessage}
                  className="p-2.5 rounded transition-all hover:opacity-90"
                  style={{ background: 'var(--forum-green)', border: 'none', cursor: 'pointer' }}
                >
                  <Icon name="Send" size={16} style={{ color: '#000' }} />
                </button>
              </div>
              <p className="mono text-xs mt-1.5" style={{ color: 'var(--forum-text-muted)' }}>Enter — отправить · Shift+Enter — новая строка</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
