---
layout: post
title: 如何配置一个 JavaScript 库
category: 技术
tags: javascript, library, rollup, git hook
description: 如何配置一个 JavaScript 库

---

关于如何从零开始配置一个 JavaScript 库，结合最近的搜集的一些资料整理如下，分别从如下几个方面出发。

## 编辑器代码风格

可以通过配置 `.editorconfig` 实现，使得代码风格在不同编辑器下有一致的体验，比如缩进。

## Lint

比如 ESLint，通过 `.eslintrc` 和 `.eslintignore` 实现配置，配置文件的生成可以参考 [eslint-note](https://github.com/byr-gdp/eslint-note/blob/master/markdown/01.md)，推荐以局部安装的方式，这样引入 plugin 时不会出现意想不到的情况。

## Babel

通过 `.babelrc` 配置，并使用 `preset-env`，其他配置参考官方文档，并正确引入相应的 devDependency。同时 `modules` 设置为 `false`，模块交给构建工具去处理。

## 构建

选择比较多，这里只列举 `rollup`，配置比较简单，几个插件的用法也很容易掌握。默认配置文件叫作 `rollup.config.js`。

## Git Hook

可以通过 [husky](https://github.com/typicode/husky) 配置，配置可以写在 `package.json` 也可以以 `.huskyrc` 配置。通常我们可以配置 `pre-commit` 并在提交前执行一些操作，如 test 或者 eslint 监测等。

husky 能很好的解决问题，但在现有项目进行接入时，很有可能遇到特别多的 eslint 错误导致无法提交的情况，这个时候可以通过 [lint-staged](https://github.com/okonet/lint-staged) 来避免这个问题，它会仅对本次修改提交的文件进行检查，可以很好的解决之前的痛点。

## 测试

这里推荐使用 [ava](https://github.com/avajs/ava)。并且结合 `husky` 实现提交代码前自动测试。

## 配置 .gitignore

## 配置 package.json script

通常是开发、构建、测试、清除等基本操作或者基本操作的组合。

## TypeScript 支持

提供 `.d.ts` 文件。

## CI

如果代码托管到 GitHub 上，可以结合 Travis CI 来监听仓库变化并抓取最新代码在提供的一个运行环境执行测试、构建、发布等工作。

如果使用 Travis CI，需要在仓库配置 `.travis.yml` 文件。具体配置可以参考[官方文档](https://docs.travis-ci.com/)。

