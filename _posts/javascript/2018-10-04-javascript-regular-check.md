---
layout: post
title: 关于 JavaScript 正则的验证
category: JavaScript
tags: javascript, regular expression, match, test
description: 关于 JavaScript 正则的验证
---

最近在使用正则的过程中发现了一个奇怪的现象，记录如下。

在我个人使用习惯中，一般验证正则的有效性往往是通过 `String.prototype.match` 和 `RegExp.prototype.test` 这两个方法。很少关注具体使用场景区别，想当然地以为二者都能获得一致的正确性结果。但在最近的一个 case 中发现事与愿违。

以一个正则和测试字符串为例。

```javascript
const reg = /a/g
const str = 'abc';

console.log(reg.test(str)); // 返回 true
console.log(reg.test(str)); // 第二次返回 false
console.log(reg.test(str)); // 第三次返回 true
// ... true/false 往返返回

console.log(str.match(reg)); // 返回 ["a"]
console.log(str.match(reg)); // 重复执行，返回结果一致。
```

这里出现问题的地方在于当反复调用 `RegExp.prototype.test` 方法，返回前后不一致的结果。出现问题的原因在于正则表达式里使用了**全局标志**，即 `\g`，`test() 的执行会改变正则表达式   lastIndex属性。连续的执行test()方法，后续的执行将会从 lastIndex 处开始匹配字符串`。这部分在 MDN 也有描述。

所以，在设计考虑正则表达式的测试流程时，`String.prototype.match` 和 `RegExp.prototype.test` 二者是有明显区别的，如果疏忽了一些细节，就可能得出意想不到的结论。

## 参考

- [RegExp.prototype.test()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [hy does a RegExp with global flag give wrong results?](https://stackoverflow.com/questions/1520800/why-does-a-regexp-with-global-flag-give-wrong-results)
