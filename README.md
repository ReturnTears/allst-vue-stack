# vue_stack

> demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## vue 引入
```text
vue 引入echarts 的bar3D:
  npm install echarts-gl -save
  使用: require('echarts-gl')
  全局引入：
  import echarts from 'echarts'
  Vue.prototype.$echarts = echarts
  按需加载：
  // 引入基本模板,按需加载
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图
  require('echarts/lib/chart/bar');
  // 引入柱状图
  require('echarts/lib/chart/pie');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  
```
