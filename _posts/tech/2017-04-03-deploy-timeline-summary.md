---
layout: post
title: 部署 timeline 的几点总结
category: 技术
tags: Deploy, Express, Node, pm2
description: 部署 timeline 的几点总结

---

timeline 是最近折腾的一个东西，想法来源于 V2EX 的时间轴功能，本质上就是个人微博，可以随时记录想法，同时可以对过去的想法进行评论（Append）。

timeline 由于前后端分离，所以由两个 Repo 组成，分别是 [timeline](https://github.com/byr-gdp/timeline) 和 [timeline-end](https://github.com/byr-gdp/timeline-end)。前端基于 Vue-Cli/Webpack/Stylus，后端基于 Express/MongoDB。

开发基本上没什么值得说的，需求也很简单，设计参照 V2EX 现有风格。这里就部署过程中遇到的问题和一些想法简单说一说吧。

目前我有两台 VPS，一个是 Vultr，主要用于科学上网，另一个是阿里云，主要是部署一些演示 Demo。显而易见 timeline 部署在阿里云上。

关于部署，首先得将代码复制到 VPS 上，先使用 GitHub 作为中转站，本地 push 到 GitHub 后，在 VPS 上执行 `git clone` 即可。

## 先说说前端遇到的问题

由于前端是利用 Vue-Cli 脚手架进行初始化的，所以本地开发过程中都是通过 `npm run dev` 配合 Webpack-Dev-Server 来实现热加载的，甚至在 `index.html` 文件中 `script` 标签都是自动注入的。所以到了服务器，再我配置好了 Nginx 并重启后，打开对应的 IP 地址，除了白屏外并没有理想的效果。看源码发现的确是项目目录下的 `index` 文件，只是 `script` 没有被注入。

看了下 `package.json` 文件，找到了 `build` 选项，由于一些依赖的原因（如 Babel 等），不得不在本地执行 `npm run build`，而生成的文件除了`index.html`就是一些 js/css 文件，且相关资源都已经被正确引用了。突然意识到这才是正确的部署方式，只需要通过 `scp` 命令传到服务器上即可。

## 再说说后端遇到的问题

前端通过构建工具打包生成了若干静态文件只需要简单配置 Nginx 然后丢到一个目录就可以了。后端服务为了稳定必然会涉及到进程长驻以及 crash 后自动重启。自然想到了 pm2，但再安装后启动应用的时候报如下错误：`/usr/bin/env: node: No such file or directory`，并在 <http://stackoverflow.com/questions/30281057/node-forever-usr-bin-env-node-no-such-file-or-directory> 找到了解决方案。补充一下，在 Ubuntu 环境下安装 Node 后，启动命令不是 node，而是 nodejs，有一种说法是在 Node.js 之前已经有名为 node 的包了，所以为了避免冲突才会使用 nodejs 作为代替。

另一个是关于数据库的，由于本地开发一直使用测试数据库，所以当我在线上更改数据库配置后，重新执行 Babel 转码时失败了，因为缺少相应的依赖，而我又不愿意在 VPS 又折腾一遍，所以直接在之前转码的基础上修改的。（这是一个很不靠谱的办法，先挖坑），记得之前看到过 NODE_ENV，或许能解决这个问题，我将之后进一步尝试。

## 总结

虽然部署过程临时解决了一些发现的问题，但从一定高度来看，还是有很多细节需要从一开始就考虑清楚。通过脚本的形式来部署代码，尽量减少人为的因素在其中。目前 timelien 已经可以通过 [timeline.52byr.com](timeline.52byr.com) 访问了，而这是一个开始。
