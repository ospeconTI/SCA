/** @format */

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: path.join(__dirname, "dist"),
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "var",
        library: "EntryPoint",
        publicPath: "/",
    },
    plugins: [
        new webpack.DefinePlugin({
            //https://scatest.uocra.net/api/v1/Plan
            SERVICE_URL: JSON.stringify("http://localhost:4000"),
            //SERVICE_URL: JSON.stringify("https://scatest.uocra.net"),
            AUTHENTICATION_URL: JSON.stringify("https://fronttest.uocra.net"),
        }),
    ],
});
