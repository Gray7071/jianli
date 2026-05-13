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
- Node.js v24.14.0 (Windows, `C:\Users\utawe\AppData\Local\...`)
- npm 11.9.0
- Git (Windows)
- VSCode

### 需要安装（本项目已安装）
- react, react-dom
- i18next, react-i18next
- vite, @vitejs/plugin-react

### 注意事项
- 项目需要从 Windows 本地路径运行（`C:\Users\utawe\claude_work\jianli\`），不能从 WSL UNC 路径运行，因为 CMD.EXE 不支持 UNC 路径
- WSL 路径下可编辑文件，但 npm/node 命令需在 Windows 路径下执行

## 目录结构
```
C:\Users\utawe\claude_work\jianli\
├── index.html              ← 入口 HTML
├── package.json
├── vite.config.js
├── CLAUDE.md               ← 本文件
├── dist/                   ← 生产构建产物
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
        ├── Hero.jsx/css     ← 首屏
        ├── About.jsx/css    ← 关于我
        ├── Skills.jsx/css   ← 技能标签
        ├── Projects.jsx/css ← 项目卡片
        ├── Experience.jsx/css ← 经历时间线
        ├── Contact.jsx/css  ← 联系方式
        └── Footer.jsx/css   ← 页脚
```

## 命令
```bash
# 必须在 Windows 路径下运行
cd C:\Users\utawe\claude_work\jianli

# 开发
npm run dev

# 构建
npm run build

# 预览构建产物
npm run preview
```

## 网站内容来源
- 简历：`靳国豪（嵌入式软件工程师）4.22.docx`
- 邮箱：jgh18326820872@qq.com
- 电话：189-4655-5162
- 学校：长春大学 电气工程及其自动化 2022级
