---
layout: post
title: 《HTML&&CSS3入门经典》（11）——使用jQuery
category: 笔记
tags: HTML CSS JavaScript
description: 使用jQuery
---

###
 1. jQuery基础
 1. $函数介绍  
	可以使用两种不同的名称访问此函数：jQuery或者$，二者等价。
 2. 链式结构
 3. 使用`$(document).ready()`以智能方式启动脚本  
	任何需要执行的语句都包含于匿名函数中，并且将在`$(document).ready()`事件触发时得到执行

### 2. jQuery与DOM  
 1. 使用jQuery选择元素  
	使用$()及一个CSS选择器选择一个或一组元素
 2. 创建和添加元素  
	创建元素形式如：  
	> `var elem = $("<h1>").text("Good Morning").attr("id","greeting");`
	  
	比较灵活的写法还有：  
	> `var elem = "$("<h1>Good Morning</h1>").attr("id","greeting");`
	
	更进一步：
	> `var elem = "$("<h1 id = "greeting">Good Morning"</h1>);`

	添加元素形式如：
	> `$("#container").append(elem);`

 3. 使用jQuery操控元素  
	1. 使用`$().addClass()、$().removeClass()、$().hasClass()和$().toggleClass()`管理CSS类
	2. 使用`$().attr()`获取或设置特性
	3. 使用`$().css()`获取或设置CSS属性
	4. 使用`$().html()`获取或设置元素的HTML
 4. 基本动画与特效
	1. 使用`$().show()、$().hide()和$().toggle()`显示与隐藏元素
	2. 使用`$().fadeIn()、$().fadeOut()、$().fadeToggle()`动态显示不透明度
	3. 使用`$().slideUp()、$().slideDown()和$().slideToggle()`创建滑动门效果
