import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './components/layout'
import BoxCode from './components/box-code'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <h1 className={`${inter.className} text-5xl font-bold text-center sm:mt-20 sm:mb-0 my-10 mx-5`}>E aí! Me explica esse código?</h1>
      
      <button
        onClick={() => {""}}
        type="button"
        className={"font-medium rounded-lg text-base px-5 py-2.5 mt-6 bg-white/90 text-black border-white/50 hover:bg-white/90"}
      >Explicar</button>


      <div className={"flex justify-center flex-wrap sm:flex-nowrap gap-3 h-auto w-full p-2 sm:p-5 sm:pt-10"}>
        <BoxCode
          className={"bg-black/50 backdrop-blur-sm"}
          showLineNumbers={true}
          code={""}
        />
        <BoxCode
          className={"bg-white/80 backdrop-blur-sm text-black"}
          showLineNumbers={true}
          code={""}
        />
      </div>
    </Layout>
  )
}
