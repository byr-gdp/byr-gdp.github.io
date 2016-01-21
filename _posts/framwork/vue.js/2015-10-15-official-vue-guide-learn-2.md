---
layout: post
title: Vue 教程学习（二）——绑定表达式
category: 技术
tags: vue, vue.js, tutorial
description: Vue 教程学习

---

这次我主要介绍[处理表单](http://cn.vuejs.org/guide/forms.html)章节的**绑定表达式**部分，之前不理解这部分内容就去提了issue，虽然被尤大神『教育』了一番，不过他还是帮助我实现了重现。

教程中提到

>当使用 v-model 在单选框和复选框时，被绑定的值可以是布尔值或字符串：

这里的**绑定表达式**适用于单选框和复选框，尝试将是否选中和不同选项绑定到更复杂的东西上，可以与计算属性`computed`类比。

对于checkbox，只有选中和不选中之分，即true与false，可以将其分别与`true-exp`和`false-exp`绑定，这样在不同的选择中，`v-model`值会被相应的`-exp`替换。

对于radio，单选按钮，可以为每一个选项绑定一个`exp`，当某一个选项被选中时，`v-model`值会被相应`exp`替换。

**我在重现过程中还发现，Vue的`data`中不支持类似于`this-is-a-test`的命名方式（至少在jsfiddle表现是如此）。**

我的重现地址如下：

https://jsfiddle.net/anthozoan77/5acjdasz/1/

尤大神重现地址：

https://jsfiddle.net/p7vjf4ak/1/

---

（完）

（最后修改于2015-10-15）
