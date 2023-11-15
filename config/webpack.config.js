const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    library: 'library-react-test',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    hot: true,
    open: true,
    compress: true,
    port: 3000
  }
};
