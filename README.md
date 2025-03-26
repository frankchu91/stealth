# AI-Powered Parenting Diary / AI 育儿日记

A mobile application that helps parents document their parenting journey with AI assistance.
一个帮助父母记录育儿历程的 AI 辅助移动应用。

## Project Structure / 项目结构
```
stealth/
├── src/
│   ├── components/          # React components / React 组件
│   │   ├── Timeline.tsx     # Timeline list component / 时间轴列表组件
│   │   ├── EntryDetail.tsx  # Detail view component / 详情视图组件
│   │   └── PhoneFrame.tsx   # Phone frame simulator / 手机框架模拟器
│   ├── screens/             # Screen components / 页面组件
│   │   ├── TimelineScreen.tsx  # Timeline screen / 时间轴页面
│   │   └── DetailScreen.tsx    # Detail screen / 详情页面
│   ├── types/              # TypeScript definitions / TypeScript 类型定义
│   │   ├── index.ts        # Core types / 核心类型
│   │   └── navigation.ts   # Navigation types / 导航类型
│   └── data/               # Data layer / 数据层
│       └── mockData.ts     # Sample data / 示例数据
└── [other config files]    # Configuration files / 配置文件
```

## Features / 功能

### Current Implementation / 当前实现
- Timeline view of diary entries / 日记条目的时间轴视图
- Detail view for each entry / 每个条目的详细视图
- Mobile-first responsive design / 移动端优先的响应式设计
- Phone frame simulation for web view / 网页端的手机外观模拟
- Navigation between screens / 页面间的导航

### Planned Features / 计划功能
- AI-powered diary analysis / AI 日记分析
- Photo and video upload / 照片和视频上传
- Voice-to-text entry / 语音转文字输入
- Smart tagging and categorization / 智能标签和分类
- Milestone tracking / 里程碑追踪
- Growth analytics / 成长分析

## Tech Stack / 技术栈

### Frontend / 前端
- React Native / Expo
- TypeScript
- React Navigation
- React Native Web (for browser support / 用于浏览器支持)

### Development / 开发
```bash
# Install dependencies / 安装依赖
npm install --legacy-peer-deps

# Run in web browser / 在浏览器中运行
npm run web

# Run on mobile (requires Expo Go app) / 在移动设备上运行（需要 Expo Go 应用）
npm run ios     # For iOS / 用于 iOS
npm run android # For Android / 用于安卓
```

## Project Setup / 项目设置

1. **Clone the repository / 克隆仓库**
```bash
git clone [repository-url]
cd stealth
```

2. **Install dependencies / 安装依赖**
```bash
npm install --legacy-peer-deps
```

3. **Start development server / 启动开发服务器**
```bash
npm run web    # For web development / 用于网页开发
# or / 或者
npm start      # For mobile development / 用于移动端开发
```

## Directory Structure / 目录结构

### Key Components / 主要组件

- `Timeline.tsx`: Displays chronological list of entries / 显示时间轴列表
- `EntryDetail.tsx`: Shows detailed view of a diary entry / 显示日记详情
- `PhoneFrame.tsx`: Simulates mobile device frame for web view / 模拟移动设备外观

### Screens / 页面

- `TimelineScreen.tsx`: Main timeline view / 主时间轴视图
- `DetailScreen.tsx`: Entry detail view / 条目详情视图

### Types / 类型定义

```typescript
interface DiaryEntry {
  id: string;          // Entry ID / 条目ID
  date: Date;          // Entry date / 日期
  title: string;       // Title / 标题
  content: string;     // Content / 内容
  mediaUrls?: string[];           // Media files / 媒体文件
  aiGeneratedMemories?: string[]; // AI memories / AI生成的回忆
  tags?: string[];               // Tags / 标签
  type: 'milestone' | 'daily' | 'memory'; // Entry type / 条目类型
}
```

## Contributing / 贡献

[Contribution guidelines will be added / 贡献指南待添加]

## License / 许可证

MIT License / MIT 许可证

## Development Status / 开发状态

Currently in active development. Basic navigation and UI components are implemented.
目前正在积极开发中。基本的导航和UI组件已经实现。

### Next Steps / 下一步计划
1. Implement AI integration / 实现 AI 集成
2. Add media upload functionality / 添加媒体上传功能
3. Develop offline storage / 开发离线存储
4. Add user authentication / 添加用户认证
5. Implement cloud sync / 实现云同步

## Dependencies / 依赖

Key dependencies include / 主要依赖包括：
- expo: ~52.0.0
- react: 18.2.0
- react-native: 0.78.1
- @react-navigation/native: ^6.1.9
- @react-navigation/stack: ^6.3.20

For full list of dependencies, see `package.json`.
完整的依赖列表请查看 `package.json`。