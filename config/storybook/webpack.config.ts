import path from "path";
import webpack, { RuleSetRule, DefinePlugin } from "webpack";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";
import { BuildPaths } from "../build/types/config";

type Rule = false | "" | 0 | RuleSetRule | "..." | null | undefined;

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        output: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push(".ts", ".tsx");

    if (config.module && config.module.rules) {
        config.module.rules = config.module.rules.map((r: Rule) => {
            if (typeof r === "object" && r !== null && r !== undefined && /svg/.test(r?.test as string)) {
                return { ...r, exclude: /\.svg$/i };
            }
            return r;
        });
        config.module?.rules?.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        config.module?.rules?.push(buildCssLoaders(true));
    }

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API_URL__: JSON.stringify(""),
        })
    );
    return config;
};
