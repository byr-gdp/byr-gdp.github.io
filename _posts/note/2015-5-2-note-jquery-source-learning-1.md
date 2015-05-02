---
layout: post
title: 慕课网 jQuery 源码解析总结（1）——理解结构
category: 笔记
tags: jQuery 源码
description: 慕课网 jQuery 源码解析总结
---

### 1.整体架构
1. 13模块
	- 核心方法
	- 回调系统
	- 异步队列
	- 数据缓存
	- 队列操作
	- 选择器引
	- 属性操作
	- 节点遍历
	- 文档处理
	- 样式操作
	- 属性操作
	- 事件体系
	- AJAX交互
	- 动画引擎

2. 五大块
	选择器、DOM操作、事件、AJAX与动画

### 2. 立即调用表达式
注：[本节慕课教程](http://www.imooc.com/code/3247)示例代码四个click事件很有参考意义，比如**命名函数表达式不会预先提升**等。  
任何库与框架设计的第一个要点就是解决命名空间与变量污染的问题。jQuery就是利用了JavaScript函数作用域的特性，采用**立即调用表达式**包裹了自身的方法来解决这个问题。  
jQuery立即调用函数表达式有三种：  
写法一：  
		
	(function(window, factory) {
    	factory(window)
	}(this, function() {
    	return function() {
  			//jQuery的调用
   		}
	}))

上面的代码中嵌套了2个函数，而且把一个函数作为参数传递到另一个函数中并且执行，这种方法有点复杂，下面简化一下。    
写法二：  

	var factory = function(){
    return function(){
       	//执行方法
   		}
	}
	var jQuery = factory();

上面的代码效果和方法1是等同的，但是这个factory有点变成了简单的工厂方法模式，需要自己调用，不像是一个单例的jQuery类，所以我们需要改成“自执行”，而不是另外调用。  
写法三：  

	(function(window, undefined) {
	    var jQuery = function() {}
		// ...
	    window.jQuery = window.$ = jQuery;
	})(window);

这种写法的优势：

1. window和undefined都是为了减少变量查找所经过的scope作用域。当window通过传递给闭包内部之后，在闭包内部使用它的时候，可以把它当成一个局部变量，显然比原先在window scope下查找的时候要快一些。
2. undefined也是同样的道理，其实这个undefined并不是JavaScript数据类型的undefined，而是一个普普通通的变量名。只是因为没给它传递值，它的值就是undefined，undefined并不是JavaScript的保留字。

jQuery代码写法：
		
		if (typeof module === "object" && typeof module.exports === "object") {
   			module.exports = global.document ?
        		factory(global, true) :
        		function(w) {
            		if (!w.document) {
                		throw new Error("jQuery requires a window with a document");
            		}
            		return factory(w);
    			};
		} else {
    		factory(global);
		}

总结：全局变量是魔鬼, 匿名函数可以有效的保证在页面上写入JavaScript，而不会造成全局变量的污染，通过小括号，让其加载的时候立即初始化，这样就形成了一个单例模式的效果从而只会执行一次。