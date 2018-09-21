---
layout: post
title: console 输出对象
category: JavaScript
tags: console, 日志输出
description: console 输出对象
---

开发过程中经常使用 console 输出调试，但在最近当通过 console 输出对象后并展开对象时，看到的 value 和实际值可能发生不一致。

以下面的测试代码为例：

```javascript
const person = {
  age: 24,
};
console.log(person);
person.age = 18;
```

执行以上代码后，再展开 person，会发现 age 已经变了。原理很简单，因为 console.log 输出的是 person 变量的引用，而不是拷贝。

如果忽略这个问题，在调试过程中就会提供错误的信息。比如在事件处理函数中，希望直到当前位于事件流的哪个阶段，如果直接输出 `event` 再展开，会发现 `event.eventPhase` 始终是0，而如果直接打印 `event.eventPhase`，就会获得正确的结果。本来想偷懒获得更多信息反而顾此失彼。