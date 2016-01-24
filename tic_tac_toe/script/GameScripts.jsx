var Game = React.createClass({
  getInitialState: function() {
    return{
      fields: new Array(3 * 3).fill(''),
      currentSign: 'X',
      lines: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
      gameInProgress: true,
      draw: false
    };
  },
  componentDidMount: function () {
    $('.cell').click(this.setSign);
    $('#reset-button').click(this.resetGame);
  },
  setSign: function (event) {
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
  },
  resetGame: function () {
    this.replaceState(this.getInitialState());
  },
  checkLines: function (index) {
    var _this = this;
    index = parseInt(index);
    this.state.lines.forEach(function (line) {
      if (line.indexOf(index) != -1) {
        var winningLine = line.every(_this.isWinning);
        if (winningLine) _this.gameWon();
      }
    });
    var allOccupied = this.state.fields.every(function(sign) {
      return !!sign
    });
    debugger;
    if (allOccupied) {
      _this.draw();
    }
  },
  draw: function() {
    this.setState({draw: true})
  },
  gameWon: function () {
    var fields = this.state.fields.map(function (cell) {
      if (cell === '') {
        return cell = ' '
      } else {
        return cell
      }
    });
    this.setState({fields: fields, gameInProgress: false});

  },
  isWinning: function (lineIndex) {
    return this.state.fields[lineIndex] === this.state.currentSign
  },
  flipSign: function () {
    var currentSign = this.state.currentSign === 'X' ? 'O' : 'X';
    this.setState({currentSign: currentSign})
  },
  render: function() {
    var fieldsMarkup = this.state.fields.map(function (sign, index) {
      return (
        <div key={index} className="cell" data-index={index} disabled={!!sign}>
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
        <button id="reset-button">Reset game</button>
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
});

ReactDOM.render(
  <Game />,
  document.getElementById('content')
);
