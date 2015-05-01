---
layout: post
title: 前端开发过程心得记录
category: 技术
tags: HTML CSS JavaScript
description: 前端开发过程心得记录
---

### 1.float属性在布局中使用  
在HTML中，具有float浮动属性的元素自上而下要优先出现，并设置相应的width来占据相应的空间，之后才是“正常流”中的其它元素。在双栏布局的源码中经常看到div.right先于div.main出现。

### 2.inline-block和inline区别
inline-box可以设置width和height属性，而inline该属性无效。

### 3.导航实现
1. 使用table
	有一种说法是这样实现代码量大，不如ul直观
2. 使用ul  
	相应的需要将垂直排列的li变为水平，仅需给li设置css属性`display:inline-block`即可

### 4.div中图片水平居中  
`text-align:center`即可，向左向右更改center

###５.有三种状况将使得元素离开文档流而存在,分别是浮动、绝对定位、固定定位