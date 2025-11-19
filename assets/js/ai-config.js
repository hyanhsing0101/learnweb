// ==================== AI评分配置 ====================

// 默认配置（火山方舟预设）
const DEFAULT_AI_CONFIG = {
  enabled: false,  // 默认禁用，需要用户手动启用
  apiKey: '0410b4bc-1b67-42d3-b942-146d67cb6d90',
  endpoint: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
  model: 'ep-m-20250922180300-slx8h',
  temperature: 0.3,
  maxTokens: 200,
};

// 当前使用的配置（从 localStorage 读取或使用默认值）
let AI_CONFIG = { ...DEFAULT_AI_CONFIG };

// 从 localStorage 加载用户配置
function loadAIConfig() {
  try {
    const saved = localStorage.getItem('aiConfig');
    if (saved) {
      const userConfig = JSON.parse(saved);
      // 合并用户配置和默认配置
      AI_CONFIG = {
        ...DEFAULT_AI_CONFIG,
        ...userConfig
      };
    }
  } catch (e) {
    console.error('加载AI配置失败:', e);
    AI_CONFIG = { ...DEFAULT_AI_CONFIG };
  }
}

// 保存配置到 localStorage
function saveAIConfig(config) {
  try {
    localStorage.setItem('aiConfig', JSON.stringify(config));
    AI_CONFIG = { ...DEFAULT_AI_CONFIG, ...config };
    return true;
  } catch (e) {
    console.error('保存AI配置失败:', e);
    return false;
  }
}

// 初始化时加载配置
loadAIConfig();

// 评分提示词模板
const SCORING_PROMPT = `你是一位严谨的Web开发课程老师，正在批改简答题。

【题目】
{question}

【参考答案】
{referenceAnswer}

【学生答案】
{userAnswer}

【评分要求】
1. 根据学生答案的完整性、准确性、逻辑性打分（0-100分）
2. **重点关注内容准确性**，而非格式排版
3. 如果要点全对、术语准确，即使格式略有差异也应给高分（95+）
4. 只要答案包含所有关键要点，逗号分隔或分行格式均可接受
5. 指出答案的优点和不足，给出改进建议

【评分标准】
- 95-100分：要点完整、术语准确，逻辑清晰（格式略有差异不影响）
- 85-94分：要点基本完整，有1-2个小瑕疵
- 70-84分：要点不够完整，遗漏重要内容
- 60-69分：部分正确，但有明显错误或遗漏
- 60分以下：答案严重错误或答非所问

请以JSON格式返回：
{
  "score": 85,
  "feedback": "答案较完整，要点清晰...",
  "strengths": ["要点1", "要点2"],
  "improvements": ["建议1", "建议2"]
}`;

// 调用火山方舟 API
async function callVolcanoAI(userAnswer, referenceAnswer, question) {
  // 检查是否启用
  if (!AI_CONFIG.enabled) {
    throw new Error('AI评分功能未启用，请在AI配置中启用！');
  }
  
  // 检查API Key
  if (!AI_CONFIG.apiKey || AI_CONFIG.apiKey.trim() === '') {
    throw new Error('请先在AI配置中填写API Key！');
  }

  // 构建提示词
  const prompt = SCORING_PROMPT
    .replace('{question}', question)
    .replace('{referenceAnswer}', referenceAnswer)
    .replace('{userAnswer}', userAnswer);

  try {
    const response = await fetch(AI_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_CONFIG.apiKey}`
      },
      body: JSON.stringify({
        model: AI_CONFIG.model,
        messages: [
          {
            role: 'system',
            content: 'Web课程评分老师，简洁回复。'  // 精简system message
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: AI_CONFIG.temperature,
        max_tokens: AI_CONFIG.maxTokens
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API请求失败：${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    
    // 尝试解析JSON响应
    try {
      return JSON.parse(aiResponse);
    } catch (e) {
      // 如果AI返回的不是标准JSON，做兜底处理
      return {
        score: 0,
        feedback: aiResponse,
        strengths: [],
        improvements: ['AI返回格式异常，请重试']
      };
    }

  } catch (error) {
    console.error('AI评分失败:', error);
    throw error;
  }
}

// ==================== 配置管理 ====================

// 打开AI配置弹窗
function openAIConfig() {
  // 重新加载配置以确保显示最新值
  loadAIConfig();
  
  // 填充当前配置到表单
  document.getElementById('ai-enabled').checked = AI_CONFIG.enabled || false;
  document.getElementById('ai-api-key').value = AI_CONFIG.apiKey || '';
  document.getElementById('ai-endpoint').value = AI_CONFIG.endpoint || '';
  document.getElementById('ai-model').value = AI_CONFIG.model || '';
  document.getElementById('ai-temperature').value = AI_CONFIG.temperature || 0.3;
  document.getElementById('ai-max-tokens').value = AI_CONFIG.maxTokens || 200;
  
  // 更新API Key显示/隐藏
  updateApiKeyVisibility();
  
  // 显示弹窗
  const modal = new bootstrap.Modal(document.getElementById('aiConfigModal'));
  modal.show();
}

// 保存AI配置
function saveAIConfigFromForm() {
  const config = {
    enabled: document.getElementById('ai-enabled').checked,
    apiKey: document.getElementById('ai-api-key').value.trim(),
    endpoint: document.getElementById('ai-endpoint').value.trim(),
    model: document.getElementById('ai-model').value.trim(),
    temperature: parseFloat(document.getElementById('ai-temperature').value) || 0.3,
    maxTokens: parseInt(document.getElementById('ai-max-tokens').value) || 200,
  };
  
  // 验证必填项
  if (config.enabled) {
    if (!config.apiKey) {
      alert('❌ 启用AI功能需要填写API Key！');
      return false;
    }
    if (!config.endpoint) {
      alert('❌ 请填写API端点！');
      return false;
    }
    if (!config.model) {
      alert('❌ 请填写模型ID！');
      return false;
    }
  }
  
  // 保存配置
  if (saveAIConfig(config)) {
    // 关闭弹窗
    const modal = bootstrap.Modal.getInstance(document.getElementById('aiConfigModal'));
    if (modal) {
      modal.hide();
    }
    alert('✅ AI配置已保存！');
    return true;
  } else {
    alert('❌ 保存失败，请重试！');
    return false;
  }
}

// 恢复默认配置
function resetAIConfig() {
  if (confirm('确定要恢复默认配置吗？当前配置将被覆盖！')) {
    const config = { ...DEFAULT_AI_CONFIG };
    if (saveAIConfig(config)) {
      // 重新填充表单
      document.getElementById('ai-enabled').checked = config.enabled;
      document.getElementById('ai-api-key').value = config.apiKey;
      document.getElementById('ai-endpoint').value = config.endpoint;
      document.getElementById('ai-model').value = config.model;
      document.getElementById('ai-temperature').value = config.temperature;
      document.getElementById('ai-max-tokens').value = config.maxTokens;
      alert('✅ 已恢复默认配置！');
    }
  }
}

// 切换API Key显示/隐藏
function toggleApiKeyVisibility() {
  const input = document.getElementById('ai-api-key');
  const btn = document.getElementById('toggle-api-key-btn');
  if (input.type === 'password') {
    input.type = 'text';
    btn.innerHTML = '🙈';
    btn.title = '隐藏';
  } else {
    input.type = 'password';
    btn.innerHTML = '👁️';
    btn.title = '显示';
  }
}

// 更新API Key显示状态
function updateApiKeyVisibility() {
  const input = document.getElementById('ai-api-key');
  const btn = document.getElementById('toggle-api-key-btn');
  if (input && btn) {
    input.type = 'password';
    btn.innerHTML = '👁️';
    btn.title = '显示';
  }
}

// 检查AI功能是否启用
function isAIEnabled() {
  return AI_CONFIG.enabled === true;
}

// 导出函数供其他模块使用
window.callVolcanoAI = callVolcanoAI;
window.AI_CONFIG = AI_CONFIG;
window.openAIConfig = openAIConfig;
window.saveAIConfigFromForm = saveAIConfigFromForm;
window.resetAIConfig = resetAIConfig;
window.toggleApiKeyVisibility = toggleApiKeyVisibility;
window.isAIEnabled = isAIEnabled;

