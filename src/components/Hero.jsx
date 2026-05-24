import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import './Hero.css';

export default function Hero() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();

  return (
    <section id="hero" className="hero">
      <img
        className="hero-bg"
        src="/honors/b7f176f3e6cdf90196ceb8099ba02be8.jpg"
        alt=""
      />
      <div className="hero-overlay" />
      <div ref={ref} className={`hero-content${inView ? ' visible' : ''}`}>
        <p className="hero-greeting">{t('hero.greeting')}</p>
        <h1 className="hero-name">{t('hero.name')}</h1>
        <h2 className="hero-title">{t('hero.title')}</h2>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            {t('hero.cta_projects')}
          </a>
          <a href="#contact" className="btn btn-outline">
            {t('hero.cta_contact')}
          </a>
        </div>
      </div>
    </section>
  );
}
