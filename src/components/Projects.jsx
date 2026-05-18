import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import './Projects.css';

const PROJECTS = [
  {
    title: '电赛 E 题',
    descriptionZh: '全国大学生电子设计竞赛 E 题作品，涉及信号处理与嵌入式控制系统设计。',
    descriptionEn: 'National Undergraduate Electronic Design Contest, Problem E — signal processing and embedded control system design.',
    tech: ['STM32', 'C', '信号处理', 'PCB 设计'],
    github: null,
    video: '/videos/5ae242863d69f8d61651fd523174dd02.mp4',
  },
  {
    title: 'MicroOS',
    descriptionZh: '一个适用于 ARM Cortex-M 系列的轻量级 RTOS 内核，支持抢占式多任务调度、信号量和消息队列。',
    descriptionEn: 'A lightweight RTOS kernel for ARM Cortex-M series, supporting preemptive multitasking, semaphores, and message queues.',
    tech: ['C', 'ARM Cortex-M', 'FreeRTOS 兼容 API'],
    github: 'https://github.com/',
    video: null,
  },
  {
    title: 'CANBus Monitor',
    descriptionZh: '跨平台的 CAN 总线监控与分析工具，支持数据录制、回放和 DBC 文件解析。',
    descriptionEn: 'Cross-platform CAN bus monitoring and analysis tool with data logging, replay, and DBC file parsing.',
    tech: ['C++', 'SocketCAN', 'Qt', 'Python'],
    github: 'https://github.com/',
    video: null,
  },
  {
    title: 'IoT Sensor Hub',
    descriptionZh: '基于 Zephyr RTOS 的低功耗物联网传感器节点，支持 BLE Mesh 组网与 OTA 升级。',
    descriptionEn: 'Low-power IoT sensor node based on Zephyr RTOS with BLE Mesh networking and OTA firmware updates.',
    tech: ['C', 'Zephyr RTOS', 'BLE 5.0', 'nRF52'],
    github: 'https://github.com/',
    video: null,
  },
  {
    title: 'Embedded Linux BSP Toolkit',
    descriptionZh: '基于 Yocto 的嵌入式 Linux BSP 快速搭建工具集，包含自定义层和配方模板。',
    descriptionEn: 'Embedded Linux BSP rapid development toolkit based on Yocto, with custom layers and recipe templates.',
    tech: ['Yocto', 'BitBake', 'Linux Kernel', 'Shell'],
    github: 'https://github.com/',
    video: null,
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
                <h3 className="project-card-title">{project.title}</h3>
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
