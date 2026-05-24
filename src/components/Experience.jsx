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
    description: '负责震动检测项目的开发与调试。基于 RK3568 主控的爆炸检测项目，完成内核剪裁、CAN 通信外设配置；参与以 STM32L496 为核心的震动检测研发，优化低功耗策略，编写相关技术文档。',
    descriptionEn: 'Developed and debugged vibration detection systems. Built explosion detection on RK3568 with kernel tailoring and CAN bus peripherals. Contributed to STM32L496-based vibration detection, optimized low-power strategies, and authored technical documentation.',
  },
  {
    period: '2025.07',
    periodEn: 'Jul 2025',
    role: '参赛选手 (省一等奖)',
    roleEn: 'Competitor (Provincial 1st Prize)',
    company: '全国大学生电子设计竞赛 (E题)',
    companyEn: 'National Undergraduate Electronic Design Contest (Problem E)',
    description: '设计简易自行瞄准装置，基于 STM32F407 + OpenMV 构建视觉-舵机双闭环追踪系统，独立完成赛道元素特征提取与状态机逻辑编写。',
    descriptionEn: 'Designed an auto-aiming device with STM32F407 + OpenMV camera, built a dual closed-loop vision-servo tracking system, independently implemented track feature extraction and state machine logic.',
  },
  {
    period: '2025.06',
    periodEn: 'Jun 2025',
    role: '参赛选手 (省一等奖)',
    roleEn: 'Competitor (Provincial 1st Prize)',
    company: '全地形机器人创新大赛',
    companyEn: 'All-Terrain Robot Innovation Competition',
    description: '基于 NVIDIA Jetson Orin + ROS2 搭建全地形智能车，移植 STM32 端算法，调通外设驱动，添加视觉障碍物识别算法。',
    descriptionEn: 'Built all-terrain smart vehicle on NVIDIA Jetson Orin + ROS2, ported STM32 algorithms, integrated peripheral drivers, and added vision-based obstacle recognition.',
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
