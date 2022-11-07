import Head from 'next/head'
import Image from 'next/image'
import ChatContainer from '../components/ChatContainer'
import styles from '../styles/Home.module.css'
import GameContainer from '../components/GameContainer'
import { useState } from 'react'
import { configureAbly } from '@ably-labs/react-hooks'

configureAbly({
  authUrl: `${process.env.NEXT_PUBLIC_HOSTNAME}/api/createTokenRequest`
})

export default function Home() {

  const [game, setGame] = useState('tic-tac-toe')

  return (
    <div className='flex justify-center flex-col w-full h-full items-center my-6 gap-4'>

      <Head>
        <title>Bideogames</title>
        <meta name="1v1 me final destination" content="no items fox only" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-6xl font-bold text-blue-500'>Welcome to Bideogames</h1>
      <div className='max-w-[90vw] flex flex-col lg:flex-row justify-center md:justify-evenly my-6 w-full'>

        <GameContainer game={game} />
        <ChatContainer />
      </div>
      <div className='bg-[#121212] fixed h-14 bottom-0 w-full border-t border-slate-500 flex justify-center items-center text-lg gap-3'><span>Made by Zach Hoschar with Go/Gin/Gorilla Websocket/NextJS/Ably</span> | <a className='hover:text-blue-500' href="https://github.com/hoscharzach/bug-free-octo-fortnight">Github</a> | <a className='hover:text-blue-500' href="https://zachhoschar.com/">Portfolio</a></div>
    </div>
  )
}
