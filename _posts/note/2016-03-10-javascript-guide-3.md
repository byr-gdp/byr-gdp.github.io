---
layout: post
title: 《JavaScript 权威指南》笔记（三）
category: 笔记
tags: JavaScript JS 
description: 《JavaScript 权威指南》

---

# 附录 A ECMAScript Harmony

1. 一般性变化

	1. 常量（const 声明）
	2. 块级作用域及其他作用域（let 声明）
	
2. 函数

	1. 剩余参数与分布参数
	
		Harmony 不再有 arguments 对象，无法通过它来读取未声明的参数。不过使用剩余参数（rest arguments）语法来代替。语法形式为三个点后跟一个标识符。
		
		分布参数的语法形式与剩余参数的语法相同。唯一的区别是分布参数在调用函数的时候使用，而剩余参数在定义函数的时候使用。
		
	2. 默认参数值
	3. 生成器（yield、next）
	
3. 数组及其他结构

	1. 迭代器（Iterator 对象）
	2. 数组领悟
	3. 解构赋值
	
4. 新对象类型

	1. 代理对象
	2. 代理函数
	3. 映射与集合
	4. WeekMap（ECMAScript 中唯一能让你知道什么时候对象已经完全解除引用的类型）
	5. StructType
	6. ArrayType
	
5. 类

	1. 私有成员
	2. getter 和 setter
	3. 继承
	 
6. 模块（import）

# 附录 B 严格模式



