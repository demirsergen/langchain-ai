import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';
import { initializeAgentExecutorWithOptions } from 'langchain/agents';
import { SerpAPI } from 'langchain/tools';
import { Calculator } from 'langchain/tools/calculator';

export const run = async () => {
  const model = new OpenAI({
    openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
    temperature: 0,
  });
  const tools = [
    new SerpAPI(process.env.NEXT_PUBLIC_SERPAPI_KEY, {
      location: 'Chicago,Illinois,United States',
      hl: 'en',
      gl: 'us',
    }),
    new Calculator(),
  ];

  const executor = await initializeAgentExecutorWithOptions(
    tools,
    model,
    {
      agentType: 'zero-shot-react-description',
      verbose: true,
    }
  );
  console.log('Loaded agent.');

  const input = `Who is Olivia Wilde's boyfriend? What is his current age raised to the 0.23 power?`;
  console.log(`Executing with input "${input}"...`);

  const result = await executor.call({ input });

  console.log(`Got output ${result.output}`);
};
