---
layout: post
title: 《JavaScript 权威指南》笔记（二）
category: 笔记
tags: JavaScript JS 
description: 《JavaScript 权威指南》

---

# 第10章 DOM

1. DOM(文档对象模型)是针对 HTML 和 XML 文档的一个 API(应用程序编程接口)。
2. Node 类型

	每个节点都有一个 nodeType 属性,用于表明节点的类型。节点类型有12种。
	
3. 每个节点都有一个 childNodes 属性,其中保存着一个 NodeList 对象。
4. nodeName 和 nodeValue 属性（需要先判断 nodeType）
5. 将 NodeList 对象转换为数组

		function convertToArray(nodes){        	var array = null;        	try {				array = Array.prototype.slice.call(nodes, 0); //针对非 IE 浏览器 } catch (ex) {            	array = new Array();            	for (var i=0, len=nodes.length; i < len; i++){                	array.push(nodes[i]);            	}			}        	return array;    	}

6. 每个节点都有一个 `parentNode` 属性。同胞节点有 `previousSibling` 和 `nextSibling` 属性。父节点的 `firstChild` 和 `lastChild` 属性分别指向其 `childNodes` 列表中的第一个和最后一个节点。
7. `hasChildNodes()`在节点包含一或多个子节点的情况下返回 true
8. 所有节点都有的最后一个属性是 `ownerDocument`,该属性指向表示整个文档的文档节点。
9. 操作节点

	1. `appendChild()`,用于向 childNodes 列表的末尾添加一个节点。如果传入到 appendChild()中的节点已经是文档的一部分了,那结果就是将该节点从原来的位置 转移到新位置。(如传入文档的第一个节点)
	2. `insertBefore()`接受两个参数:要插入的节点和作为参照的节点。 
	3. `replaceChild()`接受两个参数:要插入的节点和要替换的节点。
	4. `removeChild()`方法接受一个参数,即要移除的节点。

10. 其他方法

	1. `cloneNode()`,参数 true 或 false 表示深浅复制
	2. `normalize()`
	
11. Document 类型

	Document 类型表示文档。在浏览器中,document 对象是 HTMLDocument(继承自 Document 类型)的一个实例,表示整个 HTML 页面。而且,document 对象是 window 对象的一个 属性,因此可以将其作为全局对象来访问。
	
12. 文档信息

	document.url、document.domain、document.referrer
	
# 第11章 DOM 扩展

1. Selectors API Level 1 的核心是两个方法:querySelector()和 querySelectorAll()。
2. querySelector()方法接收一个 CSS 选择符,返回与该模式匹配的第一个元素,如果没有找到匹配的元素,返回 null。
3. querySelectorAll()方法返回的是一个 NodeList 的实例。要取得返回的 NodeList 中的每一个元素,可以使用 item()方法,也可以使用方括号语法。
4. matchesSelector()方法，Selectors API Level 2规范为Element类型新增的一个方法。这个方法接收 一个参数,即 CSS 选择符,如果调用元素与该选择符匹配,返回 true;否则,返回 false。
5. HTML5 扩展

	1. 与类相关的扩充
		
		1. getElementsByClassName()方法
		2. classList 属性
	
	2. 焦点管理
	
		1. document.activeElement 属性,这个 属性始终会引用 DOM 中当前获得了焦点的元素
		2. document.hasFocus()方法,这个方法用于确定文档是否获得了焦点。
		
	3. HTMLDocument的变化
	
		1. readyState 属性：loading,正在加载文档；complete,已经加载完文档
		2. 兼容模式：compatMode 属性
		3. head 属性
		
	4. 插入标记
	
		1. innerHTML()
		2. outerHTML()
		3. insertAdjacentHTML()
		
	5. 滚动
	
# 第12章 DOM2 和 DOM3

1. DOM1 级主要定义的是 HTML 和 XML 文档的底层结构。DOM2 和 DOM3 级则在这个结构 的基础上引入了更多的交互能力,也支持了更高级的 XML 特性。

# 第16章 HTML5 脚本编程

1. 跨文本消息传递（XDM）

	postMessage() 使用
	
2. 原生拖放

	1. 拖放事件
	
		拖动元素时，将依次触发下列事件：dragstart、drag、dragend。
		当某个元素被拖动到一个有效的放置目标上时，下列事件会依次发生：dragenter、dragover、dragleave 或 drop

	2. dataTransfer 对象
	
		实现拖放操作时数据交换

3. 媒体元素
4. 历史状态管理

	history 对象 hashchange、pushState、popState、replaceState
	
# 第17章 错误处理与调试

1. 错误处理

	1. try-catch 语句
	
		若有 finally 子句，无论是否发生错误，甚至 return 语句，finally 子句都会执行。
		
	2. 抛出错误 throw

2. 常见的错误类型

	1. 类型转换错误（使用全等和不全等操作符）
	2. 数据类型错误（基本类型使用 typeof 检测，对象使用 instanceof 检测）
	3. 通信错误（使用 Ajax）

3. 区分致命错误和非致命错误
4. 把错误记录到服务器
5. 调试技术

	1. 将消息记录到控制台
	2. 将消息记录到当前页面
	3. 抛出错误（assert()函数）

# 第19章 E4X

1. E4X 的类型

	1. E4X = ECMAScript for XML
	
	2. 4个新的全局类型
	
		* XML: XML 结构中的任何一个独立的部分
		* XMList: XML 对象的集合
		* Namespace: 命名空间前缀与命名空间 URI 之间的映射
		* QName: 由内部名称和命名空间 URI 组成的一个限定名 

**（Chapter 19 未完待续）**

# 第21章 Ajax 与 Comet

1. XMLHttpRequest 用法

	若不必支持IE7以前的版本，直接使用 XMLHttpRequest 构造函数。
	
		var xhr = new XMLHttpRequest();
		
	紧接着，调用 `open()` 方法，接受三个参数：请求类型、URL、是否异步发送请求，此时并不会发送真正的请求，而只是启动一个请求准备发送。
	要发送特定的请求，需要调用 `send()` 方法，接受一个参数：请求主体的数据或 null。
	对于**异步请求**，需要检测 `readyState` 属性，来获取当前活动状态。只要 `readyState` 变化，都会触发 `readystatechange` 事件。例子如下：
	
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
					alert(xhr.responseText);
				} else {
					alert("Request was unsuccessful: " + xhr.status);
				}
			}
		}
		xhr.open('get', 'example.txt', true);
		
	在接收到响应之前，可以调用 `abort()` 方法来取消异步请求。
	
2. HTTP 头部信息

	`setRequestHeader()` 方法可以设置自定义的请求头部信息，接受两个参数，键值对。
	`getResponseHeader()` 方法传入头部字段，可以取得响应头部信息，而调用 `getAllResponseHeaders()` 则可以取得包含所有头部信息的长字符串。
	
3. GET 请求

	使用 GET 请求查询字符串中每个参数的名称和值都必须使用 encodeURIComponent() 进行编码。
	
4. POST 请求

	将数据作为请求的主体提交。
	
5. XMLHttpRequest 2级

	1. FormData
	2. 超时设定
	3. overrideMimeType() 方法
	
6. 进度事件

	6个进度事件：loadstars、progress、error、abort、load、loaded。
	
	progress 事件包含三个属性：lengthComputable、position、totaSize
	
	load 事件与 progress 事件
	
7. 跨源资源共享

	CORS 背后的基本思想，就是使用自定义的 HTTP 头部让浏览器与服务器进行沟通，从而决定请求与响应成功还是失败。
	
	非 IE 浏览器通过 XMLHttpRequest 实现了对 CORS 的原生支持。
	
8. 跨浏览器的 CORS

		function createCORSRequest(method, url) {
			var xhr  = new XMLHttpRequest();
			if("withCredentials" in xor) {
				xhr.open(method, url, true);
			} else if(typeof XDomainRequest != "undefined") {
				xhr = new XDomainRequest();
				xhr.open(method, url);
			} else {
				xhr = null;
			}
			return xhr;
		}
		
		var request = createCORSRequest('get', 'http://www.somewhere-else.com/page/');
		if(request) {
			request.onload = function() {
				// 处理 request.responseText
			};
			request.send();
		}
		
9. 其他跨域技术

	1. 图像 Ping
	
			var img = new Image();
			img.onload = img.onerror = function() {
				alert('done');
			}
			img.src = 'url';
			
		2个缺点：只能发送 GET 请求，无法访问服务器的响应文本。
			
	2. JSONP
	
		优点是能够访问响应文本。
		
	3. Comet
	
		一种服务器向页面推送数据的技术。两种实现方式：**长轮询和流**（区分短轮询）
		
	4. Web Sockets
	
		1. 实例化
		
				var socket = new WebSocket('ws://www.example.com/server.php');
				
		2. 发送和接收数据
		
				socket.send('hello world'); // 复杂的数据结构发送之前必须序列化
				
				socket.onmessage = function(event) {
					var data = event.data;
					// ...
				}
				
		3. 其他事件
		
			1. open：在成功建立连接时触发。
			2. error：在发生错误时触发，连续不能持续。
			3. close：在连接关闭时触发。`event` 对象还有三个额外的属性：wasClean、code、reason。
			

# 第22章 高级技巧

1. 高级函数

	1. 安全的类型检测
	
		在任何值上调用 Object 原生的 toString() 方法，都会返回一个 `[object NativeConstructorName]` 格式的字符串。通过 `Object.prototype.toString.call(value)` 检测。
		
	2. 作用域安全的构造函数
	
		由于 this 对象实在运行时绑定的，避免因为忽略 new 操作符而导致 this 映射到全局对象 window 上。（P599 例子）
		
	3. 惰性载入函数
	
		2种实现方式：函数被调用时再处理函数，函数声明时就指定适当的函数（匿名、自执行函数）
		
	4. 函数绑定 bind()
	
			function bind(fn, context) {
				return function() {
					return fn.apply(context, arguments);
				}
			}
			
	5. 函数柯里化（function currying）
	
		创建步骤：调用另一个函数并为他传入要柯里化的函数和必要参数。
		
			function curry(fn) {
				var args = Array.prototype.slice.call(arguments, 1);
				return function() {
					var innerArgs = Array.prototype.slice.call(arguments);
					var finalArgs = args.concat(innerArgs);
					return fn.apply(null, finalArgs);
				}
			}
			
2. 防篡改对象

	1. 不可扩展对象
	
		使用 `Object.preventExtensions()` 方法来不能再给对象添加属性和方法，已有的成员丝毫不受影响。使用 `Object.isExtensible()` 方法来确定对象是否可以扩展。
		
	2. 密封的对象
	
		使用 `Object.seal()` 方法使队形不可扩展，且已有成员的 `[[Configurable]]` 特性将被设置为 false，意味着不能删除。
		
		使用 `Object.isSealed()` 方法确定对象是否已经被密封了。
		
	3. 冻结的对象
	
		使用 `Object.freeze()` 方法来冻结对象。在密封的基础上，将已有成员的 `[[Writable]]` 特性设置为 false。同时有 `Object.isFrozen()` 方法来检测冻结对象。
		
3. 高级定时器

	JavaScript 中没有任何代码是立刻执行的，但一旦进程空闲则尽快执行。关于定时器要记住的最重要的事情是，指定的时间间隔表示何时将定时器的代码添加到队列，而不是何时实际执行代码。

	避免 `setInterval()` 重复定时器的2个缺点，可以使用如下模式
	
		setTimeout(function() {
			// TODO
			setTimeout(arguments.callee, interval); // arguments.callee 来获取对当前执行函数的引用
		}, interval)
		
4. Yielding Processes

	运行在浏览器中的 JavaScript 都被分配了一个确定数量的资源，不同于桌面应用往往能够随意控制内存大小和处理器时间，JavaScript 被严格限制了，放置恶意的 Web 程序。
	
	数组分块技术。
	
5. 函数节流（重要）
6. 自定义事件

	1. 属性 handlers：存储事件处理程序。
	2. addHandler()：注册给定类型事件的事件处理程序。
	3. fire()：触发一个事件。
	4. removeHandler()：注销某个事件类型的事件处理程序。
	
7. 拖放（略）

# 第24章 最佳实践

1. 可维护性

	大部分开发人员都花费大量的时间维护他人代码。很难从头开始开发新代码，很多情况下都是以他人工作结果为基础的。
	
	变量和函数命名：变量名应为名词，函数名应以动词开头，返回布尔类型的函数一般以 `is` 开头。
	
	变量类型透明：由于 JavaScript 中变量是松散类型的，很容易忘记变量所应包含的数据类型。三种方式解决：
	
		1. 初始化
		2. 匈牙利标记法
		3. 类型注释
		
2. 性能

	1. 注意作用域
	
		* 避免全局查找
		* 避免 with 语句
		
	2. 选择正确的方法
	
		* 避免不必要的属性查找
		* 优化循环：减值迭代、简化终止条件、简化循环体、使用后测试循环
		* 展开循环
		
	3. 最小化语句数
	
		* 多个变量声明
		* 插入迭代值
		* 使用数组和对象字面量
		
	4. 优化 DOM 交互
	
		1. 最小化现场更新（使用文档片段 createDocumentFragment）
		2. 使用 innerHTML
		3. 使用事件代理
		4. 注意 HTMLCollection
		
3. 部署

# 第25章 新兴的 API

1. requestAnimationFrame()

	1. 早期动画循环及 `setInterval`、`setTimeout` 利弊
	2. 最平滑动画的最佳循环间隔是 1000ms/60，约等于17ms
	
2. Page Visibility API

	三部分组成：document.hidden、document.visibilityState(4个可能的状态值)、visibility change事件。
	
3. Geolocation API

	浏览器中的实现是 navigator.geolocation 对象。
	
4. File API
5. Web 计时

	Web 计时机制的核心是 window.performance 对象。
	
6. Web Workers
	




