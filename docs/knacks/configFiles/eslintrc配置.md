> 项目中 .eslintrc.js 文件本人常用的配置

## .eslintrc.js

```javascript
// npm install eslint-config-prettier typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:@typescript-eslint/recommended", "eslint:recommended", "prettier"],
    env: {
        es6: true,
        node: true
    },
    rules: {
        "prettier/prettier": "error"
    },
    plugins: ["prettier"]
}
```

## .eslintignore

```json
/lib
/docs
/dist
```
