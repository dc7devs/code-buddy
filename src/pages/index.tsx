import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './components/layout'
import BoxCode from './components/box-code'
import { useRef, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [inputCode, setInputCode] = useState(''); // @Type code in language <nome da linguagem>
  const [explanation, setExplanation] = useState('');

  const heandlerCodeReading = () => {
    setExplanation("Deu certo... possivel explicação");
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
        >{explanation}</BoxCode>
      </div>
    </Layout>
  )
}
