---
layout: post
title: vagrant 小结
category: 技术
tags: vagrant virtualbox
description: vagrant 小结

---

最近（2015-09-9）在配置 go 开发环境时参考了 [Go-in-Action](https://github.com/astaxie/Go-in-Action/blob/master/ebook/zh/01.0.md)，其中提到了 vagrant。

vagrant 的出现是为了保持开发环境的一致性，避免代码在你的机器能跑起来而在我的机器无法运行的命运捉弄。

在 Mac 上，vagrant 配合 virtualbox 使用。

一般情况下，我们使用 virtualbox 可以很轻易的创建一个新的虚拟机，但通常是非常“干净”的，目标系统有了，开发环境还得配。vagrant 可以通过添加 Box 来解决这一问题。一个打包好的操作系统在Vagrant中称为Box，即Box是一个打包好的操作系统环境，里面包括开发工具，代码库，配置好的服务器等。

[vagrantbox.es/](http://www.vagrantbox.es/)上有大家熟知的大多数操作系统，下载即可。

vagrant 还可以创建共享文件夹，用来给主机和虚拟机之间共享代码，从而可以主机上写程序，虚拟机中运行。

除了一些基本指令外，重要的是 Vagrantfile 配置文件。

下面是我参考的一些资料，其中包含使用教程

1. [Vagrant的介绍](https://github.com/astaxie/Go-in-Action/blob/master/ebook/zh/01.1.md)
2. [使用Vagrant打造跨平台开发环境](http://segmentfault.com/a/1190000000264347)

（最后修改于2015-09-10）