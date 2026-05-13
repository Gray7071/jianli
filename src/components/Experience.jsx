import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import './Experience.css';

const EXPERIENCES = [
  {
    period: '2025.11 – 2026.04',
    periodEn: '2025.11 – 2026.04',
    role: '嵌入式软件实习生',
    roleEn: 'Embedded Software Intern',
    company: '吉林省日月智感互联网有限公司',
    companyEn: 'Jilin Riyue Zhigan Internet Co., Ltd.',
    description: '负责基于 RK3568 的爆炸检测系统驱动开发（CAN 设备树配置、SocketCAN 数据处理、内核裁剪），以及基于 STM32L496 的震动检测报警装置的低功耗策略设计与实现，最低功耗达 3μA。',
    descriptionEn: 'Developed CAN driver for RK3568 explosion detection system (DTS, SocketCAN, kernel optimization). Designed low-power strategy for STM32L496 vibration alarm achieving 3μA standby current.',
  },
  {
    period: '2025.07 – 2025.08',
    periodEn: '2025.07 – 2025.08',
    role: '竞赛团队成员',
    roleEn: 'Competition Team Member',
    company: '全国大学生电子设计大赛 (省一等奖) / 全国大学生智能车竞赛 (省二等奖)',
    companyEn: 'National Electronic Design Contest (Province 1st) / Smart Car Competition (Province 2nd)',
    description: '负责 OpenMV 图像处理算法、PID 电机控制算法、视觉-舵机双闭环追踪系统及赛道元素特征提取与状态机逻辑编写。',
    descriptionEn: 'Responsible for OpenMV image processing, PID motor control, vision-servo dual closed-loop tracking, track feature extraction and FSM logic design.',
  },
];

export default function Experience() {
  const { t, i18n } = useTranslation();
  const [ref, inView] = useInView();

  const isZh = i18n.language === 'zh';

  return (
    <section id="experience" className="section experience-section">
      <div ref={ref} className={`fade-in${inView ? ' visible' : ''}`}>
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-period">
                  {isZh ? exp.period : exp.periodEn}
                </span>
                <h3 className="timeline-role">
                  {isZh ? exp.role : exp.roleEn}
                </h3>
                <p className="timeline-company">
                  {isZh ? exp.company : exp.companyEn}
                </p>
                <p className="timeline-desc">
                  {isZh ? exp.description : exp.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
