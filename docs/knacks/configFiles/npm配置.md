> 有时候我们下node包时需要下内部的包源,所以需要换源

## 查看当前源地址

```shell
npm config get registry
```



## 切换源地址

```shell
# npm源:https://registry.npmjs.org
# 淘宝源:https://registry.npm.taobao.org
npm config set registry=源地址
```



## 临时使用

```shell
npm --registry 源地址 install vue
```



## 配置.npmrc文件

```shell
registry=https://registry.npm.taobao.org
```



## npm install报错

```shell
npm ERR! code ERESOLVE 
npm ERR! ERESOLVE unable to resolve dependency tree
```

需要使用 `npm install  --force`  或者 `npm install --legacy-peer-deps`