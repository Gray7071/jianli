import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import './Skills.css';

const SKILL_CATEGORIES = {
  languages: ['C', 'C++', 'Shell', 'Python'],
  systems: ['Embedded Linux', 'ROS2', 'ARM Cortex-M', 'ARM Cortex-A', 'STM32', 'NVIDIA Jetson', 'FreeRTOS'],
  tools: ['Git', 'Make / CMake', 'VSCode / Keil', 'UART / I2C / SPI', 'SocketCAN / EtherCAT', 'GCC / Clang', 'Linux 交叉编译', '设备树 DTS'],
};

export default function Skills() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="section skills-section">
      <div ref={ref} className={`fade-in${inView ? ' visible' : ''}`}>
        <h2 className="section-title">{t('skills.title')}</h2>

        {Object.entries(SKILL_CATEGORIES).map(([key, items], i) => (
          <div key={key} className="skill-category" style={{ transitionDelay: `${i * 0.1}s` }}>
            <h3 className="skill-category-title">{t(`skills.${key}`)}</h3>
            <div className="skill-tags">
              {items.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
