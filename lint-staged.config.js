module.exports = {
    "lint-staged": {
        "src/**": [
            "eslint --fix",
            "git add"
        ]
    }
}