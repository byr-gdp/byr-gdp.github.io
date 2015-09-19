---
layout: post
title: React 组件API
category: 框架
tags: React React.js
description: React 组件API

---

### 0.写在前面
组件API总结来源于[中文文档](http://reactjs.cn/react/docs/component-api.html)。除了setState外其它均很陌生。总结出来方便以后查询。很多说明都是照搬原来文档，以后我会根据学习情况来添加自己的理解。

### 1.setState
	setState(object nextState[, function callback])  

绝对不要直接改变 this.state，因为在之后调用 setState() 可能会替换掉你做的更改。
setState() 不会立刻改变 this.state，而是创建一个即将处理的 state 转变。在调用该方法之后获取 this.state 的值可能会得到现有的值，而不是最新设置的值。

### 2.replaceState
	replaceState(object nextState[, function callback])  

类似于 setState()，但是删除之前所有已存在的 state 键，这些键都不在 nextState 中。

### 3.forceUpdate()
	forceUpdate([function callback])  

通常情况下，应该尽量避免所有使用 forceUpdate() 的情况，在 render() 中仅从 this.props 和 this.state 中读取数据。这会使应用大大简化，并且更加高效。

### 4.getDOMNode
	DOMElement getDOMNode()  

如果组件已经挂载到了 DOM 上，该方法返回相应的本地浏览器 DOM 元素。

### 5.isMounted()
	bool isMounted()  

如果组件渲染到了 DOM 中，isMounted() 返回 true。可以使用该方法保证 setState() 和 forceUpdate() 在异步场景下的调用不会出错。

### 6.setProps
	setProps(object nextProps[, function callback])  

尽管在同一个节点上再次调用 React.render() 来更新根组件是首选的方式，也可以调用 setProps() 来改变组件的属性，触发一次重新渲染。

### 7.replaceProps
	replaceProps(object nextProps[, function callback])  

类似于 setProps()，但是删除所有已存在的 props，而不是合并新旧两个 props 对象。