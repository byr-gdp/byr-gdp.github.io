---
layout: post
title: 《JavaScript DOM 编程艺术》笔记（五）
category: 笔记
tags: JavaScript DOM
description: 《JavaScript DOM 编程艺术》笔记

---

### Chapter 9 CSS-DOM

1. 三位一体的网页

	1. 结构层
	2. 表示层
	3. 行为层
	
2. 三种技术之间存在潜在的重叠区域。用DOM可以改变网页的结构;CSS利用伪类走进DOM领地，但DOM也可以给元素设定样式。
3. style属性

	1. 获取样式
	
		文档的每个**元素节点**都有一个属性`style`。`style`属性包含着元素的样式，查询这个属性将返回一个**对象**而不是一个简单的字符串。
	
		语法为：`element.style.property`
	
		关于`style`属性需要注意以下几点：
		1. 当需要引用一个中间带减号的CSS属性时，DOM要求你使用**驼峰命名法**。CSS属性`font-family`变为DOM属性`fontFamily`
		2. DOM在表示属性时采用的单位并不总是与它们在CSS样式表里的设置相同。如十六进制设置属性颜色，通过`style`查询返回结果是rgb格式
		3. style属性只能返回**内嵌样式**，不能检索外部CSS文件声明样式及`<head>`部分的`<style>`标签。另外，用DOM设置的样式，可以用DOM检索出来。
		
	2. 设置样式
	
		`style`对象各个属性可读可写。
		
		语法为：`element.style.property = value`
		
4. 何时该用DOM脚本设置样式

	1. 根据元素在节点数里的位置来设置样式
	
		在不考虑CSS3的前提下，CSS还无法根据元素间的相对位置关系找出某个特定的元素，这对DOM并不是什么难题。
		
		Snippet：获取下一个元素节点
		
			function getNextElement(node) {
				if(node.Type == 1) {
					return node;
				}
				if(node.nextSibling) {
					return getNextElement(node.nextSibling);
				}
				return null;
			}
			
	2. 根据某种条件反复设置某种样式
	
		JavaScript擅长处理重复性任务，用while或for循环就可以轻松遍历一个列表。
		
		Snippet：为表格添加斑马线效果
		
			function stripeTables() {
				if(!document.getElementsByTagName) return false;
				var tables = document.getElementsByTagName("table");
				var odd, rows;
				for(var i = 0; i < tables.length; i ++) {
					odd = false;
					rows = document.getElementsByTagName("tr");
					for(var j = 0; j < rows.length; j++) {
						if(odd == true) {
							rows[j].style.backgroundColor = "#ffc";
							odd = false;
						} else {
							odd = true;
						}
					}
				}
			}
	3. 响应事件
	
		最简单的方案是采用**伪类**，但如果想利用这个伪类在鼠标悬停时改变其他元素的样式，采用DOM。
		
		Snippet：鼠标指针悬停在表格行上方时，该行文本加粗
		
			function highlightRows() {
				if(!document.getElementsByTagName) return false;
				var rows = document.getElementsByTagName("tr");
				for(var i = 0; i < rows.length; i++) {
					rows[i].onmouseover = function() {
						this.style.fontWeight = "bold";
					}
					row[i].onmouseout = function() {
						this.style.fontWeight = "normal";
					}
				}
			}
			
	4. className属性
	
		与其使用DOM直接改变某个元素的样式，不如通过JavaScript代码去更新这个元素的class属性。
		
		1. 使用`setAttribute()`方法：
		
			语法：`element.setAttribte("class", "intro");`
			
		2. 使用`className`属性
		
			语法：`element.className = value;`
			
			不足：只能替换，不能追加
						
			完善：利用字符串**拼接操作**
			
			语法：`element.className += " intro";`注意赋值的第一个字符是**空格**
			
			实际上我们仅希望在原来确实有一个class的情况下才这么做。
			
			Snippet：addClass
			
				function addClass(element, value) {
					if(!element.className) {
						element.className = value;
					} else {
						var newClassName = " " + value;
						element.className += newClassName;
						
5. 对函数进行抽象

（完）

（最后修改于2015-09-21）