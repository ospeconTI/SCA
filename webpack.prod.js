/** @format */

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "var",
        library: "EntryPoint",
        publicPath: "./",
    },
    plugins: [
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: false,
            maximumFileSizeToCacheInBytes: 4000000,
        }),
        new webpack.DefinePlugin({
            SERVICE_URL: JSON.stringify("https://scatest.uocra.net"),
            AUTHENTICATION_URL: JSON.stringify("https://fronttest.uocra.net"),
            AYUDA_URL: JSON.stringify("https://amparostest.uocra.net/AmparosImagenes/getImagen/%7CAyuda%7CAyudaSCA.pdf"),
            WEBPUSH_URL: JSON.stringify("http://192.168.40.33:3333"),
        }),
    ],
});
