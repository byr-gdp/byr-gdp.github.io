---
layout: post
title: 40个css布局练习
category: css
tags: css, layout, exercise
description: 40个css布局练习

---

前前后后大约花了三天时间来完成，具体练习可访问[layoutgala](http://blog.html.it/layoutgala/)。40个练习主要围绕`float`展开，之后会将这40个练习的具体要求及代码整理出来。

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
	
考虑到重点是**布局**，所以样式在设置好之后几乎不会再改动，主要改动的是`container`、`wrapper`、`content`、`extra`和`footer`布局方式。

原网站[layoutgala](http://blog.html.it/layoutgala/)提供了参考代码，我目前（2015-08-08 到 2015-08-13）进行了校对工作，通过比较发现之前代码不足，并调整了css样式写法，将样式和布局分离。

我将所有整理放到了Github上，项目地址：[40LayoutExercise](https://github.com/byr-gdp/40LayoutExercise)。目前已完善相关文档，表述清楚各个练习的具体要求，希望能帮助更多像我一样的初学者。




