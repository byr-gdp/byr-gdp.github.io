---
layout: post
title: 说说 JS 相等性判断
category: JavaScript
tags: js, equality comparison
description: 说说 JS 相等性判断
---

在比较两个值是否相等时，首先需要明确的如何定义“相等”。

JavaScript 提供三种不同的比较操作符：严格相等、非严格相等、Object.is（采用同值相等算法，即 +0、-0 不相等）。

ES2015标准提供以下四种比较操作符：严格相等、非严格相等、零值相等（SameValueZero）（ES6 中没有提供明确的使用接口，待考证）、同值相等（SameValue）。

严格相等在比较前不会进行隐式转换，即若比较的两个值不是相同的类型，比较结果一定是不等的。非严格相等在进行比较前可能会根据具体情况进行相应的类型转换然后再按照严格比较规则进行比较。

**通常情况下使用严格相等是没有问题的，但存在两个例外。一个是+0和-0的比较，另一个是NaN的比较。**

**在严格相等中，+0 === -0 返回 true，NaN === NaN 返回 false**，这与直观判断是不一致的。为了避免这类特殊情况，可以通过 ES6 新特性 **Object.is** 来进行判断。

+0 等同于 0。

Polyfill 也很容易实现，对于+0和-0比较，首先严格相等，再判断倒数是否不相等即可，因为1/+0结果是Infinity，1/-0结果是-Infinity。而对于NaN比较问题，只需要判断二者分别不等于自身即可。（isNaN仅可判断当前数是否是NaN）

零值相等和同值相等算法区别在于如何比较 +0 与 -0，前者视为相等，后者反之。

## 参考

- [JavaScript 中相等性判断](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [Object.is](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
- [从 V8 的单元测试源码看“同值相等”](https://zhuanlan.zhihu.com/p/25107117)
