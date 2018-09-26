---
layout: post
title: 自产生程序
category: JavaScript
tags: quine, javascript
description: 通过 JavaScript 实现自产生程序
---

自产生程序（Quine）指的是不接受任何输入，也不直接读取源码，输出结果为自身源码的程序。各语言都有其实现，下面介绍 JavaScript 的一个例子。

以下面一个函数为例。

```javascript
function foo() { console.log('foo'); }
```

我们可以通过调用其 `toString` 方法来获得其源码。

```javascript
foo.toString()
```

所以可以改造一下函数 `foo`，如下所示：

```javascript
function foo() { console.log(foo.toString()); }
```

此时，我们只是声明了一个函数，仍然需要手动执行触发。所以我们可以通过 IIFE 来改进。

```javascript
(function foo() { console.log(foo.toString()); })()
```

执行以上代码，得到的结果如下：

> function foo() { console.log(foo.toString()); }

和源码比较，缺少了引入 IIFE 后增加了括号。所以进一步完善如下：

```javascript
(function foo() { console.log('(' + String(foo) + ')()'); })()
```

此时的输出和源码相等。

## 参考

- [自产生程序](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%94%A2%E7%94%9F%E7%A8%8B%E5%BC%8F)
- [更多 quine 例子的分享](https://gist.github.com/cowboy/6966747ad374fb97b0ab)