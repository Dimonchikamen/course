module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    overrides: [
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        "react/react-in-jsx-scope": [0],
        "rect/no-unresolved": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-unused-vars": "warn",
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-props-no-spreading": "warn",
        indent: [2, 4],
        "linebreak-style": [
            1,
            "windows"
        ],
        quotes: [
            1,
            "double"
        ],
        semi: [
            1,
            "always"
        ]
    }
};
