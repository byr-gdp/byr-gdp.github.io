---
layout: post
title: 前端开发过程心得记录
category: 技术
tags: HTML CSS JavaScript
description: 前端开发过程心得记录
---
### 0.写在前面
这是用来记录我在前端学习、开发过程当中的点点滴滴。考虑到知识的零碎性，于是有了本文的存在。内容很杂，逻辑也谈不上清晰，方便今后回顾进一步总结即可。

### 1.float属性在布局中使用  
在HTML中，具有float浮动属性的元素自上而下要优先出现，并设置相应的width来占据相应的空间，之后才是“正常流”中的其它元素。在双栏布局的源码中经常看到div.right先于div.main出现。

### 2.inline-block和inline区别
inline-block可以设置width和height属性，而inline该属性无效。

### 3.导航实现
1. 使用table  
	实现代码量大，不如ul直观
2. 使用ul  
	相应的需要将垂直排列的li变为水平，仅需给li设置css属性`display:inline-block`即可

### 4.div中图片水平居中  
`text-align:center`即可，向左向右更改center

### ５.有三种状况将使得元素离开文档流而存在,分别是浮动、绝对定位、固定定位

### 6.box-sizing  
以特定的方式定义匹配某个区域的特定元素。详见[w3cschool教程](http://www.w3school.com.cn/cssref/pr_box-sizing.asp).  
语法：`box-sizing: content-box|border-box|inherit;`  
content-box:宽度和高度分别应用到元素的内容框，默认值
border-box:为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制

### 7.去除inline-block元素间隙  
若有两个`<div>`标签并列，一种方法是使用float属性，另一种是设置display:inline-block。后者存在一个问题是即使`<div>`标签初始化也会存在间隙。解决方法可参考张鑫旭文章[去除inline-block元素间间距的N种方法](http://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)，移除空格或者设置font-size等都值得尝试。  
扩展阅读：[inline-block空隙--letter-spacing与字体大小/字体关系数据表
](http://www.iyunlu.com/view/css-xhtml/58.html)

### 8.li多列显示  
1. CSS浮动  
CSS：  
		
		ul{
			width: 100%; //不设置亦达到效果
		}
		li{
			width: 33%; //三列显示，两列、四列分别为50%、25%
			float: left; 
			list-style: none; //消除li前的实心圆，也可以通过设置display: block;来实现
		}
	
2. CSS3多列  
CSS  
	
		ul{
			column-count: 3;
			-webkit-column-count: 3; //chrome safari
		}
		li{	
			list-style: none; //去掉li前的实心圆，也可以通过设置display: block;来实现
		}
		
效果比较：
![image](http://int64ago.qiniudn.com/w9ykamf672e29.png)

### 9.JavaScript方法调用
原文地址：[JavaScript方法调用](http://www.lifelaf.com/blog/?p=1177)  
1. 与普通的函数调用不同的是，在进行方法调用时，function中的this指代将发生变化 — this将指代用于调用该function的对象。  
2. 嵌入function中的代码无法从外部继承this，也就是说，在嵌入的function中，this指代的并不是调用方法的对象，而是全局对象。如果确实需要在嵌入function中访问到调用方法的对象，可以在外部function中将this值保存到一个变量中，即经常见到的`var self = this;`

### 10.闭包（Closure）
原文地址：[闭包（Closure）](http://www.lifelaf.com/blog/?p=1181)  
1. 在JavaScript中所有的函数(function)都是对象，而定义函数时都会产生相应的函数调用对象链。函数对象和函数调用对象链之间的一一组合，就称之为“闭包”。  
2. 令闭包真正发挥作用的是嵌套函数的情况

### 11.类（Class）
原文地址：[类（Class）](http://www.lifelaf.com/blog/?p=1188)
1. 类的定义和构造函数的实现