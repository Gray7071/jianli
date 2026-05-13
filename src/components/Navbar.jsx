import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const NAV_ITEMS = ['about', 'skills', 'projects', 'experience', 'contact'];

export default function Navbar({ onToggleTheme, onToggleLang }) {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          {'<GJ/>'}
        </a>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={closeMenu}>
                {t(`nav.${item}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            className="nav-btn"
            onClick={() => {
              const next = i18n.language === 'zh' ? 'en' : 'zh';
              onToggleLang(next);
            }}
            aria-label={t('language.switch')}
          >
            {t('language.switch')}
          </button>
          <button
            className="nav-btn theme-btn"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            <span className="theme-icon-light">☀️</span>
            <span className="theme-icon-dark">🌙</span>
          </button>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
