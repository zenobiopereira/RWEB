var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'src/index.html' });

module.exports = {
  entry: {
    app: ["./src/app.js",]
  },
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
          }
        },
      {
        /* Renderização de imagens com a necessidade do npm install file-loader.*/
        test: /\.(woff2?|jpe?g|png|gif|ico|svg)$/,
        exclude: /node_modules/,
        use: [
            {
          loader: 'file-loader',
          options: {}
            }
          ]
        },
        {
      /* Renderização Sass, Css e Style em geral com npm install style, css-loader e sass-loader */
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
}
