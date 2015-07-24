---
layout: post
title: CSS3学习记录（一）
category: 技术
tags: HTML CSS3 
description: CSS3学习记录（一）
---

### CSS3 border

1. border-radius

		div{
			border: 2px solid; //若未设置背景色，需加入边框，否则无效果
			border-radius:25px;
		}

2. box-shadow

		div{
			box-shadow: 10px 10px 5px #888888; //第三个参数表示模糊程度，值越大，阴影越模糊
		}

3. border-image
		
		div{
			border-image:url(border.png) 30 30 round;
			-moz-border-image:url(border.png) 30 30 round; /* 老的 Firefox */
			-webkit-border-image:url(border.png) 30 30 round; /* Safari 和 Chrome */
			-o-border-image:url(border.png) 30 30 round; /* Opera */
		}  

特别注意 **30** 的意义，用于定位png图片用于边框的部分。
![](http://i.imgur.com/0kWctUX.png)


### CSS3 background

1. background-size  
	以像素或者百分比规定尺寸。如果以百分比规定尺寸，那么尺寸相对于父元素的宽度和高度。

2. background-origin  
	background-origin规定**背景图片**的定位区域。背景图片可以放置于 content-box、padding-box 或 border-box 区域。默认值是`padding-box`

3. 多重背景图片  
	background-image: url(), url()...
	
4. background-clip  
	background-clip规定背景的绘制区域。默认值是`border-box`  
	语法：`background-clip: border-box|padding-box|content-box;`

5. background-origin 与 background-clip 区别  
	`background-clip`属性指定了背景在哪些区域可以显示，造成一种切片的效果，但与背景实际开始绘制的位置无关，背景实际开始绘制的位置不一定等同于指定的显示区域。`background-origin`属性制定了背景从哪个区域(边框、补白或内容)开始绘制，仅对**background-image**有效。
	- 以设置background-color为例
		1. background-origin  
			CSS样式：
				
				div
				{
					border:10px dashed black;
					padding:10px;
					background-color: yellow;
					background-repeat:no-repeat;
				}
				#div1{
					background-origin:border-box;
				}
				#div2{
					background-origin:padding-box;
				}
				#div3{
					background-origin:content-box;
				}

			显示效果：  
![](http://i.imgur.com/JuHpwfp.png)

		2. background-clip  
			CSS样式：
				
				div
				{
					border:10px dashed black;
					padding:10px;
					background-color: yellow;
					background-repeat:no-repeat;
				}
				#div1{
					background-clip:border-box;
				}
				#div2{
					background-clip:padding-box;
				}
				#div3{
					background-clip:content-box;
				}

			显示效果：  
![](http://i.imgur.com/f0YY03A.png)

	- 以设置background-img为例
		1. background-origin  
			CSS样式：

				div
				{
					border:10px dashed black;
					padding:10px;
					background-image:url('/i/bg_flower.gif');
					background-repeat:no-repeat;
					background-position:left;
				}
				#div1
				{
					background-origin:border-box;
				}
				#div2
				{
					background-origin:padding-box;
				}
				#div3
				{
					background-origin:content-box;
				}


		显示效果：  
![](http://i.imgur.com/6AEtweB.png)

		2. background-clip  
			CSS样式：

				div
				{
					border:10px dashed black;
					padding:10px;
					background-image:url('/i/bg_flower.gif');
					background-repeat:no-repeat;
					background-position:left;
				}
				#div1
				{
					background-clip:border-box;
				}
				#div2
				{
					background-clip:padding-box;
				}
				#div3
				{
					background-clip:content-box;
				}
				
		显示效果：  
![](http://i.imgur.com/jY2LMLk.png)

### CSS3 文本效果

1. text-shadow
		
		h1{
		text-shadow: 5px 5px 5px #FF0000;//规定水平阴影、垂直阴影、模糊距离以及阴影的颜色
		}  

2. word-wrap  
	允许文本强制进行换行，及时会对单词进行拆分。  
	语法为：`word-wrap: normal|break-word;`

		p{ word-wrap: break-word;}
		
3. word-break  
	规定自动换行的处理方法。  
	语法为：`word-break: normal|break-all|keep-all;`
	
4. word-wrap:break-word 与 word-break:break-all区别  
	word-wrap会首先尝试挪到下一行，看看下一行的宽度够不够，不够的话就进行单词内的断句。word-break不会尝试把长单词挪到下一行，而是直接进行单词内的断句。若想节省空间，用word-break:break-all。  
	二者效果比较：  
	![image](http://int64ago.qiniudn.com/u6bnk62zqia4i.png)
	
5. text-overflow  
	属性规定当文本溢出包含元素时发生的事情。一般与`overflow:hidden`联用。  
	`text-overflow: clip|ellipsis|string;` 
	 
	| 值     | 描述          | 
	| :----------: |:-------------:|  
	| clip      | 修剪文本  |  
	| ellipsis   | 显示省略符号来代表被修剪的文本   |  
	| string  |使用给定的字符串来代表被修剪的文本    |


3. [更多属性](http://www.w3school.com.cn/css3/css3_text_effect.asp)  
其中有些当前主流浏览器尚未支持，如text-wrap、text-outline等

### CSS3 字体  
（待补充）