# 靳国豪的个人网站

## 项目定位
React + Vite 构建的个人网站，用于展示嵌入式软件工程师的项目经验与技术能力，方便求职。

## 技术栈
- React 19 + Vite 6
- i18next / react-i18next（中英双语）
- 纯 CSS（CSS 自定义属性实现深色/浅色模式）
- 无其他 UI 库依赖

## 环境要求

### 已具备
- Node.js v24.15.0 (WSL Ubuntu-24.04, 通过 nvm 安装)
- npm 11.12.1
- Git (WSL)
- VSCode

### 需要安装（本项目已安装）
- react, react-dom
- i18next, react-i18next
- vite, @vitejs/plugin-react

### 注意事项
- 项目统一在 WSL Ubuntu-24.04 内运行，路径 `/home/utawe/claude_work/jianli/`
- 使用 nvm 管理 Node.js，执行命令前需加载 nvm：`. /home/utawe/.nvm/nvm.sh`
- 如果通过 Windows 侧的 Claude Code 操作，npm 命令需用：`wsl -d Ubuntu-24.04 -- bash -c '. /home/utawe/.nvm/nvm.sh && cd /home/utawe/claude_work/jianli && npm ...'`

## 目录结构
```
/home/utawe/claude_work/jianli/
├── index.html              ← 入口 HTML
├── package.json
├── vite.config.js
├── CLAUDE.md               ← 本文件
├── dist/                   ← 生产构建产物
├── public/                 ← 静态资源
│   ├── honors/             ← 荣誉证书照片（Hero 背景）
│   └── videos/             ← 项目演示视频
└── src/
    ├── main.jsx            ← React 入口
    ├── App.jsx             ← 主应用（主题/语言切换）
    ├── index.css           ← CSS 变量 + 全局样式
    ├── App.css
    ├── i18n/
    │   ├── index.js        ← i18n 配置
    │   ├── zh.json         ← 中文翻译
    │   └── en.json         ← 英文翻译
    ├── hooks/
    │   └── useInView.js    ← Intersection Observer 动画 Hook
    └── components/
        ├── Navbar.jsx/css   ← 导航栏 + 移动端汉堡菜单
        ├── Hero.jsx/css     ← 首屏（荣誉照片拼贴背景）
        ├── About.jsx/css    ← 关于我
        ├── Skills.jsx/css   ← 技能标签
        ├── Projects.jsx/css ← 项目卡片
        ├── Experience.jsx/css ← 经历时间线
        ├── Contact.jsx/css  ← 联系方式
        └── Footer.jsx/css   ← 页脚
```

## 命令
```bash
# 所有命令在 WSL Ubuntu-24.04 内执行
# 先加载 nvm
. /home/utawe/.nvm/nvm.sh

# 进入项目
cd /home/utawe/claude_work/jianli

# 开发
npm run dev

# 构建
npm run build

# 预览构建产物
npm run preview
```

## 通过 Windows 侧 Claude Code 执行 npm 命令
```bash
wsl -d Ubuntu-24.04 -- bash -c '. /home/utawe/.nvm/nvm.sh && cd /home/utawe/claude_work/jianli && npm run build'
```

## 网站内容来源
- 简历：`靳国豪（嵌入式软件工程师）4.22.docx`
- 邮箱：jgh18326820872@qq.com
- 电话：189-4655-5162
- 学校：长春大学 电气工程及其自动化 2022级
