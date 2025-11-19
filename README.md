# 📚 Web开发复习题库

> 现代化的Web开发习题库，支持选择题、简答题和编程题，提供即时反馈、答题追踪和AI智能评分功能。

[![GitHub Pages](https://img.shields.io/badge/demo-在线访问-success?style=flat-square)](https://hyanhsing0101.github.io/learnweb/)
[![GitHub Stars](https://img.shields.io/github/stars/hyanhsing0101/learnweb?style=flat-square)](https://github.com/hyanhsing0101/learnweb/stargazers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

## ✨ 功能特点

### 📝 选择题模块（56道）
- 即时判题反馈，答对自动锁定
- 答题卡追踪，记录答题状态
- 可拖动答题卡，自由调整位置
- 每道题包含详细解析

### ✍️ 简答题模块（21道）
- 默写练习区，支持答案自动保存
- 答案查看功能，可随时切换显示/隐藏
- **🤖 AI智能评分**（需配置），提供分数、评价和改进建议
- 熟练度标记，记录掌握程度

### 💻 编程题模块（9道）
- 实时代码预览，左侧编辑右侧显示
- Tab缩进支持，提升编写体验
- 多版本参考答案（AJAX/Axios/Fetch）
- 防抖优化，流畅的预览体验

### 🤖 AI评分功能（可选）
- 使用火山方舟AI对简答题进行智能评分
- 支持用户自定义API Key和模型配置
- 配置保存在浏览器本地，安全可靠
- 提供分数、评价、优点和改进建议
- [📖 完整配置指南](api-guide.html)

## 🚀 快速开始

### 在线访问
直接访问：**https://hyanhsing0101.github.io/learnweb/**

### 本地运行

#### 方法一：直接打开（推荐）
```bash
# 克隆项目
git clone https://github.com/hyanhsing0101/learnweb.git
cd learnweb

# 直接用浏览器打开 index.html
```

#### 方法二：启动本地服务器
```bash
# Python
python -m http.server 8080

# 或 Node.js
npx http-server -p 8080

# 访问 http://localhost:8080
```

### 📱 手机访问
1. 启动本地服务器
2. 查看电脑IP：`ipconfig`（Windows）或 `ifconfig`（Mac/Linux）
3. 手机访问：`http://你的电脑IP:8080`（需同一WiFi）

或直接访问在线版本：[https://hyanhsing0101.github.io/learnweb/](https://hyanhsing0101.github.io/learnweb/)

## 🤖 AI评分功能配置

### 快速配置（推荐）
1. 点击简答题页面顶部的 **「🤖 AI配置」** 按钮
2. 填写你的API Key、Endpoint和模型ID
3. 勾选 **「启用AI评分功能」**
4. 点击保存，即可使用

### 详细指南
- [📖 在线查看完整指南](api-guide.html)
- [📄 查看Markdown文档](AI评分完整指南.md)

**获取配置信息：**
- [火山方舟控制台](https://console.volcengine.com/ark)
- 进入「API密钥管理」创建API Key
- 进入「模型推理」→「在线推理」创建接入点

## 📊 题目统计

| 模块 | 数量 | 内容 |
|------|------|------|
| 选择题 | 56道 | HTML、CSS、JavaScript基础知识 |
| 简答题 | 21道 | Ajax、Vue、BOM、DOM等核心概念 |
| 编程题 | 9道 | HTML布局、表格、表单、Vue组件实战 |

## 🎯 适用场景

- ✅ Web前端复习备考
- ✅ HTML/CSS/JavaScript知识巩固
- ✅ 面试前刷题准备
- ✅ 课程作业练习
- ✅ 自学检验成果

## 📂 项目结构

```
learnweb/
├── index.html                  # 主页面
├── api-guide.html              # AI配置指南页面
├── AI评分完整指南.md           # AI配置详细文档
├── assets/
│   ├── css/
│   │   └── style.css          # 样式文件
│   └── js/
│       ├── common.js          # 公共函数
│       ├── choice-questions.js    # 选择题模块
│       ├── short-questions.js     # 简答题模块
│       ├── coding-questions.js    # 编程题模块
│       ├── ai-config.js       # AI配置（默认空配置）
│       └── ai-config.example.js   # AI配置示例文件
└── README.md                   # 项目说明
```

## 🛠️ 技术栈

- **前端框架**：原生JavaScript（无依赖）
- **UI框架**：Bootstrap 5
- **存储方案**：LocalStorage
- **AI服务**：火山方舟（可选）

## 🎨 核心特性

- ✅ **模块化架构**：HTML/CSS/JS分离，代码清晰易维护
- ✅ **懒加载优化**：按需加载模块，提升首屏加载速度
- ✅ **本地存储**：答题记录和答案持久化保存
- ✅ **响应式设计**：完美适配桌面、平板、手机
- ✅ **性能优化**：防抖处理、一次性渲染、requestAnimationFrame
- ✅ **AI智能评分**：可选的AI评分功能，提供详细反馈

## 📝 更新日志

### v2.0.0（最新）
- ✨ 新增AI智能评分功能
- ✨ 支持用户自定义API配置
- ✨ 添加AI配置指南页面
- ✨ 简答题支持熟练度标记
- 🔧 优化简答题答案内容
- 📚 添加完整的配置和使用文档

### v1.0.0
- ✨ 完成模块化重构
- 🚀 添加懒加载优化
- 📱 添加响应式设计
- 💾 添加本地存储功能

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 开源协议

本项目采用 [MIT](LICENSE) 协议开源。

## 👨‍💻 作者

Created by **[Hyan](https://hyanhsing.xin)**

---

⭐ 如果这个项目对你有帮助，欢迎给个Star！
