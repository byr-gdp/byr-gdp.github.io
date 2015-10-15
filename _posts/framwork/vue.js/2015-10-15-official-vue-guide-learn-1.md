---
layout: post
title: Vue 教程学习（一）——转换为数字
category: 技术
tags: Vue JavaScript JS
description: Vue 教程学习

---

为系统地学习Vue，参考了[官方教程](http://cn.vuejs.org/guide/forms.html)。我会将我所认为值得的部分记录下来。

这次我主要介绍[处理表单](http://cn.vuejs.org/guide/forms.html)章节的**转换为数字**部分，因为我想弄清楚转换数字后与之前相比究竟有什么区别。

教程中提到

> 如果你希望将用户的输入自动转换为数字，你可以在 v-model 所在的 input 上添加一个 number 特性。

比如说，对于"123"，字面意思是表示**数字**，但实际类型却是**String**。虽然可以设置`input`的`type`属性，但`text`和`number`相比，只是限定了输入。比如`input`的`type`取值为`number`时，除数字外只有英文e和E可输入，但输入值的类型还是**String**，这些均可通过`typeof`得到验证。

因此，`type`取值`text`还是`number`对于添加`number`特性没有影响，后面重现代码可以比较。

目前的`number`特性并没有足够『强大』。即使添加了`number`特性，输入内容如果包含非数字内容，用户的输入依旧是**String**类型，即使是混合的情况。

下面是我重现地址，jsfiddle真是好东西。

https://jsfiddle.net/anthozoan77/Lnk443qd/1/

---

（完）

（最后修改于2015-10-15）

