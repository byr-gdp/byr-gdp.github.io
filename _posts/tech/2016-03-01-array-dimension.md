---
layout: post
title: 优雅地实现多维数组降维
category: 技术
tags: JavaScript, JS, Array, 降维
description: 优雅地实现多维数组降维

---

原理参考 [优雅的数组降维——Javascript中apply方法的妙用](http://web.jobbole.com/85129/)。

---

现将几种思路由简入深地依次整理出来，并从二维上升到多维数组。

# 1. 嵌套循环

对于二维数组来说很容易想到，但对于多维以及不定维度的情况，嵌套的层数是不一定的，复杂度也会大大增加。以二维数组为例。

	function reduceDimension(arr) {
		var result = [];
		for(var i = 0; i < arr.length; i++) {
			for(var j = 0; j < arr[i].length; j++) {
				result.push(arr[i][j]);
			}
		}
		return result;
	}
	
# 2. 利用 `concat` 转换

如果 concat 方法的参数是一个元素，该元素会被直接插入到新数组中；如果参数是一个数组，该数组的各个元素将被插入到新数组中。同样以二维数组为例。

	function reduceDimension(arr) {
		var result = [];
		for(var i = 0; i < arr.length; i++) {
			result = result.concat(arr[i]);
		}
		return result;
	}
	
看似从两重循环减为一个循环，少了一半，仔细发现其实只是达到了降一维的作用。当维度上升时，并不好使。
	
# 3. 利用 apply 和 concat 转换

apply方法的第一个参数会作为被调用函数的this值，apply方法的第二个参数（一个数组，或类数组的对象）会作为被调用对象的arguments值，也就是说该数组的各个元素将会依次成为被调用函数的各个参数。同样以二维数组为例。

	function reduceDimension(arr) {
    	return Array.prototype.concat.apply([], arr);
	}
	
这里甚至没有用到循环。

# 4. 多维情况

这里考虑维度不一定的情况，需要通过 `instanceof` 来判断数组的各个元素是否还是数组。于是有了下面的解决方案。

	function reduceDimension(arr) {
    	var tmp = arr;
    	var result = arr;
    	while(tmp instanceof Array) {
        	result = Array.prototype.concat.apply([], result);
        	tmp = tmp[0];
    	}
    	return result;
	}
	
暂时想到这么多了。

（完）
（2016-03-01）
	
