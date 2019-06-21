const path = require("path");

module.exports = {
  devtool: "none",
  mode: "production",
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "./dist"),
    publicPath: process.env.ASSET_PATH
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        }
      }
    ]
  }
};
