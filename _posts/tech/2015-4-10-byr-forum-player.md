---
layout: post
title: 如何在北邮人论坛回帖插入外链播放器
category: 技术
tags: 北邮人论坛
description: 如何在北邮人论坛回帖插入外链播放器

---


### 最终效果如下  
![](http://i.imgur.com/hMd4kjL.png)  

核心部分即回帖内容格式，以截图内容为例  
>[swf=http://music.163.com/style/swf/widget.swf?sid=30053697&type=2&auto=1&width=320&height=66 width=340&height=86][/swf]  

基本格式为`[swf="swf文件地址及参数"][/swf]`  

swf文件地址及参数的如何获取？下面以网易云音乐为例  

---  

### 1. 在WEB端的网易云音乐找到你所心仪的歌曲，如下图
  
![](http://i.imgur.com/x5uT6xA.png)  

---  

### 2. 单击**生成外链播放器**，在没有版权保护的情况下，进入下图所示界面  

![](http://i.imgur.com/HdgWLra.png)  

---  

### 3. 选择**flash插件**  

![](http://i.imgur.com/mAPI11M.png)  

---  

### 4. 注意**HTML代码**部分，将以下部分复制下来，此即“swf文件地址及参数”的前身  

`http://music.163.com/style/swf/widget.swf?sid=30053697&type=2&auto=1&width=320&height=66" width="340" height="86"`  

---  

### 5. 去掉参数中的**双引号** ，同时两个参数之间用**&**连接，修改后即为我们需要的“swf文件地址及参数”  
 

`http://music.163.com/style/swf/widget.swf?sid=30053697&type=2&auto=1&width=320&height=66&width=340&height=86`  

---  

### 6. 代入基本格式，即为回帖内容  

`[swf=http://music.163.com/style/swf/widget.swf?sid=30053697&type=2&auto=1&width=320&height=66 width=340&height=86][/swf]`  
<完>    
<最后修改于2015年4月10日>	