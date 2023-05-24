> 项目中.prettierrc 文件本人常用的配置

## .prettierrc.js 文件

```javascript
module.exports = {
    tabWidth: 4, // 缩进字节数
    useTabs: false, // 缩进不使用tab，使用空格
    printWidth: 160, //行宽
    semi: false, // 句尾添加分号
    singleQuote: false, // 使用单引号代替双引号
    quoteProps: "as-needed", // 仅在需要时在对象属性周围添加引号
    arrowParens: "avoid", // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ a: 111 }"
    trailingComma: "none", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
    htmlWhitespaceSensitivity: "ignore", // 空白被认为是不敏感的
    ignorePath: ".prettierignore" // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
}
```

## .prettierignore

```json
node_modules
dist
```
