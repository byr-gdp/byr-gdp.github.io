---
layout: post
title: 前端开发自动刷新实现方法总结
category: 工具
tags: 前端
description: 前端开发自动刷新实现方法总结

---

### 1. [Live.js](http://livejs.com/)  
官网介绍：

	Just include Live.js and it will monitor the current page including local CSS and Javascript by sending consecutive HEAD requests to the server. Changes to CSS will be applied dynamically and HTML or Javascript changes will reload the page.  

大意就是引入`Live.js`文件后它会通过不断发送HEAD请求来监视当前页面本地CSS和JS。任何CSS的改变会动态显示同时HTML和JS的变化会重载页面。  
使用方法：  
	1. 下载`live.js`文件并引入到HTML文件中  
	2. 官网原文这样描述  
	
	use the bookmarklet! Drag the following link to your bookmarks bar   
  
意思应该是把该链接拖到书签即可使用，初步尝试没有效果。

### 2.[LiveReload](http://livereload.com/)
三大平台均有，本文只限于Windows版  
使用方法：  
1. 下载适合Windows的安装包，下载链接[单击我](http://download.livereload.com/windows/LiveReloadSetup.exe)  
2. 在线安装需要一段时间，安装成功后打开出现如下界面  
![](http://i.imgur.com/gvnHYkC.png)  
接下来单击**+add**添加一个工作目录后如下图  
![](http://i.imgur.com/uTqdz4d.png)  
选中之前添加的目录，界面如下  
![](http://i.imgur.com/u25Pts2.png)  
注意红色矩形圈中部分  
![](http://i.imgur.com/MYgd76e.png)  
接下来有两种方法。  
1. 一种是在HTML文件`<body>`前嵌入下面一段话  
 
	<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>  

2.安装浏览器插件（推荐）  

1. 单击`install browser extensions`链接
2. 在打开的网页如下图，根据你的浏览器选择对号入座，这里以Chrome为例  
![](http://i.imgur.com/VFuKTbF.png)
3. 点击`Chrome extension on the Chrome Web Store`,按照提示安装即可。**注意：安装完插件后需要进入扩展程序设置允许LiveReload访问文件地址**，如下图所示  
![](http://i.imgur.com/OuCroL4.png)  

	**Done,enjoy it！**  

### 3. 包括但不限于以上方法，还有诸如**F5**、**brackets**等等，有机会再来补充  

<完>  

<最后修改于2015-4-15 22:47:47>