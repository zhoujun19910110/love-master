# kiss：一个爷爷辈的MVC项目

## 特性
#### 优势
- 极轻：经过整合，JS资源仅有20KB(zip压缩后)
- 易懂：原生ES5语法，核心源码不到50行（index.js）
- 可控：无需过多编译，无惧插件频繁更新（不再维护）

#### 劣势
- 过时：语法非常不优雅，各种众所周知的弊病
- 耦合：过度依赖某些库，无法独立测试，不便扩展功能

## 依赖
- [zepto.js](https://github.com/aui/art-template) – 为移动端打造的轻量jQuery
- [art-template.js](https://github.com/aui/art-template) - 性能卓越的模板引擎
- [sea.js](https://github.com/seajs/seajs) - Web端模块加载器

## 使用
- 安装
```javascript
npm install//安装依赖包
npm run init//初始化项目
```

- 开发
```
npm run server//部署本地服务
```

- 发布
```
npm run build//压缩、合并、后处理等构建任务
```
