---
layout: post
title: 《锋利的 jQuery》笔记（一）
category: 笔记
tags: JavaScript, jQuery
description: 《锋利的 jQuery》笔记（一）

---

# 第一章 认识 jQuery

1. `window.onload` 与 `$(document).ready()` 区别。

	前者必须等待网页中所有的内容加载完毕后（包括图片）才能执行，后者指网页中所有 DOM 结构绘制完毕后就执行，可能 DOM 元素关联的东西并没有加载完。
	
2. `$(document).ready()` 可以简写成 `$(function(){})`。

# 第二章 jQuery 选择器

1. 使用 jQuery 判断某个元素是否存在。

		// 不能使用以下代码，因为 $("#tt") 获取的永远是对象
		if ($("#tt")) {
			// do something
		}
		
		// 可以通过获取到元素的长度来判断
		if ($("#tt").length > 0) {
			// do someting
		}
		
		// 或者转化成 DOM 对象来判断
		if ($("#tt")[0]) {
			// do something
		}

2. 层次选择器。

	- 可以使用 next() 方法代替 $("prev + next") 选择器。
	- 可以使用 nextAll() 方法代替 $("prev ~ siblings") 选择器。
	- siblings() 方法与前后位置无关，只要是同辈节点都能匹配。
	
3. 过滤选择器，都以一个冒号(:)开头。

4. 选择器中含有特殊符号需要转义，添加`\\`
5. 选择器分为：基本选择器、层次选择器、过滤选择器、表单选择器。其中过滤选择器又分为：基本过滤选择器、内容过滤选择器、可见性过滤选择器、属性过滤选择器、子元素过滤选择器、表单对象属性过滤选择器。

# 第三章 DOM 操作

1. DOM 操作有三个分类：分别是 DOM Core(核心)、HTML-DOM 和 CSS-DOM。

	DOM Core: document.getElementsByTagName("form");
	
	HTML-DOM: document.forms;
	
	CSS-DOM: element.style.color = "red";
	





