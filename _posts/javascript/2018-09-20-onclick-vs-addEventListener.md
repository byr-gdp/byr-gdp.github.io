---
layout: post
title: onevent 与 addEventListener 区别
category: JavaScript
tags: onevent, addEventListener
description: onevent 与 addEventListener 区别
---

这是最近面试问的一个题目，这里简单记录下。主要是两种方法同时注册时事件触发后的函数执行的先后顺序，虽然网上有很多“测试用例”，但不足以说清楚问题本质。

主要从以下几个方面出发，以 `click` 为例。

## Listener(s)

onclick 仅支持绑定一个事件处理函数，且可以通过设置为 `null` 进行移除。

addEventListener 可以支持绑定多个事件处理函数，并且可以进行更精细的控制（通过第三个参数，包括 capture、once、passive）等，可以通过 `removeEventListener` 移除。

## 事件流阶段

事件流有三个阶段：捕获、到达目标、冒泡。可以通过 `event.eventPhase` 来判断当前。捕获（1）、到达目标（2）、冒泡（3），还有个 None（0）状态，表示该事件已经被处理。

`addEventListener` 可以根据第三个参数来决定事件处理发生在哪个阶段。而 `onclick` 往往在冒泡阶段触发。（这个说法并不准确，根据 DOM 结构不同，可能在冒泡也有可能在到达目标阶段）。

当 `addEventListener` 和 `onclick` 同时绑定且前者指定冒泡阶段时，按照绑定先后顺序依次触发。