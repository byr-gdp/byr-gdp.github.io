---
layout: post
title: 前端开发过程心得记录
category: 技术
tags: HTML CSS JavaScript
description: 前端开发过程心得记录
---

### 1. float属性在布局中使用  
在HTML中，具有float浮动属性的元素自上而下要优先出现，并设置相应的width来占据相应的空间，之后才是“正常流”中的其它元素。在双栏布局的源码中经常看到div.right先于div.main出现。