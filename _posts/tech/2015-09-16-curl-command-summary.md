---
layout: post
title: curl 指令小结
category: 技术
tags: Linux curl
description: curl 指令小结

---

参考阮一峰[curl网站开发指南](http://www.ruanyifeng.com/blog/2011/09/curl.html)，不是特别全面但入门够用，和参考的其他资料相比参数使用更『语义化』，比如设置UA，使用`--user-agent`而非`-A`等等，在不是很熟悉的情况下更易于理解。

下面对常用命令的总结，持续补充中...


1. 简单使用，返回网页源码

	`curl + [url]`
	
2. 保存网页源码

	1. 重定向 
		
		`curl url > [fileName]`
		
	2. `-o`参数
	
		`curl -o [fileName] [url]`
		
3. 自动跳转

	使用`-L`参数，如
	
	`curl -L [url]`
	
4. 显示头信息（**http response**）

	1. 使用`-i`参数，连同网页代码一起显示
	
		`curl -i [url]`
		
	2. 使用`-I`参数，仅显示http头信息
	
		`curl -I [url]`

5. 显示通信过程

	`-v`参数可以显示一次http通信的整个过程，包括端口连接和**http request**头信息。
	
6. 更为详细的通信过程

	`curl --trace [fileName] [url]`
	
	或者
	
	`curl --trace-ascii [fileName] [url]`

7. 发送表单信息

	1. GET
	
		数据跟在url后即可，如
		
		curl exmaple.com/form.cgi?data=xxx
	
	2. POST
	
		POST方法必须把数据和网址分开，用到`--data`参数
		
		`curl --data "data=xxx" example.com/form.cgi`
		
		curl可为数据编码，参数为`--data-urlencode`
		
		`curl --data-urlencode "data=April 1" example.com/form.cgi`

8. 文件上传（略）

9. Referer字段

	表示从哪里跳转过来，如
	
	`curl --referer [refererUrl] [targetUrl]`
	
10. User Agent字段

	`curl --user-agent "[User Agent]" [url]`
	
11. cookie

	参数`--cookie`，发送cookie
	
	`curl --cookie "name=xxx" [url]`
	
11. 增加头信息

	参数`--header`,如
	
	`curl --header "xxx:xxxx" [url]`

12. HTTP认证

	有些网域需要HTTP认证，这时curl需要用到–user参数。（不确定能否用于登陆校园网网关）
	
	`curl --user name:password [url]`







