import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import './Skills.css';

const SKILL_CATEGORIES = {
  languages: ['C', 'C++', 'Shell', 'Python'],
  mcu: ['STM32 (Cortex-M)', 'ARM Cortex-A', 'RK3568/3588', 'DMA / ADC / DAC / RTC', 'GPIO / UART / I2C / SPI / CAN / EtherCAT'],
  linux: ['Linux 驱动开发', '设备树 DTS', 'Platform 模型', '内核裁剪与移植', 'SocketCAN', '交叉编译', 'Makefile / CMake'],
  tools: ['VSCode', 'Keil5', 'Git', 'Claude Code', 'Gemini', 'cubeAI', 'OpenMV'],
  control: ['PID 控制算法', 'FOC', 'PMSM / BLDC', 'FSM 状态机', '低功耗设计'],
};

export default function Skills() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="section skills-section">
      <div ref={ref} className={`fade-in${inView ? ' visible' : ''}`}>
        <h2 className="section-title">{t('skills.title')}</h2>

        {Object.entries(SKILL_CATEGORIES).map(([key, items]) => (
          <div key={key} className="skill-category">
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
