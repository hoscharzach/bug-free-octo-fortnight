import Head from 'next/head'
import Image from 'next/image'
import ChatContainer from '../components/ChatContainer'
import styles from '../styles/Home.module.css'
import GameContainer from '../components/GameContainer'

export default function Home() {
  return (
    <div className='flex justify-center flex-col w-full h-full items-center my-6'>
      <Head>
        <title>Bideogames</title>
        <meta name="1v1 me final destination" content="no items fox only" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-6xl font-bold text-blue-500'>Welcome to Bideogames</h1>
      <GameContainer game="tic-tac-toe" />
      <ChatContainer />
    </div>
  )
}
