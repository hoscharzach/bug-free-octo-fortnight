export default function Chess() {
    const board = new Array(64).fill(<div className="w-full h-full bg-slate-600 border"></div>)
    return (
        // board container
        <div className="bg-white w-[500px] h-[500px] grid grid-cols-8 grid-rows-8">
            {board}
        </div>
    )
}
