---
layout: post
title: 配置Apache不同的端口指向不同的网站
category: 技术
tags: Apache
description: 配置Apache不同的端口指向不同的网站
---

**本文省略Apache安装步骤，主要针对配置文件修改**

### 1. 到安装目录下的conf目录找到httpd.conf文件，即Apache配置文件。

### 2. CTRL+F 查找 *Listen 80*，此为默认端口。我们仅需要在其后添加我们需要监听的端口。如
	Listen 1024  
	Listen 2048

### 3. Ctrl+F 查找 *DocumentRoot*，可以匹配到若干个，找到后面跟有目录地址的一项，比如我的是*DocumentRoot "E:/Program Files/Apache/htdocs"*。进入该目录，新建两个文件夹分别命名为1024和2048（名字自定义），作为不同端口各自网站的存放空间

### 4. Ctrl+F 查找 *Include conf/extra/httpd-vhosts.conf*，将前面*#*注释去掉

### 5. 找到安装目录下conf/extra/下的httpd-vhosts.conf文件，打开后将看到如下配置
	<VirtualHost *:80>
    ServerAdmin webmaster@dummy-host.byr_gdp.com
    DocumentRoot "E:/Program Files/Apache/htdocs/80"
    ServerName dummy-host.byr_gdp.com
    ServerAlias www.dummy-host.byr_gdp.com
    ErrorLog "logs/dummy-host.byr_gdp.com-error.log"
    CustomLog "logs/dummy-host.byr_gdp.com-access.log" common
	</VirtualHost>

	<VirtualHost *:80>
    ServerAdmin webmaster@dummy-host2.byr_gdp.com
    DocumentRoot "E:/Program Files/Apache/htdocs/80"
    ServerName dummy-host2.byr_gdp.com
    ErrorLog "logs/dummy-host2.byr_gdp.com-error.log"
    CustomLog "logs/dummy-host2.byr_gdp.com-access.log" common
	</VirtualHost>  
  
在后面追加以下内容    
	
	<VirtualHost *:1024>
    ServerAdmin webmaster@dummy-host.q.com
    DocumentRoot "E:/Program Files/Apache/htdocs/1024"
    ServerName dummy-host.q.com
    ServerAlias www.dummy-host.q.com
    ErrorLog "logs/dummy-host.q.com-error.log"
    CustomLog "logs/dummy-host.q.com-access.log" common	
	</VirtualHost>

	<VirtualHost *:2048>
    ServerAdmin webmaster@dummy-host.q.com
    DocumentRoot "E:/Program Files/Apache/htdocs/2048"
    ServerName dummy-host.q.com
    ServerAlias www.dummy-host.q.com
    ErrorLog "logs/dummy-host.q.com-error.log"
    CustomLog "logs/dummy-host.q.com-access.log" common
	</VirtualHost>  

  

最重要的地方是**VirtualHost \*：port**,以及**DocumentRoot**，其它选项我是直接复制

### 6.当然，第三步的DocumentRoot可以设置为其他目录。不过个人觉得放在一起，以端口号来命名文件夹的形式也不错