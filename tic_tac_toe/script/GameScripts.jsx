import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export class Game extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.initialState = {
      fields: new Array(3 * 3).fill(''),
      currentSign: 'X',
      lines: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
      gameInProgress: true,
      draw: false
    };

    this.state = this.initialState;

    _.bindAll(this, [
      'cleanState', 'setSign', 'checkLines',
      'draw', 'gameWon', 'isWinning', 'flipSign'
    ])
  }

  cleanState() {
    this.setState({
      fields: new Array(3 * 3).fill(''),
      currentSign: 'X',
      lines: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
      gameInProgress: true,
      draw: false
    })
  }

  setSign(event) {
    var cellActive = !event.target.attributes['disabled'];
    if (cellActive && this.state.gameInProgress) {
      var fields = this.state.fields;
      var index = event.target.dataset['index'];
      fields[index] = this.state.currentSign;
      this.setState({fields: fields});
      this.checkLines(index);
      if (this.state.gameInProgress) {
        this.flipSign()
      }
    }
  }

  checkLines(index) {
    index = parseInt(index);
    this.state.lines.forEach( (line) => {
      if (line.indexOf(index) != -1) {
        var winningLine = line.every(this.isWinning);
        if (winningLine) this.gameWon();
      }
    });
    var allOccupied = this.state.fields.every((sign) => {return !!sign});
    if (allOccupied) { this.draw() }
  }

  draw() { this.setState({draw: true}) }

  gameWon() {
    var fields = this.state.fields.map( (cell) => {
      return cell === '' ? ' ' : cell
    });

    this.setState({fields: fields, gameInProgress: false});

  }

  isWinning(lineIndex) {
    return this.state.fields[lineIndex] === this.state.currentSign
  }

  flipSign() {
    var currentSign = this.state.currentSign === 'X' ? 'O' : 'X';
    this.setState({currentSign: currentSign})
  }

  render() {
    var fieldsMarkup = this.state.fields.map( (sign, index) => {
      return (
        <div key={index} onClick={this.setSign} className="cell" data-index={index} disabled={!!sign}>
          {sign}
        </div>
      )
    });

    return (
      <div>
        <h1>Tic-Tac-Toe</h1>
        <h2 className="winning-note" hidden={this.state.gameInProgress}>
          Won by: {this.state.currentSign}
        </h2>
        <h2 className="draw-note" hidden={!this.state.draw}>
          Draw
        </h2>
        <button id="reset-button" onClick={this.cleanState}>Reset game</button>
        <p>
          <span>
            Current round: {this.state.currentSign}
          </span>
        </p>
        <div className="game">
          {fieldsMarkup}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('content')
);
