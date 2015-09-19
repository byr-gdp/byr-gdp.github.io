---
layout: post
title: http与https区别
category: 技术
tags: http https
description: http与https区别
---

### 1.需要证书
https协议需要到[CA(数字证书认证机构)](http://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%97%E8%AF%81%E4%B9%A6%E8%AE%A4%E8%AF%81%E6%9C%BA%E6%9E%84)申请证书，一般免费证书很少，需要交费。

### 2.https=http+ssl
http(HyperText Transfer Protocol)是超文本传输协议，信息是明文传输，https(Hyper Text Transfer Protocol over Secure Socket Layer)则是具有安全性的ssl加密传输协议。知乎关于问题[http和https有何区别？如何灵活使用？](http://www.zhihu.com/question/19577317)讨论中排名第一的答案提到：  
	
	http是HTTP协议运行在TCP之上。所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份。https是HTTP运行在SSL/TLS之上，SSL/TLS运行在TCP之上。

### 3.端口不同
http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。

### 4.安全性更高
http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

### 5.扩展阅读
[HTTPS的七个误解（译文）](http://www.ruanyifeng.com/blog/2011/02/seven_myths_about_https.html)。虽然是2011年的文章，但其中某些观点对于初学者来说还是很有意义的。