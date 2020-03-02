> 废弃❗️，该仓库已经转移到到了github上的[assembly-css](https://github.com/zj1024/assembly-css)，当前仓库不会再对其进行更新。

## quickly-css 简介

> 通过组合class方式快速书写css的库
> 项目采用`scss`, `gulp`构建, 减少了书写大量基本css样式所需要的时间。

## 直接引入到项目中 ##

> 直接引入到项目中的极大好处是你可以随时更改引入的quickly-css核心代码来增强你的项目中所需要的css类

- 克隆到本地
```npm
npm install quickly-css --save
```

- 复制核心代码到项目

  - quickly-css的核心代码为lib文件夹下的scss代码
  - 将lib目录复制到你的项目中，并在需要引用css的html中引入`lib/index.scss`

## 使用npm方式引入 ##

- 安装quickly-css
```npm
npm install quickly-css --save
```

 - 使用Vue引入
```
import Vue from 'vue'

//sass
import 'quickly-css/lib/index.scss'

// or
import 'quickly-css/dist/quickly-css.min.css'
```

- 原生引用
```html
<link src="node_modules/quickly-css/dist/quickly-css.min.css">
```

## 基本的使用 ##

```html
<div class="w-full text-red">test</div>
```
相当于：
```html
<div class="test">test</div>
<style>
.test {
  width: 100%;
  color: #f35958;
}
</style>
```

## 快速书写三栏布局 ##

> 前端面试css中出现最多的一道css布局问题就是三栏布局，接下来我们通过三栏布局来体会一下quickly-css开发带来的高效

- 原生从零开始构建
```html
<style>
  .wrapper {
    display: flex;
  }
  .left, .right {
    width: 200px;
    background: #f2f2f2
  }
  .center {
    flex: 1;
    background: #188eee
  }
</style>
<section class="wrapper">
  <div class="left">1</div>
  <div class="center">1</div>
  <div class="right">1</div>
</section>
```

- 引入quickly-css
```html
<!-- use quickly-css -->
<style src="quickly-css/dist/quickly-css.css"></style>

<section class="flex j-between">
  <div class="w-200"></div>
  <div class="flex-1"></div>
  <div class="w-200"></div>
</section>
```

## 优点 ##


- 几乎不需要再创建style标签书写css
- 代码样式逻辑更加清晰
- 易维护（quickly-css）
- 目前vue项目使用打包后体积为`30kb`，项目构建后的quickly-css.min.css大小为`42kb`

## 文档 ##

[Documention][1]
[sass配置][2]

[1]: https://gitee.com/zj1024/quickly-css/blob/master/DOC.md
[2]: https://gitee.com/zj1024/quickly-css/blob/master/CONFIG.md

## 本地构建 ##


```npm
git clone https://gitee.com/zj1024/quickly-css.git
```
```npm
npm install
```
```
npm run build
```
## 项目目录 ##

```js
.
├── Blog.md //更新日志
├── CONFIG.md // 项目的配置说明
├── DOC.md // 文档
├── LICENSE
├── README.md
├── dist // 打包输出的文件
│   ├── quickly-css.css
│   └── quickly-css.min.css
├── gulpfile.js
├── lib
│   ├── _reset.scss // 格式化css
│   ├── _style.scss // 全局样式
│   ├── _sundry.scss // 杂项样式
│   ├── _var.scss // 全局scss变量
│   ├── background.scss
│   ├── border.scss
│   ├── box.scss // margin padding
│   ├── cursor.scss // 鼠标样式相关
│   ├── display.scss
│   ├── flex.scss
│   ├── float.scss
│   ├── font-size.scss
│   ├── font-weight.scss
│   ├── index.scss
│   ├── line-height.scss
│   ├── link.scss
│   ├── overflow.scss
│   ├── position.scss
│   ├── size.scss // width height
│   ├── text-align.scss
│   ├── text-color.scss
│   ├── vertical-align.scss
│   ├── visibility.scss
│   └── white-space.scss
├── package-lock.json
└── package.json
```



## 最后 ##


> [项目地址][1] 如果你在开发中觉得好用记得点一个star，或者有不足的地方可以[Issues][2]中提出来


  [1]: https://gitee.com/zj1024/quickly-css
  [2]: https://gitee.com/zj1024/quickly-css/issues