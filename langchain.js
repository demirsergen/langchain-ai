import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';

const openAIKey = process.env.NEXT_PUBLIC_OPENAI_KEY || '';
const model = new OpenAI({
  openAIApiKey: openAIKey,
  temperature: 0.9,
});
const template =
  'What is a good name for a company that makes {product}? Do not make it more than 2 words.';
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ['product'],
});
export const chain = new LLMChain({ llm: model, prompt: prompt });
