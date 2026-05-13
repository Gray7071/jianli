import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import './About.css';

export default function About() {
  const { t, i18n } = useTranslation();
  const [ref, inView] = useInView();

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
                {isZh ? 'GPA (14/100)' : 'GPA (14/100)'}
              </span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">2×</span>
              <span className="highlight-label">
                {isZh ? '国家励志奖学金' : 'National Scholarship'}
              </span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">省一等奖</span>
              <span className="highlight-label">
                {isZh ? '全国大学生电子设计大赛' : 'National Electronic Design Contest'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
