---
layout: post
title: vue.js示例-Markdown编辑器
category: vue.js
tags: 
description: vue.js-Markdown编辑器
---

### 0.写在前面
参考资料：[Markdown编辑器](http://cn.vuejs.org/examples/index.html)
在线示例：[Markdown编辑器](/html/vue.js_demo/Markdown/2015-5-20-vue-example-markdown/index.html)

### 1.HTML
需要主要引用的两个外部文件，一是**vue.min.js**，二是**marked.min.js**  
源码如下：  
	
	<link rel="stylesheet" href="style.css">
	<div id="editor">
	<h1>Markdown Editor</h1>
  	<div id="content">
    	<textarea v-model="input" debounce="300"></textarea>
    	<div id="output" v-html="input | marked"></div>
  	</div>
	</div>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/0.11.10/vue.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min.js"></script>
	<script src="js.js"></script>

### 2.JS

	new Vue({
		el: '#editor',
		data: {
    		input: '# hello vue.js'
  		},
  		filters: {
    	marked: marked
  		}
	})

### 3.CSS
	
	*{
		margin: 0;
		padding: 0;
	}
	div#editor{
		width: 680px;
		position: relative;
		left: 50%;
		top: 20%;
		margin-left: -340px;
	}
	textarea{
		display: block;
		width: 50%;
		height: 500px;
		resize: none;
		padding: 20px;
		background-color: #CDC5BF;
		border: 1px solid #ccc;
	}
	div#content{
		position: relative;
	}
	div#output{
		width: 298px;
		height: 458px;
		position: absolute;
		left: 50%;
		top: 0;
		margin-left:10px;
		padding: 20px;
		border: 1px solid #ccc;
		background-color: #CDC5BF;
	}