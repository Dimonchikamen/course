module.exports = {
    settings: {
        react: {
            version: "detect",
        },
    },

    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:i18next/recommended",
        "prettier",
        "plugin:storybook/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "react-hooks", "@typescript-eslint"],
    rules: {
        "no-undef": "off",
        "no-console": "warn",
        "prefer-const": "warn",
        "react/react-in-jsx-scope": [0],
        "rect/no-unresolved": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/ban-ts-comment": "warn",
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-props-no-spreading": "warn",
        indent: [2, 4],
        "react/display-name": "off",
        "linebreak-style": "off",
        quotes: [1, "double"],
        semi: [1, "always"],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    },
    overrides: [
        {
            files: ["**/src/**/*.{jsx,tsx}"],
            rules: {
                indent: "off",
            },
        },
        {
            files: ["**/server/**/*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
                "no-undef": "off",
            },
        },
        {
            files: ["**/src/**/*.test.{ts,tsx}", "**/src/**/*.stories.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
            },
        },
        {
            files: ["**/src/shared/ui/**/**.tsx"],
            rules: {
                "react/jsx-props-no-spreading": "off",
            },
        },
    ],
};
