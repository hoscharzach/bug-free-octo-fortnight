import { useRef } from 'react'
import ChatMessage from './ChatMessage'

export default function ChatContainer() {

    const chatInput = useRef(null)

    function sendChat(e) {
        e.preventDefault()
        if (!chatInput.current) return
        if (chatInput.current.value === "") return

        console.log(chatInput.current.value)
        chatInput.current.value = ""

    }

    return (
        <div className="w-3/5 max-w-3x border border-slate-500 rounded-lg mt-6">
            <div className=" flex justify-between w-full items-center border-b border-slate-500 p-4">
                <div className="text-3xl">Turbo-Chat</div>
                <button className=" p-2 rounded-lg border bg-slate-900 border-gray-400  enabled:hover:border enabled:hover:border-blue-500">Leave Chat</button>
            </div>
            <div className="w-full flex my-2 p-4">
                <div className="flex flex-col w-2/12">
                    <div>Users in room:</div>
                    <div>Brian</div>
                    <div>Brian</div>
                    <div>Brian</div>
                </div>
                <div className="flex flex-col w-10/12 gap-2 max-h-[400px] overflow-y-auto">
                    <ChatMessage />
                    <ChatMessage />
                    <ChatMessage />
                    <ChatMessage />
                    <ChatMessage />
                    <ChatMessage />
                    <ChatMessage />
                </div>
            </div>
            <div className='w-full flex items-center justify-center p-4 border-t border-slate-500'>
                <div className='w-2/12'></div>
                <form className='w-10/12 flex justify-center gap-4' onSubmit={sendChat}>
                    <input ref={chatInput} type="text" className='w-full h-8 p-2 rounded-sm'></input>
                    <button className='p-1 px-3 rounded-lg border bg-slate-900 border-gray-400  enabled:hover:border enabled:hover:border-blue-500' type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}
