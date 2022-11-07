import TicTacToe from "./Games/TicTacToe"

export default function GameContainer(props) {
    switch (props.game) {
        case 'battleship':
            return (
                <div>Battleship</div>
            )
        case 'tic-tac-toe':
            return (
                // <div>test</div>
                <TicTacToe />
            )
        default:
            return (
                null
            )
    }
}
