---
layout: post
title: GET 会比 POST 更快？
category: 技术
tags: http, get, post
description: GET 会比 POST 更快？

---

最近有个候选人在回答 GET、POST 区别时，提到了 `GET 会比 POST 更快`，但我内心不置可否。下面从几个方面出发考虑：

## 请求体不同

虽然从概率上一个 POST 的 header、body 大小可能会比 GET 请求要大。但从 timing 分析来看，这部分的损耗几乎是微乎其微的。因为 POST 数据是放在 body 里，网上有一种说法是 body 封装会有损耗，不过这里也忽略不及。

## 缓存

GET 能够被缓存，实现了降维打击，但不足以本质上说明 GET 更快。

## 管道化

GET 支持管道化传输，POST 不支持，所以多个请求会出现明显性能差异，但单个请求是无差异的。

## POST 拆分成2次调用

在有的客户端实现中（如 curl），当满足一定条件时，会将 POST 请求拆分2步。

- 第一步：发送 POST header（增加 `Expect:100-continue`)，询问 Server 是否愿意接受数据。
- 第二步：接收到 Server 返回 `100-continue` 后，才把 body 数据发送到 Server。

这样的做法需要 Server 支持以作出正确的应答。如果是这么比较的话，POST 显然慢于 GET。这是目前为止找到最有说服力的一个理由。

## CORS 中的预检请求

在跨越的场景中，浏览器会**可能**使用 OPTIONS 方法发起一个预检请求，以检测实际请求是否可以被服务器所接受。之所以使用可能是因为 CORS 请求可分为**简单请求**和**非简单请求**（如何区分参考[这里](http://www.ruanyifeng.com/blog/2016/04/cors.html)），只有后者浏览器会在正式通信前增加一次预检请求。但是这个不足以说明 POST 比 GET 更快，因为 GET 跨越请求也可能是**非简单请求**。

## 参考

- [Expect:100-continue](http://www.laruence.com/2011/01/20/1840.html)
- [Why GET method is faster than POST in HTTP?](https://stackoverflow.com/questions/1211881/why-get-method-is-faster-than-post-in-http/1213476)
- [Atlas 2: HTTP POST is slower and it’s default in Atlas](http://omaralzabir.com/atlas_2__http_post_is_slower_and_it_s_default_in_atlas/)

