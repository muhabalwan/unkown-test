import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import common from "./webpack.common";
import { merge as WebpackMerge }  from "webpack-merge";


const config: webpack.Configuration = WebpackMerge(common, {
    mode: "production",
    entry: "./src/index.tsx",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        publicPath: "",
      },
      optimization: {
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
        },
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "src/index.html",
        }),
        new CleanWebpackPlugin(),
      ],
});
export default config;
