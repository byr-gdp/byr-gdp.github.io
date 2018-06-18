---
layout: post
title: 当点击浏览器后退时会发生什么
category: JavaScript
tags: js, browser, javascript
description: 当浏览器回退时会发生什么
---

假设存在一个非单页应用，当从页面A跳转到页面B后，点击浏览器后退按钮后会发生什么？这里有两个细节需要关注，一个是离开页面A的时候，页面A怎么处理？另一个是当从页面B返回页面A时，会发生什么。如果要弄清楚第二个问题，首先得弄清楚第一个问题。

## 页面A跳转页面B

- 页面A触发 `beforeunload` 事件，可以通过赋值处理函数 event 对象的 returnValue 属性为空字符串来询问用户是否离开页面。
- 如果 `beforeunload` 没有阻止离开，页面A则触发 `pagehide` 事件。
- 页面A触发 `unload` 事件，此后文档处于一个特定状态：

  - 所有资源仍存在 (图片, iframe 等.)
  - 对于终端用户所有资源均不可见
  - 界面交互无效 (window.open, alert, confirm 等.)
  - 错误不会停止卸载文档的过程

- 页面B先后触发 `DOMContentLoaded`、`load`、`pageshow` 事件。

## 页面B点击后退按钮回到页面A

- 页面B先后触发 `beforeunload`、`pagehide`、`unload`。
- 页面A触发 `pageshow`。

这里有个例外，Safari 浏览器在两次跳转过程中都不会触发 `unload` 事件，有一种说法是因为其会缓存**渲染结果**以支持左右滑动手势来前进后退。

## 后退如何刷新

一个简单的例子，页面A是一个 to-do-list，页面B是 to-do-item，当点击一个未完成的 to-do-item 并在该页面标记已完成时，如果这个时候返回，页面A实际上还是之前的结果，这个时候需要有一种机制来刷新页面A从而展示正确的状态。

### performance

在浏览器支持的前提下，performance.navigation 会返回一个对象，包括页面是加载还是刷新、发生了多少次重定向等。

在 Chrome 测试中，刷新页面 performance.navigation.type 为 1，后退 performance.navigation.type 为 2，其他为 0。

在 Firefox 测试中，后退 performance.navigation.type 为 255，其余和 Chrome 保持一致。

在 Safari 测试中，和 Chrome 保持一致。不过可以看到 performance.navigation.type 的枚举值如下：

- TYPE_BACK_FORWARD: 2
- TYPE_NAVIGATE: 0
- TYPE_RELOAD: 1
- TYPE_RESERVED: 255

但 TYPE_BACK_FORWARD 和 TYPE_RESERVED 的区别还有待考证。

所以可以通过判断 performance.navigation.type === TYPE_RELOAD 来决定是否 reload。

### bfcache

bfcache 全称叫做“往返缓存”（back-forward cache），可以在用户使用浏览器的“后退”和“前进”按钮时加快页面的转换速度。这个缓存中不仅保存着页面数据，还保存了DOM和JavaScript的状态；实际上是将整个页面都保存在了内存里。测试发现**除 Chrome 外** Safari、Firefox 都会触发（很伤... bug 传送们：https://bugs.chromium.org/p/chromium/issues/detail?id=229605）

当页面触发 pagehide 和 pageshow 事件时，这两个事件都有一个 persisted 属性用来指示当前页面是否被 BF Cache 缓存。 因此可以通过 persisted 属性来达到禁用 BF Cache 的效果。

```javascript
window.onpageshow = function(event) {
  if (event.persisted) { // 第一次加载时是 false；Chrome 始终是 false
    window.location.reload();
  }
};
```

所以如果通过后退按钮返回，根据 persisted 属性来选择是否 reload 即可。

### cache-control

最开始从这篇文章 [[转]H5浏览器和webview后退刷新方案](https://www.cnblogs.com/xxcanghai/articles/5550204.html) 发现了该思路。通过 server 端增加响应头来达到不使用缓存而重新发起请求的目的。

```
Cache-Control: no-cache,no-store,must-revalidate
Expires: Thu, 01 Jan 1970 00:00:00 GMT
Pragma: no-cache
```

弊端当然是慢了...

关于浏览器历史记录和 HTTP 缓存之间的关系，更精细的分析可以参考这篇：[You Do Not Understand Browser History](https://madhatted.com/2013/6/16/you-do-not-understand-browser-history)，大意就是浏览器缓存并不会完全参考 HTTP 缓存规则，如果某个实体被缓存了，即使可能已经失效，浏览器历史机制也应该去展示它。

### more

待补充一些 tricky 的方式...

## 参考

- [MDN-unload](https://developer.mozilla.org/zh-CN/docs/Web/Events/unload)
- [MDN-performance.navigation](https://developer.mozilla.org/zh-CN/docs/Web/Events/unload)
- [You Do Not Understand Browser History](https://madhatted.com/2013/6/16/you-do-not-understand-browser-history)
- [浏览器前进/后退缓存（BF Cache）](https://harttle.land/2017/03/12/backward-forward-cache.html)
- [浏览器往返缓存（Back/Forward cache）问题的分析与解决](https://github.com/LeuisKen/leuisken.github.io/issues/6)
- [[转]H5浏览器和webview后退刷新方案](https://www.cnblogs.com/xxcanghai/articles/5550204.html)