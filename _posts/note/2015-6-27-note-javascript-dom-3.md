---
layout: post
title: 《JavaScript DOM 编程艺术》笔记（三）
category: 笔记
tags: JavaScript DOM
description: 《JavaScript DOM 编程艺术》笔记
---

### Chapter 6 案例研究：图片库改进版

1. 如果想用Javascript给某个网页添加一些行为，就不应该让Javascript代码对这个网页的结构有任何依赖，凸显了采取预防性措施的必要性。
2. 结构化程序设计原则之一：函数应该只有一个入口和一个出口。但集中将出口集中在函数的开头是可以接受的。
3. Javascript与HTML标记分离：`element.event = function(){...}`，这里的event不限于`onclick`、`onkeypress`
4. 共享onload事件  
	网页加载完毕时会触发一个`onload`事件，这个事件与window对象相关联。即`window.onload = function(){...}`。  
	若需要绑定的函数较多时，一个弹性的解决方案是`addLoadEvent`，其实现如下：  
	
		function addLoadEvent(func) {  
			var oldonload = window.onload;
			if(typeof window.onload != 'function') {  
				window.onload = func;  
			} else{
				window.onload = function() {
					oldonload();
					func();
				}
			}
		}  
5. DOM Core 和 HTML-DOM
			
### Chapter 7 动态创建标记

1. 一些传统方法
	1. document.write：最大缺点是它违背了“行为应该与表现分离”的原则。即使把document.write
	语句挪到外部函数里，也还是需要在标记的`<body>`部分使用`<script>`标签才能调用那个函数
	2. innerHTML：可用来读、写某给定元素里的HTML内容。使用innerHTML属性，你就可以把JavaScript代码从标记中分离出来。用不着在标记的的`<body>`部分插入`<script>`标签
	
2. **DOM方法**(重要)
	1. createElement方法：  
		语法：`document.createElement(nodeName);`  
		如`var para = document.createElement("p");`
	2. appendChild方法：  
		语法：`parent.appendChild(child);`
	3. createTextNode方法：  
		语法：`document.createTextNode(text);`
	4. insertBefore方法：  
		语法：`parentElement.insertBefore(newElement, targetElement);`
	5. insertAfter方法：  
			
			function insertAfter(newELement, targetElement) {
				var parent = targetElement.parentNode;
				if(parent.lastChild == targetElement) {
					parent.appendChild(newElement);
				} else {
					parent.insertBefore(newElement, targetElement.nextSibling);
				}
			}

3. Ajax

（完）

（最后修改于2015-09-21）