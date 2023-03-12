import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
    <h1 className={inter.className}>E aí! Me explica esse código?</h1>

    <code className="text-red-400">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sequi, suscipit voluptatem rerum beatae error, mollitia similique repudiandae vel qui veritatis velit, optio repellendus explicabo veniam. Voluptas rerum ducimus tempora.  
    </code>
    </>)
}
