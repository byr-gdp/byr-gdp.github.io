---
layout: post
title: 如何开发一个 Dart Package
category: Dart
tags: Dart, Flutter, Package
description: Dart, Flutter, Package

---

Package 分2类，**dart package** 和 **plguin package**，这里只介绍第一种，后者和平台有关。

## 生成模版

通过 `flutter create --template=package hello_world`，其中 `hello_world` 是 package 名称，执行成功后会生成一个 `hello_world` 目录。

## 实现 package

进入 `hello_world` 目录后，编辑 `lib/hello_world.dart` 文件，实现包逻辑。

## 测试

项目目录下有一个 `test` 目录，并提供了最简单的测试写法可以参照。可以通过执行 `flutter test` 执行单元测试。

## 发布

确定测试用例通过后，可以通过 `flutter packages pub publish --dry-run` 来预发布，此时会进行一些检测并输出 package 的树形文件目录结构。再通过检测后，可以执行 `flutter packages pub publish` 来执行实际的发布操作。

## 评分

发布成功后，可以在 [dart packages](https://pub.dartlang.org/) 上搜索到对应的包。有意思的是官网会给每个包一个评分，会从流行度、健康度、维护度进行加权得出最终的分数供参考，像没有文档、描述不够、没有 examples、存在错误或警告等都会减分。相比通过 star 数来衡量一个包的质量要好很多。

## 参考

- [developing packages](https://flutter.io/docs/development/packages-and-plugins/developing-packages)
- [help scoring](https://pub.dartlang.org/help#scoring)

