import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import './Projects.css';

const PROJECTS = [
  {
    title: '基于 RK3568 的爆炸检测系统',
    titleEn: 'Explosion Detection on RK3568',
    descriptionZh: '震动传感器模拟信号经 STM32 ADC 采集后通过 CAN 通信传输至主控 RK3568，对传感器波形进行算法分析实现精准定位爆炸点。负责 CAN 设备树配置、SocketCAN 高速数据处理及内核裁剪优化。',
    descriptionEn: 'Vibration sensor analog signals collected by STM32 ADC and transmitted via CAN to RK3568 for waveform analysis and precise explosion localization. Responsible for CAN device tree config, SocketCAN high-speed data processing, and kernel optimization.',
    tech: ['RK3568', 'SocketCAN', 'Linux Kernel', 'DTS', 'STM32', 'C'],
    github: null,
    demo: null,
  },
  {
    title: '参地 — 震动检测报警装置',
    titleEn: 'Ginseng Field Vibration Detection Alarm',
    descriptionZh: '基于 STM32L496 超低功耗 MCU 与 cubeAI，通过震动传感器采集信号并利用 AI 模型区分人/车/风。低功耗策略实现最低 3μA、平均 18μA，使用时间延长 14%。设计非对称限幅滤波与 FSM 实现稳定电池监测。',
    descriptionEn: 'Ultra-low-power STM32L496 + cubeAI vibration detection. AI model classifies human/vehicle/wind. Achieved 3μA standby, 18μA average current, 14% longer battery life. Designed asymmetric clipping filter and FSM for stable battery monitoring.',
    tech: ['STM32L496', 'cubeAI', 'C', 'Keil5', 'Low-Power'],
    github: null,
    demo: null,
  },
  {
    title: '简易自行瞄准装置 (全国电赛 E 题)',
    titleEn: 'Auto-Aiming Device (National Contest)',
    descriptionZh: 'OpenMV 摄像头二值化处理后通过串口将目标位置发送至 STM32F407，通过 PID 闭环控制舵机使激光锁定目标中心。构建视觉-舵机双闭环追踪系统，引入前馈补偿算法消除转弯视觉丢失问题。',
    descriptionEn: 'OpenMV camera binary processing → serial → STM32F407 → PID servo control for laser lock-on. Built vision-servo dual closed-loop tracking with feedforward compensation to eliminate tracking loss during sharp turns.',
    tech: ['STM32F407', 'OpenMV', 'PID', 'C', 'Servo Control'],
    github: null,
    demo: null,
  },
  {
    title: '全国大学生智能车竞赛',
    titleEn: 'National Smart Car Competition',
    descriptionZh: '独立完成赛道元素（环岛、直角弯、断路、坡道）的特征提取与状态机逻辑编写。实现 PID 电机多环闭环控制。获省级二等奖。',
    descriptionEn: 'Implemented track element feature extraction (roundabouts, right-angle turns, gaps, slopes) and FSM logic. Achieved multi-loop PID motor closed-loop control. Won provincial 2nd prize.',
    tech: ['STM32', 'PID', 'C', 'Keil5', 'FSM'],
    github: null,
    demo: null,
  },
];

export default function Projects() {
  const { t, i18n } = useTranslation();
  const [ref, inView] = useInView();

  const isZh = i18n.language === 'zh';

  return (
    <section id="projects" className="section">
      <div ref={ref} className={`fade-in${inView ? ' visible' : ''}`}>
        <h2 className="section-title">{t('projects.title')}</h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card-body">
                <h3 className="project-card-title">
                  {isZh ? project.title : project.titleEn}
                </h3>
                <p className="project-card-desc">
                  {isZh ? project.descriptionZh : project.descriptionEn}
                </p>
                <div className="project-tech">
                  {project.tech.map((tag) => (
                    <span key={tag} className="project-tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
