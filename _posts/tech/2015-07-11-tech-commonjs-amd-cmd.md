---
layout: post
title: AMD vs CommonJS vs CMD
category: 技术
tags: AMD CommonJS CMD
description: AMD vs CommonJS vs CMD

---

# 1. CommonJS

## 1. node的所有模块均为CommonJS格式

## 2. CommonJS定义的模块分为:
	
1. 模块引用(require)
2. 模块定义(exports)
3. 模块标识(module)
	
require()用来引入外部模块；exports对象用于导出当前模块的方法或变量，唯一的导出口；module对象就代表模块本身。

CommonJS是主要为了JS在后端的表现制定的
	
# 2. AMD(异步模块定义)

## 1. AMD是主要为了JS在前端的表现制定的

## 2. JS运行环境
		
### 1. 浏览器端
			
1. 代码需要从一个服务器端分发到多个客户端执行
2. **带宽是瓶颈**
3. 加载时需要通过网络加载
		
### 2. 服务器端：
			
1. 相同的代码需要多次执行
2. **CPU和内存资源是瓶颈**
3. 加载时从磁盘中加载
			
# 3. CMD

与AMD蛮相近。
	
关键词：玉伯、sea.js
	
# 4. 参考资料：

[浅析JS中的模块规范（CommonJS，AMD，CMD）](http://www.2cto.com/kf/201411/348276.html)

---

最后修改于2015-08-25 10:15:10