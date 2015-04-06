#Chapter 9	圆角、动画、自定义字体以及CSS3的更多内容
---
1. CSS3的模块化方式
2. 成熟的CSS3模块
	1. 更强大的CSS3选择器
		- 特征起始选择器：`p[name^="value"]`
		- 特征结束选择器：`p[name$="value"]`
		- 特征包含选择器：`p[name*="value"]`
		- 根选择器：`:root`
		- 第n子元素选择器：`p:nth-child(n)`
		- 倒数第n子元素选择器：`p:nth-last-child(n)`
		- 第n同类型选择器：`p:nth-of-type(n)`
		- 倒数第n同类型选择器：`p:nth-last-of-type(n)`
		- 最后子元素选择器：`p:last-child`
		- 第一同类型选择器：`p:first-of-type`
		- 最后同类型选择器：`p:last-of-type`
		- 唯一子元素选择器：`p:only-child`
		- 唯一同类型选择器：`p:only-of-type`
		- 空元素选择器：`p:empty`
		- 目标选择器：`p:target`
		- 激活/禁用选择器：`input:enabled`、`input:disabled`
		- 选定选择器：`input:checked`
		- 非选择器：`p:not(".special")
		- 下一兄弟选择器：`div~p`

	2. 高级颜色可选方案
		1. 通过HSL使用新的更易于理解的数字化颜色值：  
			HSL是RGB的一种替代方案。设置一个介于0到360之间的色调值（0=红色，120=绿色，240=蓝色）然后使用色度或饱和度调整颜色（0%为灰色，100%位全饱和），然后按照需要调整亮度/暗度的量（0%亮度是黑色，100%亮度是白色，50%为正常）
		2. 使用RGBA、HSLA以及opacity属性控制透明度（0完全透明，1完全不透明）
			- RGBA、HSLA在RGB和HSL基础上加上第四个值Alpha Value
			- 使用标准的opacity属性添加

	3. 背景及边框模板  
	   使用圆角与投影分别使用属性`(-webkit-)border-radius`和`(-webkit-)box-shadow`。其中shadow属性可取五个值
			- 投影的水平偏移
			- 投影的垂直偏移
			- 半径的模糊度。值越大，投影边界越模糊
			- 扩散的距离。即投影“流出”多少
			- 投影的颜色

	4. 多列布局模块
		1. 方式一：使用`column-count`属性
		2. 方式二：使用`column-width`属性

	5. 媒体查询：应用在“响应式网页设计”（Responsive Web Design）

3. 新的以及开发中的模块
	1. 使用@font-face指令自定义字体
	2. 变形、动画以及过渡的高级CSS操控
		