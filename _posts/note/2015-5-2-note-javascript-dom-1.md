---
layout: post
title: 《JavaScript DOM 编程艺术》笔记（一）
category: 笔记
tags: JavaScript DOM
description: 《JavaScript DOM 编程艺术》笔记
---

### Chapter 1 JavaScript简史

### Chapter 2 Javascript语法
1. 数组  
	关联数组：如果在填充数组时只给出了元素的值，这个数组就将是一个传统数组，它的各个元素的下标将被自动创建和刷新。可以通过在填充数组时为每个新元素明确地给出下标来改变这种默认的行为。在为新元素给出下标时，不必局限于使用整数数字，可以使用字符串：  
		
		var lennon = Array();  
		lennon["name"] = "John";  
		lennon["yeaer"] = "1940";  
		lennon["living"] = false;  
	
	但这种用法并不是一个好习惯，实际上是给lennon数组添加了name、year和living三个属性

2. 对象   
	创建对象使用**Object**关键字，上一节的lennon数组可以创建成下面这个对象：
	
		var lennon = Object();  
		lennon.name = "John";  
		lennon.year = 1940;  
		lennon.living = false;  

	进一步使用一种更简洁的语法，即花括号语法：
		
		var lennon = {name:"John", year:1940, living:false};

	下面创建一个beatles数组，并用刚才创建的lennon对象来填充它的第一个元素。
	
		var beatles = Array();  
		beatles[0] = lennon;

	此时我们可以通过beatles[0].name得到值"John"。   
	但这远远不够，可以进一步改进：把beatles数组也声明为对象而不是传统数组，避免用下标去访问数组里的元素。
	
		var beatles = {};  
		beatles.vocalist = lennon;

	现在可以通过beatles.vocalist.name得到值"John"。

3. 关于命名
	在命名变量时，用下划线来分隔各个单词；在命名函数时，采用驼峰命名法。这么做可以一眼看出哪些名字是变量，哪些名字是函数。

### Chapter 3 DOM
1. 5个常用的DOM方法：getElementById、getElementsByTagName、getElementsByClassName、getAttribute、setAttribute
2. 节点（node)
	1. 元素节点(element node)
	2. 文本节点(text node)
	3. 属性节点(attribute node)

3. getElementsByClassName兼容老浏览器  
		
		function getElementsByClassName(node, classname){
			if(node.getElementsByClassName){
				//使用现有方法
				return node.getElementsByClassName(classname);
			} else{
				var results = new Array();
				var elems = node.getElementsByTagName("*");
				for(var i=0; i<elems.length; i++){
					if(elems[i].className.indexOf(classname)!=-1){
						results[results.length]=elems[i];
					}
				}
				return results;
			}
		}

4. DOM的工作模式：先加载文档的静态内容，再动态刷新，动态刷新不影响文档的静态内容。
5. getElementById返回一个对象，getElementsByTagName和getElementsByClassName返回一个对象数组。