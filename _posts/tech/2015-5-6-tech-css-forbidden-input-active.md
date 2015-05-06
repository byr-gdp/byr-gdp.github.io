---
layout: post
title: 通过CSS禁止鼠标激活input框样式
category: 技术
tags: CSS input 样式
description: 通过CSS禁止鼠标激活input框样式
---

Chrome默认会为所有的输入框加上某种颜色的边框，虽然有时候可以使我们的网站看起来更友好，比如说当获得焦点的时候，但对自定义的样式是有影响的，比如设置了`background-color: transparent`。解决该问题的方法是通过给激活后的输入框加上如下CSS语句加以限制  
	
	outline:none;

例如，对于class属性为class1的输入框，实现如下：	
	
	input.class1:focus{
		outline: none;
	}

若需要禁止所有被激活的输入框添加边框，实现如下：
	
	*:focus{
		outline: none;
	}

<完>