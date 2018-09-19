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

NAT 转换的核心是必须精确维护一张路由表才能保证数据的精确转发。

## NAT 的类型

NAT 分为三种类型，分别为 NAT 1/2/3，数字越大体验越差。

NAT 1 的网络环境下具有公网 IP，不需要经过 NAT 转换。
NAT 2 的网络虽然没有公网 IP，但是经过 NAT 转换后能正确地映射到公网 IP。
NAT 3 的网络最差，可能经过了多层 NAT 转换。