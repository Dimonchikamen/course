import webpack from "webpack";
import htmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({ paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash:8].css",
            chunkFilename: "css/[name].[hash:8].css",
        }),
        new webpack.ProgressPlugin(),
        new htmlWebpackPlugin({ template: paths.html }),
    ];
}