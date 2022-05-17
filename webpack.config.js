const path = require('path');
const argv = require("minimist")(process.argv.slice(2));
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    mode: argv.mode === "production" ? "production" : "development",    
    output: {
        filename:argv.mode === "production" ? "[contenthash].js" : "[name].js",
        sourceMapFilename: "js/[name].js.map[query]",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 5000,
        liveReload: true,
        compress: true
    },
    plugins: [new HtmlWebpackPlugin()],    
}