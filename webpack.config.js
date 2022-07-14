const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index-bundle.js",
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HTMLWebpackPlugin({
      filename: "pushkin.html",
      template: "./src/pushkin.html",
    }),
    new HTMLWebpackPlugin({
      filename: "hachapurnaya.html",
      template: "./src/hachapurnaya.html",
    }),
    new HTMLWebpackPlugin({
      filename: "samurai.html",
      template: "./src/samurai.html",
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/assets"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // {
      //   test: /\.(scss)$/,
      //   use: [
      //     {
      //       loader: "style-loader", // inject CSS to page
      //     },
      //     {
      //       loader: "css-loader", // translates CSS into CommonJS modules
      //     },
      //     {
      //       loader: "postcss-loader", // Run post css actions
      //       options: {
      //         plugins: function () {
      //           // post css plugins, can be exported to postcss.config.js
      //           return [require("precss"), require("autoprefixer")];
      //         },
      //       },
      //     },
      //     {
      //       loader: "sass-loader", // compiles Sass to CSS
      //     },
      //   ],
      // },
      {
        test: /\.(ttf)$/,
        use: ["file-loader"],
      },
    ],
  },
};
