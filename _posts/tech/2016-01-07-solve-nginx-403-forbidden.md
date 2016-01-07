---
layout: post
title: 解决 nginx 403 Forbidden
category: 技术
tags: nginx 403 forbidden
description: 解决 nginx 403 Forbidden

---

最近在阿里云上配置 nginx，外网访问出现 403 Forbidden 错误。

网上搜索一番，都提到两个原因。

1. 缺少index.html或者index.php文件
2. 权限问题

重新审视了 nginx.conf，排除了第一个原因。但权限问题让人恼火，因为对 linux command 不是特别熟悉，像 chmod chown 等命令都需要一边查文档一遍依葫芦画瓢。

然后在 Google 上找到 [nginx 403 forbidden](https://www.digitalocean.com/community/questions/nginx-403-forbidden--2)，不得不说 digitalocean 的 question 解决了我诸多在初步接触 vps 时遇到的问题。

在歪果仁讨论中提到了 `ps -ef | grep nginx`，我也说不上什么意思，大概是可以查询 nginx 的 owner，然后再 chown，但我照着命令执行下来并没有什么改观。

这个时候注意到 `ps -ef | grep nginx` 的结果中有 `www-data`，突然意识到 nginx.conf 中第一行就有 `user www-data`，于是我把 `www-data` 改成 `root`就可以了。当然，这个时候就有很多槽点了，比如为什么 root 登录，为什么不新建一个普通用户...

当然，在使用阿里云过程中，我也发现了『备案』的大坑...

---

（完）
（2016-01-07）
