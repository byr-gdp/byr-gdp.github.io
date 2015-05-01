---
layout: post
title:  关于JSONP的几点总结
category: resource
tags: JSONP
description: 关于JSONP的几点总结
---

### 0.写在前面
JSONP是在参加乐视WEB前端开发实习生面试过程中面试官问到的一个概念，之前在[W3CSCHOOL.CC](http://www.w3cschool.cc/jquery/jquery-tutorial.html)看jQuery文档的时候看见过，只是一闪而过，没想到面试就出现了...

### 1.什么是JSONP
1. JSONP(JSON with Padding) 是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。
2. 由于同源策略，一般来说位于 server1.example.com 的网页无法与不是 server1.example.com 的服务器沟通，而 HTML 的 `<script>` 元素是一个例外。利用 `<script>` 元素的这个开放策略，网页可以得到从其他来源动态产生的 JSON 资料，而这种使用模式就是所谓的 JSONP。用 JSONP 抓到的资料并不是 JSON，而是任意的 JavaScript，用 JavaScript 直译器执行而不是用 JSON 解析器解析。
3. JSON和JSONP虽然只有一个字母的差别，但其实他们根本不是一回事儿：JSON是一种数据交换格式，而JSONP是一种依靠开发人员的聪明才智创造出的一种非官方跨域数据交互协议。
4. 另一种说法—典型的 JSONP 就是把既有的 JSON API 用函数呼叫包起来以达到跨域存取的解法

### 2.JSONP应用
1. 服务器端jsonp.php代码为：  
>
<?php  
	header('Content-type: application/json');  
	//获取回调函数名  
	$jsoncallback = htmlspecialchars($_REQUEST ['jsoncallback']);  
	//json数据  
	$json_data = '[{"name":"PersonA","age":"12"},{"name":"PersonB","age":"21"}]';  
	//输出jsonp格式的数据  
	echo $jsoncallback . "(" . $json_data . ")";  
	?>  

2. 客户端html代码为：  

		<!DOCTYPE html>
		<html>
		<head>
    		<title>JSONP 实例</title>
		</head>
		<body>
    		<div id="divCustomers"></div>
    		<script type="text/javascript">
    		    function callbackFunction(data, methodName)
    	    	{
    	        	var html = '<ul>';
    	        	for(var i = 0; i < data.length; i++)
    	        	{
    	            	html += '<li>' + data[i].name + "&nbsp" + data[i].age + '</li>';
    	        	}
    	        	html += '</ul>';
    	        	document.getElementById('divCustomers').innerHTML = html;
    	    	}
    		</script>
		<script type="text/javascript" src="jsonp.php?jsoncallback=callbackFunction"></script>
		</body>
		</html>


3. jQuery使用JSONP

		<!DOCTYPE html>
		<html>
		<head>
		<title>JSONP 实例</title>
		<script src="http://apps.bdimg.com/libs/jquery/1.8.3/jquery.js"></script>	
		</head>
		<body>
		<div id="divCustomers"></div>
		<script>
		$.getJSON("jsonp.php?jsoncallback=?", function(data) {
		var html = '<ul>';
		for(var i = 0; i < data.length; i++)
		{
			html += '<li>' + data[i].name + "&nbsp" + data[i].age + '</li>';
		}
		html += '</ul>';
		$('#divCustomers').html(html); 
		});
		</script>
		</body>
		</html> 

### 3.参考资料
1. [维基百科-JSONP](http://zh.wikipedia.org/wiki/JSONP)
2. [W3CSCHOOL-JSONP](http://www.w3cschool.cc/json/json-jsonp.html)
3. [博客园-说说JSON和JSONP](http://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html)