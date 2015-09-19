---
layout: post
title: bridged、nat、host-only
category: 技术
tags: net 网络
description: bridged nat host-only

---

最近在研究 vagrant 配置 Vagrantfile 时遇到了 host-only 问题，顺带查了虚拟机的3种网络模式区别。

# 3种网络模式

1. bridged
2. nat
3. host-only

# bridged

## 特点

1. 为局域网用户提供服务
2. 访问内网任何一台机器
3. 访问公网（需手工配置TCP/IP信息）

## 应用场景

局域网内新建虚拟服务器，为局域网用户提供网络服务。


# nat

## 特点

1. 通过宿主机器访问公网
2. 无法和本局域网其他真实主机进行通信（因TCP/IP配置信息由虚拟网络DHCP提供，无法手动修改）

## 应用场景

虚拟一个新的系统，且不用任何手工配置就能直接访问网络。

# host-only

## 特点

1. 虚拟系统之间可以相互通信，但虚拟系统和真实网络之间被隔离
2. 虚拟系统和宿主机器可以相互通信，只能到主机访问，相当于用双绞线互联

## 应用场景

创建一个与网内其他机器相隔离的虚拟系统，进行某些特殊的网络调试工作。

# 总结

对于像我一样的初学者，值得注意的是bridged和nat区别，比如虚拟机开启了web服务但内网的其他真实机器无法访问，有可能就是网络模式选择的问题。

# 参考资料

1. [bridged、host-only和NAT的虚拟机用法](http://virtual.51cto.com/art/200908/142106.htm)


（最后修改于2015-09-14）




