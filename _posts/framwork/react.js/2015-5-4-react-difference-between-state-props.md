---
layout: post
title: 区分state和props
category: 框架
tags: React.js state props
description: 区分state和props

---

简单地对每一项数据提出三个问题：

1. 是否是从父级通过 propr 传入的？如果是，可能不是 state 。 
2. 是否会随着时间改变？如果不是，可能不是 state 。 
3. 能根据组件中其它 state 数据或者 props 计算出来吗？如果是，就不是 state 。

相关文档：[深入了解React](http://reactjs.cn/react/docs/thinking-in-react.html)
