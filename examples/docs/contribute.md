# 开发指南

<br />

### 调试组件
启动项目
```
npm run serve
```

<br />

### 添加新组件
请按照 `packages` 目录下的文件夹结构添加新的组件

<br />

### 添加新组件文档
如需添加文档，请在 `examples/docs` 下添加新的文档，同时要在 `nav.config.json` 中添加新的路由才能预览。

<br />

### 发布
1， 切换 `registry`
```
npm config set registry url
```
推荐使用 [nrm](https://www.npmjs.com/package/nrm) 管理镜像源地址
```bash
nrm add verdaccio url
nrm ls  # 查看镜像源地址
nrm use verdaccio  # 切换为verdaccio源地址
```

2， 注册账号
```
npm adduser
```

3， 发布
```
npm publish
```

