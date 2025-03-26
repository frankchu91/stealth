import { DiaryEntry } from '../types';

const TOGETHER_API_KEY = 'f4a7108b64c2e22e555b34048785deddf79be5f76cb18317e7b545f7e2ab8432';
const API_URL = 'https://api.together.xyz/v1/chat/completions';

export const AIService = {
  async generateInsights(entry: DiaryEntry) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${TOGETHER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
          messages: [
            {
              role: "system",
              content: `你是一个专业的育儿顾问，请分析以下育儿日记内容，并提供：
1. 一段简短的总结
2. 2-3条具体的建议或提醒
请用中文回复，并确保回复格式为JSON，包含 summary 和 suggestions 两个字段。`
            },
            {
              role: "user",
              content: entry.content
            }
          ],
          temperature: 0.7,
          max_tokens: 800
        })
      });

      const data = await response.json();
      
      try {
        // 尝试解析AI回复中的JSON
        const aiResponse = JSON.parse(data.choices[0].message.content);
        return {
          summary: aiResponse.summary,
          suggestions: aiResponse.suggestions
        };
      } catch (parseError) {
        // 如果解析失败，使用原始回复
        const rawResponse = data.choices[0].message.content;
        return {
          summary: rawResponse,
          suggestions: []
        };
      }
    } catch (error) {
      console.error('Error generating AI insights:', error);
      return null;
    }
  }
}; 