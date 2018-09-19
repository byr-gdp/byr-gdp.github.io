---
layout: post
title: NAT 简介
category: 技术
tags: nat, http, udp
description: 简介 NAT 不同类型的区别

---

## 背景

在 PS4 网络环境检查中，有一项是 NAT 类型，在联机游戏中，它直接决定了联机的游戏体验。尽管网速上下行速度检测都不错，但在联机体验上并不是最关键的因素。

## 什么是 NAT

NAT（Network Address Translator）网络地址转换器的出现是为了解决 IPv4 地址即将耗尽的问题。在网络边缘加入 NAT 设备，每个 NAT 设备负责维护一个表，表中包含本地IP和端口到全球唯一（外网）IP和端口的映射。

NAT 转换的核心是必须精确维护一张路由表才能保证数据的精确转发。常见的传输层协议是 TCP 和 UDP。由于 TCP 可靠传输的特性，每一个 TCP 连接都有一个设计周密的协议状态机，能保证信息的准确送达。而 UDP 是简单、无状态的协议。不可预测的状态处理是 NAT 设备引入后需要面临的严重问题。

大多数联网游戏采用 UDP，所以如果所在网络环境到公网出口经历了越多的 NAT，丢包和时延都会更加严重。

## NAT 的类型

NAT 分为三种类型，分别为 NAT 1/2/3，数字越大体验越差。

NAT 1 的网络环境下具有公网 IP，不需要经过 NAT 转换。
NAT 2 的网络虽然没有公网 IP，但是经过 NAT 转换后能正确地映射到公网 IP。
NAT 3 的网络最差，可能经过了多层 NAT 转换，数据报很有可能丢失。

## 结论

- 下载文件多是基于 TCP （否则无法实现断点续传）。
- 联网游戏通信基于 UDP，受 NAT 类型影响较大。运营商一般是不会提供公网 IP，良心运营商达到 NAT 2 是问题不大的。但对于像鹏博士、长城等垃圾运营商来说，NAT 3 是妥妥的。
- 下载文件快不代表联网游戏稳定。

## 参考

- [What is difference between nat type 1, 2 and 3?](https://www.quora.com/What-is-difference-between-nat-type-1-2-and-3)
- [Web性能权威指南](https://book.douban.com/subject/25856314/)
