---
layout: post
title: 关于normalize.css
category: css
tags: CSS
description: 关于normalize.css

---

本文由[来，让我们谈一谈 Normalize.css](http://jerryzou.com/posts/aboutNormalizeCss/)总结而成，而该文译自其官网[About normalize.css](http://nicolasgallagher.com/about-normalize-css/)

---

Normalize.css 只是一个很小的CSS文件，但它在默认的HTML元素样式上提供了跨浏览器的高度一致性。

# 1. 综述

创造normalize.css出于以下几个目的：
	
1. **保留有用的浏览器默认样式**而不是完全抹掉它们
2. **规范化的样式**：为大部分HTML元素提供
3. **修复浏览器自身的bug**并保证各浏览器的一致性
4. **提高可用性**：通过一些小技巧
5. **代码注释**：通过注释和详细的文档
	
# 2. Normalize vs Reset

1. Normalize.css 保留有价值的默认值（Normalize.css preserves useful defaults）
2. Normalize.css 修复常见浏览器bug（Normalize.css corrects common bugs）
3. Normalize.css 不会让你的调试工具变得凌乱不堪（Normalize.css doesn’t clutter your debugging tools）
4. Normalize.css 是模块化的（Normalize.css is modular）
5. Normalize.css 拥有详细的文档（Normalize.css has extensive documentation）
	
# 3. 知乎上讨论

>CSS Reset 是**革命党**，CSS Reset 里最激进那一派提倡不管你小子有用没用，通通给我脱了那身衣服，凭什么你 body 出生就穿一圈 margin，凭什么你姓 h 的比别人吃得胖，凭什么你 ul 戴一胳膊珠子。于是 `*{margin:0;}` 等等运动，把人家全拍扁了。看似是众生平等了，实则是浪费了资源又占不到便宜，有求于人家的时候还得贱贱地给加回去，实在需要人家的默认样式了怎么办？人家锅都扔炉子里烧了，自己看着办吧。

>Normalize.css 是**改良派**。他们提倡，各个元素都有其存在的道理，简单粗暴地一视同仁是不好的。body 那一圈确实挤压了页面的生存空间，那就改掉。士农工商，谁有谁的作用，给他们制定个规范，确保他们在任何浏览器里都干好自己的活儿。
	
# 4. 扩展阅读

1. [来，让我们谈一谈 Normalize.css](http://jerryzou.com/posts/aboutNormalizeCss/)
2. [About normalize.css](http://nicolasgallagher.com/about-normalize-css/)
1. [Normalize.css 与传统的 CSS Reset 有哪些区别？](Normalize.css 与传统的 CSS Reset 有哪些区别？)

(最后修改于2015-08-25)