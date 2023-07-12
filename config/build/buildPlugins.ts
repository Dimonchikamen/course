import webpack from "webpack";
import htmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash:8].css",
            chunkFilename: "css/[name].[hash:8].css",
        }),
        new webpack.ProgressPlugin(),
        new htmlWebpackPlugin({ template: paths.html }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ];
}