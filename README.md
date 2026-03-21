# AI红娘 - Landing Page

基于 AI 红娘智能匹配服务的官方落地页。

## 技术栈

- **React 18** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 快速构建工具
- **Tailwind CSS** - 原子化 CSS 框架
- **Lucide React** - 图标库

## 项目结构

```
├── public/                 # 静态资源
├── src/
│   ├── components/         # React 组件
│   │   ├── Header.tsx     # 导航栏
│   │   ├── Hero.tsx       # 首屏
│   │   ├── Features.tsx   # 功能特点
│   │   ├── Steps.tsx      # 使用流程
│   │   ├── Benefits.tsx   # 用户权益
│   │   ├── CTA.tsx        # 行动召唤
│   │   └── Footer.tsx     # 页脚
│   ├── styles/
│   │   └── index.css      # 全局样式
│   ├── assets/            # 资源文件
│   ├── App.tsx            # 主应用组件
│   ├── main.tsx           # 应用入口
│   └── vite-env.d.ts      # Vite 类型声明
├── index.html             # HTML 入口
├── package.json           # 项目依赖
├── tsconfig.json          # TypeScript 配置
├── vite.config.ts         # Vite 配置
├── tailwind.config.js     # Tailwind CSS 配置
└── postcss.config.js      # PostCSS 配置
```

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

应用将在 http://localhost:3000 启动。

### 构建生产版本

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

构建产物将输出到 `dist` 目录。

### 预览生产构建

```bash
npm run preview
# 或
yarn preview
# 或
pnpm preview
```

## 设计规范

- **主色调**: 淡紫色系 (violet-500 to primary-600)
- **背景**: 纯白色为主
- **风格**: 现代化、简洁、友好
- **圆角**: 大量使用圆角设计 (rounded-2xl, rounded-full)
- **阴影**: 柔和的紫色阴影效果

## 备案信息

备案号位置已预留在 `src/components/Footer.tsx` 中，请根据实际备案信息修改：

```tsx
<p className="text-gray-400 text-xs">
  ICP备案号：XXXXXXXX号
</p>
```

## 许可证

Copyright © 2024 AI红娘. All rights reserved.
