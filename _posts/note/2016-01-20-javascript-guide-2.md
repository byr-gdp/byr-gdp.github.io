---
layout: post
title: 《JavaScript 权威指南》笔记（二）
category: 笔记
tags: JavaScript JS 
description: 《JavaScript 权威指南》

---

（Chapter 10 —— Chapter 12）

---

# 第10章 DOM

1. DOM(文档对象模型)是针对 HTML 和 XML 文档的一个 API(应用程序编程接口)。
2. Node 类型

	每个节点都有一个 nodeType 属性,用于表明节点的类型。节点类型有12种。
	
3. 每个节点都有一个 childNodes 属性,其中保存着一个 NodeList 对象。
4. nodeName 和 nodeValue 属性（需要先判断 nodeType）
5. 将 NodeList 对象转换为数组

		function convertToArray(nodes){        	var array = null;        	try {				array = Array.prototype.slice.call(nodes, 0); //针对非 IE 浏览器 } catch (ex) {            	array = new Array();            	for (var i=0, len=nodes.length; i < len; i++){                	array.push(nodes[i]);            	}			}        	return array;    	}

6. 每个节点都有一个 `parentNode` 属性。同胞节点有 `previousSibling` 和 `nextSibling` 属性。父节点的 `firstChild` 和 `lastChild` 属性分别指向其 `childNodes` 列表中的第一个和最后一个节点。
7. `hasChildNodes()`在节点包含一或多个子节点的情况下返回 true
8. 所有节点都有的最后一个属性是 `ownerDocument`,该属性指向表示整个文档的文档节点。
9. 操作节点

	1. `appendChild()`,用于向 childNodes 列表的末尾添加一个节点。如果传入到 appendChild()中的节点已经是文档的一部分了,那结果就是将该节点从原来的位置 转移到新位置。(如传入文档的第一个节点)
	2. `insertBefore()`接受两个参数:要插入的节点和作为参照的节点。 
	3. `replaceChild()`接受两个参数:要插入的节点和要替换的节点。
	4. `removeChild()`方法接受一个参数,即要移除的节点。

10. 其他方法

	1. `cloneNode()`,参数 true 或 false 表示深浅复制
	2. `normalize()`
	
11. Document 类型

	Document 类型表示文档。在浏览器中,document 对象是 HTMLDocument(继承自 Document 类型)的一个实例,表示整个 HTML 页面。而且,document 对象是 window 对象的一个 属性,因此可以将其作为全局对象来访问。
	
12. 文档信息

	document.url、document.domain、document.referrer
	
# 第11章 DOM 扩展

1. Selectors API Level 1 的核心是两个方法:querySelector()和 querySelectorAll()。
2. querySelector()方法接收一个 CSS 选择符,返回与该模式匹配的第一个元素,如果没有找到匹配的元素,返回 null。
3. querySelectorAll()方法返回的是一个 NodeList 的实例。要取得返回的 NodeList 中的每一个元素,可以使用 item()方法,也可以使用方括号语法。
4. matchesSelector()方法，Selectors API Level 2规范为Element类型新增的一个方法。这个方法接收 一个参数,即 CSS 选择符,如果调用元素与该选择符匹配,返回 true;否则,返回 false。
5. HTML5 扩展

	1. 与类相关的扩充
		
		1. getElementsByClassName()方法
		2. classList 属性
	
	2. 焦点管理
	
		1. document.activeElement 属性,这个 属性始终会引用 DOM 中当前获得了焦点的元素
		2. document.hasFocus()方法,这个方法用于确定文档是否获得了焦点。
		
	3. HTMLDocument的变化
	
		1. readyState 属性：loading,正在加载文档；complete,已经加载完文档
		2. 兼容模式：compatMode 属性
		3. head 属性
		
	4. 插入标记
	
		1. innerHTML()
		2. outerHTML()
		3. insertAdjacentHTML()
		
	5. 滚动
	
# 第12章 DOM2 和 DOM3

1. DOM1 级主要定义的是 HTML 和 XML 文档的底层结构。DOM2 和 DOM3 级则在这个结构 的基础上引入了更多的交互能力,也支持了更高级的 XML 特性。