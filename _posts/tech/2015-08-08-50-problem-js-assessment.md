---
layout: post
title: 50道js能力测评经典题
category: 技术
tags: js 测评
description: 50道js能力测评经典题

---

在线测评：[牛客网](http://www.nowcoder.com/ta/js-assessment?page=1)，完成该练习的目的主要在于复习原生js，因为平时框架用的比较多，很多时候是照着前人的成果依葫芦画瓢，是时候温习原生、拥抱原生了。

在50个练习中，我会选择性地挑选完成有难度或有意思的题目来记录。

### 数组

#### 1.[移除数组中的元素](http://www.nowcoder.com/practice/a93dd26ebb8c425d844acc17bcce9411?rp=1&ru=/ta/js-assessment)

##### 题目描述

移除数组 arr 中的所有值与 item 相等的元素，请直接在给定的 arr 数组上进行操作 

##### 分析

难点在于**直接在给定的arr数组**上进行操作。倘若生成一个新数组，可采用`push`方法，于是乎想到是否有从数组删除某个元素的方法，有`push`必有`pop`,但显然`pop`不合适...最终采用了[splice方法](http://www.w3school.com.cn/jsref/jsref_splice.asp)，该方法向数组中添加/删除项目，然后返回被删除的项目。代码如下：

	function removeWithoutCopy(arr, item) {
	  for(var i = 0; i < arr.length; i++) {
        if(item === arr[i]) {
          arr.splice(i, 1);
          i--;
        }
      }
      return arr;
    }
   
for循环逆序的话，`i--`也可以省略

#### 2.查找重复元素

##### 题目描述

找出数组 arr 中重复出现过的元素 

**输入例子:**

duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort()

**输出例子:**

[1, 3, 4]

代码如下：

	function duplicates(arr) {
   	  var repeat = [];
      var prev = null;	//存储比较过的数，防止三个及三个以上连续一样的
      arr = arr.sort();
      for(var i=0; i<arr.length-1; i++) {
        if(arr[i] == arr[i+1]){
          if(prev !== arr[i]){
            repeat.push(arr[i]);
          }
          prev = arr[i];
        }
      }
      return repeat;
    }
    
#### 3.求二次方

##### 题目描述

为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组 

**输入例子:**

square([1, 2, 3, 4])

**输出例子:**

[1, 4, 9, 16]
   
这里贴的是其他同学采用`map方法`的代码，学习下，而我仍采用最常规的for循环加push方法。

	function square(arr) {
      return arr.map(function(x){
        return x*x;
      });
    }
	
具体执行效率孰高孰低没有深究，县挖个坑...

### 编码规范

#### 1. 正确的函数定义

##### 题目描述

请修复给定的 js 代码中，函数定义存在的问题 

**输入例子:**

functions(true)

**输出例子:**

a

需要修复的代码：

	function functions(flag) {
      if (flag) {
        function getValue() { return 'a'; }
      } else {
        function getValue() { return 'b'; }
      }
      return getValue();
    }
    
修改后的代码：

	function functions(flag) {
      if (flag) {
        return  function getValue() { return 'a'; }();
      } else {
        return function getValue() { return 'b'; }();
      }
    }
    
或者：

	function functions(flag) {
	  var getValue = function(){};  //可有可无
      if (flag) {
        getValue=function() { return 'a'; }
      } else {
        getValue= function() { return 'b'; }
      }
      return getValue();
    }
    
#### 2.正确的使用 parseInt

##### 题目描述

修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例 

**输入例子:**

parse2Int('12'); parse2Int('12px'); parse2Int('0x12')

**输出例子:**

12; 12; 0

##### 分析

熟悉[parseInt文档](http://www.w3school.com.cn/jsref/jsref_parseInt.asp)，第二个参数表示要解析的数字的基数。

需要修复的代码：
	
	function parse2Int(num) {
      return parseInt(num);
	}
	
修改后：

	function parse2Int(num) {
      return parseInt(num, 10);
	}


### 计数

#### 1.计时器

##### 题目描述

实现一个打点计时器，要求

1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1

2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作

3、第一个数需要立即输出

##### 分析

1、3要求比较容易，2真不会，记录学习下。

代码如下：

	function count(start, end) {
   	  console.log(start++);
      var a = setInterval(function(){
        if(start <= end){
          console.log(start++);
        } else {
          clearInterval(a);
        }
      }, 100);
      return {
        cancel: function() {
          clearInterval(a);
        }
      }
    }
    
### 函数

#### 1.函数传参

##### 题目描述

将数组 arr 中的元素作为调用函数 fn 的参数 

**输入例子:**

argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!'])

**输出例子:**

Hello, Ellie!

##### 分析

直接贴代码吧，居然用到了`apply`，真不会

	function argsAsArray(fn, arr) {
	  return fn.apply(this, arr);
	}
	
#### 2.函数的上下文

##### 题目描述

将函数 fn 的执行上下文改为 obj 对象 

**输入例子:**

speak(function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'})

**输出例子:**

Hello, Rebecca!!!

##### 分析

和题1比较下吧

	function speak(fn, obj) {
	  return fn.apply(obj, obj);
	}
	
#### 3.返回函数

##### 题目描述

实现函数 functionFunction，调用之后满足如下条件：

1. 返回值为一个函数 f
2. 调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
3. 所有函数的参数数量为 1，且均为 String 类型 

**输入例子:**

functionFunction('Hello')('world')

**输出例子:**

Hello, world

##### 分析

	function functionFunction(str) {
	  return f = function(s) {
        return str + ', ' + s;
      }
	}
	
#### 4.使用闭包

##### 题目描述

实现函数 makeClosures，调用之后满足如下条件：

1. 返回一个函数数组 result，长度与 arr 相同
2. 运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同 

**输入例子:**

var arr = [1, 2, 3]; var square = function (x) { return x * x; }; var funcs = makeClosures(arr, square); funcs[1]();

**输出例子:**

4

##### 分析

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
    
#### 5.二次封装函数

##### 题目描述

已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：

1. 返回一个函数 result，该函数接受一个参数
2. 执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致 

**输入例子:**

var sayIt = function(greeting, name, punctuation) {     return greeting + ', ' + name + (punctuation || '!'); };  partial(sayIt, 'Hello', 'Ellie')('!!!');

**输出例子:**

Hello, Ellie!!!

##### 分析

	function partial(fn, str1, str2) {
      return function(str3){
        return fn(str1,str2,str3);
      }
	}
	
#### 函数真的好难

### 逻辑操作

### 二进制转换

#### 1.二进制转换——十进制转二进制

##### 题目描述

获取数字 num 二进制形式第 bit 位的值。注意：

1. bit 从 1 开始
2. 返回 0 或 1
3. 举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1 

**输入例子:**

valueAtBit(128, 8)

**输出例子:**

1

##### 分析

我采用的方法比较笨，通过for循环来模拟手算十进制转二进制的过程，先除以2取余，再用剩下的数继续用2除。代码如下：

	function valueAtBit(num, bit) {
      var result;
	  for(var i=0; i<bit; i++){
        result = num%2;
        num = Math.floor(num/2);
      }
      return result;
	}
	
后面参考其他人提交的记录，发现一种更巧的方法，即利用`toString`方法。`number.toString(num)`可以将十进制的number转换为以num为基数对应进制的值。代码如下：

	function valueAtBit(num, bit) {
      var str = num.toString(2);
      return Number(str.charAt(str.length-bit));
	}

#### 2.二进制转换——二进制转十进制

##### 题目描述

给定二进制字符串，将其换算成对应的十进制数字 

**输入例子:**

base10('11000000')

**输出例子:**

192

##### 分析

依旧采用比较笨的方式，考虑不同位的权值base不同，base在for循环中随着i的增大而乘2，注意输入字符串在`split`后必须`reverse`。代码如下：
	
	function base10(str) {
	  var result = 0;
      var base = 1;
      str = str.split('').reverse();
      for(var i=0; i<str.length; i++) {
        result += base*str[i];
        base*=2;
      }
      return result;
	}
	