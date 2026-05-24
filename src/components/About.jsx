import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import Lightbox from './Lightbox';
import './About.css';

const HONOR_IMAGES = [
  '079e424261a892f7d89914f2a77d4fb4.jpg',
  '24c718f9602bf25375f893467c74ded2.jpg',
  '3b6835d836e6b7763b01c38a484dcd29.jpg',
  '7016e5a401e7831864597e02f54a6b94.jpg',
  '76369bc982b373fea1024873f5a379ca.jpg',
  '8a9baf3ba935ca56353f348378bab912.jpg',
  '99c335cde469d9be894e7d421f990ecb.jpg',
  'd5ef5c1dcd25f79cb641cd1639131883.jpg',
];

export default function About() {
  const { t, i18n } = useTranslation();
  const [ref, inView] = useInView();
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const isZh = i18n.language === 'zh';

  return (
    <section id="about" className="section">
      <div ref={ref} className={`fade-in${inView ? ' visible' : ''}`}>
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">3.71</span>
              <span className="highlight-label">
                {isZh ? 'GPA（14/100）' : 'GPA (14/100)'}
              </span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">3</span>
              <span className="highlight-label">
                {isZh ? '项省级竞赛获奖' : 'Provincial Awards'}
              </span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">STM32 / RK3568</span>
              <span className="highlight-label">
                {isZh ? '常用开发平台' : 'Dev Platforms'}
              </span>
            </div>
          </div>
        </div>

        <div className="honors-section">
          <h3 className="honors-title">
            {isZh ? '荣誉证书' : 'Honors & Awards'}
          </h3>
          <div className="honors-grid">
            {HONOR_IMAGES.map((img, i) => (
              <div
                key={img}
                className="honor-card"
                onClick={() => setLightboxSrc(`/honors/${img}`)}
                style={{ '--i': i }}
              >
                <img
                  src={`/honors/${img}`}
                  alt={isZh ? `荣誉证书 ${i + 1}` : `Certificate ${i + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </section>
  );
}
