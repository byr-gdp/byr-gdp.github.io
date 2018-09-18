---
layout: post
title: 《淘宝技术这十年》读书笔记
category: 笔记
tags: 淘宝, 技术, 文集
description: 《淘宝技术这十年》读书笔记

---

<div align="center"><img width="375" src="https://img3.doubanio.com/view/subject/l/public/s26713863.jpg"/></div>

这不是淘宝官方的史书，虽然有点“标题党”，不过将它当做科普读物或人物/公司传记来看，还是有所收获的。虽然起了如此响亮的名字，技术细节描述浅尝而止，对于前端的描述大多停留在 AJAX 在用户体验的提升上，不过考虑到出版年是2013，也没啥大惊小怪了。作者也承认一开始就没有当做技术书来写。

全书最有意思的当属最后的人物访谈部分，其中不乏《白帽子讲 Web 安全》和《JavaScript 语言精粹》的译者。

下面是一些很有意思的观点，

> 不需要的功能为什么要放到流程里？增加的复杂度会导致更多的问题。

淘宝草根精神之一——功能可以不做得那么“漂亮”，但必须减少中间环节，真正做到实用、干净、简洁。

> 业务处理如果依赖于外部系统，则采用事件驱动的方式来减少线程等待，同时提高线程占用资源的利用率。但理想和现实还是有很多细节差异的，在实现的时候必须根据依赖系统消耗时间占总时间的比例来看是否需要事件驱动，事件驱动带来的切换消耗是比较大的。

> 性能更应该是功能......

很常见的现象，先堆砌功能，然后草草上线，选择性自我否定，亦或逐步完善性能。通常是然后就没有然后了。

> 但行好事，不问前程。
