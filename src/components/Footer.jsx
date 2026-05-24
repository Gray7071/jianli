import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          {t('footer.copyright')}{' '}
          <span className="footer-built">
            · Built with React + Vite
          </span>
        </p>
      </div>
    </footer>
  );
}
