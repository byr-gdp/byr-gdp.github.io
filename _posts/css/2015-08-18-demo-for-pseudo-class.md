---
layout: post
title: 代码规范之伪元素选择器（伪类）
category: 技术
tags: css, selector, pseudo-classes
description: 代码规范之伪元素选择器（伪类）

---

最近在看《CSS权威指南》，第二章结尾伪元素选择器部分，试着写几个demo来看效果。但一开始并没有达到理想效果。

代码如下：

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<style>
		p: first-letter{ font-size: 300%; color: red;}
		p: first-line { color: red;}
		</style>
	</head>
	<body>
		<h3>Welcome </h3>
		<p>Hello World.</p>
		<p>This is a long long long sentence. This is a long long long sentence. This is a long long long sentence. This is a long long long sentence.</p>
	</body>
	</html>
	
但一直没有效果，后参考w3school，比较代码发现原来是`<style>`中样式格式问题。冒号`:`左右不能有任何空格。正确的写法是：`p:first-letter`，而`p: first-letter`和`p :first-letter`都是存在问题的。

对于写样式在冒号`:`后加空格的习惯，在伪选择器不适用了。但对于伪类，除了冒号`:`左右均不加空格外，`p :hover`也是适用的。

以上测试环境 Google Chrome 版本 44.0.2403.155 (64-bit)