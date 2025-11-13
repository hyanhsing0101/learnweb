// ==================== 公共函数模块 ====================

// 防抖定时器
let runCodeTimers = {};

// 运行代码（编程题预览）- 添加防抖优化
function runCode(num) {
  // 清除之前的定时器
  if (runCodeTimers[num]) {
    clearTimeout(runCodeTimers[num]);
  }
  
  // 300ms后执行，避免频繁更新
  runCodeTimers[num] = setTimeout(() => {
    const code = document.getElementById("codeInput" + num).value;
    if (!code.trim()) return;

    const preview = document.getElementById("preview" + num);
    const previewDoc = preview.contentDocument || preview.contentWindow.document;

    previewDoc.open();
    previewDoc.write(code);
    previewDoc.close();
  }, 300);
}

// 复制代码
function copyCode(btn) {
  const pre = btn.parentElement;
  const code = pre.innerText
    .replace("📋 复制", "")
    .replace("✅ 已复制", "")
    .trim();

  navigator.clipboard
    .writeText(code)
    .then(() => {
      btn.innerText = "✅ 已复制";
      btn.classList.add("copied");

      setTimeout(() => {
        btn.innerText = "📋 复制";
        btn.classList.remove("copied");
      }, 2000);
    })
    .catch(() => {
      alert("复制失败，请手动复制");
    });
}

// 为代码编辑器添加Tab缩进功能
function enableTabIndent(textarea) {
  textarea.addEventListener("keydown", function (e) {
    // 检测是否按下Tab键
    if (e.key === "Tab") {
      e.preventDefault(); // 阻止默认的焦点跳转行为

      const start = this.selectionStart;
      const end = this.selectionEnd;
      const value = this.value;

      // 插入2个空格作为缩进
      const indent = "  "; // 2个空格，您可以改成 "    " (4个空格) 或 "\t" (真Tab)

      // 在光标位置插入缩进
      this.value = value.substring(0, start) + indent + value.substring(end);

      // 将光标移动到缩进后的位置
      this.selectionStart = this.selectionEnd = start + indent.length;
    }
  });
}

// 初始化所有代码编辑器的Tab功能
function initCodeEditors() {
  // 等待DOM加载完成后再查找所有代码编辑器
  const editors = document.querySelectorAll('.code-editor-area textarea');
  editors.forEach(editor => {
    enableTabIndent(editor);
  });
}

// 编程题加载后需要调用此函数
// 注意：由于懒加载，这个函数会在编程题渲染后自动执行

