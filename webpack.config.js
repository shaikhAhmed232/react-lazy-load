const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],

  resolve: {
    modules: [__dirname, "src", "node_modules", "public"],
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: require.resolve("ts-loader"),
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader",
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|jpg|jpeg|gif|svg/,
        use: ["file-loader"],
      },
    ],
  },
  devtool: "source-map",
};
