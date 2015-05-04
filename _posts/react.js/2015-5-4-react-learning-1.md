---
layout: post
title: React.js学习笔记
category: React.js
tags: React.js
description: react.js学习笔记
---

### 1. HTML 标签与 React 组件对比

1. 要渲染 HTML 标签，只需在 JSX 里使用小写字母开头的标签名。
	
		var myDivElement = <div className="foo" />;
		React.render(myDivElement, document.body);  

2. 要渲染 React 组件，只需创建一个大写字母开头的本地变量。

		var MyComponent = React.createClass({/*...*/});
		var myElement = <MyComponent someProperty={true} />;
		React.render(myElement, document.body);

3. 由于 JSX 就是 JavaScript，一些标识符像 class 和 for 不建议作为 XML 属性名。作为替代，React DOM 使用 `className` 和 `htmlFor` 来做对应的属性。