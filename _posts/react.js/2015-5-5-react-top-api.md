---
layout: post
title: React 顶层API
category: React
tags: React React.js
description: React 顶层API
---
### 0.写在前面
顶层API总结来源于[中文文档](http://reactjs.cn/react/docs/top-level-api.html)，大多数比较陌生。总结出来方便以后查询。考虑到我对很多API的理解并不深刻，很多说明都是照搬原来文档，以后我会根据学习情况来添加自己的理解。

### 1.React.createClass
	ReactClass createClass(object specification)  

创建一个组件类，并作出定义。组件实现了 render() 方法，该方法返回一个子级。该子级可能包含很深的子级结构。

### 2.React.createElement
	ReactElement createElement(
		string/ReactClass type,
		[object props],
		[children ...]
	)  

建并返回一个新的指定类型的 ReactElement。type 参数可以是一个 html 标签名字字符串（例如，“div”，“span”，等等），或者是 ReactClass。

### 3.React.createFactory
	factoryFunction createFactory(
		string/ReactClass type
	)  

返回一个生成指定类型 ReactElements 的函数。比如 React.createElement，type 参数可以是一个 html 标签名字字符串（例如，“div”，“span”，等等），或者是 ReactClass

### 4.React.render
	ReactComponent render(
		ReactElement element,
		DOMElement container,
		[function callback]
	)  

渲染一个 ReactElement 到 DOM 中，放在 container 指定的 DOM 元素下，返回一个到该组件的引用。

### 5.React.unmountComponentAtNode
	boolean unmountComponentAtNode(DOMElement container)  

从 DOM 中移除已经挂载的 React 组件，清除相应的事件处理器和 state。如果在 container 内没有组件挂载，这个函数将什么都不做。如果组件成功移除，则返回 true；如果没有组件被移除，则返回 false。

### 6.React.renderToString
	string renderToString(ReactElement element)  

把组件渲染成原始的 HTML 字符串。该方法应该仅在服务器端使用。React 将会返回一个 HTML 字符串。你可以在服务器端用此方法生成 HTML，然后将这些标记发送给客户端，这样可以获得更快的页面加载速度，并且有利于搜索引擎抓取页面，方便做 SEO。

### 7.React.renderToStaticMarkup
	string renderToStaticMarkup(ReactElement element)  

和 renderToString 类似，除了不创建额外的 DOM 属性，例如 data-react-id，因为这些属性仅在 React 内部使用。如果你想用 React 做一个简单的静态页面生成器，这是很有用的，因为丢掉额外的属性能够节省很多字节。

### 8.React.isValidElement
	boolean isValidElement(* object)  

判断对象是否是一个ReactElement

### 9.React.DOM
React.DOM 运用 React.createElement 为 DOM 组件提供了方便的包装。该方式仅在未使用 JSX 的时候适用。例如，React.DOM.div(null, 'Hello World!')。

### 10.React.PropTypes
React.PropTypes 包含了能与组件 propTypes 对象共用的类型，用于验证传入组件的 props。

### 11.React.initializeTouchEvents
	initializeTouchEvents(boolean shouldUseTouch)  

配置 React 的事件系统，使 React 能处理移动设备的触摸（ touch ）事件。

### 12.React.Children
React.Children 为处理 this.props.children 这个封闭的数据结构提供了有用的工具。

### 13.React.Children.map
	object React.Children.map(object children, function fn [, object context])  

在每一个直接子级（包含在 children 参数中的）上调用 fn 函数，此函数中的 this 指向 上下文。如果 children 是一个内嵌的对象或者数组，它将被遍历：不会传入容器对象到 fn 中。如果 children 参数是 null 或者 undefined，那么返回 null 或者 undefined 而不是一个空对象。

### 14.React.Children.forEach
	React.Children.forEach(object children, function fn [, object context])  

类似于 React.Children.map()，但是不返回对象。

### 15.React.Children.count
	number React.Children.count(object children)  

返回 children 当中的组件总数，和传递给 map 或者 forEach 的回调函数的调用次数一致。

### 16.React.Children.only
	object React.Children.only(object children)  

返回 children 中仅有的子级。否则抛出异常。