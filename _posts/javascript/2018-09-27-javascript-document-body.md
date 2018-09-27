---
layout: post
title: document.body 不一定返回 body
category: JavaScript
tags: javascript, dom, document, body
description: document.body 不一定返回 body 标签
---

在 JavaScript 编码过程中经常通过 `document.body` 获取 `<body>` 元素。但这样的做法不一定可靠，在最近写的 [Chrome 分屏插件](https://github.com/byr-gdp/Chrome-Extension-For-Screen-Split)中，用到了 `<frameset>` 并发现可以通过 `document.body` 获取到。

通过 MDN 可以进一步确认。

> document.body: Returns the <body> or <frameset> node of the current document, or null if no such element exists.

更进一步，如果 `<body>`、`<frameset>` 同时出现的话，以哪个为准？在 Chrome v68 测试下，会以第一个出现的标签为准，不会出现“后来居上”的行为。

## 参考

- [document.body](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/body)

