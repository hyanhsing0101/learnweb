// ==================== AI评分配置示例 ====================
// ⚠️ 这是配置示例文件，不要直接使用
// 📝 请复制为 ai-config.js 并填入你的真实配置

const AI_CONFIG = {
  // 🔑 你的火山方舟 API Key
  // 获取地址：https://console.volcengine.com/ark
  apiKey: 'YOUR_API_KEY_HERE',
  
  // 🌐 API 端点（火山方舟）
  endpoint: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
  
  // 🤖 模型接入点ID
  // 示例：ep-20241114211055-xxxxx
  // 获取方式：火山方舟控制台 → 模型推理 → 在线推理 → 创建接入点
  model: 'ep-20241114211055-xxxxx',
  
  // ⚙️ 模型参数
  temperature: 0.3,  // 0-1，越小评分越严格（推荐0.2-0.4）
  maxTokens: 500,    // 最大返回Token数
};

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
2. 指出答案的优点和不足
3. 给出改进建议

请以JSON格式返回：
{
  "score": 85,
  "feedback": "答案较完整，要点清晰...",
  "strengths": ["要点1", "要点2"],
  "improvements": ["建议1", "建议2"]
}`;

// 调用火山方舟 API
async function callVolcanoAI(userAnswer, referenceAnswer, question) {
  if (!AI_CONFIG.apiKey || AI_CONFIG.apiKey === 'YOUR_API_KEY_HERE') {
    throw new Error('请先在 ai-config.js 中配置你的火山方舟 API Key！');
  }

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
            content: '你是一位专业的Web开发课程评分老师，严谨、公正、友善。'
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
    
    try {
      return JSON.parse(aiResponse);
    } catch (e) {
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

window.callVolcanoAI = callVolcanoAI;
window.AI_CONFIG = AI_CONFIG;

