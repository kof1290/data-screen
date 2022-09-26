# vite-vue2

> ### Vue2 + Vite + Vuex + Vue-router + Axios


> #### USE
> 
```
npm install
```

> #### RUN
```
npm run serve
```

> #### BUILD
```
npm run build:prod
```
## 数据大屏

数据大屏的开发有以下几个问题需要明确并解决

- 缩放问题
  - 大屏缩放
  - 组件缩放
  - popover缩放
- 组件问题
  - 组件数量多，需要阶段性沉淀
  - 组件注册繁琐
- 样式问题
  - 看板的主题色
  - 组件样式重复&冲突
  - 组件字体
- 数据问题（此处不讨论统一查询接口）
  - 接口数据，数据格式转换
  - 多个后端环境的切换
- 交互联动问题
  - 明确数据流与查询方式
- 性能问题
  - 响应式数据的取舍
  - 大数据量优化

本项目作为样例工程，旨在解决数据大屏开发过程中的通用性问题

最终通过 开发通用组件 + 编写组件配置的形式形成数据大屏

市面上的可视化工具非常多，他们也许能解决70%的问题，但是剩余的30%会使使用者非常困惑，所以选择手动开发，早日完成定制化项目~ 

## 使用说明

本项目基于目录结构约定开发的行为



1. 编写可视化组件
2. 编写组件类
3. 编写看板配置
4. 编写控件（数据过滤查询）

### 编写可视化组件

vue组件中的`name`属性必填，须和文件名一致

推荐在`/src/components/pool/`文件夹下以 `.vue` 单文件形式（SFC）编写

`pool` 目录下的`vue`组件会被自动注册为全局组件

### 编写组件类

组件类为非必须，只有在`BaseComponent`无法满足的情况下需要编写

推荐在`/src/module/`文件夹下以大驼峰命名组件的`module`，class的形式可以避免很多不必要的错误


### 编写看板配置

看板配置是整个看板的结构化描述，在云洄中以可视化编辑的形式存在，但在此开发框架中需要自己手动填写

```js
// 最简单的组件例子
new BaseComponent(b('graph', 300, 400, 900, 300, null, {method: 'get', url: 'http://172.38.110.228:30032/api/v1/pieGraph'}))
```

`b`函数做了两件事

1. 位置参数转换为对象，方便class解构
2. 合并多余的对象参数，方便组件类解构，支持设置组件的上下层级，详见`demo.js`

#### 组件层级

组件的层级关系在声明组件列表时会`隐式地从下到上层叠`，只需要声明时注意顺序就可以避免层叠的问题，`{zIndex: 2}`或者`{'z-index': 2}`只是另一个显式的解决办法

推荐在`/src/dashboards/`文件夹下参照 `demo.js` 编写

### 编写控件
控件的存在用于过滤数据，在此类看板项目中，数据的流转不做复杂设置

大概有以下三种方式
1. 以看板为整体，控件设置看板状态，组件监听状态做自身的数据刷新
2. 组件之间以事件总线`eventBus`做相互的消息传递
3. 使用发布订阅模式，使组件之间具有订阅关系

为了项目的简易上手，选择前两种作为示例，第三种可以自行发挥


### 看板展示

看板本身在 `/src/views/`文件夹下，依据`Home.vue` 编写