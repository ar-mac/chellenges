describe("Game", function() {
  it('works', function() {
    expect('lol').toBe('lol')
  });
  
  it('can spy on a function for a React class', function() {
    // var game = {state: {currentSign: 'X'}};
    var game = jasmineReact.render(<Game />);
    expect(game.state.currentSign).toBe('X');
  });
});
