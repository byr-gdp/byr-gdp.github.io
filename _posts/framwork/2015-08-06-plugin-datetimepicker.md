---
layout: post
title: 时间日期选择器 datetimepicker
category: 插件
tags: bootstrap jquery datetimepicker
description: 时间日期选择器 datetimepicker

---

最近着手公司后台项目，接触了这款日期时间选择的插件，因为需要将所获得的时间按照后台要求的格式处理后再进行请求，为尽快解决问题便采用了无脑的字符串拼接，趁机会花了点时间通读了文档和案例，以求找到更优雅的解决方案。

时间日期选择器主要实现三个功能：

	1. 获取时间日期，如 2015-08-06 15：58
	2. 获取日期，如 2015-08-06
	3. 获取时间，如 15：58
	
剩下的基本上都属于格式化处理。

根据[官方Tutorial](http://www.bootcss.com/p/bootstrap-datetimepicker/)，完成了实现以上三个功能的[Demo(基于bootstrap v3)](/html/2015-08-06-plugin-datetimepicker/v3_test.html)，源码对部分参数进行了注释，项目中可直接套用所需要的模块。由于官网中文翻译不完整，自己试着翻译，成果[在此](/2015/08/07/plugin-datetimepicker-tutorial.html)，更多自定义选项可参考[官网](http://www.bootcss.com/p/bootstrap-datetimepicker/).