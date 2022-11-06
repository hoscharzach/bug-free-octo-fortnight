import { useEffect, useRef, useState } from 'react'
import ChatMessage from './ChatMessage'
import Participants from './Participants'
import { useChannel } from '@ably-labs/react-hooks'
import { nanoid } from 'nanoid'


export default function ChatContainer() {

    const messagesContainer = useRef(null)
    const chatInput = useRef(null)
    const [_, ably] = useChannel("mainchat", chat => {
        setMessages(prev => [...prev, chat.data])
    })

    const [messages, setMessages] = useState([])

    async function sendChat(e) {
        e.preventDefault()
        if (!chatInput.current) return
        if (chatInput.current.value === "") return

        await fetch("/api/sendMessage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ author: ably.auth.clientId, message: chatInput.current.value })
        })
        chatInput.current.value = ""
    }
    // console.log(messagesContainer.current)
    function scrollToBottom() {
        const children = Array.from(messagesContainer.current.children)
        children[children.length - 1].scrollIntoView()
    }

    return (
        <div className="w-2/5 max-w-3x border border-slate-500 rounded-lg mt-6">

            {/* Top of chat bar */}
            <div className=" flex justify-center w-full items-center border-b border-slate-500 p-4">
                <div className="text-3xl flex">Gamer-Chat</div>
                {/* <button className=" p-2 rounded-lg border bg-slate-900 border-gray-400  enabled:hover:border enabled:hover:border-blue-500">Leave Chat</button> */}
            </div>

            {/* users and chat messages */}
            <div className="w-full flex my-2 gap-1 p-4 min-h-[300px]">
                <div className="flex flex-col w-3/12 border-r border-slate-500">
                    <Participants />
                </div>
                <div ref={messagesContainer} className="flex flex-col w-9/12 gap-2 p-4 max-h-[400px] overflow-y-auto bg-opacity-40 rounded-lg">
                    {messages.length > 0 && messages.map(msg => (
                        <ChatMessage key={nanoid()} message={msg} />
                    ))}
                </div>
            </div>

            {/* chat input and send button */}
            <div className='w-full flex items-center justify-center p-4 border-t border-slate-500'>
                <div className='w-3/12 flex justify-center'>
                    <button onClick={scrollToBottom} className='p-1 px-3 rounded-lg border border-gray-400  enabled:hover:border enabled:hover:border-blue-500'>Scroll to Bottom</button>
                </div>
                <form className='w-9/12 flex justify-center gap-4' onSubmit={sendChat}>
                    <input ref={chatInput} type="text" className='w-full h-8 p-2 rounded-sm'></input>
                    <button className='p-1 px-3 rounded-lg border border-gray-400  enabled:hover:border enabled:hover:border-blue-500' type='submit'>Send</button>
                </form>
            </div>

        </div>
    )
}
