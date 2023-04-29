import { Inter } from 'next/font/google';
import Form from '@/components/Form';
import Output from '@/components/Output';
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [output, setOutput] = useState('');
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
  const chain = new LLMChain({ llm: model, prompt: prompt });

  const getResponse = async (product: string) => {
    const res = await chain.call({ product: product });
    setOutput(res.text);
  };

  useEffect(() => {
    getResponse('socks');
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-2 p-24 ${inter.className}`}
    >
      <h1>LangChain AI + OpenAI</h1>
      <Form />
      <Output output={output} />
    </main>
  );
}
