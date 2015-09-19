---
layout: post
title: 5个示例带你学习AngularJS学习总结
category: 框架
tags: AngularJS Angular.js
description: 5个示例带你学习AngularJS学习总结

---

### 0.写在前面

原文地址：[5个示例带你学习AngularJS](http://blog.jobbole.com/48979/)
源码下载：[下载地址](http://demo.tutorialzine.com/2013/08/learn-angularjs-5-examples/angularjs-examples.zip)

### 1.导航菜单

1. `<nav>`的class  
	`<nav>`设置class的目的是为了配合css，当`<a>`被点击后更新样式。详见css源码
2. `<a>`的ng-click
	1. `<nav>`中的ng-click已阻止了默认行为。
	2. `<a>`中的ng-click目的在于设置active值
3. `<p>`的ng-hide和ng-show
	1. 若ng-show的值是truthful,则显示该元素。ng-hide与此相反。
	2. ng-show的值并无初始化，只有在nav元素被点击后才赋值。

### 2.内联编辑器

1. 控制器能够初始化模型，使用ng-controller指定关联相关的页面
2. ng-click  
	1. hideTooktip()
	2. stopPropagation() 阻止事件传播
	3. toggleTooltip($event) 一方面阻止事件传播，一方面值取反
3. ng-model  
	绑定在文本域上告诉Angular当域值改变时，要更新相关内容

### 3.订单表单

1. 过滤器   
	通过管道符"|"级联起来修改模型

2. no-repeat  
	遍历数组元素并生成相应的标记

### 4.即时搜索

1. ng-app  
	通过ng-app指令值传递模块的名称

2. 创建过滤器仅仅是简单地调用angular.module("name", [])返回的模块对象上的filter()方法。

### 5.切换网络

1. var app = angular.module("switchableGrid", ['ngResource']);

2. app.factory('instagram', function($resource);  
	工厂函数这部分不理解


