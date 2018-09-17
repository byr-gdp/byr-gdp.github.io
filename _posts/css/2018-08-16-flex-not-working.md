---
layout: post
title: Flex not working
category: css
tags: css, css3, flex
description: Flex 弹性布局不一定适用于任何元素

---

Flex 弹性布局不一定在任何元素生效，比如 `<button>`、`<fieldset>`、`<legend>`。但这情况并不一定稳定复现，不同浏览器不同版本可能有不一致的表现。

在 Chrome 68、Safari 11 上，只有 `<legend>` 表现不一致，即 `<button>` 和 `<fieldset>` bug 已修复。其中 `<button>` 问题可以在 iOS 11 以前复现。

[StackOverflow](https://stackoverflow.com/questions/35464067/flexbox-not-working-on-button-or-fieldset-elements) 上有讨论，投票第一的回答更大把这怪异行为当作一种设计原则的体现。

比如回答第一句：

> The problem is that the <button> element is not designed to be a flex (or grid) container.

不过在 GitHub 的 [flexbugs](https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers) 仓库中找到了对应的记录，里面也提到了 `<button>` 和 `<fieldset>` 在某个版本进行了修复，但 `<legend>` 依旧保持“错误”的行为，这也与开始测试得出的结论一致。