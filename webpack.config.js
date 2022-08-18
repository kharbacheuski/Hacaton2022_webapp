const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    performance: {
      hints: false,
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