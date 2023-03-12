import { Inter } from 'next/font/google'
import Layout from './components/layout'
import BoxCode from './components/box-code'
import { useEffect, useState } from 'react'

import { Configuration, CreateCompletionResponse, OpenAIApi } from 'openai'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [inputCode, setInputCode] = useState('');
  const [explanation, setExplanation] = useState('');

  const heandlerCodeReading = async () => {
    const explan = await getCompletion(inputCode);
    setExplanation(explan);

    console.log(explanation);
  }
  
  const handleTextAreaChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = target;
    setInputCode(value);
  }
  
  return (
    <Layout>
      <h1 className={`${inter.className} text-5xl font-bold text-center sm:mt-20 sm:mb-0 mt-10 mx-5`}>E aí! Me explica esse código?</h1>
      
      <button
        onClick={heandlerCodeReading}
        type="button"
        className={"font-medium rounded-lg text-base px-5 py-2.5 my-6 bg-white/90 text-black border-white/50 hover:bg-white/90"}
      >Decifra Esse Código!</button>

      <div className={"flex justify-center flex-wrap sm:flex-nowrap gap-3 h-auto w-full p-2 sm:p-5 sm:pt-10"}>
        <BoxCode
          className={"bg-black/50 backdrop-blur-sm"}
        >
          <textarea
            className={"w-full h-full border-none bg-transparent resize-none outline-none text-base font-mono"}
            onChange={handleTextAreaChange}
            value={inputCode}
          ></textarea>
          
        </BoxCode>
        <BoxCode
          className={"bg-white/80 backdrop-blur-sm text-black overflow-auto py-2"}
        >{JSON.stringify(explanation, null, 2)}</BoxCode>
      </div>
    </Layout>
  )
}

async function getCompletion(completion: string) {
  const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  }))

  const response = await openai.createCompletion({
    model: "code-davinci-002",
    prompt: `codigo:\n${completion}\nAqui esta o que o codigo faz:\n1`,
    temperature: 0,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\"\"\""],
  })

  return JSON.stringify(response.data, null, 2);
}