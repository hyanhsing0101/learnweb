// ==================== 选择题模块 ====================

// 选择题数据（已清空，准备添加新题）
const quizData = [
  {
    question: "不同的网页中，虽然内容千差万别，但本质上都是一样的。所有网页都是由基本的网页元素组成的，其中（）是实现网页按照一定逻辑关系进行跳转的元素",
    options: [
      { key: "A", value: "水平线" },
      { key: "B", value: "超链接" },
      { key: "C", value: "表格" },
      { key: "D", value: "动画" },
    ],
    answer: "B",
    explain: "<strong>超链接</strong>是网页的灵魂，通过&lt;a&gt;标签实现页面间的跳转和导航，构成了万维网（WWW）的基础。水平线、表格、动画都不具备跳转功能。"
  },
  {
    question: "HTML网页文件的默认扩展名是（）",
    options: [
      { key: "A", value: ".txt" },
      { key: "B", value: ".doc" },
      { key: "C", value: ".html" },
      { key: "D", value: ".exe" },
    ],
    answer: "C",
    explain: "<strong>.html</strong> 是HTML文档的标准扩展名，也可以用 <strong>.htm</strong>（旧版DOS系统3字符限制）。浏览器通过扩展名识别这是HTML文档。"
  },
  {
    question: "以下HTML标记中，（）是网页的主体",
    options: [
      { key: "A", value: "&lt;head&gt;&lt;/head&gt;" },
      { key: "B", value: "&lt;title&gt;&lt;/title&gt;" },
      { key: "C", value: "&lt;body&gt;&lt;/body&gt;" },
      { key: "D", value: "&lt;table&gt;&lt;/table&gt;" },
    ],
    answer: "C",
    explain: "<strong>&lt;body&gt;</strong> 标签包含网页的主体内容，是用户在浏览器中看到的所有内容（文字、图片、视频等）。&lt;head&gt;是头部配置，用户看不到。"
  },
  {
    question: "以下标记中，（）是用于设置页面标题的标记",
    options: [
      { key: "A", value: "&lt;title&gt;" },
      { key: "B", value: "&lt;caption&gt;" },
      { key: "C", value: "&lt;head&gt;" },
      { key: "D", value: "&lt;html&gt;" },
    ],
    answer: "A",
    explain: "<strong>&lt;title&gt;</strong> 标签设置网页标题，显示在浏览器标签页上。位于&lt;head&gt;内部。&lt;caption&gt;是表格标题，不是页面标题。"
  },
  {
    question: "以下标记中，（）是用于设置页面元信息的标记",
    options: [
      { key: "A", value: "&lt;caption&gt;" },
      { key: "B", value: "&lt;head&gt;" },
      { key: "C", value: "&lt;title&gt;" },
      { key: "D", value: "&lt;meta&gt;" },
    ],
    answer: "D",
    explain: '<strong>&lt;meta&gt;</strong> 标签用于设置网页的元信息，如字符集、关键词、描述、作者等。例如：&lt;meta charset="UTF-8"&gt;、&lt;meta name="keywords" content="HTML"&gt;'
  },
  {
    question: "&lt;b&gt;表示行内文本，通常粗体显示，不传达重要性的意义，HTML推荐使用（）标签表示重要性而非强调",
    options: [
      { key: "A", value: "&lt;strong&gt;" },
      { key: "B", value: "&lt;embed&gt;" },
      { key: "C", value: "&lt;table&gt;" },
      { key: "D", value: "&lt;marquee&gt;" },
    ],
    answer: "A",
    explain: "<strong>&lt;strong&gt;</strong> 表示重要性（语义），浏览器默认显示为粗体，搜索引擎也会重视。<strong>&lt;b&gt;</strong> 只是视觉上的粗体，无语义。HTML5推荐用&lt;strong&gt;。"
  },
  {
    question: "下列选择中，（）是换行标记",
    options: [
      { key: "A", value: "&lt;font&gt;" },
      { key: "B", value: "&lt;br&gt;" },
      { key: "C", value: "&lt;body&gt;" },
      { key: "D", value: "&lt;p&gt;" },
    ],
    answer: "B",
    explain: "<strong>&lt;br&gt;</strong> = <strong>Br</strong>eak（打断），用于换行。它是单标签，无需闭合。&lt;p&gt;是段落（自动换行但有间距），&lt;font&gt;和&lt;body&gt;都不是换行标签。"
  },
  {
    question: "下列选项中，在定义超链接时（）是在新窗口中打开网页文档的",
    options: [
      { key: "A", value: "_self" },
      { key: "B", value: "_blank" },
      { key: "C", value: "_top" },
      { key: "D", value: "_parent" },
    ],
    answer: "B",
    explain: '<strong>target="_blank"</strong> 在新窗口/新标签页打开链接。_self是当前窗口（默认），_top是顶层窗口，_parent是父框架。记忆：blank（空白）= 新开一个空白窗口。'
  },
  {
    question: "通过（）属性，可以为图片添加边框",
    options: [
      { key: "A", value: "img" },
      { key: "B", value: "src" },
      { key: "C", value: "border" },
      { key: "D", value: "bgcolor" },
    ],
    answer: "C",
    explain: '<strong>border</strong> 属性为图片添加边框。例如：&lt;img src="pic.jpg" border="2"&gt;。src是图片路径，img是标签名，bgcolor是背景色。注意：HTML5推荐用CSS的border属性。'
  },
  {
    question: "（）是HTML5新增的标签，该标签的作用是定义声音，比如音乐或其它音频流",
    options: [
      { key: "A", value: "&lt;video&gt;" },
      { key: "B", value: "&lt;bgsound&gt;" },
      { key: "C", value: "&lt;embed&gt;" },
      { key: "D", value: "&lt;audio&gt;" },
    ],
    answer: "D",
    explain: "<strong>&lt;audio&gt;</strong> 是HTML5新增的音频标签，用于嵌入音频文件。&lt;video&gt;是视频标签，&lt;bgsound&gt;是IE私有标签（已废弃），&lt;embed&gt;是通用嵌入标签（不推荐用于音频）。"
  },
  {
    question: "超级链接的提示文字，应该设置&lt;a&gt;标记的（）属性",
    options: [
      { key: "A", value: "href" },
      { key: "B", value: "title" },
      { key: "C", value: "id" },
      { key: "D", value: "target" },
    ],
    answer: "B",
    explain: '<strong>title</strong> 属性设置鼠标悬停时的提示文字。例如：&lt;a href="#" title="点击访问"&gt;链接&lt;/a&gt;。href是链接地址，target是打开方式，id是元素标识。'
  },
  {
    question: "通过&lt;a&gt;标记的（）属性值，可以控制链接目标打开的窗口",
    options: [
      { key: "A", value: "href" },
      { key: "B", value: "title" },
      { key: "C", value: "id" },
      { key: "D", value: "target" },
    ],
    answer: "D",
    explain: "<strong>target</strong> 属性控制链接在哪里打开。常用值：_blank（新窗口）、_self（当前窗口）、_top（顶层窗口）、_parent（父框架）。href是地址，title是提示文字。"
  },
  {
    question: "以下标记中，（）是用于设置超级链接的标记",
    options: [
      { key: "A", value: "&lt;title&gt;" },
      { key: "B", value: "&lt;caption&gt;" },
      { key: "C", value: "&lt;a&gt;" },
      { key: "D", value: "&lt;link&gt;" },
    ],
    answer: "C",
    explain: '<strong>&lt;a&gt;</strong> = anchor（锚点），用于创建超链接。例如：&lt;a href="page.html"&gt;链接&lt;/a&gt;。&lt;link&gt;是引入外部资源（CSS等），&lt;title&gt;是页面标题，&lt;caption&gt;是表格标题。'
  },
  {
    question: "如果想获得单元跨行效果，应设置&lt;td&gt;标记的（）属性",
    options: [
      { key: "A", value: "colspan" },
      { key: "B", value: "rowspan" },
      { key: "C", value: "cellspacing" },
      { key: "D", value: "cellpadding" },
    ],
    answer: "B",
    explain: '<strong>rowspan</strong> = <strong>row</strong> span（行跨度），使单元格纵向合并。例如：&lt;td rowspan="2"&gt; 占据2行。colspan是跨列（横向），cellspacing是单元格间距，cellpadding是单元格内边距。'
  },
  {
    question: "创建浮动框架的标记是（）",
    options: [
      { key: "A", value: "&lt;frame&gt;" },
      { key: "B", value: "&lt;frameset&gt;" },
      { key: "C", value: "&lt;iframe&gt;" },
      { key: "D", value: "&lt;table&gt;" },
    ],
    answer: "C",
    explain: "<strong>&lt;iframe&gt;</strong> = inline frame（内联框架），可以在页面中嵌入另一个HTML页面，是浮动框架。&lt;frame&gt;和&lt;frameset&gt;是旧标签（已过时，HTML5不支持），&lt;table&gt;是表格。"
  },
  {
    question: "设置水平分割框架，应设置&lt;frameset&gt;的（）属性",
    options: [
      { key: "A", value: "cols" },
      { key: "B", value: "rows" },
      { key: "C", value: "colspan" },
      { key: "D", value: "rowspan" },
    ],
    answer: "B",
    explain: "<strong>水平分割 = 用水平线（横线）分割 = 上下分割 = rows（行）</strong>。<strong>垂直分割 = 用垂直线（竖线）分割 = 左右分割 = cols（列）</strong>。记忆技巧：看分割线的方向，水平线→rows，垂直线→cols。colspan/rowspan是表格属性，不用于frameset。"
  },
  {
    question: "以下标记中，（）标记不能放在&lt;body&gt;&lt;/body&gt;标记范围内",
    options: [
      { key: "A", value: "&lt;table&gt;" },
      { key: "B", value: "&lt;iframe&gt;" },
      { key: "C", value: "&lt;td&gt;" },
      { key: "D", value: "&lt;frameset&gt;" },
    ],
    answer: "D",
    explain: "<strong>&lt;frameset&gt;</strong> 不能和&lt;body&gt;共存！HTML文档要么用&lt;body&gt;，要么用&lt;frameset&gt;，不能同时使用。&lt;table&gt;、&lt;iframe&gt;、&lt;td&gt;都可以放在&lt;body&gt;内。"
  },
  {
    question: "网页中定义表单的标记是（）",
    options: [
      { key: "A", value: "&lt;select&gt;" },
      { key: "B", value: "&lt;table&gt;" },
      { key: "C", value: "&lt;form&gt;" },
      { key: "D", value: "&lt;div&gt;" },
    ],
    answer: "C",
    explain: "<strong>&lt;form&gt;</strong> 标签用于创建表单，包含输入框、按钮等表单元素，通过action属性指定提交地址。&lt;select&gt;是下拉框，&lt;table&gt;是表格，&lt;div&gt;是容器，都不是表单标签。"
  },
  {
    question: "&lt;input&gt;标记定义一个单选框，type属性的值为（）",
    options: [
      { key: "A", value: "checkbox" },
      { key: "B", value: "radio" },
      { key: "C", value: "text" },
      { key: "D", value: "hidden" },
    ],
    answer: "B",
    explain: '<strong>type="radio"</strong> 是单选框，同组（同name）只能选一个。像收音机radio只能调一个频道。checkbox是复选框（可多选），text是文本框，hidden是隐藏字段。'
  },
  {
    question: "（）属性用于设置单行文本框可显示的最大字符数",
    options: [
      { key: "A", value: "size" },
      { key: "B", value: "maxlength" },
      { key: "C", value: "name" },
      { key: "D", value: "type" },
    ],
    answer: "B",
    explain: '<strong>maxlength</strong> 限制最大字符数（如maxlength="10"最多输入10个字符）。<strong>size</strong> 是设置显示宽度（视觉长度），不限制输入长度。name是名称，type是类型。'
  },
  {
    question: "以下标记中，（）是定义下拉列表框中选项的标记",
    options: [
      { key: "A", value: "&lt;select&gt;" },
      { key: "B", value: "&lt;caption&gt;" },
      { key: "C", value: "&lt;input&gt;" },
      { key: "D", value: "&lt;option&gt;" },
    ],
    answer: "D",
    explain: "<strong>&lt;option&gt;</strong> 标签定义下拉列表中的选项，必须放在&lt;select&gt;内部。&lt;select&gt;是下拉列表容器，&lt;caption&gt;是表格标题，&lt;input&gt;是输入框。"
  },
  {
    question: "当type属性值为（）时，产生一个可单击按钮，该按钮的特点是没有任何行为，常用于在用户单击按钮时启动JavaScript程序",
    options: [
      { key: "A", value: "email" },
      { key: "B", value: "url" },
      { key: "C", value: "number" },
      { key: "D", value: "button" },
    ],
    answer: "D",
    explain: '<strong>type="button"</strong> 创建一个普通按钮，无默认行为，需要通过onclick等事件绑定JavaScript。email是邮箱输入，url是网址输入，number是数字输入。'
  },
  {
    question: "当&lt;input&gt;标记的type属性值为（）时，表示输入项的内容包含一个范围",
    options: [
      { key: "A", value: "url" },
      { key: "B", value: "number" },
      { key: "C", value: "range" },
      { key: "D", value: "Date Pickers" },
    ],
    answer: "C",
    explain: '<strong>type="range"</strong> 创建一个滑动条，用于选择数值范围。例如：&lt;input type="range" min="0" max="100"&gt;。number是数字输入框，url是网址输入，Date Pickers不是type值。'
  },
  {
    question: "CSS的全称是（）",
    options: [
      { key: "A", value: "Cascading Sheet Style" },
      { key: "B", value: "Cascading System Sheet" },
      { key: "C", value: "Cascading Style Sheet" },
      { key: "D", value: "Cascading Style System" },
    ],
    answer: "C",
    explain: "<strong>CSS = Cascading Style Sheet（层叠样式表）</strong>。Cascading（层叠）指样式可以层层覆盖，Style（样式）指外观设计，Sheet（表）指样式规则的集合。"
  },
  {
    question: "下面不属于CSS插入形式的是（）",
    options: [
      { key: "A", value: "索引样式" },
      { key: "B", value: "内部样式表" },
      { key: "C", value: "内嵌样式表" },
      { key: "D", value: "链接外部样式表" },
    ],
    answer: "A",
    explain: "CSS的三种插入形式：<strong>①内联样式</strong>（style属性）、<strong>②内部样式表</strong>（&lt;style&gt;标签）、<strong>③外部样式表</strong>（&lt;link&gt;引入.css文件）。<strong>索引样式</strong>不是CSS插入形式。"
  },
  {
    question: "链入外部样式表应使用的标记是（）",
    options: [
      { key: "A", value: "&lt;link&gt;" },
      { key: "B", value: "&lt;object&gt;" },
      { key: "C", value: "&lt;style&gt;" },
      { key: "D", value: "&lt;head&gt;" },
    ],
    answer: "A",
    explain: '<strong>&lt;link&gt;</strong> 用于链接外部CSS文件。例如：&lt;link rel="stylesheet" href="style.css"&gt;。&lt;style&gt;用于内部样式表（直接在HTML中写CSS），&lt;object&gt;和&lt;head&gt;不是引入CSS的标签。'
  },
  {
    question: "使用内嵌样式表方法引用样式表应使用的引用标记是（）",
    options: [
      { key: "A", value: "&lt;link&gt;" },
      { key: "B", value: "&lt;object&gt;" },
      { key: "C", value: "&lt;style&gt;" },
      { key: "D", value: "&lt;head&gt;" },
    ],
    answer: "C",
    explain: "<strong>&lt;style&gt;</strong> 用于在HTML文档内部嵌入CSS代码（内部样式表）。通常放在&lt;head&gt;中。&lt;link&gt;是引入外部CSS，&lt;object&gt;用于嵌入多媒体，&lt;head&gt;是头部容器。"
  },
  {
    question: "不同的选择符定义相同的元素时，优先级别的关系是（）",
    options: [
      { key: "A", value: "类选择符最高，id选择符其次，HTML标记选择符最低" },
      { key: "B", value: "类选择符最高，HTML选择符其次，id标记选择符最低" },
      { key: "C", value: "id选择符最高，HTML选择符其次，类标记选择符最低" },
      { key: "D", value: "id选择符最高，类选择符其次，HTML标记选择符最低" },
    ],
    answer: "D",
    explain: "CSS选择器优先级（由高到低）：<strong>①内联样式（style属性）> ②ID选择器（#id）> ③类选择器（.class）> ④标签选择器（div）</strong>。记忆口诀：内联ID最高，类次之，标签最低。"
  },
  {
    question: "CSS是利用（）XHTML标记构建网页布局的",
    options: [
      { key: "A", value: "&lt;div&gt;" },
      { key: "B", value: "&lt;dir&gt;" },
      { key: "C", value: "&lt;dis&gt;" },
      { key: "D", value: "&lt;dif&gt;" },
    ],
    answer: "A",
    explain: "<strong>&lt;div&gt;</strong> = division（分区），是网页布局的主要容器标签，配合CSS实现各种布局（如Flexbox、Grid）。&lt;dir&gt;、&lt;dis&gt;、&lt;dif&gt;都不是标准HTML标签。"
  },
  {
    question: "下列（）属性能够设置盒模型的左侧外边距",
    options: [
      { key: "A", value: "margin" },
      { key: "B", value: "indent" },
      { key: "C", value: "margin-left" },
      { key: "D", value: "text-indent" },
    ],
    answer: "C",
    explain: "<strong>margin-left</strong> 设置左侧外边距。margin是设置四个方向的外边距（简写属性），text-indent是首行缩进，indent不是CSS属性。记忆：margin-left/right/top/bottom分别控制四个方向。"
  },
  {
    question: "CSS中，下列（）是盒模型属性",
    options: [
      { key: "A", value: "font" },
      { key: "B", value: "border" },
      { key: "C", value: "padding" },
      { key: "D", value: "visible" },
    ],
    answer: "B",
    explain: "CSS盒模型属性包括：<strong>border（边框）、padding（内边距）、margin（外边距）</strong>。font是字体属性，visible是visibility的值，不是盒模型属性。注意：padding和border都是盒模型属性，但题目问单数，border最典型。"
  },
  {
    question: "下列（）CSS属性能够设置盒模型的内补丁为10、20、30、40（顺时针方向）",
    options: [
      { key: "A", value: "padding:10px 20px 30px 40px" },
      { key: "B", value: "padding:10px 1px" },
      { key: "C", value: "padding:5px 20px 10px" },
      { key: "D", value: "padding:10px" },
    ],
    answer: "A",
    explain: "<strong>padding:10px 20px 30px 40px</strong> 按顺时针设置内边距：上10px、右20px、下30px、左40px。记忆口诀：<strong>上右下左</strong>（顺时针）。2个值是上下/左右，3个值是上/左右/下，4个值是上右下左。"
  },
  {
    question: "边框的样式可以包含的值不包括（）",
    options: [
      { key: "A", value: "粗细" },
      { key: "B", value: "颜色" },
      { key: "C", value: "样式" },
      { key: "D", value: "长短" },
    ],
    answer: "D",
    explain: "边框（border）的三要素：<strong>①粗细（width）、②样式（style：solid实线/dashed虚线/dotted点线等）、③颜色（color）</strong>。边框没有<strong>长短</strong>属性，长短由元素大小决定。"
  },
  {
    question: "（）显示这样一个边框：上边框10px、下边框5px、左边框20px、右边框1px",
    options: [
      { key: "A", value: "border-width:10px 5px 20px 1px" },
      { key: "B", value: "border-width:10px 20px 5px 1px" },
      { key: "C", value: "border-width:5px 20px 10px 1px" },
      { key: "D", value: "border-width:10px 1px 5px 20px" },
    ],
    answer: "D",
    explain: "<strong>border-width:10px 1px 5px 20px</strong>（上右下左顺时针）= 上10px、右1px、下5px、左20px。记忆：4个值的顺序永远是<strong>上→右→下→左</strong>（顺时针）。"
  },
  {
    question: "设置段落缩进的属性为（）",
    options: [
      { key: "A", value: "word-spacing" },
      { key: "B", value: "text-decoration" },
      { key: "C", value: "text-align" },
      { key: "D", value: "text-indent" },
    ],
    answer: "D",
    explain: "<strong>text-indent</strong> 设置首行缩进。例如：text-indent:2em（缩进2个字符）。word-spacing是单词间距，text-decoration是文本装饰（下划线等），text-align是对齐方式。"
  },
  {
    question: "调整中文文字的字间距，可使用（）属性",
    options: [
      { key: "A", value: "word-spacing" },
      { key: "B", value: "letter-spacing" },
      { key: "C", value: "word-decoration" },
      { key: "D", value: "letter-decoration" },
    ],
    answer: "B",
    explain: "<strong>letter-spacing</strong> 调整字符间距（中英文都适用）。<strong>word-spacing</strong> 调整单词间距（只对英文有效，中文无空格所以无效）。word-decoration和letter-decoration不是CSS属性。"
  },
  {
    question: "不属于text-align语法中的属性值有（）",
    options: [
      { key: "A", value: "left" },
      { key: "B", value: "right" },
      { key: "C", value: "blink" },
      { key: "D", value: "center" },
    ],
    answer: "C",
    explain: "<strong>text-align</strong> 的值：left（左对齐）、right（右对齐）、center（居中）、justify（两端对齐）。<strong>blink</strong>（闪烁）是text-decoration的值（已废弃），不是text-align的值。"
  },
  {
    question: "在CSS中，要设置页面文字的背景颜色，应使用（）属性",
    options: [
      { key: "A", value: "color" },
      { key: "B", value: "bgcolor" },
      { key: "C", value: "background-color" },
      { key: "D", value: "font-color" },
    ],
    answer: "C",
    explain: "<strong>background-color</strong> 设置背景色，<strong>color</strong> 设置文字颜色。bgcolor是HTML属性（已废弃），不是CSS属性。font-color不存在，字体颜色用color。"
  },
  {
    question: "要实现背景图片在水平方向的平铺，应该设置为（）",
    options: [
      { key: "A", value: "background-repeat:repeat" },
      { key: "B", value: "background-repeat:repeat-x" },
      { key: "C", value: "background-repeat:repeat-y" },
      { key: "D", value: "background-repeat:no-repeat" },
    ],
    answer: "B",
    explain: "<strong>background-repeat</strong> 控制背景平铺：<strong>repeat-x</strong>（水平平铺，x轴方向）、repeat-y（垂直平铺，y轴方向）、repeat（全平铺）、no-repeat（不平铺）。"
  },
  {
    question: "在CSS里，设置背景图片位置的属性为（）",
    options: [
      { key: "A", value: "background-image" },
      { key: "B", value: "background-repeat" },
      { key: "C", value: "background-position" },
      { key: "D", value: "background-attachment" },
    ],
    answer: "C",
    explain: "<strong>background-position</strong> 设置背景图片位置（如：center、top left等）。background-image是设置背景图片，background-repeat是平铺方式，background-attachment是固定方式。"
  },
  {
    question: '显示语句"nice to meet you!"的JavaScript语法是（）',
    options: [
      { key: "A", value: 'document.write("nice to meet you!")' },
      { key: "B", value: '"nice to meet you!"' },
      { key: "C", value: 'alert("nice to meet you!")' },
      { key: "D", value: 'response.write("nice to meet you!")' },
    ],
    answer: "A",
    explain: '<strong>document.write()</strong> 向文档输出内容。也可以用alert()弹窗显示或console.log()输出到控制台。response.write()是服务器端语法（如ASP），不是JavaScript。'
  },
  {
    question: "定义JavaScript数组的正确方法是（）",
    options: [
      { key: "A", value: 'var array=new Array "lilly","lucy","yoyo"' },
      { key: "B", value: 'var array=new Array(1: "lilly",2:"lucy",3:"yoyo")' },
      { key: "C", value: 'var array=new Array ("lilly","lucy","yoyo")' },
      { key: "D", value: 'var array=new Array:1= ("lilly"),2= ("lucy"),3= ("yoyo")' },
    ],
    answer: "C",
    explain: '正确语法：<strong>var array = new Array("元素1", "元素2", ...)</strong> 或 <strong>var array = ["元素1", "元素2"]</strong>（推荐）。数组元素用逗号分隔，不用冒号。'
  },
  {
    question: "一般在下面（）HTML元素中放置JavaScript代码",
    options: [
      { key: "A", value: "&lt;script&gt;" },
      { key: "B", value: "&lt;javascript&gt;" },
      { key: "C", value: "&lt;js&gt;" },
      { key: "D", value: "&lt;scripting&gt;" },
    ],
    answer: "A",
    explain: "<strong>&lt;script&gt;</strong> 标签用于嵌入或引用JavaScript代码。可以放在&lt;head&gt;或&lt;body&gt;中。&lt;javascript&gt;、&lt;js&gt;、&lt;scripting&gt;都不是HTML标签。"
  },
  {
    question: "JavaScript特性不包括（）",
    options: [
      { key: "A", value: "解释性" },
      { key: "B", value: "用于客户端" },
      { key: "C", value: "基于对象" },
      { key: "D", value: "面向对象" },
    ],
    answer: "D",
    explain: "JavaScript是<strong>基于对象</strong>，不是<strong>面向对象</strong>。区别：基于对象可以使用对象但不支持完整的继承、封装等OOP特性。JavaScript特性：解释性、弱类型、客户端脚本、基于对象。"
  },
  {
    question: "下列JavaScript判断语句中正确的是（）",
    options: [
      { key: "A", value: "if(j==1)" },
      { key: "B", value: "if(j=1)" },
      { key: "C", value: "if j==1 then" },
      { key: "D", value: "if j=1 then" },
    ],
    answer: "A",
    explain: "JavaScript条件语句：<strong>if (条件) { 语句 }</strong>。注意：<strong>==</strong>是判断相等，<strong>=</strong>是赋值。没有then关键字（那是VB语法）。"
  },
  {
    question: "下列JavaScript的循环语句中正确的是（）",
    options: [
      { key: "A", value: "for(i=1;i<=10)" },
      { key: "B", value: "for(i=1;i<=10;i++)" },
      { key: "C", value: "for i=1 to 10" },
      { key: "D", value: "for(i<=10;i++)" },
    ],
    answer: "B",
    explain: "JavaScript的for循环：<strong>for (初始化; 条件; 增量) { 语句 }</strong>。三个部分用分号分隔。例如：for(i=1; i<=10; i++)。'for i=1 to 10'是VB语法。"
  },
  {
    question: '有以下一段程序片段 var a1=10; var a2=20; alert("a1+a2="+a1+a2) 执行后的结果为（）',
    options: [
      { key: "A", value: "a1+a2=30" },
      { key: "B", value: "a1+a2=1020" },
      { key: "C", value: "a1+a2=a1+a2" },
      { key: "D", value: '"a1+a2="30' },
    ],
    answer: "B",
    explain: '结果是<strong>"a1+a2=1020"</strong>。因为JavaScript的+运算符从左到右执行：<strong>"a1+a2="</strong>+10（字符串连接）=<strong>"a1+a2=10"</strong>，再+20=<strong>"a1+a2=1020"</strong>（字符串连接，不是数学加法）。正确写法：alert(<strong>"a1+a2="+(a1+a2)</strong>)。'
  },
  {
    question: "下列对象中不属于浏览器对象的是（）",
    options: [
      { key: "A", value: "location对象" },
      { key: "B", value: "window对象" },
      { key: "C", value: "string对象" },
      { key: "D", value: "navigator对象" },
    ],
    answer: "C",
    explain: "浏览器对象（BOM）包括：<strong>window、location、navigator、history、screen</strong>等。<strong>string对象</strong>是JavaScript内置对象，不是浏览器对象。"
  },
  {
    question: "以下（）表达式产生一个0~7（含0,7）的随机整数",
    options: [
      { key: "A", value: "Math.floor(Math.random()*6)" },
      { key: "B", value: "Math.floor(Math.random()*7)" },
      { key: "C", value: "Math.floor(Math.random()*8)" },
      { key: "D", value: "Math.ceil(Math.random()*8)" },
    ],
    answer: "C",
    explain: "<strong>Math.floor(Math.random()*8)</strong> 产生0~7。Math.random()返回[0,1)之间的数，乘8得[0,8)，floor向下取整得0~7。公式：<strong>Math.floor(Math.random()*(最大值+1))</strong>。"
  },
  {
    question: "某网页中有一个窗体对象，其名称是mainForm，该窗体对象的第一个元素是按钮，其名称是myButton，表述该按钮对象的方法是（）",
    options: [
      { key: "A", value: "document.forms.myButton" },
      { key: "B", value: "document.mainForm.myButton" },
      { key: "C", value: "document.forms[0].element[0]" },
      { key: "D", value: "以上都不对" },
    ],
    answer: "B",
    explain: "<strong>只有B正确！</strong><strong>A错误</strong>：document.forms是集合，不能直接.myButton。<strong>B正确</strong>：有name属性时可用document.表单名.元素名访问。<strong>C错误</strong>：应该是element<strong>s</strong>（复数），不是element（单数）。"
  },
  {
    question: "在JavaScript浏览器对象模型中，window对象的（）属性用来指定浏览器状态栏中显示的临时信息",
    options: [
      { key: "A", value: "status" },
      { key: "B", value: "screen" },
      { key: "C", value: "history" },
      { key: "D", value: "document" },
    ],
    answer: "A",
    explain: "<strong>window.status</strong> 设置状态栏文本。例如：window.status='欢迎访问'。screen是屏幕对象，history是历史记录对象，document是文档对象。"
  },
  {
    question: "在JavaScript中可以使用Date对象的（）方法返回一个月的每一天",
    options: [
      { key: "A", value: "getDate" },
      { key: "B", value: "getYear" },
      { key: "C", value: "getMonth" },
      { key: "D", value: "getTime" },
    ],
    answer: "A",
    explain: "<strong>getDate()</strong> 返回日期（1-31）。getMonth()返回月份（0-11），getYear()返回年份，getTime()返回时间戳。记忆：Date是日期。"
  },
  {
    question: "下列不属于鼠标事件的是（）",
    options: [
      { key: "A", value: "onDblclick" },
      { key: "B", value: "onMouseDown" },
      { key: "C", value: "onMouseUp" },
      { key: "D", value: "onMove" },
    ],
    answer: "D",
    explain: "鼠标事件：<strong>onclick（单击）、ondblclick（双击）、onmousedown（按下）、onmouseup（释放）、onmousemove（移动）、onmouseover（移入）、onmouseout（移出）</strong>。<strong>onMove</strong>不是标准事件，应该是onmousemove。"
  },
  {
    question: "下列与按钮有关的事件是（）",
    options: [
      { key: "A", value: "onReset" },
      { key: "B", value: "onChange" },
      { key: "C", value: "onLoad" },
      { key: "D", value: "onBlur" },
    ],
    answer: "A",
    explain: "按钮相关事件：<strong>onclick（点击）、onReset（重置按钮）、onSubmit（提交按钮）</strong>。onChange是内容改变事件（输入框），onLoad是页面加载事件，onBlur是失去焦点事件。"
  },
  {
    question: "下列属于键盘按下事件的是（）",
    options: [
      { key: "A", value: "onKeyDown" },
      { key: "B", value: "onKeyUp" },
      { key: "C", value: "onKeyPress" },
      { key: "D", value: "onClick" },
    ],
    answer: "A",
    explain: "键盘事件：<strong>onkeydown（按下）、onkeyup（释放）、onkeypress（按下并释放）</strong>。题目问<strong>按下</strong>，所以是<strong>onkeydown</strong>。onclick是鼠标点击事件。"
  },
  {
    question: "当某个元素失去焦点时触发的事件是（）",
    options: [
      { key: "A", value: "onChange" },
      { key: "B", value: "onLoad" },
      { key: "C", value: "onBlur" },
      { key: "D", value: "onReset" },
    ],
    answer: "C",
    explain: "<strong>onblur</strong> = 失去焦点事件（blur模糊，失焦）。<strong>onfocus</strong> = 获得焦点事件。onChange是内容改变，onLoad是页面加载，onReset是表单重置。"
  },
];

// 用户答案记录（增强版，记录首次答题状态）
let userAnswers = {};
let firstAttemptStatus = {}; // 记录首次答题是否正确

// 初始化选择题
function initChoiceQuestions() {
  // 从localStorage加载已保存的答案
  loadSavedAnswers();
  loadQuizzes();
  renderAnswerCard();
  // 渲染完答题卡后，更新答题卡状态（延迟确保DOM已渲染）
  requestAnimationFrame(() => {
    updateAnswerCard();
  });
}

// 加载已保存的答案
function loadSavedAnswers() {
  try {
    const savedAnswers = localStorage.getItem('userAnswers');
    const savedStatus = localStorage.getItem('firstAttemptStatus');
    
    if (savedAnswers) {
      userAnswers = JSON.parse(savedAnswers);
    }
    if (savedStatus) {
      firstAttemptStatus = JSON.parse(savedStatus);
    }
  } catch (e) {
    console.error('加载答题记录失败:', e);
    userAnswers = {};
    firstAttemptStatus = {};
  }
}

// 加载选择题（性能优化版）
function loadQuizzes() {
  if (quizData.length === 0) {
    const quizList = document.getElementById("quizList");
    if (quizList) {
      quizList.innerHTML = '<div class="alert alert-warning text-center" style="margin: 50px auto; max-width: 600px;">暂无选择题数据，请添加题目。</div>';
    }
    return;
  }

  const quizList = document.getElementById("quizList");
  if (!quizList) return;

  // 如果已经有内容，说明已经加载过了，不重复加载
  if (quizList.children.length > 0) {
    return;
  }

  // 使用数组+join一次性渲染，避免多次DOM操作
  const quizCards = quizData.map((quiz, index) => {
    const quizId = index + 1;
    return `
      <div class="quiz-card" id="quiz-${quizId}">
        <button class="explain-btn" onclick="showExplain(${quizId})">💡 讲解</button>
        <div class="quiz-number">${quizId}、${quiz.question}</div>
        <div class="options-container">
          ${quiz.options
            .map(
              (opt) => `
            <button class="option-btn" data-quiz="${quizId}" data-option="${opt.key}" onclick="selectOption(${quizId}, '${opt.key}', event)">
              ${opt.key}. ${opt.value}
            </button>
          `
            )
            .join("")}
        </div>
        <div class="quiz-result" id="result-${quizId}"></div>
      </div>
    `;
  });

  quizList.innerHTML = quizCards.join("");
  
  // 恢复已保存的答案状态
  restoreAnswerStates();
}

// 恢复已保存的答案状态
function restoreAnswerStates() {
  Object.keys(userAnswers).forEach(quizId => {
    const quiz = quizData[quizId - 1];
    if (!quiz) return;
    
    const userAnswer = userAnswers[quizId];
    const isCorrect = userAnswer === quiz.answer;
    const btns = document.querySelectorAll(`[data-quiz="${quizId}"]`);
    const resultDiv = document.getElementById(`result-${quizId}`);
    
    if (isCorrect) {
      // 恢复正确答案的状态
      btns.forEach((btn) => {
        const btnOption = btn.getAttribute("data-option");
        btn.disabled = true;
        
        if (btnOption === quiz.answer) {
          btn.classList.add("correct");
        }
      });
      
      if (resultDiv) {
        resultDiv.classList.remove("wrong");
        resultDiv.classList.add("show", "correct");
        resultDiv.innerHTML = "✅ 回答正确！";
      }
    } else {
      // 恢复错误答案的状态（显示用户选错的选项和正确答案）
      btns.forEach((btn) => {
        const btnOption = btn.getAttribute("data-option");
        
        if (btnOption === userAnswer) {
          btn.classList.add("wrong");
        }
        if (btnOption === quiz.answer) {
          btn.classList.add("correct");
        }
      });
      
      if (resultDiv) {
        resultDiv.classList.remove("correct");
        resultDiv.classList.add("show", "wrong");
        resultDiv.innerHTML = "❌ 回答错误，正确答案是 " + quiz.answer;
      }
    }
  });
}

// 选择选项（立即判断）
function selectOption(quizId, option, event) {
  const quiz = quizData[quizId - 1];
  const isCorrect = option === quiz.answer;
  const btns = document.querySelectorAll(`[data-quiz="${quizId}"]`);
  const resultDiv = document.getElementById(`result-${quizId}`);

  // 记录用户答案
  userAnswers[quizId] = option;
  
  // 如果是第一次答题，记录状态（错误则永久标记为错误）
  if (!firstAttemptStatus[quizId]) {
    firstAttemptStatus[quizId] = isCorrect ? 'correct' : 'wrong';
  }

  if (isCorrect) {
    // 回答正确 - 锁定题目
    btns.forEach((btn) => {
      const btnOption = btn.getAttribute("data-option");
      btn.disabled = true;

      if (btnOption === quiz.answer) {
        btn.classList.add("correct");
      }
    });

    resultDiv.classList.remove("wrong");
    resultDiv.classList.add("show", "correct");
    resultDiv.innerHTML = "✅ 回答正确！";
  } else {
    // 回答错误 - 可以继续选择
    const targetBtn = event ? event.target : document.querySelector(`[data-quiz="${quizId}"][data-option="${option}"]`);
    if (targetBtn) {
      targetBtn.classList.add("wrong");

      setTimeout(() => {
        targetBtn.classList.remove("wrong");
      }, 800);
    }

    resultDiv.classList.remove("correct");
    resultDiv.classList.add("show", "wrong");
    resultDiv.innerHTML = `❌ 回答错误！请再试一次（正确答案：${quiz.answer}）`;
  }

  // 保存到localStorage
  localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  localStorage.setItem('firstAttemptStatus', JSON.stringify(firstAttemptStatus));

  // 更新答题卡
  updateAnswerCard();
}

// 显示讲解
function showExplain(quizId) {
  const quiz = quizData[quizId - 1];
  const modalContent = `
    <div class="modal fade" id="explainModal${quizId}" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header" style="background: #FF9800; color: white;">
            <h5 class="modal-title">💡 第${quizId}题讲解</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <h6 style="color: #9C27B0; font-weight: 600;">题目：</h6>
            <p>${quiz.question}</p>
            <h6 style="color: #2ECC71; font-weight: 600; margin-top: 15px;">正确答案：</h6>
            <p style="font-size: 18px; font-weight: 700; color: #2ECC71;">${
              quiz.answer
            }</p>
            <h6 style="color: #FF9800; font-weight: 600; margin-top: 15px;">知识点讲解：</h6>
            <p>${quiz.explain || "暂无讲解"}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // 添加模态框到body
  document.body.insertAdjacentHTML("beforeend", modalContent);

  // 显示模态框
  const modal = new bootstrap.Modal(
    document.getElementById(`explainModal${quizId}`)
  );
  modal.show();

  // 关闭后删除模态框
  document
    .getElementById(`explainModal${quizId}`)
    .addEventListener("hidden.bs.modal", function () {
      this.remove();
    });
}

// 渲染答题卡（圆形按钮+可折叠面板）
function renderAnswerCard() {
  // 检查是否已经存在，避免重复创建
  if (document.getElementById('answer-card-toggle')) {
    return;
  }

  // 创建圆形按钮（在选择题页面显示）
  const toggleButton = `
    <button class="answer-card-toggle" id="answer-card-toggle" onclick="toggleAnswerCard()" style="display: flex;">
      📝
    </button>
  `;

  // 创建答题卡面板
  const answerCardPanel = `
    <div class="answer-card-panel" id="answer-card-panel">
      <div class="answer-card-header">
        📝 答题卡
        <button onclick="toggleAnswerCard()" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #5a6c7d; cursor: pointer; font-size: 20px;">×</button>
      </div>
      <div class="answer-card-stats">
        <div class="stat-item">
          <div class="stat-number" style="color: #5a6c7d;" id="total-count">${quizData.length}</div>
          <div class="stat-label">总题数</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" style="color: #2ecc71;" id="correct-count">0</div>
          <div class="stat-label">正确</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" style="color: #e74c3c;" id="wrong-count">0</div>
          <div class="stat-label">错误</div>
        </div>
      </div>
      <div class="answer-grid" id="answer-grid">
        ${quizData.map((_, index) => {
          const quizId = index + 1;
          return `<div class="answer-item" onclick="jumpToQuiz(${quizId})" id="card-${quizId}">${quizId}</div>`;
        }).join('')}
      </div>
      <div class="answer-card-footer">
        <button class="reset-btn" onclick="resetAllAnswers()">🔄 重置答题</button>
      </div>
    </div>
  `;

  // 插入到body
  document.body.insertAdjacentHTML('beforeend', toggleButton);
  document.body.insertAdjacentHTML('beforeend', answerCardPanel);

  // 初始化拖动功能
  initDraggable();
}

// 更新答题卡
function updateAnswerCard() {
  let correctCount = 0;
  let wrongCount = 0;

  // 统计正确和错误数量
  Object.keys(firstAttemptStatus).forEach(quizId => {
    const status = firstAttemptStatus[quizId];
    const cardItem = document.getElementById(`card-${quizId}`);
    
    if (!cardItem) return; // 安全检查
    
    if (status === 'correct') {
      correctCount++;
      cardItem.className = 'answer-item correct';
    } else if (status === 'wrong') {
      wrongCount++;
      cardItem.className = 'answer-item wrong';
    }
  });

  // 更新统计数据
  const correctCountEl = document.getElementById('correct-count');
  const wrongCountEl = document.getElementById('wrong-count');
  
  if (correctCountEl) correctCountEl.textContent = correctCount;
  if (wrongCountEl) wrongCountEl.textContent = wrongCount;
}

// 跳转到指定题目
function jumpToQuiz(quizId) {
  const quizCard = document.getElementById(`quiz-${quizId}`);
  const panel = document.getElementById('answer-card-panel');
  
  if (quizCard) {
    // 关闭答题卡
    if (panel && panel.classList.contains('show')) {
      panel.classList.remove('show');
    }
    
    // 延迟滚动，让面板关闭动画完成
    setTimeout(() => {
      quizCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // 高亮效果
      quizCard.style.backgroundColor = '#fff9e6';
      setTimeout(() => {
        quizCard.style.backgroundColor = '';
      }, 1000);
    }, 350);
  }
}

// 切换答题卡显示/隐藏（使用CSS transition，更流畅）
function toggleAnswerCard() {
  const panel = document.getElementById('answer-card-panel');
  if (!panel) return;

  panel.classList.toggle('show');
}

// 初始化拖动功能
function initDraggable() {
  const toggle = document.getElementById('answer-card-toggle');
  if (!toggle) return;

  let isDragging = false;
  let startX, startY, initialX, initialY;

  toggle.addEventListener('mousedown', function(e) {
    isDragging = true;
    toggle.classList.add('dragging');
    
    startX = e.clientX;
    startY = e.clientY;
    
    const rect = toggle.getBoundingClientRect();
    initialX = rect.left;
    initialY = rect.top;
  });

  document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    
    e.preventDefault();
    
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    
    const newX = initialX + deltaX;
    const newY = initialY + deltaY;
    
    // 限制在窗口范围内
    const maxX = window.innerWidth - toggle.offsetWidth;
    const maxY = window.innerHeight - toggle.offsetHeight;
    
    const finalX = Math.max(0, Math.min(newX, maxX));
    const finalY = Math.max(0, Math.min(newY, maxY));
    
    toggle.style.left = finalX + 'px';
    toggle.style.top = finalY + 'px';
    toggle.style.right = 'auto';
    toggle.style.bottom = 'auto';
  });

  document.addEventListener('mouseup', function() {
    if (isDragging) {
      isDragging = false;
      toggle.classList.remove('dragging');
    }
  });
}

// 重置所有答题
function resetAllAnswers() {
  if (!confirm('确定要重置所有答题记录吗？')) {
    return;
  }

  // 清空答题记录
  userAnswers = {};
  firstAttemptStatus = {};
  
  // 清空localStorage
  localStorage.removeItem('userAnswers');
  localStorage.removeItem('firstAttemptStatus');

  // 清空并重新加载题目
  const quizList = document.getElementById("quizList");
  if (quizList) {
    quizList.innerHTML = '';
  }
  loadQuizzes();
  
  // 移除旧的答题卡UI
  const oldToggle = document.getElementById('answer-card-toggle');
  const oldPanel = document.getElementById('answer-card-panel');
  if (oldToggle) oldToggle.remove();
  if (oldPanel) oldPanel.remove();
  
  // 重新渲染答题卡
  renderAnswerCard();
  
  // 提示
  alert('✅ 答题记录已重置！');
}

// 不再自动初始化，改为懒加载
// 由 index.html 中的懒加载管理器调用 initChoiceQuestions()
