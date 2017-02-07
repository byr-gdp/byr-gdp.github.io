---
layout: post
title: 说说 JS 相等性判断
category: JavaScript
tags: js, equality comparison
description: 说说 JS 相等性判断
---

关于 JS 相等性判断，很容易想到严格相等（===）和非严格相等（==），前者在比较前不会进行隐式转换，即若比较的两个值不是相同的类型，比较结果一定是不等的。而后者在进行比较前可能会根据具体情况进行相应的类型转换然后再按照严格比较规则进行比较。

**通常情况下使用严格相等是没有问题的，但存在两个例外。一个是+0和-0的比较，另一个是NaN的比较。**

**在严格相等中，+0 === -0 返回 true，NaN === NaN 返回 false**，这与直观判断是不一致的。为了避免这类特殊情况，可以通过 ES6 新特性 **Object.is** 来进行判断。

Polyfill 也很容易实现，对于+0和-0比较，首先严格相等，再判断倒数是否不相等即可，因为+0/0结果是Infinity，-0/0结果是-Infinity。而对于NaN比较问题，只需要判断二者分别不等于自身即可。（isNaN仅可判断当前数是否是NaN）

## 总结

- JavaScript 提供三种不同的比较操作符：严格相等、非严格相等、Object.is。
- ES2015标准提供以下四种比较操作符：严格相等、非严格相等、零值相等、同值相等。

    - 同值相等参考[JavaScript 中相等性判断](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)中 Object.defineProperty 实例，当试图对不可变属性进行修改时可能会发生错误。同值相等由 Object.is 方法提供。
    - 零值相等和同值相等类似，不过会认为 +0 与 -0 相等。
- 例子可从以下参考链接中获得。

## 参考

- [JavaScript 中相等性判断](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [Object.is](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
- [从 V8 的单元测试源码看“同值相等”](https://zhuanlan.zhihu.com/p/25107117)
