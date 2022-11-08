import { useEffect, useState } from "react"
import ChessGame from './ChessClass'
import ChessCell from './ChessCell'

export default function Chess() {


    // intiialize empty board
    const [board, setBoard] = useState([])
    const [currentGame, setCurrentGame] = useState('')

    // console.log(board)
    function onSelect(e) {
        const el = document.querySelector("[data-selected='1']")
        console.log(el === e.target)
        if (el) {
            if (e.target === el) {
                el.dataset.selected = "0"
                return
            } else {
                el.dataset.selected = "0"
            }
        }

        e.target.dataset.selected = "1"
        const moves = currentGame.validMoves(e.target.dataset.piece, e.target.dataset.num)
        console.log(moves)
        moves.forEach(el => {
            const changeBg = document.querySelector(`[data-num="${el}"]`)
            console.log(changeBg)
            changeBg.style.backgroundColor = 'red'
        })

    }

    // function for restting game/ starting new game
    function makeNewGame() {
        const game = new ChessGame()
        let array = []
        let offset = 0
        // every 8 squares, skip one to have alternating tiles
        for (let i = 0; i < 64; i++) {
            if (i % 8 === 0) offset++
            // initialize board with default pieces as found in new game class
            array.push(<ChessCell onClick={onSelect} game={game} offColor={(i + offset) % 2 === 0} num={i} key={i} />)

        }

        // setBoard to the finished array
        setBoard(array)

        // put class instance into state
        setCurrentGame(game)
    }

    // whenever board changes, update state
    useEffect(() => {

    }, [currentGame.board])

    // runs once on load and if there isn't already a game, then create one
    useEffect(() => {
        if (!currentGame) {
            makeNewGame()
        }
    }, [])


    return (

        // board container
        <div id="test" className="flex flex-col items-center justify-center gap-3">

            {/* board grid */}
            <div className="opacity-80 w-[500px] h-[500px] border grid grid-cols-8 grid-rows-8">
                {board}
            </div>
            <button onClick={makeNewGame} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start New Game</button>
        </div>
    )
}
