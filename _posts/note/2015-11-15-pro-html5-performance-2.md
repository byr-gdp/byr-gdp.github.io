---
layout: post
title: 高性能HTML5笔记（二）
category: 笔记
tags: html HTML html5 HTML5
description: 高性能HTML5

---

## 第二部分

### 第四章 响应式网页设计

1. CSS3 媒介查询
2. 自适应图片
3. 弹性栅格

### 第五章 理解页面重用机制

## 第三部分 创建一个网站

### 第六章 页面模板

1. 使用IE的兼容模式（通常情况下应该关闭，除非由于历史原因不得不使用），可以通过以下 `meta` 标签做到

> `<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`

其中，`http-equiv="X-UA-Compatible"`告诉IE（IE8 以上支持）将要设置兼容模式状态。`content`属性确定了采用什么样的兼容模式规则。`IE=edge`告知浏览器不要采用兼容模式而总是采用最新版本的规则来渲染。`chrome=1`告诉IE如果用户安装了 Google Chrome Frame（GCF）插件，那么启用它，以 Chrome 内核的渲染方式渲染网页。

2. 为 iPhone 使用 Viewport

> `<meta name="viewport" content="width=device-width">`

### 第七章 导航

1. ID 属性选择器的性能是最高的（但比含标识符的选择器高的不多）。因为标识符可以重复使用，所以应该使用含标识符的选择器而不是 ID 属性选择器，牺牲这点性能是值得的。

2. 试图让所有浏览器展示完全一样的效果是不对的。