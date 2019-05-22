var webpack = require("webpack"),
  path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    libraryTarget: "amd"
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },
      {
        test: [/\.ts$/, /\.tsx$/],
        exclude: /(node_modules|bower_components)/,
        use: "ts-loader"
      },
      {
        test: [/\.svg$/],
        use: {
          loader: "react-svg-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  }
};
