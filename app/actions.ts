'use server';

import { OpenAI } from 'openai';
import { search } from 'duck-duck-go-api';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeHighYield(text: string, userQuestion: string) {
  // 1. Perform a web search to gather context
  const searchResults = await search(userQuestion, { max_results: 3 });
  // Change the .map function to this:
const searchContext = searchResults.map((r: any) => r.snippet).join('\n');

  // 2. Feed both the PDF text and the search context to the AI
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are an expert tutor. Use the provided PDF context and the web search results to answer the question. Focus on high-yield, exam-relevant information.',
      },
      {
        role: 'user',
        content: `PDF Context: ${text}\n\nWeb Search Context: ${searchContext}\n\nQuestion: ${userQuestion}`,
      },
    ],
  });

  return response.choices[0].message.content;
}