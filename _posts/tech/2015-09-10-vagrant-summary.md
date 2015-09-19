---
layout: post
title: vagrant 小结
category: 技术
tags: vagrant virtualbox
description: vagrant 小结

---

最近（2015-09-9）在配置 go 开发环境时参考了 [Go-in-Action](https://github.com/astaxie/Go-in-Action/blob/master/ebook/zh/01.0.md)，其中提到了 **vagrant**。

下面根据我参考的资料和自己的理解来阐述下**vagrant**。

**vagrant**的出现是为了保持开发环境的一致性，避免代码在你的机器能跑起来而在我的机器无法运行的命运捉弄。

在Mac上，**vagrant**配合**virtualbox**使用。

通常情况下，我们通过virtualbox可以很容易地创建虚拟机，但却是非常“干净”的，目标系统有了，开发环境还得搭建。

**vagrant**可以通过添加**Box**来解决这一问题。一个打包好的操作系统在**vagrant**中称为**Box**，即Box是一个打包好的操作系统环境，里面包括开发工具，代码库，配置好的服务器等。

[vagrantbox.es/](http://www.vagrantbox.es/)上有熟知的大多数操作系统，下载即可。

**vagrant**可以创建共享文件夹，用来给主机和虚拟机之间共享代码，从而可以主机上写程序，虚拟机中运行。此处亮点。

除了一些基本指令外，值得注意的还有**Vagrantfile**配置文件，其中有许多重要配置信息。

下面是我参考的一些资料，其中包含使用教程

1. [Vagrant的介绍](https://github.com/astaxie/Go-in-Action/blob/master/ebook/zh/01.1.md)
2. [使用Vagrant打造跨平台开发环境](http://segmentfault.com/a/1190000000264347)

（最后修改于2015-09-12）