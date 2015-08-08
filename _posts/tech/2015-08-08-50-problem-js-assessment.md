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

###### 题目描述

移除数组 arr 中的所有值与 item 相等的元素，请直接在给定的 arr 数组上进行操作 

###### 分析

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

######题目描述

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

######题目描述

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

######题目描述

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

######题目描述

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



