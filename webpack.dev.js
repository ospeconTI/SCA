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
			SERVICE_URL: JSON.stringify("http://localhost:4000"),
			NOMENCLADOR_URL: JSON.stringify("http://200.80.227.180/OspeconServicios"),
		}),
	],
});
