//the point is to get as far as you can!
//thought process knowledge, data models, html css js

// What you are building: TicTacToe
// Goals
// - Render a TicTacToe
// - Accept click input on the spaces
// - Register a "mark" for the current player
// - Alternate between players
// - Calculate if there is a win or draw
// - Start with wins across and down
// - If you get there, try diagonals as well
// - Start spartan, pretty it up later

class App extends React.Component {
  constructor(props) {
    super(props);
    let gameBoard = this.createBoard(3, 3);
    this.state = {
      board: gameBoard,
      player1: '',
      player2: ''
    }
  }

  createBoard(rows, cols) {
    let board = new Array(rows);
    for (var row = 0; row < rows; row++) {
      board[row] = new Array(cols);
      board[row].fill("");
    }
    return board;
  }

  render() {
    return (
      <table>
        this.state.board.map(row => (
          <tr>
            row.map(cell => (
              <Cell />
            ))
          </tr>
        ))
      </table>
    );
  }
}

const Cell = () => <td></td>

ReactDOM.render(<App />, document.getElementById('root'));
