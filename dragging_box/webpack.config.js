module.exports = {
  context: __dirname,
  entry: {
    app: './scripts/main.js'
  },
  output: {
    filename: 'app_bundle.js',
    path: __dirname + '/public'
  },
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};
