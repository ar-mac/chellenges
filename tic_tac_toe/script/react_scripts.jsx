var Game = React.createClass({
  getInitialState: function() {
    return{
      grid: new Array(3*3).fill(''),
      currentSign: 'X'
    };
  },
  setupGrid: function() {
    var data = this.state.grid;
    var container = [];
    while(data.length > 0)
      container.push(data.splice(0, size));
    return container
  },
  currentRound: function() {
    return 'Current round: ' + this.state.currentSign
  },
  render: function() {
    var gridMarkup = this.setupGrid().map(function(row, index) {
      var rowId = 'row-' + index;
      return (
        <Row rowId={rowId} row={row}/>
      )
    });

    return (
      <div id="react-game">
        <h1>Tic-Tac-Toe</h1>
        <p>{this.state.currentRound}</p>
        <table>
          {gridMarkup}
        </table>
      </div>
    );
  }
});

var Row = React.createClass({
  propTypes: {
    rowId: React.PropTypes.integer.required,
    row: React.PropTypes.array.required
  },
  render: function() {



    return (
      <tr id={this.prop.rowId}>

      </tr>
    )
  }
});



ReactDOM.render(
  <Game />,
  document.getElementById('con')
);
