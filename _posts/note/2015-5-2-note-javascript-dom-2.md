---
layout: post
title: 《JavaScript DOM 编程艺术》笔记（二）
category: 笔记
tags: JavaScript DOM
description: 《JavaScript DOM 编程艺术》笔记
---

### 4.案例研究：JavaScript图片库

1. 非DOM解决方案  
以下两条语句的效果是等效的。
	
		element.value = "the new value";
		element.setAttribute("value", "the new value");
		
但setAttribute方法是“第一级DOM（DOM Level1）的组成部分，它可以设置任意元素节点的任意属性。而另一种方法可设置大部分元素的属性。鉴于**DOM是一种适用于多种环境和多种程序设计语言的通用型API**，可移植性是一个优势，同时不必费心去记忆哪些元素的哪些属性可以用DOM之前的哪些方法去设置。

2. 事件处理函数的工作机制  
对某个元素添加了事件处理函数后，一旦事件发生，相应的JavaScript代码就会得到执行。被调用的JavaScript代码可以返回一个值，这个值将被传递给那个事件处理函数。例如，我们可以给某个链接添加一个onclick事件处理函数，并让这个处理函数所触发的JavaScript代码返回布尔值true或false。这样一来，当这个链接被点击时，如果那段JavaScript代码返回的值时true，onclick事件处理函数就认为“这个链接呗点击了”，反之，如果返回的值是false，onclick事件处理函数就认为“这个链接没有被点击”

3. childNodes属性  
可以用来获取任何一个元素的所有子元素，它是一个包含这个元素全部子元素的数组：`element.childNodes`，利用数组的length属性就可以知道它所包含的元素的个数：`element.childNodes.length`

4. nodeType属性  
nodeType属性总共有12种可取值，但其中仅有3种具有实用价值。
	1. **元素节点**的nodeType属性值是1
	2. **属性节点**的nodeType属性值是2
	3. **文本节点**的nodeType属性值是3

5. nodeValue属性  
对于`<p id="description">This is a sentence.</p>`，若通过`var desctiption = document.getElementById("description")`得到该对象后，必须注意的细节是在用nodeValue属性获取description对象的值时，**并不是包含在这个段落里的文本**。`<p>`元素本身的nodeValue属性是一个空值，包含在`<p>`元素里的文本是另一个节点，它是`<p>`元素的第一个子节点，所以正确的写法是`description.childNodes[0].nodeValue`或者`description.firstChild.nodeValue`。DOM还提供了一个与之对应的**lastChild**属性

### 5.最佳实践

1. 平稳退化：确保网页在没有JavaScript的情况下也能正常工作  
如果正确地使用了JavaScript脚本，就可以让访问者在他们得浏览器不支持JavaScript的情况下仍能顺利地浏览你的网站。几种不好的做法如下：
	1. “javascript:”伪协议
	2. 内嵌的事件处理函数  
		\#符号是一个仅供文档内部使用的链接记号。在某些浏览器里，\#链接指向当前文档的开头。把href属性的值设置为\#只是为了创建一个空链接。  

	这样做的原因是：**只有极少数搜索机器人能够理解JavaScript代码**，若JavaScript网页不能平稳退化，它们在搜索引擎上的排名就可能大受损害

2. 渐进增强  
用一些额外的信息层去包裹原始数据。按照“渐进增强”原则创建出来的网页几乎都符合“平稳退化”原则。

3. 分离JavaScript（用于解决内嵌的事件处理函数分离）  
JavaScript语言不要求事件必须在HTML文档里处理，可以在外部JavaScript文件里把一个事件添加到HTML文档中的某个元素上：`element.event = action...`。元素的确定可以利用class或id属性。  
还需要既觉得问题是：如果把这段代码存入外部JavaScript文件，它们可能无法运行。若JavaScript文件是从HTML文档的`<head>`部分引入，它将在HTML文档之前加载到浏览器里。若`<script>`标签位于文档底部`</body>`之前，就不能保证哪个文件最先结束记载。解决方案是将JavaScript代码打包放在prepare函数里，并把这个额函数添加到window对象的onload事件上去，即`window.onload = prepare;`

4. 向后兼容
	1. 对象检测  

			if(method) {
				statement
			}
	2. 浏览器嗅探技术：通过提取浏览器供应商提供的信息来解决向后兼容问题。但浏览器可能会“撒谎”

5. 性能考虑
	1. 尽量少访问DOM和尽量减少标记  
	不管什么时候，只要是查询DOM中的某些元素，浏览器都会搜索整个DOM树，从中查找可能匹配的元素。过多不必要的元素只会增加DOM树的规模，进而增加遍历DOM树以查找特定元素的时间。
	2. 合并和放置脚本  
	位于`<head>`块中的脚本会导致浏览器无法并行加载其他文件（如图像或其它脚本）。根据HTTP规范，浏览器每次从同一个域名中最多只能同时下载两个文件。而在下载脚本期间，浏览器不会下载其他任何文件，即使是来自不同域名的文件也不会下载，所有其他资源都要等脚本加载完毕后才能下载。
	3. 压缩脚本  
	指的是把脚本文件中不必要的字节，如空格和注释，统统删除，从而达到“压缩”文件的目的。几个有代表性的压缩工具如：Douglas Crockford的**JSMin**、 雅虎的**YUI Compressor** 、谷歌的**Closure Compiler**。
