// ==================== 简答题模块 ====================

// 简答题数据
const shortAnswerData = [
  {
    id: 1,
    question: "请说明ajax异步请求原理",
    answer: `<p><strong>定义：</strong>AJAX = 异步JavaScript与XML，无需刷新页面即可与服务器交换数据并更新部分网页。</p>
<p><strong>核心：</strong>XMLHttpRequest对象 + JavaScript + DOM</p>
<p><strong>优势：</strong>局部刷新、异步处理、不阻塞用户、提升体验</p>`,
  },
  {
    id: 2,
    question: "请说明Ajax请求的五个步骤",
    answer: `<ol>
<li>创建XMLHttpRequest对象</li>
<li>配置请求（open方法）</li>
<li>设置回调函数（onreadystatechange）</li>
<li>发送请求（send方法）</li>
<li>处理响应（readyState==4 && status==200）</li>
</ol>`,
  },
  {
    id: 3,
    question: "请简要说明axios对ajax的封装实现及优点",
    answer: `<p><strong>封装：</strong>基于Promise的HTTP客户端，底层用XMLHttpRequest</p>
<p><strong>优点：</strong></p>
<ul>
<li>Promise支持、async/await</li>
<li>拦截器（统一处理token、错误）</li>
<li>自动转JSON</li>
<li>取消请求、防XSRF、并发请求</li>
</ul>`,
  },
  {
    id: 4,
    question: "请简述HTML页面编码基本规范",
    answer: `<ul>
<li>文档声明：&lt;!DOCTYPE html&gt;</li>
<li>字符编码：UTF-8</li>
<li>语义化标签、标签小写、必须闭合</li>
<li>属性值加引号、合理缩进</li>
<li>img加alt、结构样式行为分离</li>
</ul>`,
  },
  {
    id: 5,
    question: "请简要说明Web页面设计原则",
    answer: `<ul>
<li>用户体验优先（界面简洁、操作便捷）</li>
<li>内容为王（清晰准确、重点突出）</li>
<li>一致性（风格统一、布局规范）</li>
<li>响应式设计（适配多设备）</li>
<li>性能优化（加载快）</li>
<li>安全性（防XSS、CSRF）</li>
</ul>`,
  },
  {
    id: 6,
    question: "请简要说明HTML5的特性",
    answer: `<ul>
<li>语义化标签（header、nav、article、section、footer）</li>
<li>增强表单（email、url、number、date）</li>
<li>多媒体（video、audio、canvas）</li>
<li>本地存储（localStorage、sessionStorage）</li>
<li>Web Worker、WebSocket、Geolocation、拖放</li>
</ul>`,
  },
  {
    id: 7,
    question: "请简要说明HTML5的优势",
    answer: `<ul>
<li>跨平台、无需插件</li>
<li>语义化更好、利于SEO</li>
<li>移动优先、支持离线</li>
<li>性能提升、开发效率高</li>
<li>标准统一、交互性强</li>
</ul>`,
  },
  {
    id: 8,
    question: "请说明HTML5 Web Storage",
    answer: `<p><strong>localStorage：</strong>永久存储，同源共享，5-10MB</p>
<p><strong>sessionStorage：</strong>会话存储，关闭即删，仅当前窗口</p>
<p><strong>API：</strong>setItem、getItem、removeItem、clear</p>
<p><strong>优势：</strong>容量大、不随HTTP发送、易用</p>`,
  },
  {
    id: 9,
    question: "请说明CSS的优势",
    answer: `<ul>
<li>结构样式分离、代码复用</li>
<li>易维护、减少代码量</li>
<li>可缓存、性能好</li>
<li>强大布局（Flexbox、Grid）</li>
<li>丰富效果、响应式设计</li>
</ul>`,
  },
  {
    id: 10,
    question: "举例说明CSS常用的几种类型的选择器",
    answer: `<ul>
<li>元素选择器：p { }</li>
<li>类选择器：.class { }</li>
<li>ID选择器：#id { } （优先级最高）</li>
<li>后代选择器：div p { }（所有后代）</li>
<li>子选择器：div > p { }（直接子元素）</li>
<li>伪类：:hover、:active</li>
<li>伪元素：::before、::after</li>
</ul>`,
  },
  {
    id: 11,
    question: "请解释CSS3的flexbox（弹性盒布局模型）及适用场景",
    answer: `<p><strong>定义：</strong>CSS3一维弹性布局，灵活排列分配空间</p>
<p><strong>属性：</strong>flex-direction（方向）、justify-content（主轴对齐）、align-items（交叉轴对齐）</p>
<p><strong>场景：</strong>导航栏、垂直居中、等高列、响应式布局</p>`,
  },
  {
    id: 12,
    question: "margin和padding分别适合什么场景使用",
    answer: `<p><strong>margin：</strong>外边距，控制元素间距，不影响自身大小，可为负值</p>
<p><strong>padding：</strong>内边距，控制内容与边框距离，影响元素大小</p>
<p><strong>场景：</strong>margin调间距、padding扩内部空间</p>`,
  },
  {
    id: 13,
    question: "px和em的区别",
    answer: `<p><strong>px：</strong>绝对单位，固定像素，精确控制</p>
<p><strong>em：</strong>相对父元素字体大小（1em=父元素字体）</p>
<p><strong>rem：</strong>相对根元素字体大小（推荐响应式）</p>`,
  },
  {
    id: 14,
    question: "行内元素和块级元素的区别",
    answer: `<p><strong>块级：</strong>独占一行，可设宽高，默认100%宽（div、p、h1）</p>
<p><strong>行内：</strong>一行显示，不可设宽高，内容决定宽（span、a、img）</p>
<p><strong>转换：</strong>display: block / inline / inline-block</p>`,
  },
  {
    id: 15,
    question: "请说明JavaScript具有的特点",
    answer: `<ul>
<li>解释型、弱类型、基于对象</li>
<li>事件驱动、单线程、动态性</li>
<li>跨平台、客户端语言</li>
<li>简单易学、功能丰富</li>
</ul>`,
  },
  {
    id: 16,
    question: "JavaScript的对象类型",
    answer: `<p><strong>① 内置对象：</strong>String、Number、Array、Object、Function、Date、Math</p>
<p><strong>② BOM：</strong>window、location、navigator、history、screen</p>
<p><strong>③ DOM：</strong>document、element、attribute、event</p>
<p><strong>④ 自定义对象：</strong>用户创建的对象</p>`,
  },
  {
    id: 17,
    question: "请简单介绍一下HTML的document对象",
    answer: `<p><strong>定义：</strong>代表HTML文档，DOM核心，操作网页入口</p>
<p><strong>功能：</strong></p>
<ul>
<li>查找：getElementById、querySelector</li>
<li>创建修改：createElement、innerHTML</li>
<li>属性：getAttribute、setAttribute</li>
<li>事件：addEventListener</li>
</ul>`,
  },
  {
    id: 18,
    question: "请介绍一下浏览器对象模型BOM",
    answer: `<p><strong>定义：</strong>与浏览器窗口交互的对象结构</p>
<p><strong>核心对象：</strong></p>
<ul>
<li>window：全局对象，alert、定时器</li>
<li>location：地址栏，href、reload</li>
<li>navigator：浏览器信息</li>
<li>history：历史记录，back、forward</li>
<li>screen：屏幕信息</li>
</ul>`,
  },
  {
    id: 19,
    question: "xhtml和html有什么区别",
    answer: `<p><strong>HTML：</strong>宽松，标签可不闭合，不区分大小写，容错性强</p>
<p><strong>XHTML：</strong>严格，必须闭合，必须小写，属性加引号，有错不显示</p>
<p><strong>现状：</strong>HTML5主流，XHTML淡出</p>`,
  },
  {
    id: 20,
    question: "介绍一下你对浏览器内核的理解",
    answer: `<p><strong>定义：</strong>渲染引擎，解析HTML/CSS渲染网页，执行JS</p>
<p><strong>组成：</strong>渲染引擎 + JS引擎</p>
<p><strong>常见内核：</strong></p>
<ul>
<li>Chrome/Edge：Blink + V8</li>
<li>Safari：Webkit + JavaScriptCore</li>
<li>Firefox：Gecko + SpiderMonkey</li>
<li>IE：Trident + Chakra</li>
</ul>
<p><strong>流程：</strong>HTML→DOM树 + CSS→CSSOM树 → 渲染树 → 布局 → 绘制</p>`,
  },
  {
    id: 21,
    question: "制作一个访问量很高的大型网站，你会如何管理所有CSS文件、JS与图片",
    answer: `<ul>
<li><strong>文件组织：</strong>模块化、清晰目录、统一命名</li>
<li><strong>性能优化：</strong>合并压缩、图片优化、懒加载、代码分割</li>
<li><strong>CDN加速：</strong>静态资源CDN、域名分散</li>
<li><strong>缓存策略：</strong>版本控制、强缓存、浏览器缓存</li>
<li><strong>构建工具：</strong>Webpack/Vite打包、Sass/Less</li>
<li><strong>版本管理：</strong>Git、CI/CD</li>
<li><strong>监控优化：</strong>性能监控、日志分析</li>
</ul>`,
  },
];

// 用户答案存储
let userShortAnswers = {};

// 初始化简答题
function initShortAnswers() {
  renderShortAnswers();
  loadUserAnswers();
}

// 加载用户答案
function loadUserAnswers() {
  try {
    const saved = localStorage.getItem('shortAnswers');
    if (saved) {
      userShortAnswers = JSON.parse(saved);
      // 恢复到textarea
      Object.keys(userShortAnswers).forEach(id => {
        const textarea = document.getElementById(`short-answer-${id}`);
        if (textarea) {
          textarea.value = userShortAnswers[id];
        }
      });
    }
  } catch (e) {
    console.error('恢复答案失败:', e);
  }
}

// 渲染简答题
function renderShortAnswers() {
  const container = document.querySelector("#jianda .accordion");
  if (!container) return;

  container.innerHTML = shortAnswerData
    .map(
      (item) => `
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q${item.id}">
          ${item.id}. ${item.question}
        </button>
      </h2>
      <div id="q${item.id}" class="accordion-collapse collapse">
        <div class="accordion-body">
          <!-- 答题区 -->
          <div class="short-answer-write-area">
            <label class="form-label fw-bold">✍️ 你的答案（自动保存）</label>
            <textarea 
              id="short-answer-${item.id}" 
              class="form-control short-answer-textarea" 
              rows="6" 
              placeholder="在这里默写你的答案..."
              oninput="saveShortAnswer(${item.id})"
            ></textarea>
          </div>
          
          <!-- 答案区（默认隐藏） -->
          <div class="short-answer-reveal-area mt-3">
            <button 
              class="btn btn-sm btn-outline-success" 
              onclick="toggleAnswer(${item.id})"
              id="toggle-btn-${item.id}"
            >
              👁️ 查看答案
            </button>
            <div id="answer-${item.id}" class="short-answer-content" style="display: none;">
              <div class="mt-3 p-3" style="background: #f8f9fa; border-left: 4px solid #28a745; border-radius: 4px;">
                <h6 style="color: #28a745; font-weight: 600; margin-bottom: 10px;">📝 参考答案：</h6>
                ${item.answer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// 保存答案
function saveShortAnswer(id) {
  const textarea = document.getElementById(`short-answer-${id}`);
  if (textarea) {
    userShortAnswers[id] = textarea.value;
    localStorage.setItem('shortAnswers', JSON.stringify(userShortAnswers));
  }
}

// 切换答案显示
function toggleAnswer(id) {
  const answerDiv = document.getElementById(`answer-${id}`);
  const toggleBtn = document.getElementById(`toggle-btn-${id}`);
  
  if (answerDiv.style.display === 'none') {
    answerDiv.style.display = 'block';
    toggleBtn.innerHTML = '🙈 隐藏答案';
    toggleBtn.classList.remove('btn-outline-success');
    toggleBtn.classList.add('btn-success');
  } else {
    answerDiv.style.display = 'none';
    toggleBtn.innerHTML = '👁️ 查看答案';
    toggleBtn.classList.remove('btn-success');
    toggleBtn.classList.add('btn-outline-success');
  }
}

// 不再自动初始化，改为懒加载
// 由 index.html 中的懒加载管理器调用 initShortAnswers()

