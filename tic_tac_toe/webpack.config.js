module.exports = {
  entry: {
    //ticTacToe: './script/GameScripts.jsx'
    hello: [
      'webpack-dev-server/client?http://localhost:8080',
      './script/helloworld.js'
    ]
  },
  output: {
    filename: 'public/app-bundle.js'
  }
};
