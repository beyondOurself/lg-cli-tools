module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['airbnb-base','plugin:prettier/recommended'],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "error" // 开启规则
    }
}