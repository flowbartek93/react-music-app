const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

config = {
  entry: "./App/App.js",
  devServer: {
    hot: true,
    port: 3000,
    contentBase: path.join(__dirname, "App")
  },

  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "App")
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "App", "index.html")
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      },

      {
        test: /\.mp3$/,
        loader: "file-loader"
      }
    ]
  },

  mode: "development"
};

module.exports = config;
