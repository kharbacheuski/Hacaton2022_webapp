
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    output: {
      filename: "bundle.js"
    },
    resolve: {

      extensions: [".ts", ".tsx", ".js"]
    },
    devServer:{
      open: true,
      contentBase: "/dist/bundle.js",
      port: 3004,
      historyApiFallback: true,
      headers: {
          "Access-Control-Allow-Origin": "*",
      },
    },
    performance: {
      hints: false,
      maxAssetSize: 400000,
      maxEntrypointSize: 4000000,
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { 
            test: /\.tsx?$/, 
            loader: "ts-loader" },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
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
    }
  };