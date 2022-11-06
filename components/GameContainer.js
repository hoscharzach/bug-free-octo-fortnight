export default function GameContainer(props) {
    switch (props.game) {
        case 'battleship':
            return (
                <div>Battleship</div>
            )
        case 'tic-tac-toe':
            return (
                <div>Tic-Tac-Toe</div>
            )
        default:
            return (
                null
            )
    }
}
