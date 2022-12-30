# node版本管理工具nvm

由于不同项目依赖的node版本可能不同，所以在维护多个项目时通常需要使用不同的node版本，这时候用nvm来切换不同的node版本就很方便。

 <a href="https://github.com/nvm-sh/nvm/blob/master/README.md" target="_blank">官方文档</a>

 <a href="https://nvm.uihtm.com/" target="_blank">nvm使用手册</a>

### 常用命令

```js
nvm list // 列出所有安装的版本
nvm use 14.0.0 // 使用14.0.0版本的node
nvm list available // 显示可下载版本的部分列表

nvm version // 显示nvm版本。
```



### nvm切换国内镜像

如果下载node过慢或者安装失败，请更换国内镜像源, 在 nvm 的安装路径下，找到 settings.txt，设置node_mirro与npm_mirror为国内镜像地址。下载就飞快了~~

```js
root: D:\nvm
path: D:\nodejs
nvm npm_mirror https://npmmirror.com/mirrors/npm/
nvm node_mirror https://npmmirror.com/mirrors/node/
// 或者：
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
// 打开链接查看可以node版本：https://registry.npmmirror.com/binary.html?path=node/
```

