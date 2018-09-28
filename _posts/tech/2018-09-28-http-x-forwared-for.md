---
layout: post
title: HTTP 中的 X-Forwarded-For
category: 技术
tags: http, x-forwarded-for, nginx, proxy
description: HTTP 中的 X-Forwarded-For

---

在生产环境中，客户端请求通常不会与服务端直连，中间往往经过若干代理、负载均衡服务器，所以基于 TCP 层面拿到的 `remote_address` 将是这个链路中离服务端最近设备的 IP（这个 IP 无法伪造，否则三次握手无法成功）。所以需要有一种方式能获取到客户端真实 IP。

`X-Forwarded-For` 的出现便是为了解决这一问题，这个扩展头部不是HTTP/1.1（RFC2616）定义的。在 [RFC7239](https://tools.ietf.org/html/rfc7239#section-4) 中，推出了 `Forwarded` 用于替换已经成为既定标准的前者。

如果一个请求在到达服务端之前经过了若干代理，每个遵守相同规范的代理都会追加 `remote_address` 到 `X-Forwarded-For` 字段中，从而使服务端可以拿到客户端的真实 IP。

由于请求头部信息可以伪造，所以通过这个方式拿到的值并不一定可靠。尤其是服务端直接对外提供服务的，只能通过 `remote_address` 获取 IP。

在 Express 中，可以通过设置 `trust proxy` 来开启 `X-Forwarded-For` 受信。

## 参考

- [wikipedia: X-Forwarded-For](https://en.wikipedia.org/wiki/X-Forwarded-For)
- [HTTP 请求头中的 X-Forwarded-For
](https://imququ.com/post/x-forwarded-for-header-in-http.html)
- [Express: Options for 'trust proxy' setting](http://expressjs.com/en/4x/api.html#trust.proxy.options.table)