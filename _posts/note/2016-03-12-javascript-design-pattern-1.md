---
layout: post
title: 《JavaScript 设计模式与开发指南》笔记（一）
category: 笔记
tags: JavaScript 设计模式 开发指南
description: 《JavaScript 设计模式与开发指南》

---

# 前言

1. 设计模式的定义

	在面向对象软件设计过程中针对特定问题的简介而优雅的解决方案。
	
# 第一部分 基础知识
	
## 第1章 面向对象的 JavaScript

1. JavaScript 中的原型继承

	基本规则：
		
		* 所有的数据都是对象
		* 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它
		* 对象会记住它的原型
		* 如果对象无法响应某个请求，它会把这个请求委托给它自己的原型
		
## 第2章 this、call 和 apply

1. this

	1. this 的指向，除去不常用的 with 和 eval 情况，实际应用可以分为以下四类
	
			* 作为对象的方法调用
			* 作为普通函数调用
			* 构造器调用
			* Function.prototype.call 和 Function.prototype.apply 调用
			
## 第3章 闭包和高阶函数

1. 高阶函数

	1. 高阶函数是至少满足下列条件之一的函数
	
			* 函数可以作为参数被传递
			* 函数可以返回值输出
			
（P44）

---

最后修改于 2016-03-13