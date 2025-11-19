// ==================== 编程题模块 ====================

// 编程题数据
const codingProblemsData = [
  {
    id: 1,
    title: "实现不同类型的列表",
    description:
      "编写HTML代码实现三种不同项目符号的列表（Disc、Circle、Square），每个列表包含三个专业名称。",
    targetDemo: `<h5>Disc 项目符号列表:</h5>
<ul style="list-style-type: disc">
  <li>计算机科学与技术专业</li>
  <li>软件工程专业</li>
  <li>信息管理与信息系统专业</li>
</ul>
<h5 class="mt-4">Circle 项目符号列表:</h5>
<ul style="list-style-type: circle">
  <li>计算机科学与技术专业</li>
  <li>软件工程专业</li>
  <li>信息管理与信息系统专业</li>
</ul>
<h5 class="mt-4">Square 项目符号列表:</h5>
<ul style="list-style-type: square">
  <li>计算机科学与技术专业</li>
  <li>软件工程专业</li>
  <li>信息管理与信息系统专业</li>
</ul>`,
    answerCode: `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;列表样式&lt;/title&gt;
  &lt;style&gt;
    .disc-list { list-style-type: disc; }
    .circle-list { list-style-type: circle; }
    .square-list { list-style-type: square; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h3&gt;Disc 项目符号列表:&lt;/h3&gt;
  &lt;ul class="disc-list"&gt;
    &lt;li&gt;计算机科学与技术专业&lt;/li&gt;
    &lt;li&gt;软件工程专业&lt;/li&gt;
    &lt;li&gt;信息管理与信息系统专业&lt;/li&gt;
  &lt;/ul&gt;
  &lt;h3&gt;Circle 项目符号列表:&lt;/h3&gt;
  &lt;ul class="circle-list"&gt;
    &lt;li&gt;计算机科学与技术专业&lt;/li&gt;
    &lt;li&gt;软件工程专业&lt;/li&gt;
    &lt;li&gt;信息管理与信息系统专业&lt;/li&gt;
  &lt;/ul&gt;
  &lt;h3&gt;Square 项目符号列表:&lt;/h3&gt;
  &lt;ul class="square-list"&gt;
    &lt;li&gt;计算机科学与技术专业&lt;/li&gt;
    &lt;li&gt;软件工程专业&lt;/li&gt;
    &lt;li&gt;信息管理与信息系统专业&lt;/li&gt;
  &lt;/ul&gt;
&lt;/body&gt;
&lt;/html&gt;`,
    knowledge: `<h5>核心知识点</h5>
<ul>
  <li><strong>list-style-type</strong> - 设置列表符号</li>
  <li><strong>disc</strong> - 实心圆（默认）</li>
  <li><strong>circle</strong> - 空心圆</li>
  <li><strong>square</strong> - 实心方块</li>
</ul>
<h5 class="mt-3">其他常用值</h5>
<p>none、decimal、lower-alpha、upper-roman等</p>`,
  },
  {
    id: 2,
    title: "实现登录表单与异步请求",
    description:
      "实现登录表单，使用AJAX、Axios或Fetch发送请求到 http://localhost:9090/auth/login，成功弹出提示，失败显示错误。",
    targetDemo: `<table border="1" cellpadding="8" style="border-collapse: collapse; width: 300px; margin: 0 auto;">
  <tr>
    <td width="80">姓名</td>
    <td>
      <input type="text" value="admin" style="width: 100%; border: 1px solid #ccc; padding: 4px;" />
    </td>
  </tr>
  <tr>
    <td>密码</td>
    <td>
      <input type="password" value="123456" style="width: 100%; border: 1px solid #ccc; padding: 4px;" />
    </td>
  </tr>
  <tr>
    <td colspan="2" style="text-align: center">
      <button style="padding: 6px 30px; background: linear-gradient(to bottom, #f5f5f5, #e0e0e0); border: 1px solid #ccc; cursor: pointer;">
        登录
      </button>
    </td>
  </tr>
</table>`,
    hasMultipleVersions: true,
    versions: {
      ajax: {
        code: `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;登录页面&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;table border="1" cellpadding="8"&gt;
    &lt;tr&gt;
      &lt;td&gt;姓名&lt;/td&gt;
      &lt;td&gt;&lt;input type="text" id="username" value="admin"&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;密码&lt;/td&gt;
      &lt;td&gt;&lt;input type="password" id="password" value="123456"&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td colspan="2" style="text-align:center;"&gt;
        &lt;button onclick="login()"&gt;登录&lt;/button&gt;
      &lt;/td&gt;
    &lt;/tr&gt;
  &lt;/table&gt;

  &lt;script&gt;
  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // AJAX方法
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:9090/auth/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert('✅ 登录成功！');
      } else {
          alert('❌ 登录失败！');
        }
      }
    };
    
    xhr.send(JSON.stringify({ username, password }));
  }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;`,
        knowledge: `<h5>XMLHttpRequest步骤</h5>
<pre class="code-block" style="font-size: 12px">
// 1. 创建对象
const xhr = new XMLHttpRequest();

// 2. 设置请求
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json');

// 3. 监听响应
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 处理成功
  }
};

// 4. 发送请求
xhr.send(JSON.stringify(data));</pre>

<h5 class="mt-3">readyState状态</h5>
<ul>
  <li>0 - 未初始化</li>
  <li>1 - 连接已建立</li>
  <li>2 - 请求已接收</li>
  <li>3 - 请求处理中</li>
  <li>4 - 请求已完成</li>
</ul>

<h5 class="mt-3">HTTP状态码</h5>
<ul>
  <li>200 - 成功</li>
  <li>401 - 未授权</li>
  <li>404 - 未找到</li>
  <li>500 - 服务器错误</li>
</ul>`,
      },
      axios: {
        code: `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;登录页面&lt;/title&gt;
  &lt;!-- 引入Axios库 --&gt;
  &lt;script src="https://cdn.bootcdn.net/ajax/libs/axios/1.4.0/axios.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;table border="1" cellpadding="8"&gt;
    &lt;tr&gt;
      &lt;td&gt;姓名&lt;/td&gt;
      &lt;td&gt;&lt;input type="text" id="username" value="admin"&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;密码&lt;/td&gt;
      &lt;td&gt;&lt;input type="password" id="password" value="123456"&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td colspan="2" style="text-align:center;"&gt;
        &lt;button onclick="login()"&gt;登录&lt;/button&gt;
      &lt;/td&gt;
    &lt;/tr&gt;
  &lt;/table&gt;

  &lt;script&gt;
  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Axios方法（更简洁）
    axios.post('http://localhost:9090/auth/login', {
      username: username,
      password: password
    })
    .then(function(response) {
      alert('✅ 登录成功！');
      console.log(response.data);
    })
    .catch(function(error) {
      alert('❌ 登录失败！');
      console.log(error);
    });
  }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;`,
        knowledge: `<h5>Axios基本语法</h5>
<pre class="code-block" style="font-size: 12px">
axios.post(url, data)
  .then(response => {
    // 成功处理
  })
  .catch(error => {
    // 失败处理
  });</pre>

<h5 class="mt-3">Axios vs AJAX对比</h5>
<table class="table table-sm table-bordered">
  <tr>
    <th>特点</th>
    <th>AJAX</th>
    <th>Axios</th>
  </tr>
  <tr>
    <td>代码量</td>
    <td>较多</td>
    <td>简洁</td>
  </tr>
  <tr>
    <td>依赖</td>
    <td>浏览器原生</td>
    <td>需引入库</td>
  </tr>
  <tr>
    <td>Promise</td>
    <td>需手动封装</td>
    <td>原生支持</td>
  </tr>
  <tr>
    <td>JSON转换</td>
    <td>手动处理</td>
    <td>自动处理</td>
  </tr>
</table>

<h5 class="mt-3">引入Axios</h5>
<pre class="code-block" style="font-size: 12px">
&lt;script src="https://cdn.bootcdn.net/ajax/libs/axios/1.4.0/axios.min.js"&gt;&lt;/script&gt;</pre>

<h5 class="mt-3">优势</h5>
<ul>
  <li>语法简洁，易于理解</li>
  <li>自动转换JSON</li>
  <li>支持Promise链式调用</li>
  <li>拦截请求和响应</li>
</ul>`,
      },
      fetch: {
        code: `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;登录页面&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;table border="1" cellpadding="8"&gt;
    &lt;tr&gt;
      &lt;td&gt;姓名&lt;/td&gt;
      &lt;td&gt;&lt;input type="text" id="username" value="admin"&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;密码&lt;/td&gt;
      &lt;td&gt;&lt;input type="password" id="password" value="123456"&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td colspan="2" style="text-align:center;"&gt;
        &lt;button onclick="login()"&gt;登录&lt;/button&gt;
      &lt;/td&gt;
    &lt;/tr&gt;
  &lt;/table&gt;

  &lt;script&gt;
  async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
      // Fetch方法（最现代）
      const response = await fetch('http://localhost:9090/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const result = await response.json();

      if (result.code === 0) {
        alert('✅ 登录成功！');
      } else {
        alert('❌ 登录失败！');
      }
    } catch (error) {
      alert('❌ 请求失败！');
    }
  }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;`,
        knowledge: `<h5>Fetch基本语法</h5>
<pre class="code-block" style="font-size: 12px">
async function login() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    if (result.code === 0) {
      // 成功处理
    }
  } catch (error) {
    // 失败处理
  }
}</pre>

<h5 class="mt-3">三种方式对比</h5>
<table class="table table-sm table-bordered">
  <tr>
    <th>特点</th>
    <th>AJAX</th>
    <th>Axios</th>
    <th>Fetch</th>
  </tr>
  <tr>
    <td>浏览器支持</td>
    <td>✅ 所有</td>
    <td>✅ 所有</td>
    <td>⚠️ 不支持IE</td>
  </tr>
  <tr>
    <td>是否原生</td>
    <td>✅ 是</td>
    <td>❌ 需引入</td>
    <td>✅ 是</td>
  </tr>
  <tr>
    <td>Promise</td>
    <td>❌ 无</td>
    <td>✅ 有</td>
    <td>✅ 有</td>
  </tr>
  <tr>
    <td>代码简洁度</td>
    <td>⭐⭐</td>
    <td>⭐⭐⭐⭐</td>
    <td>⭐⭐⭐⭐⭐</td>
  </tr>
</table>

<h5 class="mt-3">Fetch关键点</h5>
<ul>
  <li><strong>async/await</strong> - 必须在async函数中使用</li>
  <li><strong>method</strong> - 指定请求方法（POST/GET）</li>
  <li><strong>headers</strong> - 设置请求头</li>
  <li><strong>body</strong> - 请求体（需JSON.stringify转换）</li>
  <li><strong>response.json()</strong> - 解析JSON响应</li>
  <li><strong>try-catch</strong> - 错误捕获</li>
</ul>

<h5 class="mt-3">优势</h5>
<ul>
  <li>原生支持，无需引入库</li>
  <li>基于Promise，支持async/await</li>
  <li>语法最简洁现代</li>
  <li>更好的错误处理</li>
</ul>`,
      },
    },
  },
  {
    id: 3,
    title: "实现课程介绍页面",
    description:
      "编写HTML程序，包含一个居中的主标题、一个副标题、三个段落。要求：段落首行缩进2em，行高1.8。",
    targetDemo: `<div style="padding: 30px; background: #f5f5f5;">
  <div style="max-width: 800px; margin: 0 auto; background: white; padding: 30px;">
    <h1 style="text-align: center; color: #2c3e50;">Web开发技术课程</h1>
    <h2 style="color: #34495e; border-bottom: 2px solid #3498db; padding-bottom: 8px; margin: 20px 0;">课程简介</h2>
    <p style="text-indent: 2em; line-height: 1.8;">本课程讲述Web设计与开发技术，包括：前端技术(HTML、CSS、JavaScript、TypeScript)、后端技术(Java、Spring Boot、JPA)、数据库技术(MySQL、Redis)等内容。</p>
    <p style="text-indent: 2em; line-height: 1.8;">通过本课程的实验教学，学生应能熟练掌握Web开发的理论知识和技能，灵活应用Web前端开发技术，使用异步通信技术实现前后端分离的现代Web应用。</p>
    <p style="text-indent: 2em; line-height: 1.8;">学生在规划和设计网站时能够对网页布局有充分的掌控能力，通过合理选择配色与字体、综合运用图片、声音、动画等多媒体元素，设计出美观实用的网页作品。</p>
  </div>
</div>`,
    answerCode: `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;课程介绍&lt;/title&gt;
  &lt;style&gt;
    body {
      background: #f5f5f5;
      padding: 30px;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 30px;
    }
    h1 {
      text-align: center;
      color: #2c3e50;
    }
    h2 {
      color: #34495e;
      border-bottom: 2px solid #3498db;
      padding-bottom: 8px;
      margin: 20px 0;
    }
    p {
      text-indent: 2em;
      line-height: 1.8;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="container"&gt;
    &lt;h1&gt;Web开发技术课程&lt;/h1&gt;
    &lt;h2&gt;课程简介&lt;/h2&gt;
    &lt;p&gt;本课程讲述Web设计与开发技术，包括：前端技术(HTML、CSS、JavaScript、TypeScript)、后端技术(Java、Spring Boot、JPA)、数据库技术(MySQL、Redis)等内容。&lt;/p&gt;
    &lt;p&gt;通过本课程的实验教学，学生应能熟练掌握Web开发的理论知识和技能，灵活应用Web前端开发技术，使用异步通信技术实现前后端分离的现代Web应用。&lt;/p&gt;
    &lt;p&gt;学生在规划和设计网站时能够对网页布局有充分的掌控能力，通过合理选择配色与字体、综合运用图片、声音、动画等多媒体元素，设计出美观实用的网页作品。&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;`,
    knowledge: `<h5>核心知识点</h5>
<ul>
  <li><strong>text-align: center</strong> - 标题文字居中</li>
  <li><strong>text-indent: 2em</strong> - 段落首行缩进2个字符</li>
  <li><strong>line-height: 1.8</strong> - 设置行高</li>
  <li><strong>border-bottom</strong> - 下边框装饰</li>
</ul>

<h5 class="mt-3">布局技巧</h5>
<ul>
  <li><strong>max-width + margin: 0 auto</strong> - 内容居中</li>
  <li><strong>text-indent: 2em</strong> - 缩进2个字符宽度</li>
</ul>`,
  },
  {
    id: 4,
    title: "设置字体大小、样式及字体名称",
    description:
      "编写HTML程序，实现不同字体大小、样式和字体名称的显示效果。要求：包含一个居中的蓝色标题、一条水平线、四个段落分别展示不同的字体设置。",
    targetDemo: `<div style="background: white; padding: 20px; max-width: 700px; margin: 0 auto;">
  <h3 style="text-align: center; color: #3300ff; margin-bottom: 15px;">设置字体大小、样式及字体名称</h3>
  <hr style="border: 1px solid #660066; margin-bottom: 20px;">
  <p style="font-size: 20px; font-style: normal; font-family: '宋体', SimSun, serif; margin: 10px 0;">字号大小20px、字体正常、宋体</p>
  <p style="font-size: 200%; font-style: italic; font-family: '隶书', LiSu, serif; margin: 10px 0;">字号大小200%、字体斜体、隶书</p>
  <p style="font-size: x-small; font-style: oblique; font-family: '宋体', SimSun, serif; margin: 10px 0;">字号大小x-small、字体歪斜体、宋体</p>
  <p style="font-size: xx-large; font-style: oblique; font-family: '黑体', SimHei, sans-serif; margin: 10px 0;">字号大小xx-large、字体歪斜体、黑体</p>
</div>`,
    answerCode: `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;字体样式设置&lt;/title&gt;
  &lt;style&gt;
    h3 {
      text-align: center;
      color: #3300ff;
    }
    hr {
      color: #660066;
    }
    #p1 {
      font-size: 20px;
      font-style: normal;
      font-family: 宋体;
    }
    #p2 {
      font-size: 200%;
      font-style: italic;
      font-family: 隶书;
    }
    #p3 {
      font-size: x-small;
      font-style: oblique;
      font-family: 宋体;
    }
    #p4 {
      font-size: xx-large;
      font-style: oblique;
      font-family: 黑体;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h3&gt;设置字体大小、样式及字体名称&lt;/h3&gt;
  &lt;hr&gt;
  &lt;p id="p1"&gt;字号大小20px、字体正常、宋体&lt;/p&gt;
  &lt;p id="p2"&gt;字号大小200%、字体斜体、隶书&lt;/p&gt;
  &lt;p id="p3"&gt;字号大小x-small、字体歪斜体、宋体&lt;/p&gt;
  &lt;p id="p4"&gt;字号大小xx-large、字体歪斜体、黑体&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;`,
    knowledge: `<h5>核心知识点</h5>
<ul>
  <li><strong>font-size</strong> - 字体大小设置</li>
  <li><strong>font-style</strong> - 字体样式（normal/italic/oblique）</li>
  <li><strong>font-family</strong> - 字体名称设置</li>
  <li><strong>ID选择器</strong> - 用#选择特定元素</li>
</ul>

<h5 class="mt-3">font-size 常用值</h5>
<table class="table table-sm table-bordered">
  <tr>
    <th>类型</th>
    <th>示例</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>绝对单位</td>
    <td>20px</td>
    <td>固定像素值</td>
  </tr>
  <tr>
    <td>相对单位</td>
    <td>200%</td>
    <td>相对父元素的百分比</td>
  </tr>
  <tr>
    <td>关键字</td>
    <td>x-small, small, medium, large, x-large, xx-large</td>
    <td>预定义大小</td>
  </tr>
</table>

<h5 class="mt-3">font-style 值</h5>
<ul>
  <li><strong>normal</strong> - 正常字体（默认）</li>
  <li><strong>italic</strong> - 斜体（使用字体的斜体版本）</li>
  <li><strong>oblique</strong> - 歪斜体（将正常字体倾斜）</li>
</ul>

<h5 class="mt-3">常用中文字体</h5>
<ul>
  <li><strong>宋体</strong> (SimSun) - 最常用的正文字体</li>
  <li><strong>黑体</strong> (SimHei) - 粗体无衬线字体</li>
  <li><strong>楷体</strong> (KaiTi) - 手写风格</li>
  <li><strong>隶书</strong> (LiSu) - 书法风格</li>
  <li><strong>微软雅黑</strong> (Microsoft YaHei) - 现代无衬线字体</li>
</ul>

<h5 class="mt-3">ID选择器用法</h5>
<pre class="code-block" style="font-size: 12px">
/* CSS中定义 */
#p1 {
  font-size: 20px;
  font-style: normal;
}

/* HTML中使用 */
&lt;p id="p1"&gt;内容&lt;/p&gt;</pre>`,
  },
  {
    id: 5,
    title: "实现页面分区效果（Flexbox布局）",
    description:
      "编写HTML程序，实现页面分区效果。要求：页面分上下两个区域，上面区域有两个大小相等的块，下面区域有三个大小相同的块，使用Flexbox布局。",
    targetDemo: `<div style="padding: 20px; background: #f5f5f5;">
  <div style="display: flex; flex-direction: row; padding: 5px; margin: 5px;">
    <div style="width: 50%; height: 150px; margin: 5px; border: 2px solid #4CAF50; background: #e8f5e9; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; color: #2e7d32;">DIV11</div>
    <div style="width: 50%; height: 150px; margin: 5px; border: 2px solid #4CAF50; background: #e8f5e9; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; color: #2e7d32;">DIV12</div>
  </div>
  <div style="display: flex; flex-direction: row; padding: 5px; margin: 5px;">
    <div style="width: 33%; height: 150px; margin: 5px; border: 2px solid #2196F3; background: #e3f2fd; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; color: #1565c0;">DIV21</div>
    <div style="width: 33%; height: 150px; margin: 5px; border: 2px solid #2196F3; background: #e3f2fd; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; color: #1565c0;">DIV22</div>
    <div style="width: 33%; height: 150px; margin: 5px; border: 2px solid #2196F3; background: #e3f2fd; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; color: #1565c0;">DIV23</div>
  </div>
</div>`,
    answerCode: `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;页面分区&lt;/title&gt;
  &lt;style&gt;
    .div1 {
      display: flex;
      flex-direction: row;
      padding: 5px;
      margin: 5px;
      text-align: center;
    }
    .div1 .block1 {
      width: 50%;
      height: 150px;
      margin: 5px;
      border: solid 2px #4CAF50;
      background: #e8f5e9;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
      color: #2e7d32;
    }
    .div1 .block2 {
      width: 33%;
      height: 150px;
      margin: 5px;
      border: solid 2px #2196F3;
      background: #e3f2fd;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
      color: #1565c0;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="div1"&gt;
    &lt;div class="block1"&gt;DIV11&lt;/div&gt;
    &lt;div class="block1"&gt;DIV12&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="div1"&gt;
    &lt;div class="block2"&gt;DIV21&lt;/div&gt;
    &lt;div class="block2"&gt;DIV22&lt;/div&gt;
    &lt;div class="block2"&gt;DIV23&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;`,
    knowledge: `<h5>核心知识点</h5>
<ul>
  <li><strong>display: flex</strong> - 启用Flexbox布局</li>
  <li><strong>flex-direction: row</strong> - 水平排列（默认值）</li>
  <li><strong>justify-content: center</strong> - 内容水平居中</li>
  <li><strong>align-items: center</strong> - 内容垂直居中</li>
  <li><strong>后代选择器</strong> - .div1 .block1（空格分隔）</li>
</ul>

<h5 class="mt-3">Flexbox基本用法</h5>
<pre class="code-block" style="font-size: 12px">
/* 父容器 */
.container {
  display: flex;           /* 启用flex */
  flex-direction: row;     /* 水平排列 */
}

/* 子元素 */
.item {
  width: 50%;             /* 宽度50% */
}</pre>

<h5 class="mt-3">flex-direction值</h5>
<ul>
  <li><strong>row</strong> - 水平排列（从左到右）</li>
  <li><strong>column</strong> - 垂直排列（从上到下）</li>
  <li><strong>row-reverse</strong> - 水平反向</li>
  <li><strong>column-reverse</strong> - 垂直反向</li>
</ul>

<h5 class="mt-3">后代选择器</h5>
<pre class="code-block" style="font-size: 12px">
/* 选中 div1 里面的 block1 */
.div1 .block1 { }

/* 不是这样（没有空格，表示同时具有两个类） */
.div1.block1 { }</pre>

<h5 class="mt-3">实现要点</h5>
<p>✅ 上区两个块：width: 50%（各占一半）</p>
<p>✅ 下区三个块：width: 33%（各占三分之一）</p>
<p>✅ display: flex 让子元素自动排列</p>`,
  },
  {
    id: 6,
    title: "实现学院和班级的级联选择（Vue.js）",
    isVueComponent: true,
    description:
      "编写Vue程序，实现学院和班级的级联选择。要求：选择不同学院时，班级下拉框显示对应的班级列表。学院包括：计算机、软件；各学院对应不同的班级。",
    targetDemo: `<div style="padding: 30px; background: white;">
  <div style="margin-bottom: 20px;">
    <label style="margin-right: 10px; font-weight: bold;">学院：</label>
    <select style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; min-width: 150px;">
      <option value="">请选择学院</option>
      <option value="计算机">计算机</option>
      <option value="软件">软件</option>
    </select>
  </div>
  <div>
    <label style="margin-right: 10px; font-weight: bold;">班级：</label>
    <select style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; min-width: 150px;">
      <option value="">请先选择学院</option>
    </select>
  </div>
  <p style="margin-top: 20px; color: #666; font-size: 14px;">💡 选择学院后，班级列表会自动更新</p>
</div>`,
    answerCode: `&lt;!-- Vue单文件组件格式（.vue文件） --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;div class="commInput"&gt;
      &lt;select v-model="collegeName" @change="changeCollege"&gt;
        &lt;option v-for="item in collegeList" :key="item" :value="item"&gt;{{ item }}&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;
    &lt;div class="commInput"&gt;
      &lt;select v-model="className"&gt;
        &lt;option v-for="item in classList" :key="item" :value="item"&gt;{{ item }}&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang="ts"&gt;
import { defineComponent } from "vue";

export default defineComponent({
  data: () =&gt; ({
    collegeName: '',
    className: '',
    collegeList: ['计算机', '软件'],
    classList: [] as string[],
  }),
  methods: {
    changeCollege() {
      switch(this.collegeName) {
        case '计算机':
          this.classList = ['机1', '机2', '机3'];
          break;
        case '软件':
          this.classList = ['软1', '软2', '软3'];
          break;
        default:
          this.classList = [];
      }
    }
  }
});
&lt;/script&gt;`,
    knowledge: `<h5>核心知识点</h5>
<ul>
  <li><strong>v-model</strong> - 双向数据绑定</li>
  <li><strong>v-for</strong> - 列表渲染</li>
  <li><strong>@change</strong> - 监听change事件</li>
  <li><strong>switch语句</strong> - 条件判断</li>
  <li><strong>级联选择</strong> - 根据父级选择更新子级数据</li>
</ul>

<h5 class="mt-3">Vue基本结构</h5>
<pre class="code-block" style="font-size: 12px">
const { createApp } = Vue;

createApp({
  data() {
    return {
      // 数据定义
    }
  },
  methods: {
    // 方法定义
  }
}).mount('#app');</pre>

<h5 class="mt-3">v-model 双向绑定</h5>
<pre class="code-block" style="font-size: 12px">
&lt;!-- 绑定数据 --&gt;
&lt;select v-model="collegeName"&gt;
  &lt;option value="计算机"&gt;计算机&lt;/option&gt;
&lt;/select&gt;

// 在data中定义
data() {
  return {
    collegeName: ''
  }
}</pre>

<h5 class="mt-3">v-for 列表渲染</h5>
<pre class="code-block" style="font-size: 12px">
&lt;!-- 循环渲染选项 --&gt;
&lt;option v-for="item in collegeList" 
        :key="item" 
        :value="item"&gt;
  {{ item }}
&lt;/option&gt;

// 数据源
collegeList: ['计算机', '软件']</pre>

<h5 class="mt-3">级联选择实现步骤</h5>
<ol>
  <li>定义两个下拉框（学院、班级）</li>
  <li>学院下拉框绑定 @change 事件</li>
  <li>在事件处理函数中，根据学院更新班级列表</li>
  <li>使用 switch 或 if 判断不同学院</li>
  <li>清空之前选择的班级</li>
</ol>

<h5 class="mt-3">引入Vue.js</h5>
<pre class="code-block" style="font-size: 12px">
&lt;script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"&gt;&lt;/script&gt;</pre>`,
  },
  {
    id: 7,
    title: "设置单元格跨列、跨行属性",
    description:
      "编写HTML程序，实现会议日程安排表。要求：使用table标签，合理运用colspan和rowspan属性实现单元格跨列和跨行效果。",
    targetDemo: `<div style="padding: 20px; background: white;">
  <h3 style="text-align: center; font-weight: bold; margin-bottom: 10px;">设置单元格跨列、跨行属性</h3>
  <table border="1" width="600" align="center" bordercolor="#3366ff" cellpadding="8" style="border-collapse: collapse; margin: 0 auto;">
    <caption style="font-size: 16px; margin-bottom: 10px;">云计算与物联网会议日程安排表</caption>
    <tr align="center">
      <td colspan="2" style="background: #e3f2fd; font-weight: bold;">上午</td>
      <td colspan="2" style="background: #e3f2fd; font-weight: bold;">下午</td>
    </tr>
    <tr align="center">
      <td>8:00-10:00</td>
      <td>10:10-12:00</td>
      <td>14:00-16:00</td>
      <td>16:10-18:00</td>
    </tr>
    <tr align="center">
      <td rowspan="2" style="background: #fff3e0;">领导讲话</td>
      <td>大会主题报告</td>
      <td>分会专题报告</td>
      <td rowspan="2" style="background: #fff3e0;">总结报告</td>
    </tr>
    <tr align="center">
      <td>专家报告</td>
      <td>分组讨论</td>
    </tr>
    <tr align="center">
      <td colspan="4" style="background: #e8f5e9;">全天参观考察无锡国家物联网中心</td>
    </tr>
  </table>
</div>`,
    answerCode: `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;会议日程表&lt;/title&gt;
  &lt;style&gt;
    table {
      border-collapse: collapse;
      margin: 0 auto;
    }
    td {
      padding: 8px;
      text-align: center;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div&gt;
    &lt;h3 align="center"&gt;设置单元格跨列、跨行属性&lt;/h3&gt;
    &lt;table border="1" width="600" align="center" bordercolor="#3366ff"&gt;
      &lt;caption&gt;云计算与物联网会议日程安排表&lt;/caption&gt;
      &lt;tr align="center"&gt;
        &lt;td colspan="2"&gt;上午&lt;/td&gt;
        &lt;td colspan="2"&gt;下午&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr align="center"&gt;
        &lt;td&gt;8:00-10:00&lt;/td&gt;
        &lt;td&gt;10:10-12:00&lt;/td&gt;
        &lt;td&gt;14:00-16:00&lt;/td&gt;
        &lt;td&gt;16:10-18:00&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr align="center"&gt;
        &lt;td rowspan="2"&gt;领导讲话&lt;/td&gt;
        &lt;td&gt;大会主题报告&lt;/td&gt;
        &lt;td&gt;分会专题报告&lt;/td&gt;
        &lt;td rowspan="2"&gt;总结报告&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr align="center"&gt;
        &lt;td&gt;专家报告&lt;/td&gt;
        &lt;td&gt;分组讨论&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr align="center"&gt;
        &lt;td colspan="4"&gt;全天参观考察无锡国家物联网中心&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;`,
    knowledge: `<h5>核心知识点</h5>
<ul>
  <li><strong>colspan</strong> - 跨列（水平合并）</li>
  <li><strong>rowspan</strong> - 跨行（垂直合并）</li>
  <li><strong>caption</strong> - 表格标题</li>
  <li><strong>border-collapse</strong> - 边框合并</li>
</ul>

<h5 class="mt-3">跨列跨行用法</h5>
<pre class="code-block" style="font-size: 12px">
&lt;!-- 跨2列（横向占2格） --&gt;
&lt;td colspan="2"&gt;上午&lt;/td&gt;

&lt;!-- 跨2行（纵向占2格） --&gt;
&lt;td rowspan="2"&gt;领导讲话&lt;/td&gt;

&lt;!-- 同时跨行跨列 --&gt;
&lt;td colspan="3" rowspan="2"&gt;内容&lt;/td&gt;</pre>

<h5 class="mt-3">表格结构分析</h5>
<table class="table table-sm table-bordered">
  <tr>
    <th>行数</th>
    <th>单元格数</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>第1行</td>
    <td>2个</td>
    <td>上午(colspan=2)、下午(colspan=2)</td>
  </tr>
  <tr>
    <td>第2行</td>
    <td>4个</td>
    <td>4个时间段</td>
  </tr>
  <tr>
    <td>第3行</td>
    <td>4个</td>
    <td>领导讲话(rowspan=2)、报告2个、总结(rowspan=2)</td>
  </tr>
  <tr>
    <td>第4行</td>
    <td>2个</td>
    <td>专家报告、分组讨论（左右被占用）</td>
  </tr>
  <tr>
    <td>第5行</td>
    <td>1个</td>
    <td>参观考察(colspan=4)</td>
  </tr>
</table>

<h5 class="mt-3">记忆技巧</h5>
<ul>
  <li><strong>colspan</strong> = <strong>col</strong>umn span（列跨度）= 横向合并</li>
  <li><strong>rowspan</strong> = <strong>row</strong> span（行跨度）= 纵向合并</li>
  <li><strong>规则：</strong>被合并的单元格不要再写！</li>
</ul>

<h5 class="mt-3">考试注意事项</h5>
<p>✅ <strong>colspan跨列</strong>：横向占几个格子</p>
<p>✅ <strong>rowspan跨行</strong>：纵向占几个格子</p>
<p>✅ <strong>被占用的格子不写</strong>：rowspan=2占了2行，第二行就少1个td</p>
<p>⚠️ <strong>计算总列数</strong>：每行的实际列数要相同（考虑跨行跨列）</p>`,
  },
  {
    id: 8,
    title: "实现用户注册表单",
    description:
      "编写HTML程序，实现完整的用户注册表单。要求：包含文本框、密码框、单选框、复选框、下拉框和提交重置按钮。使用table布局，蓝色边框。",
    targetDemo: `<div style="padding: 30px; background: white;">
  <table border="1" bordercolor="#3366ff" cellpadding="8" style="border-collapse: collapse; margin: 0 auto; font-size: 14px;">
    <tr>
      <td>姓名</td>
      <td><input type="text" style="padding: 5px; width: 200px;"></td>
      <td></td>
    </tr>
    <tr>
      <td>密码</td>
      <td><input type="password" style="padding: 5px; width: 200px;"></td>
      <td></td>
    </tr>
    <tr>
      <td>重复密码</td>
      <td><input type="password" style="padding: 5px; width: 200px;"></td>
      <td></td>
    </tr>
    <tr>
      <td>年龄</td>
      <td><input type="text" style="padding: 5px; width: 200px;"></td>
      <td></td>
    </tr>
    <tr>
      <td>性别</td>
      <td>
        <input type="radio" name="sex" value="1"> 男
        <input type="radio" name="sex" value="0"> 女
      </td>
      <td></td>
    </tr>
    <tr>
      <td>爱好</td>
      <td>
        <input type="checkbox" name="hobby" value="1"> 足球
        <input type="checkbox" name="hobby" value="2"> 篮球
        <input type="checkbox" name="hobby" value="3"> 羽毛球
        <input type="checkbox" name="hobby" value="4"> 乒乓球
      </td>
      <td></td>
    </tr>
    <tr>
      <td>班级</td>
      <td>
        <select name="class" style="padding: 5px; width: 200px;">
          <option value="1">一年级1班</option>
          <option value="2">一年级2班</option>
          <option value="3">一年级3班</option>
          <option value="4">一年级4班</option>
        </select>
      </td>
      <td></td>
    </tr>
    <tr>
      <td><input type="reset" value="重置" style="padding: 6px 20px; cursor: pointer;"></td>
      <td align="center"><input type="submit" value="提交" style="padding: 6px 20px; cursor: pointer;"></td>
      <td></td>
    </tr>
  </table>
</div>`,
    answerCode: `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;用户注册&lt;/title&gt;
  &lt;style type="text/css"&gt;
    table {
      font-size: 12px;
      border: solid 1px blue;
      border-collapse: collapse;
    }
    td {
      border: solid 1px blue;
      padding: 8px;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div&gt;
    &lt;table&gt;
      &lt;tr&gt;
        &lt;td&gt;姓名&lt;/td&gt;
        &lt;td&gt;&lt;input type="text" id="uname" name="username" onblur="checkname()"&gt;&lt;/td&gt;
        &lt;td id="namemess"&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;密码&lt;/td&gt;
        &lt;td&gt;&lt;input type="password" id="pwd" name="pwd"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;重复密码&lt;/td&gt;
        &lt;td&gt;&lt;input type="password" id="pwd2" name="pwd2" onblur="checkpwd()"&gt;&lt;/td&gt;
        &lt;td id="pwdmsg"&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;年龄&lt;/td&gt;
        &lt;td&gt;&lt;input type="text" id="age" name="age" onblur="checkage()"&gt;&lt;/td&gt;
        &lt;td id="agemsg"&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;性别&lt;/td&gt;
        &lt;td&gt;
          &lt;input type="radio" value="1" name="sex"&gt;男
          &lt;input type="radio" value="0" name="sex"&gt;女
        &lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;爱好&lt;/td&gt;
        &lt;td&gt;
          &lt;input type="checkbox" value="1" name="aihao"&gt;足球
          &lt;input type="checkbox" value="2" name="aihao"&gt;篮球
          &lt;input type="checkbox" value="3" name="aihao"&gt;羽毛球
          &lt;input type="checkbox" value="4" name="aihao"&gt;乒乓球
        &lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;班级&lt;/td&gt;
        &lt;td&gt;
          &lt;select name="banji"&gt;
            &lt;option value="1"&gt;一年级1班&lt;/option&gt;
            &lt;option value="2"&gt;一年级2班&lt;/option&gt;
            &lt;option value="3"&gt;一年级3班&lt;/option&gt;
            &lt;option value="4"&gt;一年级4班&lt;/option&gt;
          &lt;/select&gt;
        &lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;&lt;input type="reset" value="重置"&gt;&lt;/td&gt;
        &lt;td align="center"&gt;&lt;input type="submit" value="提交"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
  &lt;/div&gt;

  &lt;script&gt;
    function checkname() {
      const name = document.getElementById('uname').value;
      const msg = document.getElementById('namemess');
      if (name.length &lt; 2) {
        msg.innerHTML = '&lt;span style="color:red;"&gt;姓名至少2个字符&lt;/span&gt;';
      } else {
        msg.innerHTML = '&lt;span style="color:green;"&gt;✓&lt;/span&gt;';
      }
    }

    function checkpwd() {
      const pwd1 = document.getElementById('pwd').value;
      const pwd2 = document.getElementById('pwd2').value;
      const msg = document.getElementById('pwdmsg');
      if (pwd1 !== pwd2) {
        msg.innerHTML = '&lt;span style="color:red;"&gt;两次密码不一致&lt;/span&gt;';
      } else {
        msg.innerHTML = '&lt;span style="color:green;"&gt;✓&lt;/span&gt;';
      }
    }

    function checkage() {
      const age = document.getElementById('age').value;
      const msg = document.getElementById('agemsg');
      if (isNaN(age) || age &lt; 1 || age &gt; 150) {
        msg.innerHTML = '&lt;span style="color:red;"&gt;请输入有效年龄&lt;/span&gt;';
      } else {
        msg.innerHTML = '&lt;span style="color:green;"&gt;✓&lt;/span&gt;';
      }
    }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;`,
    knowledge: `<h5>核心知识点</h5>
<ul>
  <li><strong>input type="text"</strong> - 文本输入框</li>
  <li><strong>input type="password"</strong> - 密码输入框</li>
  <li><strong>input type="radio"</strong> - 单选框</li>
  <li><strong>input type="checkbox"</strong> - 复选框</li>
  <li><strong>select + option</strong> - 下拉选择框</li>
  <li><strong>input type="submit/reset"</strong> - 提交/重置按钮</li>
  <li><strong>onblur事件</strong> - 失去焦点时触发验证</li>
</ul>

<h5 class="mt-3">表单元素对比</h5>
<table class="table table-sm table-bordered">
  <tr>
    <th>元素</th>
    <th>代码</th>
    <th>用途</th>
  </tr>
  <tr>
    <td>文本框</td>
    <td>&lt;input type="text"&gt;</td>
    <td>输入普通文本</td>
  </tr>
  <tr>
    <td>密码框</td>
    <td>&lt;input type="password"&gt;</td>
    <td>输入密码（隐藏）</td>
  </tr>
  <tr>
    <td>单选框</td>
    <td>&lt;input type="radio" name="sex"&gt;</td>
    <td>单选（同name只能选1个）</td>
  </tr>
  <tr>
    <td>复选框</td>
    <td>&lt;input type="checkbox" name="hobby"&gt;</td>
    <td>多选（可选多个）</td>
  </tr>
  <tr>
    <td>下拉框</td>
    <td>&lt;select&gt;&lt;option&gt;...&lt;/option&gt;&lt;/select&gt;</td>
    <td>下拉选择</td>
  </tr>
</table>

<h5 class="mt-3">表单验证示例</h5>
<pre class="code-block" style="font-size: 12px">
function checkname() {
  const name = document.getElementById('uname').value;
  const msg = document.getElementById('namemess');
  
  if (name.length &lt; 2) {
    msg.innerHTML = '姓名至少2个字符';
  } else {
    msg.innerHTML = '✓';
  }
}</pre>

<h5 class="mt-3">单选框vs复选框</h5>
<ul>
  <li><strong>单选框：</strong>name相同的只能选一个（性别：男/女）</li>
  <li><strong>复选框：</strong>name相同的可以选多个（爱好：可选多项）</li>
</ul>

<h5 class="mt-3">考试要点</h5>
<p>✅ <strong>name属性</strong>：单选框同组要相同，复选框同组要相同</p>
<p>✅ <strong>value属性</strong>：提交时的值</p>
<p>✅ <strong>onblur</strong>：失去焦点时验证</p>
<p>✅ <strong>table布局</strong>：表单用table排版整齐</p>`,
  },
  {
    id: 9,
    title: "实现课程表网页（Vue.js）",
    isVueComponent: true,
    description:
      "编写Vue程序，实现一个课程表网页。要求：使用table标签，动态渲染星期和节次，课程数据使用二维数组存储，每门课程占两节课（使用rowspan）。",
    targetDemo: `<div style="padding: 20px; background: white;">
  <h3 style="text-align: center; margin-bottom: 20px;">课程表</h3>
  <table border="1" cellpadding="10" style="border-collapse: collapse; margin: 0 auto; text-align: center;">
    <tr style="background: #e3f2fd;">
      <td></td>
      <td><strong>星期一</strong></td>
      <td><strong>星期二</strong></td>
      <td><strong>星期三</strong></td>
      <td><strong>星期四</strong></td>
      <td><strong>星期五</strong></td>
    </tr>
    <tr>
      <td style="background: #fff3e0;">第一节</td>
      <td>数学</td>
      <td></td>
      <td>物理</td>
      <td>化学</td>
      <td></td>
    </tr>
    <tr>
      <td style="background: #fff3e0;">第二节</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td style="background: #fff3e0;">第三节</td>
      <td></td>
      <td>数学</td>
      <td></td>
      <td>英语</td>
      <td></td>
    </tr>
    <tr>
      <td style="background: #fff3e0;">第四节</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td style="background: #fff3e0;">第五节</td>
      <td></td>
      <td>程设</td>
      <td>计算机</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td style="background: #fff3e0;">第六节</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td style="background: #fff3e0;">第七节</td>
      <td></td>
      <td>操作系统</td>
      <td></td>
      <td>数据结构</td>
      <td></td>
    </tr>
    <tr>
      <td style="background: #fff3e0;">第八节</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</div>`,
    answerCode: `&lt;!-- Vue单文件组件格式（.vue文件） --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;table border="1"&gt;
      &lt;tr&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td v-for="(col, j) in dayList" :key="j"&gt;星期{{col}}&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr v-for="(row, i) in sectionList" :key="i"&gt;
        &lt;td&gt;第{{row}}节&lt;/td&gt;
        &lt;template v-if="i%2==0"&gt;
          &lt;td rowspan="2" v-for="(col,j) in courseList[i/2]" :key="j"&gt;{{col}}&lt;/td&gt;
        &lt;/template&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang="ts"&gt;
import { defineComponent } from "vue";

export default defineComponent({
  name: "TestTable",
  data: () =&gt; ({
    sectionList: ['一','二','三','四','五','六','七','八'],
    dayList: ['一','二','三','四','五'],
    courseList: [
      ["数学", "", "物理", "化学", ""],
      ["", "数学", "", "英语", ""],
      ["", "程设", "计算机", "", ""],
      ["", "操作系统", "", "数据结构", ""]
    ]
  })
});
&lt;/script&gt;`,
    knowledge: `<h5>核心知识点</h5>
<ul>
  <li><strong>v-for</strong> - 列表渲染（双层嵌套）</li>
  <li><strong>v-if</strong> - 条件渲染</li>
  <li><strong>rowspan</strong> - 表格跨行</li>
  <li><strong>i%2==0</strong> - 判断偶数行</li>
  <li><strong>二维数组</strong> - courseList存储课程数据</li>
</ul>

<h5 class="mt-3">关键逻辑分析</h5>
<pre class="code-block" style="font-size: 12px">
&lt;!-- 8节课，每门课占2节，所以只在偶数行渲染 --&gt;
&lt;tr v-for="(row, i) in sectionList" :key="i"&gt;
  &lt;td&gt;第{{row}}节&lt;/td&gt;
  
  &lt;!-- 只在i=0,2,4,6时渲染课程 --&gt;
  &lt;template v-if="i%2==0"&gt;
    &lt;!-- rowspan=2跨两行 --&gt;
    &lt;td rowspan="2" v-for="(col,j) in courseList[i/2]"&gt;
      {{col}}
    &lt;/td&gt;
  &lt;/template&gt;
&lt;/tr&gt;</pre>

<h5 class="mt-3">数据结构说明</h5>
<table class="table table-sm table-bordered">
  <tr>
    <th>数组</th>
    <th>内容</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>sectionList</td>
    <td>['一','二',...,'八']</td>
    <td>8个节次</td>
  </tr>
  <tr>
    <td>dayList</td>
    <td>['一','二',...,'五']</td>
    <td>星期一到星期五</td>
  </tr>
  <tr>
    <td>courseList[0]</td>
    <td>["数学","","物理","化学",""]</td>
    <td>第1-2节的课程</td>
  </tr>
  <tr>
    <td>courseList[1]</td>
    <td>["","数学","","英语",""]</td>
    <td>第3-4节的课程</td>
  </tr>
  <tr>
    <td>courseList[2]</td>
    <td>["","程设","计算机","",""]</td>
    <td>第5-6节的课程</td>
  </tr>
  <tr>
    <td>courseList[3]</td>
    <td>["","操作系统","","数据结构",""]</td>
    <td>第7-8节的课程</td>
  </tr>
</table>

<h5 class="mt-3">为什么用 i%2==0 和 rowspan="2"</h5>
<ul>
  <li>8节课分成4个时间段（1-2节、3-4节、5-6节、7-8节）</li>
  <li>每门课占2节，用rowspan="2"跨两行</li>
  <li>只在第1、3、5、7节（i=0,2,4,6）渲染课程</li>
  <li>courseList[i/2]：i=0→[0], i=2→[1], i=4→[2], i=6→[3]</li>
</ul>

<h5 class="mt-3">考试要点</h5>
<p>✅ <strong>v-for嵌套</strong>：外层循环行，内层循环列</p>
<p>✅ <strong>v-if控制渲染</strong>：只在偶数行显示课程</p>
<p>✅ <strong>rowspan跨行</strong>：让课程占2节</p>
<p>✅ <strong>二维数组索引</strong>：courseList[i/2]访问对应课程</p>`,
  },
];

// 初始化编程题
// 熟练度存储
let codingProficiency = {};

function initCodingProblems() {
  loadCodingProficiency(); // 加载熟练度
  renderCodingProblems();
  renderCodingProficiencyStats(); // 渲染统计
  
  // 编程题渲染完成后，初始化代码编辑器的Tab功能
  requestAnimationFrame(() => {
    if (typeof initCodeEditors === 'function') {
      initCodeEditors();
    }
  });
}

// 渲染编程题
function renderCodingProblems() {
  const container = document.querySelector("#coding .accordion");
  if (!container) return;

  container.innerHTML = codingProblemsData
    .map((problem) => {
      if (problem.hasMultipleVersions) {
        return renderMultiVersionProblem(problem);
      } else {
        return renderSingleVersionProblem(problem);
      }
    })
    .join("");
}

// 渲染单版本编程题
function renderSingleVersionProblem(problem) {
  // Vue组件题目的特殊处理
  const editorSection = problem.isVueComponent ? `
    <div class="section-label mt-4">✍️ 你来实现</div>
    <div class="row">
      <div class="col-md-12">
        <label class="form-label fw-bold">💻 代码编辑器</label>
        <div class="code-editor-area">
          <textarea id="codeInput${problem.id}" 
            placeholder="在这里编写Vue组件代码..." wrap="off"></textarea>
        </div>
        <div class="alert alert-info mt-3" style="background: #e3f2fd; border-left: 4px solid #2196F3; padding: 15px;">
          <strong>📌 注意：</strong>这是Vue单文件组件（.vue文件），需要在Vue项目中运行，无法在此预览。<br>
          <small>💡 代码编写完成后，可以复制到本地Vue项目中测试效果。</small>
        </div>
      </div>
    </div>
  ` : `
    <div class="section-label mt-4">✍️ 你来实现</div>
    <div class="row">
      <div class="col-md-6">
        <label class="form-label fw-bold">💻 代码编辑器</label>
        <div class="code-editor-area">
          <textarea id="codeInput${problem.id}" oninput="runCode(${problem.id})" 
            placeholder="在这里编写你的HTML代码..." wrap="off"></textarea>
        </div>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-bold">👁️ 实时预览</label>
        <iframe id="preview${problem.id}" class="preview-area w-100"></iframe>
      </div>
    </div>
  `;

  return `
    <div class="accordion-item coding-card">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coding${problem.id}">
          编程题${problem.id}：${problem.title}
          <span class="proficiency-tag" onclick="event.stopPropagation();">
            ${renderCodingStars(problem.id)}
          </span>
        </button>
      </h2>
      <div id="coding${problem.id}" class="accordion-collapse collapse" data-bs-parent="#codingAccordion">
        <div class="accordion-body">
          <p class="mb-4"><strong>题目：</strong>${problem.description}</p>
          
          <div class="section-label">🎯 要实现的效果</div>
          <div class="target-demo">${problem.targetDemo}</div>
          
          ${editorSection}
          
          <div class="section-label mt-5">💡 参考答案</div>
          <div class="accordion answer-accordion">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#answer${problem.id}">
                  📖 点击查看答案和解析
                </button>
              </h2>
              <div id="answer${problem.id}" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <div class="row">
                    <div class="col-md-6">
                      <label class="form-label fw-bold">📝 答案代码</label>
                      <pre class="code-block"><button class="copy-btn" onclick="copyCode(this)">📋 复制</button>${problem.answerCode}</pre>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label fw-bold">📚 知识点解析</label>
                      <div class="knowledge-box">${problem.knowledge}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 渲染多版本编程题
function renderMultiVersionProblem(problem) {
  return `
    <div class="accordion-item coding-card">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coding${problem.id}">
          编程题${problem.id}：${problem.title}
        </button>
      </h2>
      <div id="coding${problem.id}" class="accordion-collapse collapse" data-bs-parent="#codingAccordion">
        <div class="accordion-body">
          <p class="mb-4"><strong>题目：</strong>${problem.description}</p>
          
          <div class="section-label">🎯 要实现的效果</div>
          <div class="target-demo">${problem.targetDemo}</div>
          
          <div class="section-label mt-4">✍️ 你来实现</div>
          <div class="row">
            <div class="col-md-6">
              <label class="form-label fw-bold">💻 代码编辑器</label>
              <div class="code-editor-area">
                <textarea id="codeInput${problem.id}" oninput="runCode(${problem.id})" 
                  placeholder="在这里编写你的HTML代码..." wrap="off"></textarea>
              </div>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-bold">👁️ 实时预览</label>
              <iframe id="preview${problem.id}" class="preview-area w-100"></iframe>
            </div>
          </div>
          
          <div class="section-label mt-5">💡 参考答案</div>
          <div class="accordion answer-accordion">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#answer${problem.id}">
                  📖 点击查看答案和解析
                </button>
              </h2>
              <div id="answer${problem.id}" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <!-- 版本切换按钮 -->
                  <div class="btn-group mb-4" role="group">
                    <button type="button" class="btn btn-outline-primary active" onclick="showVersion${problem.id}('ajax')">
                      📝 AJAX版本
                    </button>
                    <button type="button" class="btn btn-outline-primary" onclick="showVersion${problem.id}('axios')">
                      📝 Axios版本
                    </button>
                    <button type="button" class="btn btn-outline-primary" onclick="showVersion${problem.id}('fetch')">
                      📝 Fetch版本
                    </button>
                  </div>
                  
                  <!-- AJAX版本 -->
                  <div id="version${problem.id}-ajax" class="answer-version">
                    <div class="row">
                      <div class="col-md-6">
                        <label class="form-label fw-bold">📝 AJAX版本代码</label>
                        <pre class="code-block"><button class="copy-btn" onclick="copyCode(this)">📋 复制</button>${problem.versions.ajax.code}</pre>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label fw-bold">📚 AJAX知识点</label>
                        <div class="knowledge-box">${problem.versions.ajax.knowledge}</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Axios版本 -->
                  <div id="version${problem.id}-axios" class="answer-version" style="display: none">
                    <div class="row">
                      <div class="col-md-6">
                        <label class="form-label fw-bold">📝 Axios版本代码</label>
                        <pre class="code-block"><button class="copy-btn" onclick="copyCode(this)">📋 复制</button>${problem.versions.axios.code}</pre>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label fw-bold">📚 Axios知识点</label>
                        <div class="knowledge-box">${problem.versions.axios.knowledge}</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Fetch版本 -->
                  <div id="version${problem.id}-fetch" class="answer-version" style="display: none">
                    <div class="row">
                      <div class="col-md-6">
                        <label class="form-label fw-bold">📝 Fetch版本代码</label>
                        <pre class="code-block"><button class="copy-btn" onclick="copyCode(this)">📋 复制</button>${problem.versions.fetch.code}</pre>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label fw-bold">📚 Fetch知识点</label>
                        <div class="knowledge-box">${problem.versions.fetch.knowledge}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 切换版本显示 - 为编程题2创建特定函数
window.showVersion2 = function (version) {
  // 隐藏所有版本
  document.querySelectorAll("#answer2 .answer-version").forEach((el) => {
    el.style.display = "none";
  });

  // 显示选中版本
  document.getElementById("version2-" + version).style.display = "block";

  // 更新按钮状态
  event.target.parentElement.querySelectorAll(".btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");
};

// ==================== 熟练度功能（编程题） ====================

// 加载熟练度数据
function loadCodingProficiency() {
  try {
    const saved = localStorage.getItem('codingProficiency');
    if (saved) {
      codingProficiency = JSON.parse(saved);
    }
  } catch (e) {
    console.error('加载编程题熟练度失败:', e);
    codingProficiency = {};
  }
}

// 保存熟练度
function saveCodingProficiency() {
  localStorage.setItem('codingProficiency', JSON.stringify(codingProficiency));
  renderCodingProficiencyStats(); // 更新统计
}

// 渲染星星
function renderCodingStars(id) {
  const level = codingProficiency[id] || 0;
  const labels = ['未练习', '不熟练', '一般', '比较熟', '熟练', '精通'];
  
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    const filled = i <= level ? 'filled level-' + level : '';
    stars += `<span class="star ${filled}" onclick="setCodingProficiency(${id}, ${i})" title="${i}星">★</span>`;
  }
  
  const labelText = level > 0 ? `<span class="proficiency-label">${labels[level]}</span>` : '';
  
  return `<span class="star-rating">${stars}</span>${labelText}`;
}

// 设置熟练度
function setCodingProficiency(id, level) {
  codingProficiency[id] = level;
  saveCodingProficiency();
  // 重新渲染编程题
  renderCodingProblems();
  // 恢复代码编辑器
  requestAnimationFrame(() => {
    if (typeof initCodeEditors === 'function') {
      initCodeEditors();
    }
  });
}

// 渲染熟练度统计
function renderCodingProficiencyStats() {
  const container = document.querySelector("#coding");
  if (!container) return;
  
  // 统计各等级数量
  const stats = {
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0
  };
  
  codingProblemsData.forEach(item => {
    const level = codingProficiency[item.id] || 0;
    stats[level]++;
  });
  
  // 检查是否已有统计区域
  let statsDiv = document.getElementById('proficiency-stats-coding');
  if (!statsDiv) {
    statsDiv = document.createElement('div');
    statsDiv.id = 'proficiency-stats-coding';
    statsDiv.className = 'proficiency-stats';
    container.appendChild(statsDiv); // 改为添加到容器底部
  }
  
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
// 由 index.html 中的懒加载管理器调用 initCodingProblems()

