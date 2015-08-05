---
layout: post
title: 40个css布局练习
category: 技术
tags: CSS
description: 40个css布局练习

---

前前后后大约花了三天时间来完成，具体练习可访问[layoutgala](http://blog.html.it/layoutgala/).全部40个联系围绕`float`展开，基本就是翻来覆去的变换。

前面几个参考了源码，因为调整样式，后面基本就反复修改float、width相关值即可。

完成练习只是一个开始，因为还没有结合源码对比，尤其是**响应式方面**（这样说并不正确）还没有测试。这也是接下来要做的。

最后附上HTML结构：

	<div id="container">
		<div id="header">Header</div>
  		<div id="wrapper">
    		<div id="content">Content</div>
  		</div>
  		<div id="navigation">Navigation</div>
  		<div id="extra">Extra stuff</div>
  		<div id="footer">Footer</div>
	</div> 
