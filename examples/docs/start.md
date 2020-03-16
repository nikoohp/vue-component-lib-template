# 快速上手
本节将介绍如何在项目中使用 JIMI UI。

<br />

### 安装
```
npm install -S vue-component-lib --registry url
```

<br />


### 完整引入
在 `main.js` 中写入以下内容：
```js
import Vue from 'vue';
import VueComponentLib from 'vue-component-lib';
import 'vue-component-lib/lib/vue-component-lib.css';

Vue.use(VueComponentLib);
```

<br />

### 按需引用
借助 `babel-plugin-component`，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 `babel-plugin-component`：
```
npm install babel-plugin-component -D
```

然后，将 `.babelrc / .babelrc.js / babel.config.js` 修改为：

```js
{
  "plugins": [
    ['component', {
            libraryName: 'vue-component-lib',
            libDir: 'lib',
            styleLibrary: {
                name: 'styles',
                path: '[module].css',
                base: false,
                mixin: false
            }
        }]
  ]
}
```
接下来，如果你只希望引入部分组件，比如 `Table`，那么需要在 `main.js` 中写入以下内容：
```js
import Vue from 'vue';
import { Table } from 'vue-component-lib';
import App from './App.vue';

Vue.component(Table.name, Table);
/* 或写为
 * Vue.use(Table)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```