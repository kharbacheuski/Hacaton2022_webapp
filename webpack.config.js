const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  performance: {
    hints: false,
  },
  devServer:{
    compress: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3005,
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [  
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      inject: 'body'
    })
  ],
};