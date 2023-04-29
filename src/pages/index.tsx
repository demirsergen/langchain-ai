import { Inter } from 'next/font/google';
import Form from '@/components/Form';
import Output from '@/components/Output';
import { chain } from '../../langchain';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [output, setOutput] = useState('');

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
