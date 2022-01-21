const path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'./src/index.js'),
  mode: "development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'dist')
  },
  devServer: {
    static: './',
    port: 8000
  },
  devtool: 'eval-source-map'
};
