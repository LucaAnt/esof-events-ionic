const path = require('path')

module.exports = {
  entry:'./src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'www')
  },
  mode:'development',
  devServer:{
    contentBase:path.join(__dirname,'src'),
    compress:false,
    port:9000
  }
}
