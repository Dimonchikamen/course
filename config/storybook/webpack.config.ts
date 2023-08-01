import path from "path";
import webpack, { RuleSetRule } from "webpack";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        output: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push(".ts", ".tsx");
    config.module.rules = config.module.rules.map((r: RuleSetRule) => {
        if (/svg/.test(r.test as string)) {
            return { ...r, exclude: /\.svg$/i };
        }
        return r;
    });
    config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });
    config.module.rules.push(buildCssLoaders(true));
    return config;
};
