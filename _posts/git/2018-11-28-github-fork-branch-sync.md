---
layout: post
title: Fork Branch 如何保持与上游同步
category: Git
tags: Git, GitHub, Fork
description: Fork Branch 如何保持与上游同步

---

一般有2种方式，一个是通过网页创建 PR，另一个是通过命令行方式。本质都是将上游提交 merge 到我们 fork 的分支。

这里有一个 [Wiki:保持fork之后的项目和上游同步](https://github.com/staticblog/wiki/wiki/%E4%BF%9D%E6%8C%81fork%E4%B9%8B%E5%90%8E%E7%9A%84%E9%A1%B9%E7%9B%AE%E5%92%8C%E4%B8%8A%E6%B8%B8%E5%90%8C%E6%AD%A5) 提供了命令行方式的做法，简单来说就是增加一个 upstream（区别于 origin），然后正常的 merge 即可。

第一种方式可以在 GitHub 直接操作，但是需要注意选择 `base fork` 和 `head fork`（通常需要调换顺序，因为实际上是将上游合并到我们自己的分支），然后填写 merge request 信息即可。
