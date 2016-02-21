module.exports = {
  entry: {
    //ticTacToe: './script/GameScripts.jsx'
    hello: [
      './script/HelloReact.jsx',
      'webpack-dev-server/client?http://localhost:8080',
      './script/helloworld.js'
    ]
  },

  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'public/app-bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['jsx', 'babel'],
        exclude: /node-modules/
      }
    ]
  }
};
