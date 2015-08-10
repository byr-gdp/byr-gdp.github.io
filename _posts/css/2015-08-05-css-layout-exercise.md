---
layout: post
title: 40个css布局练习
category: 技术
tags: CSS
description: 40个css布局练习

---

前前后后大约花了三天时间来完成，具体练习可访问[layoutgala](http://blog.html.it/layoutgala/)。40个练习主要围绕`float`展开，我会将这40个练习的要求及代码整理出来。

所有练习以如下HTML结构为基础：

	<div id="container">
		<div id="header">Header</div>
  		<div id="wrapper">
    		<div id="content">Content</div>
  		</div>
  		<div id="navigation">Navigation</div>
  		<div id="extra">Extra stuff</div>
  		<div id="footer">Footer</div>
	</div> 
	
因为重点是**布局**，所以样式在定义好之后不会再改变，主要改动的是`wrapper`、`extra`和`footer`，姑且分别称之为part1、part2、part3。

因为原网站[layoutgala](http://blog.html.it/layoutgala/)也提供了参考代码，我目前（2015-08-08开始）主要在进行校对工作，通过比较得以发现之前忽视的地方，尤其是窗口resize后的布局变化，鉴于之前没有做更多测试。




