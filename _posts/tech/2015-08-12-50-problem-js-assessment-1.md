---
layout: post
title: 50道js能力测评经典题(2)——函数
category: 技术
tags: js 测评
description: 50道js能力测评经典题

---

<del>好多不会，好好体会下</del>

# 函数

## 1.函数传参

### 题目描述

将数组 arr 中的元素作为调用函数 fn 的参数 

#### 输入例子:

argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!'])

#### 输出例子:

Hello, Ellie!

### 分析

直接贴代码，用到了`apply`

	function argsAsArray(fn, arr) {
	  return fn.apply(this, arr);
	}
	
## 2.函数的上下文

### 题目描述

将函数 fn 的执行上下文改为 obj 对象 

#### 输入例子:

speak(function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'})

#### 输出例子:

Hello, Rebecca!!!

### 分析

和题1比较下

	function speak(fn, obj) {
	  return fn.apply(obj, obj);
	}
	
## 3.返回函数

### 题目描述

实现函数 functionFunction，调用之后满足如下条件：

1. 返回值为一个函数 f
2. 调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
3. 所有函数的参数数量为 1，且均为 String 类型 

#### 输入例子:

functionFunction('Hello')('world')

#### 输出例子:

Hello, world

### 代码

	function functionFunction(str) {
	  return f = function(s) {
        return str + ', ' + s;
      }
	}
	
## 4.使用闭包

### 题目描述

实现函数 makeClosures，调用之后满足如下条件：

1. 返回一个函数数组 result，长度与 arr 相同
2. 运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同 

#### 输入例子:

var arr = [1, 2, 3]; var square = function (x) { return x * x; }; var funcs = makeClosures(arr, square); funcs[1]();

**输出例子:**

4

### 分析

	function makeClosures(arr, fn) {
      var result=[];
      for(var i=0;i<arr.length;i++){
        result[i]=function(k){
          return function(){
            return fn(arr[k]);
          };
        }(i)
      }
      return result;
    }
    
## 5.二次封装函数

### 题目描述

已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：

1. 返回一个函数 result，该函数接受一个参数
2. 执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致 

#### 输入例子:

var sayIt = function(greeting, name, punctuation) {     return greeting + ', ' + name + (punctuation || '!'); };  partial(sayIt, 'Hello', 'Ellie')('!!!');

#### 输出例子:

Hello, Ellie!!!

### 分析

	function partial(fn, str1, str2) {
      return function(str3){
        return fn(str1,str2,str3);
      }
	}
	
## 6.使用 arguments

### 题目描述

函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。 

#### 输入例子:

useArguments(1, 2, 3, 4)

#### 输出例子:

10

### 代码
	
	function useArguments() {
	  var sum = 0;
      for(var i=0; i<arguments.length; i++) {
        sum += arguments[i];
      }
      return sum;
    }
    
## 7.使用 apply 调用函数

### 题目描述

实现函数 callIt，调用之后满足如下条件

1. 返回的结果为调用 fn 之后的结果
2. fn 的调用参数为 callIt 的第一个参数之后的全部参数 

#### 输入例子:

var a = 1; var b = 2; var test = function (first, second) { return first === a && second === b;}; callIt(test, a, b);

#### 输出例子:

true

### 分析

用到 arguments，代码如下：

	function callIt(fn) {
      var arr = [];
      for(var i=1; i<arguments.length; i++) {	//注意for循环起始条件
        arr.push(arguments[i]);
      }
      return fn.apply(fn,arr);
	}

## 8.二次封装函数

### 题目描述

实现函数 partialUsingArguments，调用之后满足如下条件：

1. 返回一个函数 result
2. 调用 result 之后，返回的结果与调用函数 fn 的结果一致
3. fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数 

#### 输入例子:

var a = 1; var b = 2; var c = 3; var d = 4;var test = function (first, second, third, forth) {return first + second + third + forth;};partialUsingArguments(test, a, b)(c, d);

#### 输出例子:

10

##### 分析

完全不会，贴几个代码来比较下

	function partialUsingArguments(fn) {
      var arr = [];
      for(var i=1;i<arguments.length;i++){
        arr.push(arguments[i]);
      }
      var result = function(){
        for(var i =0;i<arguments.length;i++){
            arr.push(arguments[i]);
        }
        return fn.apply(this,arr);
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
	
## 9.柯里化

### 题目描述

已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：

1. 返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
2. 调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
3. 调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
4. 调用 c 之后，返回的结果与调用 fn 的返回值一致
5. fn 的参数依次为函数 a, b, c 的调用参数 

#### 输入例子:

var fn = function (a, b, c) {return a + b + c}; curryIt(fn)(1)(2)(3);

#### 输出例子:

6

### 代码

	function curryIt(fn) {
	  var arr = [];
      var len = fn.length;
      return function(n) {
        arr.push(n);
        return arr.length<len?arguments.callee:fn.apply(null,arr);
      }
    }
