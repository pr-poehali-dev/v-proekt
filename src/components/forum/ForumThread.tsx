import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface ForumThreadProps {
  threadId: string;
  categoryId: string;
  onBack: () => void;
  onBoard: () => void;
}

const categoryMeta: Record<string, string> = {
  'binary-strategies': 'Стратегии бинарных опционов',
  'technical': 'Технический анализ',
  'forex': 'Форекс',
  'crypto': 'Криптовалюты',
};

const posts = [
  {
    id: 1,
    author: 'TrendMaster_RU',
    role: 'Эксперт',
    badge: '⭐',
    joined: 'Март 2019',
    posts: 2847,
    reputation: 1243,
    avatar: 'T',
    time: '10 апр. 2026, 14:32',
    isOp: true,
    content: `Добрый день, коллеги!

Хочу поделиться стратегией, которую использую последние 6 месяцев. Результаты стабильные — WinRate держится на уровне 71–73%.

**Суть стратегии:**

Торгую пин-бары на временном фрейме M15 исключительно от ключевых уровней поддержки и сопротивления. Никаких входов "в воздух" — только от уровней.

**Условия входа:**
1. Определяю ключевые уровни на H1 или H4
2. Жду формирования пин-бара на M15 от этого уровня
3. Вход на следующей свече после закрытия пин-бара
4. Экспирация: 3–4 свечи M15 (45–60 минут)

**Управление рисками:**
- Риск не более 2% от депозита на одну сделку
- Не более 3 сделок подряд в убыток (стоп-лосс дня)
- Торгую только в 08:00–12:00 и 14:00–18:00 по МСК (лондон + NY open)

За 6 месяцев: 847 сделок, WR 72.4%, средняя доходность +0.8% в день.

Буду рад вопросам и обсуждению!`,
    likes: 187,
    quoted: false,
  },
  {
    id: 2,
    author: 'binary_pro_2024',
    role: 'Трейдер',
    badge: '',
    joined: 'Янв. 2024',
    posts: 342,
    reputation: 89,
    avatar: 'B',
    time: '10 апр. 2026, 15:14',
    isOp: false,
    content: `Отличная система! Торгую похожее, но добавил RSI как фильтр.

Если RSI на M15 при появлении пин-бара у поддержки находится ниже 40 — сигнал более надёжный. У меня это убрало примерно 30% ложных сигналов.

@TrendMaster_RU, как вы определяете ключевые уровни — вручную или используете какой-то инструмент?`,
    likes: 43,
    quoted: false,
  },
  {
    id: 3,
    author: 'rookie_2024',
    role: 'Трейдер',
    badge: '',
    joined: 'Фев. 2026',
    posts: 12,
    reputation: 3,
    avatar: 'R',
    time: '10 апр. 2026, 15:41',
    isOp: false,
    content: `Подскажите новичку: как определить, что уровень "ключевой"? 

Смотрю на графики — уровней много, не всегда понятно от каких работать.`,
    likes: 8,
    quoted: false,
  },
  {
    id: 4,
    author: 'TrendMaster_RU',
    role: 'Эксперт',
    badge: '⭐',
    joined: 'Март 2019',
    posts: 2847,
    reputation: 1243,
    avatar: 'T',
    time: '10 апр. 2026, 16:03',
    isOp: true,
    content: `@binary_pro_2024 — RSI фильтр хорошая идея, попробую добавить. Уровни определяю вручную: смотрю на H4/D1, ищу зоны, где цена разворачивалась минимум 2–3 раза. Чем больше касаний — тем надёжнее.

@rookie_2024 — ключевой уровень это зона, где было несколько разворотов. Смотри на D1, H4, отмечай минимумы и максимумы за последние 3–6 месяцев. Это и будут ваши ключевые уровни.

Ещё один признак: уровни, которые были поддержкой, после пробоя становятся сопротивлением — и наоборот. Это называется "перевёртывание уровня".`,
    likes: 94,
    quoted: false,
  },
  {
    id: 5,
    author: 'AlgoSystem_77',
    role: 'Алготрейдер',
    badge: '🤖',
    joined: 'Июнь 2021',
    posts: 1124,
    reputation: 456,
    avatar: 'A',
    time: '10 апр. 2026, 17:22',
    isOp: false,
    content: `Прогнал через бэктест на 2 года (2024–2025) по EUR/USD, GBP/USD, USD/JPY.

Результаты:
- EUR/USD: WR 69.8%, 1240 сделок
- GBP/USD: WR 71.2%, 980 сделок  
- USD/JPY: WR 67.4%, 860 сделок

Лучше всего работает в сессию Лондон + пересечение с Нью-Йорком (14:00–17:00 МСК). В азиатскую сессию WR падает до 58% — лучше не торговать.

Код скрипта для поиска пин-баров выложу в ветке "Роботы и автоматизация".`,
    likes: 212,
    quoted: false,
  },
];

const roleColors: Record<string, string> = {
  'Модератор': '#ffd166',
  'Эксперт': 'var(--forum-green)',
  'Аналитик': '#ffd166',
  'Алготрейдер': '#7c8fff',
  'Трейдер': 'var(--forum-text-dim)',
};

function PostCard({ post, onQuote }: { post: typeof posts[0]; onQuote: (author: string) => void }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="forum-card overflow-hidden">
      <div className="flex">
        {/* Author sidebar */}
        <div className="hidden sm:flex flex-col items-center gap-2 px-4 py-5 flex-shrink-0 w-36" style={{ borderRight: '1px solid var(--forum-border)', background: 'var(--forum-surface-2)' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center mono text-lg font-bold" style={{ background: 'var(--forum-surface)', color: roleColors[post.role], border: `2px solid ${roleColors[post.role]}30` }}>
            {post.badge || post.avatar}
          </div>
          <div className="text-center">
            <p className="text-xs font-bold" style={{ color: roleColors[post.role], fontFamily: 'Golos Text, sans-serif' }}>{post.author}</p>
            <p className="mono text-xs mt-0.5" style={{ color: roleColors[post.role], opacity: 0.8 }}>{post.role}</p>
          </div>
          <div className="w-full pt-2" style={{ borderTop: '1px solid var(--forum-border)' }}>
            <div className="flex justify-between mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>
              <span>Постов</span>
              <span style={{ color: 'var(--forum-text-dim)' }}>{post.posts.toLocaleString('ru')}</span>
            </div>
            <div className="flex justify-between mono text-xs mt-1" style={{ color: 'var(--forum-text-muted)' }}>
              <span>Репутация</span>
              <span style={{ color: 'var(--forum-green)' }}>+{post.reputation}</span>
            </div>
            <div className="flex justify-between mono text-xs mt-1" style={{ color: 'var(--forum-text-muted)' }}>
              <span>С нами</span>
              <span style={{ color: 'var(--forum-text-dim)' }}>{post.joined}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Post header */}
          <div className="flex items-center justify-between px-5 py-2.5" style={{ borderBottom: '1px solid var(--forum-border)', background: 'rgba(255,255,255,0.01)' }}>
            <div className="flex items-center gap-2">
              <span className="sm:hidden mono text-xs font-bold" style={{ color: roleColors[post.role] }}>@{post.author}</span>
              <span className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>{post.time}</span>
              {post.isOp && (
                <span className="mono text-xs px-1.5 py-0.5 rounded" style={{ background: 'rgba(196,181,253,0.1)', color: 'var(--forum-green)', border: '1px solid rgba(196,181,253,0.2)' }}>
                  Автор темы
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => onQuote(post.author)} className="mono text-xs flex items-center gap-1 transition-colors" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--forum-text-muted)' }}>
                <Icon name="Quote" size={12} />
                Цитировать
              </button>
              <button className="mono text-xs" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--forum-text-muted)' }}>
                #
              </button>
            </div>
          </div>

          {/* Post body */}
          <div className="px-5 py-4">
            <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={i} className="font-bold mt-3 mb-1" style={{ color: '#ffffff' }}>{line.replace(/\*\*/g, '')}</p>;
                }
                if (line.match(/^\d+\./)) {
                  return <p key={i} className="ml-4 my-0.5" style={{ color: 'var(--forum-text)' }}>{line}</p>;
                }
                if (line.startsWith('@')) {
                  const parts = line.split(/(@\w+)/g);
                  return <p key={i} className="my-0.5">{parts.map((p, j) => p.startsWith('@') ? <span key={j} style={{ color: 'var(--forum-green)' }}>{p}</span> : p)}</p>;
                }
                if (line.startsWith('-')) {
                  return <p key={i} className="ml-4 my-0.5" style={{ color: 'var(--forum-text)' }}>• {line.slice(1)}</p>;
                }
                return line ? <p key={i} className="my-0.5">{line}</p> : <br key={i} />;
              })}
            </div>
          </div>

          {/* Post footer */}
          <div className="flex items-center justify-between px-5 py-2.5" style={{ borderTop: '1px solid var(--forum-border)' }}>
            <button
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-1.5 mono text-xs transition-colors"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: liked ? 'var(--forum-green)' : 'var(--forum-text-muted)' }}
            >
              <Icon name="ThumbsUp" size={13} />
              {post.likes + (liked ? 1 : 0)}
            </button>
            <button className="mono text-xs flex items-center gap-1" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--forum-text-muted)' }}>
              <Icon name="Flag" size={12} />
              Жалоба
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ForumThread({ threadId, categoryId, onBack, onBoard }: ForumThreadProps) {
  const [replyText, setReplyText] = useState('');
  const [quote, setQuote] = useState('');

  const handleQuote = (author: string) => {
    setQuote(`@${author}, `);
    setReplyText(`@${author}, `);
  };

  const catName = categoryMeta[categoryId] || 'Раздел';

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs mono flex-wrap" style={{ color: 'var(--forum-text-muted)' }}>
        <button onClick={onBoard} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--forum-green)', fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px' }}>
          Форум
        </button>
        <Icon name="ChevronRight" size={12} />
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--forum-green)', fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px' }}>
          {catName}
        </button>
        <Icon name="ChevronRight" size={12} />
        <span style={{ color: 'var(--forum-text-dim)' }} className="truncate max-w-xs">Пин-бар на M15 — моя система с WR 72%</span>
      </div>

      {/* Thread title */}
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-2" style={{ fontFamily: 'Golos Text, sans-serif' }}>
          Пин-бар на M15 — моя система с WR 72% за 6 месяцев
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <span className="mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(196,181,253,0.1)', color: 'var(--forum-green)', border: '1px solid rgba(196,181,253,0.2)' }}>📈 Стратегия</span>
          <span className="mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(196,181,253,0.1)', color: 'var(--forum-green)', border: '1px solid rgba(196,181,253,0.2)' }}>⭐ Рекомендуем</span>
          <span className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>234 ответа · 18 400 просмотров</span>
        </div>
      </div>

      {/* Pagination top */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1">
          {[1,2,3,'...',12].map((p, i) => (
            <button key={i} className="w-7 h-7 rounded mono text-xs" style={{ background: p === 1 ? 'var(--forum-green)' : 'var(--forum-surface)', color: p === 1 ? '#07070d' : 'var(--forum-text-dim)', border: `1px solid ${p === 1 ? 'var(--forum-green)' : 'var(--forum-border)'}`, cursor: 'pointer' }}>
              {p}
            </button>
          ))}
        </div>
        <div className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>Страница 1 из 12</div>
      </div>

      {/* Posts */}
      <div className="space-y-3 mb-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onQuote={handleQuote} />
        ))}
      </div>

      {/* Reply box */}
      <div className="forum-card overflow-hidden">
        <div className="px-5 py-3 flex items-center gap-2" style={{ borderBottom: '1px solid var(--forum-border)', background: 'var(--forum-surface-2)' }}>
          <Icon name="MessageSquare" size={14} style={{ color: 'var(--forum-green)' }} />
          <span className="font-semibold text-sm" style={{ color: '#ffffff', fontFamily: 'Golos Text, sans-serif' }}>Ответить в теме</span>
        </div>
        <div className="p-5">
          {/* Toolbar */}
          <div className="flex gap-1 mb-2 flex-wrap">
            {[['Bold', 'B'], ['Italic', 'I'], ['Underline', 'U'], ['List', '≡'], ['Quote', '❝'], ['Link', '🔗']].map(([icon, label]) => (
              <button key={label} className="w-7 h-7 rounded mono text-xs font-bold flex items-center justify-center" style={{ background: 'var(--forum-surface-2)', border: '1px solid var(--forum-border)', color: 'var(--forum-text-dim)', cursor: 'pointer' }}>
                {label}
              </button>
            ))}
          </div>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Напишите ответ..."
            rows={5}
            className="w-full bg-transparent text-sm outline-none resize-none p-3 rounded"
            style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif', border: '1px solid var(--forum-border)', background: 'var(--forum-surface-2)' }}
          />
          <div className="flex items-center justify-between mt-3">
            <span className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>{replyText.length} / 10000 символов</span>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded text-sm" style={{ background: 'var(--forum-surface)', color: 'var(--forum-text-dim)', border: '1px solid var(--forum-border)', cursor: 'pointer', fontFamily: 'Golos Text, sans-serif' }}>
                Предпросмотр
              </button>
              <button
                className="px-5 py-2 rounded font-semibold text-sm flex items-center gap-2"
                style={{ background: 'var(--forum-btn-bg)', color: 'var(--forum-btn-text)', border: 'none', cursor: 'pointer', fontFamily: 'Golos Text, sans-serif' }}
              >
                <Icon name="Send" size={14} />
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
