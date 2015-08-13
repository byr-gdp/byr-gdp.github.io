---
layout: post
title: js获取访问者ip信息脚本
category: 技术
tags: js ip
description: js获取访问者ip信息脚本

---

最近在弄[miniNav](https://github.com/byr-gdp/miniNav)时，需要实现获取访问者ip的功能。但js由于安全限制无法直接读取客户端ip，网上搜索发现一些网站（如新浪、腾讯）提供类似的接口。

以下是新浪脚本代码

	<script type="text/javascript" src=" http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js"></script>
	<script type="text/javascript">
	//<![CDATA[
  		alert([
    		remote_ip_info.country,
    		remote_ip_info.province,
   			remote_ip_info.city,
    		remote_ip_info.isp,
    		remote_ip_info.start,
    		remote_ip_info.end
  		].join(''));  		  		
	//]]>
	</script>
	
知乎讨论：[怎样用 JavaScript 程序获取客户的 IP 地址？](http://www.zhihu.com/question/20675353)