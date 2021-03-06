---
layout: post
title: 关于CSS权重
category: css
tags: html, css, css3, css weight
description: 关于CSS权重

---

本文是对[www.w3cplus.com](http://www.w3cplus.com/)文章[你应该知道的一些事情——CSS权重](http://www.w3cplus.com/css/css-specificity-things-you-should-know.html)的小结,并不完善。原文提供了很多有价值的外文参考文献、CSS权重计算工具及资源等。

### 1.概述

1. 权重决定了哪一条规则会被浏览器应用在元素上。
2. 权重的不同，是你所期望的效果，没有通过css规则在元素上生效的主要原因。
3. 权重的级别根据选择器被划分为四个分类：**行内样式，id，类与属性，以及元素**，权重依次递减。
4. 内联样式表含有比别的规则更高的权重。id选择器的权重比属性选择器更高。类选择器比任意数量的元素选择器都高。
5. 通配符选择器跟继承来的样式，他们的权重以 0，0，0，0来计算

### 2.权重等级

1. 行内元素，指的是html文档中定义的style。1个行内样式权重加1000。

		<h1 style="color: #fff;">header</h1>

2. id选择器。1个id权重加100。
3. 类、属性选择器和伪类选择器。一个类/属性选择器/伪类选择器权重加10。
4. 元素和伪元素。1个元素名/伪元素权重加1。

	伪元素如`:before`、`:after`、`:first-letter`、`:first-line`

### 3.权重基本规则

1. 相同的权重，以后面出现的选择器为最后规则
2. 不同的权重，权重值高则生效
3. 最后定义的规则会覆盖之前与之冲突的规则

### 4. 权重实践

1. 利用LVHA原理来给链接应用样式

	即link-visited-hover-active的顺序

2. 永远都不要使用**"!important"**

	`!important`会覆盖所有的样式规则，但“!important”根本没有结构与上下文可言，所以很少用到。

3. 利用id增加选择器权重
4. 减少选择器的个数



