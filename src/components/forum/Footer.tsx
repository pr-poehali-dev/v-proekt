export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6" style={{ background: 'var(--forum-surface)', borderTop: '1px solid var(--forum-border)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.poehali.dev/projects/c2b196b7-640c-4524-9c82-0110102d2ff2/bucket/1661e9e5-49c1-4883-b311-cd46bfda0654.png"
            alt="PoSignals"
            className="w-6 h-6 object-contain"
          />
          <span className="font-bold text-sm" style={{ color: 'var(--forum-text)', fontFamily: 'Golos Text, sans-serif' }}>
            Po<span style={{ color: 'var(--forum-green)' }}>Signals</span>
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