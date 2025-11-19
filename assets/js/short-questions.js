// ==================== 简答题模块 ====================

// 简答题数据
const shortAnswerData = [
  {
    id: 1,
    question: "请说明ajax异步请求原理",
    answer: `<p><strong>① 原理：</strong>浏览器将请求交给代理对象XMLHttpRequest，由代理对象向服务器发起请求，接收、解析服务器响应的数据，并把数据更新到浏览器指定控件上，实现页面数据的局部刷新。</p>
<p><strong>② 异步特性：</strong>浏览器不用等待服务器处理请求，不用重新加载整个页面，在异步请求发送过程中还能进行其他操作。</p>
<p><strong>③ 核心：</strong>XMLHttpRequest对象是Ajax的核心，使JavaScript可以向服务器提出请求并处理响应，而不阻塞用户。</p>`,
  },
  {
    id: 2,
    question: "请说明Ajax请求的五个步骤",
    answer: `<ol>
<li>建立XMLHttpRequest对象</li>
<li>设置回调函数</li>
<li>使用open方法与服务器建立连接</li>
<li>向服务器发送数据</li>
<li>在回调函数中针对不同的响应状态进行处理</li>
</ol>`,
  },
  {
    id: 3,
    question: "请简要说明axios对ajax的封装实现及优点",
    answer: `<p><strong>封装：</strong>基于Promise的HTTP客户端，本质上是对原生XHR的封装，符合最新的ES规范。从浏览器中创建XMLHttpRequest，从node.js创建http请求。</p>
<p><strong>优点：</strong></p>
<ul>
<li>支持Promise API</li>
<li>客户端支持防止CSRF</li>
<li>提供并发请求的接口（重要）</li>
<li>拦截请求和响应</li>
<li>转换请求和响应数据</li>
<li>取消请求</li>
<li>自动转换JSON数据</li>
</ul>`,
  },
  {
    id: 4,
    question: "请简述HTML页面编码基本规范",
    answer: `<p><strong>① 标记格式：</strong>所有标记以"&lt;"开始、以"&gt;"结束。单个标记在右尖括号前加斜杠"/"，如&lt;br/&gt;；成对标记同时输入起始和结束标记。</p>
<p><strong>② 标记规则：</strong>标记可以嵌套，但不能交叉。HTML代码中不区分大小写。属性值建议用双引号标注。</p>
<p><strong>③ 书写规范：</strong>左尖括号与标记名或与斜杠"/"之间不能留有多余空格，否则浏览器无法识别标记。</p>
<p><strong>④ 代码结构：</strong>使用锯齿结构（缩进风格），使代码结构清晰，便于理解和维护。</p>`,
  },
  {
    id: 5,
    question: "请简要说明Web页面设计原则",
    answer: `<p><strong>① 简洁：</strong>满足实用和需求为目标，要求简练、准确。</p>
<p><strong>② 一致性：</strong>网站中各个页面使用相同的页边距，每个元素与整个页面以及站点的色彩和风格上保持一致。</p>
<p><strong>③ 好的对比度：</strong>对比度的目的是强调突出关键内容，吸引浏览者，鼓励他们发掘更深层次的内容。</p>`,
  },
  {
    id: 6,
    question: "请简要说明HTML5的特性",
    answer: `<p><strong>① 语义特性：</strong>HTML5赋予网页更好的意义和结构。</p>
<p><strong>② 离线与存储特性：</strong>HTML5开发的网页APP，启动时间更短，联网速度更快。包括APP Cache、本地存储、Indexed DB和File API。</p>
<p><strong>③ 设备访问特性：</strong>提供了数据与应用接入开放接口，使外部应用可以直接与浏览器内部的数据相连，如视频影音可直接与麦克风及摄像头相联。</p>
<p><strong>④ 多媒体特性：</strong>支持网页端的Audio、Video等多媒体功能。</p>
<p><strong>⑤ 三维、图形与特效特性：</strong>基于SVG、Canvas、WebGL及CSS3的3D功能。</p>
<p><strong>⑥ 性能与集成特性：</strong>通过Web Workers和XMLHttpRequest2等技术，帮助Web应用和网站在多样化的环境中更快速工作。</p>
<p><strong>⑦ 连接特性：</strong>拥有更有效的服务器推送技术（Server-Sent Event和WebSockets）。</p>
<p><strong>⑧ CSS3特性：</strong>CSS3中提供了更多的风格和更强的效果。</p>`,
  },
  {
    id: 7,
    question: "请简要说明HTML5的优势",
    answer: `<p><strong>① 摆脱对平台的依赖：</strong>打开浏览器，直接就可以访自己的应用。</p>
<p><strong>② 实时更新。</strong></p>
<p><strong>③ 离线使用：</strong>用户可以离线使用，更新下载量较少。</p>
<p><strong>④ 代码更安全：</strong>HTML5可以将Web代码全部加密，本地应用解密后再运行，大大提高了代码的安全性。</p>
<p><strong>⑤ 跨平台：</strong>JavaScript的代码可以在许多地方使用，包括移动应用、移动网站、PC网站、各种浏览器插件，甚至可以用WebKit封装作为跨平台的应用程序。</p>
<p><strong>⑥ 可以充分利用Native：</strong>HTML5可以通过浏览器作为中介充分利用Native的好处（使用GPS、照相机、本地相册、读取本地联系人等）。某些Web无法实现的功能，可以利用Native来实现。</p>`,
  },
  {
    id: 8,
    question: "请说明HTML5 Web Storage",
    answer: `<p><strong>① 两种存储方式：</strong>持久化的数据存储localStorage、会话式的数据存储sessionStorage。</p>
<p><strong>② 特点：</strong>数据不需要由每个服务器进行请求传递，只需在有请求时使用数据，不影响网站性能，能够存储大量数据。数据以"键值对(key-value pair)"形式存在，Web网页的数据只允许该网页访问使用。</p>
<p><strong>③ localStorage：</strong>存储的数据没有时间限制，所以称为持久化存储，数据存储长期可用。</p>
<p><strong>④ 方法：</strong>localStorage对象和sessionStorage对象具有同样的方法，仅仅是对象名称不同而已。</p>`,
  },
  {
    id: 9,
    question: "请说明CSS的优势",
    answer: `<p><strong>① 表现和内容相分离：</strong>CSS通过定义HTML标记的样式，使得页面内容和显示相分离，简化了网页格式设计，也使得对网页格式的修改更方便。</p>
<p><strong>② 加强了网页的表现力：</strong>CSS样式属性提供了比HTML更多的格式设计功能。例如，去掉网页超级链接的下划线、给文字添加阴影等。</p>
<p><strong>③ 增强了网站风格的一致性：</strong>CSS样式定义到样式表文件中，在多个网页中同时应用样式表文件中的样式，就确保了多个网页具有一致的格式。可以随时更新样式表文件，改变网站风格。大大降低了网站的开发与维护工作。</p>`,
  },
  {
    id: 10,
    question: "举例说明CSS常用的几种类型的选择器",
    answer: `<p><strong>① 标记选择符：</strong>对HTML的标记重定义。该样式立即生效。示例：p,h1{font-size:30px;color:blue;font-family:黑体;}</p>
<p><strong>② 类选择符：</strong>以点号"."开头，可以任意命名，如.div1、.files等。该样式应用后生效，有些标记的样式相同时，可以定义成选择符组。示例：.div1,.file{background:red;color:white;} 联合选择器：p.c3{color:red;}</p>
<p><strong>③ ID选择符：</strong>以"#"开始，可以任意命名。示例：#div1{background:red;color:white;}</p>
<p><strong>④ 伪选择符：</strong>一种特殊的类选择符，最大的作用就是对链接&lt;a&gt;的不同状态定义不同的样式效果。示例：a:link{color:#339999;text-decoration:none;}</p>
<p><strong>⑤ CSS属性选择器：</strong>定义属性选择器时，方括号"[]"将属性包围住。示例：[title]{color:red;}</p>`,
  },
  {
    id: 11,
    question: "请解释CSS3的flexbox（弹性盒布局模型）及适用场景",
    answer: `<p><strong>① 目的：</strong>提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。</p>
<p><strong>② 与传统布局的区别：</strong>在传统的布局方式中，block布局是把块在垂直方向从上到下依次排列的；而inline布局则是在水平方向来排列。弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。</p>
<p><strong>③ 适用场景：</strong>弹性布局适合于移动前端开发，在Android和iOS上也完美支持。</p>`,
  },
  {
    id: 12,
    question: "margin和padding分别适合什么场景使用",
    answer: `<p><strong>何时应当使用margin：</strong></p>
<ul>
<li>需要在border外侧添加空白时</li>
<li>空白处不需要背景（色）时</li>
<li>上下相连的两个盒子之间的空白，需要相互抵消时。如15px+20px的margin，将得到20px的空白</li>
</ul>
<p><strong>何时应当使用padding：</strong></p>
<ul>
<li>需要在border内侧添加空白时</li>
<li>空白处需要背景（色）时</li>
<li>上下相连的两个盒子之间的空白，希望等于两者之和时。如15px+20px的padding，将得到35px的空白</li>
</ul>`,
  },
  {
    id: 13,
    question: "px和em的区别",
    answer: `<p><strong>px和em都是长度单位，区别是：</strong></p>
<p><strong>① px：</strong>值是固定的，指定是多少就是多少，计算比较容易。</p>
<p><strong>② em：</strong>值不是固定的，并且em会继承父级元素的字体大小。浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em。</p>`,
  },
  {
    id: 14,
    question: "行内元素和块级元素的区别",
    answer: `<p><strong>行内元素：</strong></p>
<ul>
<li>行内元素不换行</li>
<li>行内元素不可以设置大小</li>
<li>行内元素大小由内容决定</li>
</ul>
<p><strong>块元素：</strong></p>
<ul>
<li>块元素独立成行</li>
<li>块元素可以设置大小</li>
<li>块元素如果不设置宽度，宽度会自适应其父级的宽度</li>
</ul>`,
  },
  {
    id: 15,
    question: "请说明JavaScript具有的特点",
    answer: `<p><strong>① 简单性：</strong>小程序、无须编译、解释性、弱数据类型</p>
<p><strong>② 安全性：</strong>Browser无法访问本地硬盘数据/写入到数据库</p>
<p><strong>③ 动态性：</strong>JS可以直接对用户提交的信息作出回应</p>
<p><strong>④ 跨平台性：</strong>支持JS的Browser</p>`,
  },
  {
    id: 16,
    question: "JavaScript的对象类型",
    answer: `<p><strong>① 本地对象(native object)：</strong>ECMA-262定义的类（引用类型）。包括：Object、Function、Array、String、Boolean、Number、Date、RegExp、Error等。这些对象独立于宿主环境，先定义对象，实例化后再通过对象名来使用。</p>
<p><strong>② 内置对象(built-in object)：</strong>由ECMAScript实现提供的、不依赖宿主环境的对象，在ECMAScript运行之前就已经创建好的对象。ECMA-262只定义了两个内置对象，即Global和Math。Global是全局对象，是对象而不是类，既没有构造函数，也无法实例化。Math对象直接使用，如Math.Random()、Math.round(20.5)等。</p>
<p><strong>③ 宿主对象(host object)：</strong>ECMAScript实现的宿主环境提供的对象。所有BOM和DOM对象都是宿主对象。通过它可以与文档和浏览器环境进行交互，如document、window和frames等。</p>
<p><strong>④ 自定义对象：</strong>根据程序设计需要，由编程人员自行定义的对象。例如定义一个person对象，它有4个属性分别是firstName、lastName、age、eyeColor。</p>`,
  },
  {
    id: 17,
    question: "请简单介绍一下HTML的document对象",
    answer: `<p><strong>① 定义：</strong>document对象是客户端JavaScript最为常用的对象之一，在浏览器对象模型中，它位于window对象的下一层级。</p>
<p><strong>② 属性：</strong>包含一些简单的属性，提供了有关浏览器中显示文档的相关信息，例如：该文档的URL、字体颜色，修改日期等。document对象还包含一些引用数组的属性，这些属性可以代表文档中的表单、图象、链接、锚以及applet。</p>
<p><strong>③ 方法：</strong>同其他对象一样，document对象还定义了一系列的方法，通过这些方法，可以使JavaScript在解析文档时动态地将HTML文本添加到文档中。</p>`,
  },
  {
    id: 18,
    question: "请介绍一下浏览器对象模型BOM",
    answer: `<p><strong>① 定义：</strong>客户端浏览器这些预定义的对象统称为浏览器对象，它们按照某种层次组织起来的模型统称为浏览器对象模型（BOM-Browser Object Model）。浏览器对象模型使JavaScript有能力与浏览器"对话"。</p>
<p><strong>② 特点：</strong>BOM提供了独立于内容而与浏览器窗口进行交互的对象。BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。</p>`,
  },
  {
    id: 19,
    question: "xhtml和html有什么区别",
    answer: `<p><strong>功能上的差别：</strong>HTML是一种基本的WEB网页设计语言；XHTML是一个基于XML的置标语言，XHTML可兼容各大浏览器、手机以及PDA，并且浏览器也能快速正确地编译网页。</p>
<p><strong>书写习惯上：</strong></p>
<ul>
<li>XHTML所有标签都必须小写</li>
<li>XHTML标签必须成双成对</li>
<li>XHTML标签顺序必须正确</li>
<li>XHTML所有属性都必须使用双引号</li>
<li>XHTML不允许使用target="_blank"</li>
<li>XHTML文档必须拥有根元素</li>
<li>XHTML元素必须被正确地嵌套</li>
</ul>`,
  },
  {
    id: 20,
    question: "介绍一下你对浏览器内核的理解",
    answer: `<p><strong>① 主要分成两部分：</strong>渲染引擎（layout engineer或Rendering Engine）和JS引擎。</p>
<p><strong>② 渲染引擎：</strong>负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户以及其他需要编辑、显示网络的应用程序都需要内核。</p>
<p><strong>③ JS引擎：</strong>解析和执行JavaScript来实现网页的动态效果。</p>
<p><strong>④ 发展：</strong>最开始渲染引擎和JS并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。</p>`,
  },
  {
    id: 21,
    question: "制作一个访问量很高的大型网站，你会如何管理所有CSS文件、JS与图片",
    answer: `<p><strong>涉及到人手、分工、同步：</strong></p>
<ul>
<li><strong>① 先期团队必须确定好全局样式，编码模式等</strong></li>
<li><strong>② 编写习惯必须一致</strong></li>
<li><strong>③ 标注样式编写人，各模块都及时标注（标注关键样式调用的地方）</strong></li>
<li><strong>④ 页面进行标注</strong></li>
<li><strong>⑤ CSS与html分文件夹并行存放，命名都要统一</strong></li>
<li><strong>⑥ Js分文件夹存放，命名以该JS功能为准英文翻译</strong></li>
<li><strong>⑦ 图片采用整合的.png格式文件使用，尽量整合在一起，方便将来的管理</strong></li>
</ul>`,
  },
];

// 用户答案存储
let userShortAnswers = {};
let shortAnswerProficiency = {}; // 熟练度存储

// 初始化简答题
function initShortAnswers() {
  loadProficiency(); // 先加载熟练度
  renderShortAnswers();
  loadUserAnswers();
  renderProficiencyStats(); // 渲染统计
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
          <span class="proficiency-tag" onclick="event.stopPropagation();">
            ${renderStars(item.id, 'short')}
          </span>
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
            <button 
              class="btn btn-sm btn-outline-primary ms-2" 
              onclick="getAIScore(${item.id})"
              id="ai-score-btn-${item.id}"
            >
              🤖 AI评分
            </button>
            <button 
              class="btn btn-sm btn-outline-danger ms-2" 
              onclick="clearSingleAnswer(${item.id})"
            >
              🗑️ 清空
            </button>
            
            <!-- 参考答案 -->
            <div id="answer-${item.id}" class="short-answer-content" style="display: none;">
              <div class="mt-3 p-3" style="background: #f8f9fa; border-left: 4px solid #28a745; border-radius: 4px;">
                <h6 style="color: #28a745; font-weight: 600; margin-bottom: 10px;">📝 参考答案：</h6>
                ${item.answer}
              </div>
            </div>
            
            <!-- AI评分结果 -->
            <div id="ai-result-${item.id}" class="ai-score-result" style="display: none;"></div>
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

// 清空单个答案
function clearSingleAnswer(id) {
  const textarea = document.getElementById(`short-answer-${id}`);
  if (textarea) {
    if (textarea.value && !confirm('确定要清空这道题的答案吗？')) {
      return;
    }
    textarea.value = '';
    delete userShortAnswers[id];
    localStorage.setItem('shortAnswers', JSON.stringify(userShortAnswers));
  }
}

// 清空所有答案
function clearAllShortAnswers() {
  if (!confirm('确定要清空所有简答题的答案吗？此操作不可恢复！')) {
    return;
  }
  
  // 清空所有textarea
  shortAnswerData.forEach(item => {
    const textarea = document.getElementById(`short-answer-${item.id}`);
    if (textarea) {
      textarea.value = '';
    }
  });
  
  // 清空存储
  userShortAnswers = {};
  localStorage.removeItem('shortAnswers');
  
  alert('✅ 已清空所有答案！');
}

// AI评分功能
async function getAIScore(id) {
  const textarea = document.getElementById(`short-answer-${id}`);
  const aiBtn = document.getElementById(`ai-score-btn-${id}`);
  const resultDiv = document.getElementById(`ai-result-${id}`);
  
  // 检查是否填写答案
  if (!textarea || !textarea.value.trim()) {
    alert('❌ 请先填写答案再评分！');
    return;
  }
  
  // 检查AI功能是否启用
  if (typeof isAIEnabled === 'function' && !isAIEnabled()) {
    alert('❌ AI评分功能未启用，请先在"AI配置"中启用！');
    // 自动打开配置弹窗
    if (typeof openAIConfig === 'function') {
      setTimeout(() => openAIConfig(), 500);
    }
    return;
  }
  
  // 检查AI配置是否加载
  if (typeof callVolcanoAI === 'undefined') {
    alert('❌ AI评分模块未加载，请检查 ai-config.js 是否正确引入！');
    return;
  }
  
  const userAnswer = textarea.value.trim();
  const question = shortAnswerData[id - 1];
  
  if (!question) {
    alert('❌ 题目不存在！');
    return;
  }
  
  // 显示加载状态
  aiBtn.disabled = true;
  aiBtn.innerHTML = '⏳ 评分中...';
  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `
    <div class="mt-3 p-3 text-center" style="background: #e3f2fd; border-left: 4px solid #2196F3; border-radius: 4px;">
      <div class="spinner-border spinner-border-sm text-primary me-2" role="status">
        <span class="visually-hidden">加载中...</span>
      </div>
      <span>AI正在分析你的答案，请稍候...</span>
    </div>
  `;
  
  try {
    // 精简参考答案（去除HTML标签和多余空白，降低token消耗）
    const cleanAnswer = question.answer
      .replace(/<[^>]*>/g, '')  // 去除HTML标签
      .replace(/\s+/g, ' ')     // 多个空白符压缩为一个空格
      .trim();                  // 去除首尾空格
    
    // 调用AI API
    const result = await callVolcanoAI(
      userAnswer.trim(),
      cleanAnswer,
      question.question
    );
    
    // 显示评分结果
    displayAIResult(id, result);
    
  } catch (error) {
    console.error('AI评分失败:', error);
    resultDiv.innerHTML = `
      <div class="mt-3 p-3" style="background: #ffebee; border-left: 4px solid #f44336; border-radius: 4px;">
        <h6 style="color: #f44336; font-weight: 600;">❌ 评分失败</h6>
        <p style="margin: 0; color: #666;">错误信息：${error.message}</p>
        <small style="color: #999;">提示：请检查API Key配置和网络连接</small>
      </div>
    `;
  } finally {
    // 恢复按钮状态
    aiBtn.disabled = false;
    aiBtn.innerHTML = '🤖 AI评分';
  }
}

// 显示AI评分结果
function displayAIResult(id, result) {
  const resultDiv = document.getElementById(`ai-result-${id}`);
  const { score, feedback, strengths = [], improvements = [] } = result;
  
  // 根据分数确定颜色和等级
  let scoreColor, scoreLevel;
  if (score >= 90) {
    scoreColor = '#2ecc71';
    scoreLevel = '优秀';
  } else if (score >= 80) {
    scoreColor = '#3498db';
    scoreLevel = '良好';
  } else if (score >= 70) {
    scoreColor = '#f39c12';
    scoreLevel = '中等';
  } else if (score >= 60) {
    scoreColor = '#e67e22';
    scoreLevel = '及格';
  } else {
    scoreColor = '#e74c3c';
    scoreLevel = '不及格';
  }
  
  resultDiv.innerHTML = `
    <div class="mt-3 p-3" style="background: #fff; border: 2px solid ${scoreColor}; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <!-- 分数显示 -->
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h5 style="margin: 0; color: #2c3e50;">🤖 AI评分结果</h5>
        <div style="text-align: right;">
          <div style="font-size: 32px; font-weight: 700; color: ${scoreColor}; line-height: 1;">${score}</div>
          <div style="font-size: 14px; color: ${scoreColor}; font-weight: 600;">${scoreLevel}</div>
        </div>
      </div>
      
      <!-- 总体反馈 -->
      <div class="mb-3 p-2" style="background: #f8f9fa; border-radius: 4px;">
        <strong style="color: #555;">💬 总体评价：</strong>
        <p style="margin: 5px 0 0 0; color: #666; line-height: 1.6;">${feedback}</p>
      </div>
      
      ${strengths.length > 0 ? `
      <!-- 优点 -->
      <div class="mb-2">
        <strong style="color: #2ecc71;">✅ 答题优点：</strong>
        <ul style="margin: 5px 0 0 20px; color: #666; line-height: 1.6;">
          ${strengths.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
      ` : ''}
      
      ${improvements.length > 0 ? `
      <!-- 改进建议 -->
      <div>
        <strong style="color: #e67e22;">💡 改进建议：</strong>
        <ul style="margin: 5px 0 0 20px; color: #666; line-height: 1.6;">
          ${improvements.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>
      ` : ''}
      
      <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #e1e8ed; font-size: 12px; color: #95a5a6;">
        ⚡ 由火山方舟AI提供技术支持
      </div>
    </div>
  `;
}

// ==================== 熟练度功能 ====================

// 加载熟练度数据
function loadProficiency() {
  try {
    const saved = localStorage.getItem('shortAnswerProficiency');
    if (saved) {
      shortAnswerProficiency = JSON.parse(saved);
    }
  } catch (e) {
    console.error('加载熟练度失败:', e);
    shortAnswerProficiency = {};
  }
}

// 保存熟练度
function saveProficiency() {
  localStorage.setItem('shortAnswerProficiency', JSON.stringify(shortAnswerProficiency));
  renderProficiencyStats(); // 更新统计
}

// 渲染星星
function renderStars(id, type) {
  const level = shortAnswerProficiency[id] || 0;
  const labels = ['未练习', '不熟练', '一般', '比较熟', '熟练', '精通'];
  
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    const filled = i <= level ? 'filled level-' + level : '';
    stars += `<span class="star ${filled}" onclick="setProficiency(${id}, ${i}, '${type}')" title="${i}星">★</span>`;
  }
  
  const labelText = level > 0 ? `<span class="proficiency-label">${labels[level]}</span>` : '';
  
  return `<span class="star-rating">${stars}</span>${labelText}`;
}

// 设置熟练度
function setProficiency(id, level, type) {
  if (type === 'short') {
    shortAnswerProficiency[id] = level;
    saveProficiency();
    // 重新渲染该题的星星
    renderShortAnswers();
    loadUserAnswers(); // 恢复用户答案
  }
}

// 渲染熟练度统计
function renderProficiencyStats() {
  const container = document.querySelector('#jianda');
  if (!container) return;
  
  // 统计各等级数量
  const stats = {
    0: 0, // 未练习
    1: 0, // 不熟练
    2: 0, // 一般
    3: 0, // 比较熟
    4: 0, // 熟练
    5: 0  // 精通
  };
  
  // 初始化所有题目为未练习
  shortAnswerData.forEach(item => {
    const level = shortAnswerProficiency[item.id] || 0;
    stats[level]++;
  });
  
  // 检查是否已有统计区域
  let statsDiv = document.getElementById('proficiency-stats-short');
  if (!statsDiv) {
    statsDiv = document.createElement('div');
    statsDiv.id = 'proficiency-stats-short';
    statsDiv.className = 'proficiency-stats';
    container.appendChild(statsDiv); // 改为添加到容器底部
  }
  
  // 统计标签数据
  const labels = [
    { level: 5, label: '精通', icon: '★★★★★' },
    { level: 4, label: '熟练', icon: '★★★★☆' },
    { level: 3, label: '比较熟', icon: '★★★☆☆' },
    { level: 2, label: '一般', icon: '★★☆☆☆' },
    { level: 1, label: '不熟练', icon: '★☆☆☆☆' },
    { level: 0, label: '未练习', icon: '☆☆☆☆☆' }
  ];
  
  // 新的卡片式布局
  statsDiv.innerHTML = `
    <div class="proficiency-stats-header">
      学习进度一览
    </div>
    <div class="proficiency-stats-grid">
      ${labels.map(item => `
        <div class="stat-item">
          <div class="icon">${item.icon}</div>
          <div class="label">${item.label}</div>
          <div class="count">${stats[item.level]}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// 不再自动初始化，改为懒加载
// 由 index.html 中的懒加载管理器调用 initShortAnswers()

