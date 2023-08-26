import { initializeAgentExecutorWithOptions } from 'langchain/agents';
import { OpenAI } from 'langchain/llms/openai';
import { SerpAPI } from 'langchain/tools';
import { Calculator } from 'langchain/tools/calculator';

const model = new OpenAI({
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
  temperature: 0,
});
const tools = [
  new SerpAPI(process.env.NEXT_PUBLIC_SERPAPI_API_KEY, {
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

const input =
  'What was the high temperature in SF yesterday in Fahrenheit? What is that number raised to the .023 power?';

const result = await executor.call({
  input,
});

console.log(result);
