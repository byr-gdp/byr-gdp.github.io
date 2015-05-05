---
layout: post
title: React 入门实例教程
category: React
tags: React.js
description: React 入门实例教程
---

### 0.写在前面
这是用来记录我在学习React.js过程中所参考的不错的教程。 

### 1.阮一峰——React 入门实例教程
链接地址：[React 入门实例教程](http://www.ruanyifeng.com/blog/2015/03/react.html)

1. JSX 的基本语法规则：遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析。
2. `React.createClass` 方法就用于生成一个组件类。
3. `this.props.children` 属性，它表示组件的所有子节点。只有当子节点多余1个时，this.props.children 才是一个数组，否则是不能用 map 方法的， 会报错。
4. `React.findDOMNode()`
5. 组件的生命周期分为三个状态：
	1. Mounting：已插入真实DOM
	2. Updating：正在被重新渲染
	3. Unmounting：已移出真实DOM  

	React为每个状态都提供了两种处理函数，will函数在进入状态之前调用，did函数在进入状态之后调用，三种共五种处理函数。
	- componentWillMount()
	- componentDidMount()
	- componentWillUpdate()
	- componentDidUpdate()
	- componentWillUnmount()
	
	此外，React还提供两种特殊状态的处理函数：
	1. componentWillReceiveProps(object nextProps):已加载组件收到新的参数时调用
	2. shouldComponentUpdate(object nextProps, object nextState):组件判断是否重新渲染时调用

6. 使用 componentDidMount 方法设置 Ajax 请求 