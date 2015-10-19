---
layout: post
title: webpack入门(译)
category: 笔记
tags: css
description: 《CSS 权威指南》

---

本文由官方Tutorial [Getting Started](https://webpack.github.io/docs/tutorials/getting-started/)整理翻译，因为该指南解决了我在上手webpack过程中遇到的诸多问题。

---

# WELCOME

这份指南自始自终围绕一个简单例子。通过学习本教程你可以学到：

* 如何安装webpack
* 如何使用webpack
* 如何使用loader
* 如何使用开发环境服务器

# 安装WEBPACK

首先你需要安装有node，然后执行

	`npm install webpack -g`

> 这会使webpack命令生效

# 开始

我们从一个空文件夹开始，首先创建以下文件

![image](https://ooo.0o0.ooo/2015/10/17/5623130e3e6f0.png)

然后在该文件夹根目录下执行以下命令：

	webpack ./entry.js bundle.js
	
这会编译你的`entry.js`文件并生成`bundle.js`。倘若成功，将有以下信息输出：

![image](https://ooo.0o0.ooo/2015/10/17/5623130e40ae6.png)

用浏览器打开`index.html`，会出现`It works.`

# 再添加一个文件

接下来，我们会将一些代码移入一个新文件。

![image](https://ooo.0o0.ooo/2015/10/17/5623130e616f3.png)

再次用以下命令编译

	webpack ./entry.js bundle.js
	
刷新浏览器，此时你会看到文字变为"It works from content.js."

> webpack会分析你入口文件对于其他文件的依赖，这些文件（通常称为模块）也会被包含在`bundle.js`中。

# 第一个LOADER

我们希望为我们的应用添加css文件。webpack原生仅支持JavaScript，所以我们需要`css-loader`来处理css文件，我们也需要`style-loader`来应用这些样式。

运行`npm install css-loader style-loader`来安装这些loader（此处使用局部安装而非全局安装），这会在你的目录下生成`node_modules`文件夹。

会用到的文件如下：

![image](https://ooo.0o0.ooo/2015/10/18/562468f9a72c0.png)


再次编译并刷新浏览器你会看到应用的背景变为黄色。

![image](https://ooo.0o0.ooo/2015/10/17/5623130e3951d.png)

# 绑定LOADER

我们不希望总是敲下如此冗长的`require("!style!css!./style.css");`，所以我们可以绑定文件的扩展名以简化写法为`require("./style.css")`。

![image](https://ooo.0o0.ooo/2015/10/18/5624697c01675.png)

执行以下的编译命令：

	webpack ./entry.js bundle.js --module-bind "css=style!css"
	
你将看到同样的结果。

# 配置文件

我们希望将配置选项写入配置文件中。

![image](https://ooo.0o0.ooo/2015/10/17/5623130e4b155.png)

此后，仅需执行：

	webpack

来编译

![image](https://ooo.0o0.ooo/2015/10/17/562313105e09d.png)

> `webpack`命令总会尝试载入当前目录的`webpack.config.js`文件

# 更友好的输出

随着项目的增长，编译过程可能会越来越长，所以我们可以展示一些进度条以及颜色。我们可以通过以下命令达到目的：

	webpack --progress --colors
	
# 监视模式

当我们不希望在文件改动后手动执行编译操作时

	webpack --progress --colors --watch
	
# 开发服务器

提供开发服务器是再好不过的了

通过以下命令全局安装

	npm install webpack-dev-server -g

启动服务器

	webpack-dev-server --progress --colors
	
这会绑定一个小型express服务器到`localhost:8080`，来为你的静态资源及bundle（自动编译）服务。通过访问`http://localhost:8080/webpack-dev-server/bundle`，bundle每次重编译后浏览器页面都会自动更新。


	
	


