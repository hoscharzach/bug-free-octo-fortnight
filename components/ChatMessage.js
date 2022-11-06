export default function ChatMessage(props) {
    return (
        <div className="w-11/12 bg-slate-500 rounded-lg p-2">
            <div className="text-sm">{props.message.author}</div>
            <div className="text-sm">{props.message.message}</div>
        </div>
    )
}
