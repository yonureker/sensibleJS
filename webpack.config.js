const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  rules: [
    {
      test: [/\.jsx?$/], // Specifies file types to transpile
      exclude: /(node_modules)/, // Leaves dependencies alone
      loader: 'babel-loader', // Sets Babel as the transpiler
      query: {
        presets: ['@babel/env', '@babel/react'] // Tells Babel what syntaxes to translate
      }
    }
  ],
  }
};