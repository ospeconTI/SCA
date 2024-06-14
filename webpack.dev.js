/** @format */

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const webpack = require("webpack");
const { InjectManifest } = require("workbox-webpack-plugin");

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
        /*  new InjectManifest({
            // These are some common options, and not all are required.
            // Consult the docs for more info.
            maximumFileSizeToCacheInBytes: 4000000,
            exclude: [/.../, "..."],
            swSrc: "./src/libs/service-worker.js",
        }), */
        new webpack.DefinePlugin({
            SERVICE_URL: JSON.stringify("http://localhost:4000"),
            //SERVICE_URL: JSON.stringify("https://scatest.uocra.net"),
            AUTHENTICATION_URL: JSON.stringify("https://front.uocra.net"),
            AYUDA_URL: JSON.stringify("https://amparostest.uocra.net/AmparosImagenes/getImagen/%7CAyuda%7CAyudaSCA.pdf"),
            WEBPUSH_URL: JSON.stringify("https://ntfytest.uocra.net"),
            SCOPE: JSON.stringify("/"),
        }),
    ],
});
