---
layout: post
title: 关于事件代理
category: 技术
tags: JavaScript event delegate
description: JavaScript相关问题总结

---

### 1. 什么是事件代理
事件代理（event delegation），是一种利用Javascript事件冒泡特性的高级方法。当有多个子元素或者子元素经常变化时，通过事件代理可以只监听父级元素事件，避免了把事件处理器添加到多个子级元素上及变动。通常效率更高，代码结构更加清晰。这种代理的思想实际上是一种观察者模式（在外层观察变化）
	
	
### 2. 事件冒泡及捕获

W3C将DOM2.0模型的事件处理流程分为三个阶段：
	
	1. 事件捕获阶段
	2. 事件目标阶段
	3. 事件起泡阶段
	
事件捕获：当某个元素触发某个事件（如onclick），顶层对象document就会发出一个事件流，随着DOM树的节点向目标元素节点流去，直到到达事件真正发生的目标元素。在这个过程中，事件相应的监听函数是不会被触发的。

事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。

事件起泡：从目标元素开始，往顶层元素传播。途中如果有节点绑定了相应的事件处理函数，这些函数都会被一次触发。如果想阻止事件起泡，可以使用e.stopPropagation()（Firefox）或者e.cancelBubble=true（IE）来组织事件的冒泡传播。

### 3. 事件代理优缺点：

- 优点归纳如下：

	1. 子元素非常多时，需要创建以及驻留在内存中的事件处理器少了，提高了性能，降低了内存消耗
	2. 在DOM更新后无须重新绑定事件处理器了，避免内存泄露
	3. 外层做统一的事件管理，易于修改和扩展
	
- 缺点归纳如下：

	1. 不是所有的事件都能冒泡的。blur、focus、load和unload不能像其它事件一样冒泡
	2. 鼠标事件需要注意。处理mousemove事件，遇上性能瓶颈的风险就更大，因为mousemove事件触发得非常频繁
	
### 4. 参考资料

	1. [事件代理的应用]（http://tangram.baidu.com/article/138）提供基本概念
	2. [JavaScript的事件代理比你想的要简单](http://article.yeeyan.org/view/33485/24593) 优缺点及[mouseout怪异的表现](http://www.quirksmode.org/js/events_mouse.html#link8)
	3. 司徒正美[javascript事件代理](http://www.cnblogs.com/rubylouvre/archive/2009/08/09/1542174.html) 使用了apply来实现了调用对象的转移，不明白
	4. [JavaScript事件代理和委托（Delegation）](http://www.cnblogs.com/owenChen/archive/2013/02/18/2915521.html)例子