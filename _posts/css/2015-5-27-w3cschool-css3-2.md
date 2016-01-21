---
layout: post
title: CSS3学习记录（二）
category: css
tags: html, css, css3
description: CSS3学习记录（二）

---

## 2D转换

#### 转换方法
1. translate()方法  
	元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数。
2. rotate()方法  
元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。
3. scale()方法  
元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）参数。值 scale(2,4) 把宽度转换为原始尺寸的 2 倍，把高度转换为原始高度的 4 倍
4. skew()方法  
元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数。值 skew(30deg,20deg) 围绕 X 轴把元素翻转 30 度，围绕 Y 轴翻转 20 度。
5. matrix()方法  
matrix() 方法把所有 2D 转换方法组合在一起。  
matrix() 方法需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。

#### transform
语法：`transform: none|transform-functions;`  
`transform－functions`即之前的转换方法

#### transform-origin  
设置旋转元素的基点位置，默认值*"50% 50% 0"*

## 3D转换

#### 转换方法
1. rotateX()
2. rotateY()

#### 转换属性
1. transform
2. transform－origin

## CSS3 过渡
1. transition  
简写属性，用于在一个属性中设置**四个**过渡属性。

2. 要实现这一点，必须规定两项内容：
	- 您希望把效果添加到哪个 CSS 属性上
	- 规定效果的时长

### CSS3 动画
1. @keyframes 规则用于创建动画。在 @keyframes 中规定某项 CSS 样式
2. animation  
所有动画属性的简写属性，除了 animation-play-state 属性。

2. 通过规定至少以下两项 CSS3 动画属性，即可将动画绑定到选择器：  
	- 规定动画的名称
	- 规定动画的时长
	
## 多列

#### 常用属性
1. column-count
2. column-gap
3. column-rule

#### [更多属性信息](http://www.w3school.com.cn/css3/css3_multiple_columns.asp)