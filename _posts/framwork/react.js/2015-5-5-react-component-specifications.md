---
layout: post
title: 组件的详细说明
category: 框架
tags: React React.js
description: 组件的详细说明

---

### 0.写在前面
组件的详细说明总结来源于[中文文档](http://reactjs.cn/react/docs/component-specs.html)。除了render()和getInitialState()外其它均很陌生。总结出来方便以后查询。很多说明都是照搬原来文档，以后我会根据学习情况来添加自己的理解。

### 1.render
	ReactComponent render()  

render() 方法是必须的。  
render() 函数应该是纯粹的，也就是说该函数不修改组件 state，每次调用都返回相同的结果，不读写 DOM 信息，也不和浏览器交互（例如通过使用 setTimeout）。如果需要和浏览器交互，在 componentDidMount() 中或者其它生命周期方法中做这件事。保持 render() 纯粹，可以使服务器端渲染更加切实可行，也使组件更容易被理解。

### 2.getInitialState
	object getInitialState()  

在组件挂载之前调用一次。返回值将会作为 this.state 的初始值。

### 3.getDefaultProps
	object getDefaultProps()  

在组件类创建的时候调用一次，然后返回值被缓存下来。如果父组件没有指定 props 中的某个键，则此处返回的对象中的相应属性将会合并到 this.props （使用 in 检测属性）。

### 4.propTypes
	object propTypes  

`propTypes` 对象允许验证传入到组件的 props。

### 5.mixins
	array mixins  

`mixin` 数组允许使用混合来在多个组件之间共享行为。

### 6.statics
	object statics  

`statics` 对象允许你定义静态的方法，这些静态的方法可以在组件类上调用。

### 7.displayName
	string displayName  

`displayName` 字符串用于输出调试信息。