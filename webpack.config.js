const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    application: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, "dist"),
  },
  rules: [
    {
      test: /\.(js|jsx|es6)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
  ],
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
