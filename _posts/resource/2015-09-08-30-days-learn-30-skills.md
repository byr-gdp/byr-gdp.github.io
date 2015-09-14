---
layout: post
title: 《30天学习30种新技术》
category: 资源
tags: web angular css js
description: 《30天学习30种新技术》

---

在[segmentfault](segmentfault.com)发现的系列文章[30天学习30种新技术](http://segmentfault.com/a/1190000000349384)。深度谈不上，但选题吸引人，尽管是两年前的文章，但其中绝大多数甚至都没有听说过.

Just give it a try.


---

为了践行这个计划，避免半途而废。不按顺序的选择最感兴趣的内容学习且每学习一种新技术记录当时日期和小结。

1. 2015-09-08	Day 30: Play Framework —— Java 开发者的梦想框架

	老版项目用到的全栈框架，另有基于Play框架的博客引擎[教程](http://segmentfault.com/a/1190000000575009),可以一试。因为Java基础不好，故没有深入。
	
2. 2015-09-09	Day 1 : 管理你的客户端依赖关系

	比较明确地解释清楚 package.json 和 bower.json 的工作原理和生成方式，同时弄清楚 `--save` 和 `--save-dev` 意义和区别。
	
3. 2015-09-09	Day 2 : AngularJS —— 对 AngularJS 的初步认识

	对于AngularJS和Vue认知程度一直比较肤浅，这次也只是简单回顾地过滤器和控制器。这次用到之前学习的的bower，从零开始生成配置`bower.json`。
	
4. 2015-09-10	Day 8 : Harp.JS —— 现代静态 web 服务器

	Harp是一个开源静态服务器，[官方文档](http://harpjs.com/docs/deployment/harp-platform)，为诸如`.jade`、`.md`、`.coffee`、`less`、`styl`、`html`、`js`、`css`等静态资源提供服务。
	
	初始化后的目录结构如下：
	
		.
		├── 404.jade
		├── _layout.jade
		├── index.jade
		└── main.less
		
	和当前使用的jekyll很类似，以后学习jekyll相关或许用的着。
	最近整理书签发现了一个非常nice的网站 [StaticGen](https://www.staticgen.com/)，上面收集了比较著名的开源静态站点生成器，当然其中也包含了jekyll和Harp。
	
5. 2015-09-11	Day 21 : Docker 入门教程

	此次没有实践，因为该教程是在Fedora机器上测试的。更多的收获是Docker和vagrant的区别。
	比较直观的一点是前者更省资源，后者是基于Virtual Box提供的虚拟机，提供的是完整地操作系统，启动较长时间，消耗内存和CPU。

6. 2015-09-13	Day 5  : GruntJS —— 重复乏味的工作总会有人做（反正我不做）

	从零开始配置了**Gruntfile**，并简单使用了`contrib-uglify`、`grunt-markdown`、`grunt-markdown-pdf`。其中`grunt-markdown-pdf`挺有意思，可扩展CSS，自定义程度高。

7. 2015-09-14	Day 7  : GruntJS 在线重载 提升生产率至新境界

	使用的插件有`grunt-markdown`、`grunt-contrib-uglify`、`grunt-contrib-watch`。需要注意的是**watch**的配置方法，不需要`grunt.registerTask(...)`，使用时直接`grunt watch`即可。
	
	**`livereload`未能重现**，npm中[livereload](https://www.npmjs.com/package/livereload)用于服务器端，出现`require`，可能需要webpack来解决。同时GitHub的[livereload-js](https://github.com/livereload/livereload-js)应该用于浏览器端，但初步尝试会报错。
	
（未完待续）
（最后修改于2015-09-14）