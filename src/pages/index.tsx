import { Inter } from 'next/font/google';
import Form from '@/components/Form';
import Output from '@/components/Output';
import { useEffect, useState } from 'react';
import { run } from '../../langchain';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [output, setOutput] = useState('');

  useEffect(() => {
    run();
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
