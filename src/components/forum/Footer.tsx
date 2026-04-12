export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6" style={{ background: 'var(--forum-surface)', borderTop: '1px solid var(--forum-border)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: 'var(--forum-green)' }}>
            <span className="mono text-xs font-bold text-black">T</span>
          </div>
          <span className="font-bold text-sm" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
            Trade<span style={{ color: 'var(--forum-green)' }}>Hub</span>
          </span>
          <span className="text-xs ml-2" style={{ color: 'var(--forum-text-muted)' }}>© 2026</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {['Правила', 'Конфиденциальность', 'Реклама', 'Контакты'].map((link) => (
            <button key={link} className="mono text-xs transition-colors" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--forum-text-muted)' }}>
              {link}
            </button>
          ))}
        </div>
        <p className="mono text-xs" style={{ color: 'var(--forum-text-muted)' }}>
          Риск-дисклеймер: торговля с риском потерь
        </p>
      </div>
    </footer>
  );
}
