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

目录如下：

1. <del>Day 1: Bower——管理你的客户端依赖关系</del>
 
2. <del>Day 2: AngularJS —— 对 AngularJS 的初步认识</del>

3. Day 3: Flask —— 使用 Python 和 OpenShift 进行即时 Web 开发

4. Day 4: PredictionIO —— 如何创建一个博客推荐器

5. <del>Day 5: GruntJS —— 重复乏味的工作总会有人做（反正我不做）</del>

6. Day 6: 在 Java 虚拟机上使用 Grails 进行快速 Web 开发

7. <del>Day 7: GruntJS 在线重载 提升生产率至新境界</del>

8. <del>Day 8: Harp.JS —— 现代静态 Web 服务器</del>

9. Day 9: TextBlob —— 对文本进行情感分析

10. Day 10: PhoneGap —— 开发手机应用如此简单

11. Day 11: AeroGear 推送服务器：使应用的通知推送变得简单

12. Day 12: OpenCV —— Java 开发者的人脸检测

13. Day 13: Dropwizard —— 非常棒的 Java REST 服务器栈

14. Day14: 使用斯坦福 NER 软件包实现你自己的命名实体识别器（Named Entity Recognition，NER）

15. Day 15: Meteor —— 从零开始创建一个 Web 应用

16. Day 16: Goose Extractor —— 好用的文章提取工具

17. Day 17: 使用 JBoss Forge 和 OpenShift 构建部署 JAVA EE 6 应用

18. Day 18: BoilerPipe —— Java开发者的文章提取工具

19. <del>Day 19: EmberJS 入门指南</del>

20. Day 20: 斯坦福CoreNLP —— 用 Java 给 Twitter 情感分析

21. <del>Day 21：Docker 入门教程</del>

22. Day 22： 使用 Spring、MongoDB 和 AngularJS 开发单页面应用

23. <del>Day 23： 使用 TimelineJS 构建精美的时间轴</del>

24. Day 24: 使用 Yeoman 自动构建 Ember 项目

25. Day 25: Tornado —— 联合 Tornado、MongoDB 和 AngularJS 进行应用开发

26. <del>Day 26: TogetherJS —— 让我们一起来编程！</del>

27. <del>Day 27: Restify —— 在Node.js中构建正确的REST Web服务</del>

28. Day 28: OpenShift 的 Eclipse 集成

29. Day 29: 编写你的第一个 Google Chrome 扩展程序

30. <del>Day 30: Play Framework —— Java 开发者的梦想框架</del>

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
	
	<del>**`livereload`未能重现**，npm中[livereload](https://www.npmjs.com/package/livereload)用于服务器端，出现`require`，可能需要webpack来解决。同时GitHub的[livereload-js](https://github.com/livereload/livereload-js)应该用于浏览器端，但初步尝试会报错。</del>
	
	之前会报错是因为理解有偏差。`<script src="127.0.0.1:9877/livereload.js"></script>`并不意味着需要**亲自**把`livereload.js`文件放在根目录下（因为这样就意味着得有相应脚本，所以才会有之前`npm install livereload`和在GitHub寻找livereload源码的经历）。
	
	执行`grunt watch`后，配置信息指定了端口，此时`127.0.0.1:指定端口/livereload.js`已存在，只需要调用即可。同时无须python开启HTTP服务器，只要相应`.html`文件能正确调用脚本`livereload.js`即可。
	
	之前的做法是在工作目录执行`python -m SimpleHTTPServer 指定端口`开启HTTP服务器，而该指定端口与grunt watch配置端口一致，而这样做显然是错误的。要么端口冲突、要么无法正确地引用`livereload.js`文件
	
8. 2015-09-15	Day 23	: 使用TimelineJS构建精美的时间轴

	基于jQuery的插件，根据Config信息来定制时间轴的展示。目前我更倾向于用CSS来实现，故未花精力在此。
	
9. 2015-09-16	Day 19  : EmberJS入门指南

	简单介绍了Ember框架，并讲解如何用Ember创建一个单页面的社交化书签应用，其中涉及路由管理。当前主要重心是vue，未深入及实践。

10. 2015-09-17	Day 27  : Restify —— 在Node.js中构建正确的REST Web服务

	前后端分离是趋势，作为前端，能自己独立实现REST api着实很棒。因为node，这一切有了可能。
	
	restify是一个基于Nodejs的REST应用框架，支持服务器端和客户端。restify比起express更专注于REST服务，去掉了express中的template, render等功能，同时强化了REST协议使用，版本化支持，HTTP的异常处理。
	
	该教程中`createServer(port, ip_addr, function(){...})`可能由于版本问题导致报错，不过在去掉`ip_addr`即可。
	
	搜索资料过程中发现一个基于restify的[手机归属地查询项目](https://github.com/roymax/moquery)，还用到了redis和sqlite，挖坑学习。

11. 2015-09-18 	Day 26 	: TogetherJS —— 让我们一起来编程！

	介绍了一个来自Mozilla的很有意思的JavaScript库——TogetherJS，其采用**Web RTC**技术，实现用户在网站上实时协作，可以用来实现一些有趣的事情。	


（暂时告一段落，不再补充）

（最后修改于2015-09-18）