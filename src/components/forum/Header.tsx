import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  onNav: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'strategies', label: 'Стратегии' },
  { id: 'news', label: 'Новости' },
  { id: 'chat', label: 'Чат' },
  { id: 'about', label: 'О нас' },
  { id: 'help', label: 'Справка' },
];

export default function Header({ activeSection, onNav }: HeaderProps) {
  return (
    <header style={{ background: 'var(--forum-surface)', borderBottom: '1px solid var(--forum-border)' }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNav('home')}>
            <img
              src="https://cdn.poehali.dev/projects/c2b196b7-640c-4524-9c82-0110102d2ff2/bucket/1661e9e5-49c1-4883-b311-cd46bfda0654.png"
              alt="PoSignals"
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold text-base tracking-tight" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
              Po<span style={{ color: 'var(--forum-green)' }}>Signals</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNav(item.id)}
                className={`nav-item px-3 py-2 text-sm rounded transition-colors ${
                  activeSection === item.id ? 'active' : ''
                }`}
                style={{
                  color: activeSection === item.id ? 'var(--forum-green)' : 'var(--forum-text-dim)',
                  fontFamily: 'Golos Text, sans-serif',
                  fontWeight: activeSection === item.id ? 600 : 400,
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full pulse-dot" style={{ background: 'var(--forum-green)' }}></div>
              <span className="mono text-xs" style={{ color: 'var(--forum-text-dim)' }}>1,247 онлайн</span>
            </div>
            <button
              className="px-4 py-1.5 rounded text-sm font-semibold transition-all"
              style={{
                background: 'var(--forum-btn-bg)',
                color: 'var(--forum-btn-text)',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Golos Text, sans-serif',
              }}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}