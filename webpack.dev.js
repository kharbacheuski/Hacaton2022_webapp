const { merge } = require("webpack-merge");
const path = require("path");

const common = require("./webpack.config");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval",
    output: {
        publicPath: '/'
    },
    devServer:{
        compress: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3005,
    }
});
