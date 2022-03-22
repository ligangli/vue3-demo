/*
 * @Description: 1
 * @Author: ligang
 * @Date: 2021-12-02 17:34:38
 */
// ESlint 检查配置
module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module"
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: ["plugin:vue/vue3-essential", "@vue/airbnb"],
    // extends: ['plugin:vue/recommended', 'eslint:recommended'],
    globals: {
    },

    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
        // 强制 error
        indent: ["error", 4],
        "vue/html-indent": ["error", 4],
        "no-console": process.env.NODE_ENV === "production" ? "error" : "error",
        "no-debugger":
            process.env.NODE_ENV === "production" ? "error" : "error",
        // 推荐 warn
        "max-len": [
            "warn",
            {
                code: 300
            }
        ],
        "vue/html-quotes": "warn",
        "linebreak-style": "off",
        // "import/extensions": ["error", "always", { "js": "ignorePackages" }],
    }
};
