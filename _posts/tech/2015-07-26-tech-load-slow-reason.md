---
layout: post
title: 页面加载慢原因分析
category: 技术
tags: 页面加载 慢 原因分析
description: 页面加载慢原因分析

---

记录个不错网站：[性能魔方](http://www.mmtrix.com/)

扩展阅读：http://www.zhihu.com/question/27085552

所有结论都源于**瀑布图**

1. 后端问题
	
	第一个请求特别长

2. 请求数太多

	css、js合并，sprite，字体图标

3. 老鼠屎——某个资源太慢

	1. 资源在第三方站点上，它们很慢；
	2. 这个资源太大了；
	3. 这个资源使用的域名有问题。

4. 网络问题

	一个http请求分为若干阶段，分别是**域名解析**、**建立连接**、**发送请求**、**等待响应**和**接收数据**几个阶段。理论上域名解析和建立连接应该占用的时间很小。

5. 接收数据时间过长——下载内容太重

	使用GZIP压缩、图片压缩或者JS/CSS的minify等手段来解决。

6. js阻塞请求
	
	两个连续的请求之间出现了一个很大的空隙，解析执行js花了很长时间。