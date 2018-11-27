---
layout: post
title: 为什么 Webpack Loader 解析顺序从右向左
category: 技术
tags: webpack, loader, javascript
description: 为什么 Webpack Loader 顺序从右向左
---

## 问题

在 Webpack 配置文件中，通常需要配置不同的 `loader` 解析对应的文件，比如 `less` 文件，通常需要按照如下顺序配置 `style-loader、css-loader、less-loader`。这和”常识“自左向右解析不太相符合，“常识”可能会认为首先通过 `less-loader` 解析 `less` 文件并生成对应的 `css` 文件，然后与此类似再通过 `css-loader` 和 `style-loader` 进行处理。

## 原因

要解决以上疑问，需要明确2个概念。

首先，`loader` 本质上是一个函数，Webpack 根据配置中的 `test` 正则匹配文件并传入文件内容来调用预先配置好的 `loader`，即函数。我们配置多个 `loader` 本质上就是先后调用多个函数，所以 `loader` 顺序配置错误可能导致潜在问题，得不到预期的输出。

其次，需要分清 `compose` 和 `pipe`。前面提到的自左到右的认识其实是基于 `pipe` 得出的结论，对于有使用过 Gulp 等流式处理工具经验的人来说尤为熟悉，前者的输出等于后者的输入。但 Webpack 配置实际上是基于 `compose`，假如把 `loader` 当作函数，可以将配置看成嵌套的函数调用，如 `style-loader(css-loader(less-loader(content)))`，从函数调用顺序可以很容易得出 `loader` 生效顺序。

## 参考

- [Function composition (computer science)
](https://en.wikipedia.org/wiki/Function_composition_(computer_science))
- [Pipeline(Unix)](https://en.wikipedia.org/wiki/Pipeline_(Unix))