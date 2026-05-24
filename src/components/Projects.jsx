import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import './Projects.css';

const PROJECTS = [
  {
    title: '全地形智能车',
    titleEn: 'All-Terrain Intelligent Vehicle',
    descriptionZh: '基于 NVIDIA Jetson Orin + ROS2 的全地形智能车，移植 STM32 端控制算法，集成陀螺仪与灰度传感器，实现自主循迹、障碍识别与跨越。获全地形机器人创新大赛省一等奖。',
    descriptionEn: 'All-terrain smart vehicle on NVIDIA Jetson Orin + ROS2. Ported STM32 control algorithms, integrated gyroscope & grayscale sensors for autonomous path tracking and obstacle crossing. Won Provincial 1st Prize.',
    tech: ['ROS2', 'C++', 'Jetson Orin', 'PID', 'I2C', 'SCHED_FIFO'],
    github: 'https://github.com/Gray7071',
    video: null,
  },
  {
    title: '基于 RK3568 的爆炸检测系统',
    titleEn: 'Explosion Detection on RK3568',
    descriptionZh: '基于 RK3568 主控的震动检测系统，4路震动传感器经 STM32 ADC 转换后通过 CAN 通信传输至主控。负责 CAN 设备树配置、SocketCAN 高速数据处理及内核裁剪优化。',
    descriptionEn: 'Vibration detection system on RK3568 with 4-channel sensors via STM32 ADC over CAN bus. Responsible for CAN device tree config, SocketCAN high-speed data processing, and kernel tailoring.',
    tech: ['Linux Kernel', 'DTS', 'SocketCAN', 'STM32', 'Makefile', 'Ubuntu'],
    github: 'https://github.com/Gray7071',
    video: null,
  },
  {
    title: '震动检测报警装置',
    titleEn: 'Vibration Detection & Alarm Device',
    descriptionZh: '基于 STM32L496 + CubeAI 的低功耗震动检测装置，可识别人、车、风三类震动波形。设计低功耗策略实现最低 3μA 电流，平均 18μA，续航比同类产品延长 14%。',
    descriptionEn: 'Low-power vibration detection device on STM32L496 + CubeAI, capable of distinguishing human, vehicle, and wind vibrations. Achieved 3μA min / 18μA avg current — 14% longer battery life vs. similar products.',
    tech: ['STM32L496', 'CubeAI', 'C', 'UART', 'Keil5'],
    github: 'https://github.com/Gray7071',
    video: null,
  },
  {
    title: '简易自行瞄准装置（2025 电赛 E 题）',
    titleEn: 'Auto-Aiming Device (2025 NATSEC Problem E)',
    descriptionZh: 'STM32F407 + OpenMV 视觉追踪系统，构建视觉-舵机双闭环控制，引入底盘转向前馈补偿算法解决直角弯激光脱靶问题。独立完成赛道元素特征提取与状态机逻辑，获省一等奖。',
    descriptionEn: 'STM32F407 + OpenMV visual tracking system with dual closed-loop vision-servo control. Solved laser target loss on sharp turns with chassis steering feedforward compensation. Independently implemented track feature extraction & state machine. Won Provincial 1st Prize.',
    tech: ['STM32F407', 'OpenMV', 'PID', 'C', 'Keil5'],
    video: '/videos/5ae242863d69f8d61651fd523174dd02.mp4',
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
              {project.video && (
                <div className="project-video">
                  <video
                    src={project.video}
                    controls
                    preload="metadata"
                    playsInline
                  />
                </div>
              )}
              <div className="project-card-body">
                <h3 className="project-card-title">{isZh ? project.title : project.titleEn}</h3>
                <p className="project-card-desc">
                  {isZh ? project.descriptionZh : project.descriptionEn}
                </p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              {project.github && (
                <div className="project-card-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {t('projects.view_code')} →
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
