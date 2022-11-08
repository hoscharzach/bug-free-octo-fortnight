import blackBishop from '../../public/Images/bbishop.svg'

export default function ChessCell(props) {

    const cellStyle = props.offColor ? "border bg-blue-400 w-full h-full flex justify-center items-center" : "border bg-white w-full h-full flex justify-center text-black  items-center"
    return (
        <div
            onClick={props.onClick}
            data-piece={props.game.board[props.num]}
            data-num={`${props.num}`}
            className={cellStyle}
            data-selected="0"
        >
            {props.game.board[props.num]}
        </div>

    )
}
