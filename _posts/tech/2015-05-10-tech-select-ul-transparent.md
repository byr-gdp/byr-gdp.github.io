---
layout: post
title: 使用ul代替select实现下拉菜单透明效果
category: 技术
tags: 
description: 使用ul代替select实现下拉菜单透明效果
---

最近在重构页面的时候遇到这样一个问题：如何使下拉菜单透明显示，一开始或许会将这个问题转变为“如何使`<select>`或`<option>`透明显示”，然后在CSS上下功夫。但尝试一番后发现并不是这么一回事，搜索的结果是用**div代替select写个透明的下拉层**，于是乎转变思路，用ul来模拟select。  
以下是我最近重构页面使用select和ul的两个例子，代码如下：

### 1.select实现

#### HTML

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>select</title>
	<link rel="stylesheet" href="./css/select.css">
	</head>
	<body>
	<div id="main">
		<span>选择采摘</span>
		<select>
			<option selected="selected" disabled>山头</option>
			<option value="">山头</option>
			<option value="">山头</option>
			<option value="">山头</option>
			<option value="">山头</option>
			<option value="">山头</option>
			<option value="">山头</option>
		</select>
		<select>
			<option selected="selected">采摘位置</option>
			<option value="">位置</option>
			<option value="">位置</option>
			<option value="">位置</option>
			<option value="">位置</option>
			<option value="">位置</option>
			<option value="">位置</option>
		</select>
		<select>
			<option selected="selected">采摘位置</option>
			<option value="">位置</option>
			<option value="">位置</option>
			<option value="">位置</option>
			<option value="">位置</option>
			<option value="">位置</option>
			<option value="">位置</option>
		</select>
	</div>
	</body>
	</html>


#### CSS 

	*{
		padding:0; margin:0;
	}
	html, body{
		width: 100%;
		height: 100%;
		background-color: #43CD80;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: top;
		text-align: center;
		font-family: "SimHei""Microsoft YaHei";
		font-size: 14px;
	}
	#main{
		width: 768px;
		height: 80%;
		position: absolute;
		top: 20%;
		margin-left: 50%;
		left: -384px;
	}
	span{
		display: block;
		margin-bottom: 60px;
		color: #fff;
		font-size: 20px;
	}
	select{
		width: 176px;
		height: 48px;
		margin-left: 25px;
		margin-right: 25px;
		background-color: #fff;
		color: rgb(90,156,146);
		font-family: "SimHei""Microsoft YaHei";
		font-size: 16px;
	}

### 2.采用ul来模拟

#### HTML

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>ul</title>
	<link rel="stylesheet" href="./css/ul.css">
	<script src="./js/ul.js"></script>
	</head>
	<body onload="prepare()">
	<div id="main">
		<span class="title">选择采摘</span>
		<div style="width:100%;">
			<div style="display: inline-block; width:31%; ">
				<div style="position:relative;">
					<span class="menu" onclick="clickEvent(1);">选择山头</span>
				</div> 
				<ul id="u1" class="hidden" >
					<li class="choice1" onclick='selectLi("山头一", 1)'>山头1</li>
					<li class="choice1" onclick='selectLi("山头二", 1)'>山头2</li>
					<li class="choice1" onclick='selectLi("山头三", 1)'>山头3</li>
					<li class="choice1" onclick='selectLi("山头四", 1)'>山头4</li>
					<li class="choice1" onclick='selectLi("山头五", 1)'>山头5</li>
					<li class="choice1" onclick='selectLi("山头六", 1)'>山头6</li>
				</ul>
			</div>
			<div style="display: inline-block; width:31%;">
				<div style="position: relative">
					<span class="menu" onclick="clickEvent(2);">采摘位置</span>
				</div>
				<ul id="u2" class="hidden">
					<li class="choice2" onclick='selectLi("采摘位置1", 2)'>采摘位置1</li>
					<li class="choice2" onclick='selectLi("采摘位置2", 2)'>采摘位置2</li>
					<li class="choice2" onclick='selectLi("采摘位置3", 2)'>采摘位置3</li>
					<li class="choice2" onclick='selectLi("采摘位置4", 2)'>采摘位置4</li>	
					<li class="choice2" onclick='selectLi("采摘位置5", 2)'>采摘位置5</li>	
					<li class="choice2" onclick='selectLi("采摘位置6", 2)'>采摘位置6</li>
				</ul>
			</div>
			<div style="display: inline-block; width:31%;">
				<div style="position: relative;">
					<span class="menu" onclick="clickEvent(3);">采摘位置</span>
				</div>
				<ul id="u3" class="hidden" >
					<li class="choice3" onclick='selectLi("采摘位置1", 3)'>采摘位置1</li>
					<li class="choice3" onclick='selectLi("采摘位置2", 3)'>采摘位置2</li>
					<li class="choice3" onclick='selectLi("采摘位置3", 3)'>采摘位置3</li>
					<li class="choice3" onclick='selectLi("采摘位置4", 3)'>采摘位置4</li>
					<li class="choice3" onclick='selectLi("采摘位置5", 3)'>采摘位置5</li>
					<li class="choice3" onclick='selectLi("采摘位置6", 3)'>采摘位置6</li>
				</ul>
			</div>
		</div>
	</div>
	</body>
	</html>

#### CSS

	*{
		padding:0; margin:0;
		list-style: none;
	}
	html, body{
		width: 100%;
		height: 100%;
		background-color: #43CD80;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: top;
		text-align: center;
		font-family: "SimHei""Microsoft YaHei";
		font-size: 14px;
	}
	#main{
		width: 768px;
		position: absolute;
		top: 20%;
		margin-left: 50%;
		left: -384px;
	}
	span.title{
		display: block;
		margin-bottom: 60px;
		color: #fff;
		font-size: 20px;
	}
	span.menu{
		width: 176px;
		display:inline-block;
		height: 60px;
		line-height: 60px;
		background-color: #fff;
		color: rgb(90,156,146);
		border: 1px solid #fff;
		cursor: pointer;
	}
	.hidden{
		visibility: hidden;
	}
	.show{
		visibility: show;
	}
	li{
		display: inline-block;
		border-left: 1px solid #fff;
		border-right: 1px solid #fff;
		width: 176px;
		height: 48px;
		line-height: 48px;
		color: #fff;
		cursor: pointer;
	}
	li:hover{
		/*border:bottom: 1px solid #fff;*/
		color: rgb(90,156,146);
		background-color: #fff;
	}

#### JS(与实现透明效果无关)

### 3.在线版本

#### １.[select](/html/2015-05-10-tech-select-ul-transparent/select.html)

#### 2.[ul](/html/2015-05-10-tech-select-ul-transparent/ul.html)
