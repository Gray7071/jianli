import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();

  return (
    <section id="contact" className="section">
      <div ref={ref} className={`fade-in${inView ? ' visible' : ''}`}>
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="contact-subtitle">{t('contact.subtitle')}</p>
        <div className="contact-links">
          <a href="mailto:jgh18326820872@qq.com" className="contact-card">
            <span className="contact-icon">✉</span>
            <span className="contact-label">{t('contact.email')}</span>
            <span className="contact-value">jgh18326820872@qq.com</span>
          </a>
          <a href="https://github.com/Gray7071" target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-icon">⌘</span>
            <span className="contact-label">{t('contact.github')}</span>
            <span className="contact-value">github.com/Gray7071</span>
          </a>
          <a href="tel:18946555162" className="contact-card">
            <span className="contact-icon">☎</span>
            <span className="contact-label">{t('contact.phone')}</span>
            <span className="contact-value">189-4655-5162</span>
          </a>
        </div>
      </div>
    </section>
  );
}
