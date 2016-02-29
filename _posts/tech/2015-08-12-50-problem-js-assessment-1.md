---
layout: post
title: 50道js能力测评经典题(2)——函数
category: 技术
tags: js 测评
description: 50道js能力测评经典题

---



# 函数

## 1. [函数传参](http://www.nowcoder.com/practice/80365a2685144559817e3d5e0c27f3a8?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function argsAsArray(fn, arr) {
		return fn.apply(this, arr);
	}
	
## 2. [函数的上下文](http://www.nowcoder.com/practice/5e97b94794bd438f893137b2d3b28a6a?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function speak(fn, obj) {
		return fn.apply(obj); // return fn.call(obj);
	}
	
## 3. [返回函数](http://www.nowcoder.com/practice/1f9fd23cdfd14675ab10207191e1d035?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function functionFunction(str) {
		return f = function(s) {
    		return str + ', ' + s;
    	}
	}
	
	function functionFunction(str) {
		return function() {
    		return str + ', ' + arguments[0];
    	}
	}
	
## 4. [使用闭包](http://www.nowcoder.com/practice/578026cd24e3446bbf27fe565473dc26?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

详解：<http://www.nowcoder.com/profile/878925/codeBookDetail?submissionId=1634608>

	function makeClosures(arr, fn) {
		var result = [];
    	for(var i = 0; i < arr.length; i++) {
        	var tmp = (function(num) {
        		return function(){
                	//return fn(arr[num]);
                	return fn.call(this, arr[num]);
            	}
       		})(i)
    		result.push(tmp);
    	}
    	return result;
	}
	
	
    
## 5. [二次封装函数](http://www.nowcoder.com/practice/fb2d46b99947455a897f2e9fe2268355?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function partial(fn, str1, str2) {
    	return function(str3){
    		return fn(str1,str2,str3);
    	}
	}
	
	function partial(fn, str1, str2) {
		return function(str3) {
        	return fn.call(this, str1, str2, str3);
    	}
	}
	
## 6. [使用 arguments](http://www.nowcoder.com/practice/df84fa320cbe49d3b4a17516974b1136?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)
	
	function useArguments() {
		var sum = 0;
    	for(var i=0; i<arguments.length; i++) {
        	sum += arguments[i];
      	}
    	return sum;
    }
    
## 7. [使用 apply 调用函数](http://www.nowcoder.com/practice/d47b482e7148497582c7a995df51f393?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

arguments 不是真正意义上的数组，需要先转换成数组。`var args = Array.prototype.slice.call(arguments)`

	function callIt(fn) {
    	var arr = [];
    	for(var i=1; i<arguments.length; i++) {			//注意for循环起始条件
        	arr.push(arguments[i]);
    	}
    	return fn.apply(fn,arr);
	}

## 8. [二次封装函数](http://www.nowcoder.com/practice/694afeb930f74392bda01a815219d81b?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

arguments 转换数组避免循环的方法尚未测试通过。

	function partialUsingArguments(fn) {
		var arr = [];
    	for(var i = 1; i < arguments.length; i++) {
        	arr.push(arguments[i]);
    	}
    	var result = function() {
        	var arr2 = [];
        	for(var i = 0; i < arguments.length; i++) {
            	arr.push(arguments[i]);
        	}
        	return fn.apply(this, arr);
    	}
    	return result;
	}
	
	function partialUsingArguments(fn) {
    	var s=Array.prototype.slice.call(arguments,1);
    	var result=function(){   
    		return fn.apply(this,s.concat([].slice.call(arguments)));
    	};
    	return result;
    }
	
## 9. [柯里化](http://www.nowcoder.com/practice/bb78d69986794470969674a8b504ac00?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function curryIt(fn) {
		var arr = [];
    	var len = fn.length;
    	return function(n) {
    		arr.push(n);
    		return arr.length < len ? arguments.callee : fn.apply(null,arr);
    	}
    }
