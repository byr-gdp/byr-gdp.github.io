---
layout: post
title: 50道js能力测评经典题(1)
category: 技术
tags: javascript, js, 评测, 练习
description: 50道js能力测评经典题

---

在线测评：[牛客网](http://www.nowcoder.com/ta/js-assessment?page=1)，该练习的目的主要在于复习原生js。去年（2015）夏天在南京的时候我大概过了一遍，当时也发现很多问题，近半年时间算是把《JavaScript 权威指南》选择性地看了一遍，春节（2016）期间重做一次该练习，看看是否有长进。

在50个练习中，<del>我会选择性地挑选完成有难度或有意思的题目来记录。</del>我除了按照基本要求完成外，每道题会看看其他人的答案，如果有**精彩**的代码我也会在本文附上。

<del>今天（2015-08-13）把所有练习过了一遍，才发现其实只有45个题。不过暴露出很多问题，尤其是**函数相关**，得恶补一下。</del>

# 数组

## 1. [查找数组元素位置](http://www.nowcoder.com/practice/e7835a8113dd48afb15f77ef8d1dcb1d?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

        function indexOf(arr, item) {
            if(Array.prototype.indexOf) {
                return arr.indexOf(item);
            } else {
                for(var i = 0; i < arr.length; i++) {
                    if(arr[i] === item) {
                        return i;
                    }
                }
            }
            return -1;
        }

## 2. [数组求和](http://www.nowcoder.com/practice/cc3ce199461c4c4cb8f63db61d7eba30?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

        function sum(arr) {
            var sum = 0;
            arr.forEach(function(e) {
                sum += e;
            })
		    return sum;
		}
		
		function sum(arr) {
    		return eval(arr.join('+'))
		}

## 3. [移除数组中的元素（返回新的数组）](http://www.nowcoder.com/practice/edbc7496a36e433c89d298b9256af856?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

		function remove(arr, item) {
			var newArr = [];
    		arr.forEach(function(e) {
        		if(e !== item) {
            		newArr.push(e);
        		}
    		})
		    return newArr;
		}
		
		function remove(arr, item) {
			var newArr = [];
			for(var i in arr) {
				if(arr[i] !== item) {
					newArr.push(arr[i]);
				}
			}
			return newer;
		}
		
		function remove(arr, item) {
    		return arr.filter(function(x) { 
    			return x !== item; 
    		});
		}

## 4. [移除数组中的元素(操作原数组)](http://www.nowcoder.com/practice/a93dd26ebb8c425d844acc17bcce9411?rp=1&ru=/ta/js-assessment)

难点在于**直接在给定的arr数组**上进行操作，需用到 `splice`。

    function removeWithoutCopy(arr, item) {
      for(var i = 0; i < arr.length; i++) {
        if(item === arr[i]) {
          arr.splice(i, 1);
          i--; // for循环逆序的话，i--可以省略
        }
      }
      return arr;
    }
   
	function removeWithoutCopy(arr, item) {
		var pos = arr.indexOf(item);
    	while(pos !== -1) {
        	arr.splice(pos, 1);
        	pos = arr.indexOf(item);
    	}
    	return arr;
	}

## 5. [末尾添加元素（返回新的数组）](http://www.nowcoder.com/practice/3c7905cea3264ddaac4bf637ab3a19f9?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function append(arr, item) {
		return arr.concat([item]);
		// return arr.concat(item);
	}
		
	function append(arr, item) {
		var newArr = arr.concat();
		newArr.push(item);
		return newer;
	}

## 6. [删除数组最后一个元素（返回新的数组）](http://www.nowcoder.com/practice/df4b0b7a459447538351c4c7008b34e7?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function truncate(arr) {
		return arr.slice(0, arr.length-1);
		// return arr.slice(0, -1)
	}
		
## 7. [开头添加元素（返回新的数组）](http://www.nowcoder.com/practice/93994cb28b1c4ec5ad7da4f9c33ebfbe?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function prepend(arr, item) {
		return [item].concat(arr);
	}
		
## 8. [删除数组第一个元素（返回新的数组）](http://www.nowcoder.com/practice/0323822699da497b8822898e90025882?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function curtail(arr) {
		return arr.slice(1);
	}
		
## 9. [数组合并（返回新的数组）](http://www.nowcoder.com/practice/ba9ee11affbd44539a4104d7f098f06b?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function concat(arr1, arr2) {
    	return arr1.concat(arr2);
    }
 	
## 10. [添加元素（返回新的数组）](http://www.nowcoder.com/practice/941bcfa5b87940869fda681c1597fd3a?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function insert(arr, item, index) {
		return arr.slice(0, index).concat(item, arr.slice(index));
	}
	
## 11. [计数](http://www.nowcoder.com/practice/628339bd8e6e440590ad86caa7ac6849?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function count(arr, item) {
		var count = 0;
    	arr.forEach(function(e) {
        	if(e === item) {
            	count++;
        	}
        	// e === item ? count++ : 0;
    	})
    	return count;
	}
	
	function count(arr, item) {
		return arr.filter(function(e) {
    	    return e === item;
    	}).length;
	}

## 12. [查找重复元素](http://www.nowcoder.com/practice/871a468deecf453589ea261835d6b78b?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function duplicates(arr) {
		var result = [];
    	arr.sort();
    	for(var i = 0; i < arr.length - 1; i++) {
    		// 合并判断条件
        	if(arr[i] === arr[i+1]) {
            	if(result.indexOf(arr[i]) === -1) {
               		result.push(arr[i]);
            	}
        	}
    	}
    	return result;
	}
	
## 13. [求二次方](http://www.nowcoder.com/practice/b7a8647e33d84f5c88acdd7c81a85fdf?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function square(arr) {
		return arr.map(function(e) {
    	    return e*e;
    	    // return Math.pow(e, 2);
    	})
	}	
 	
## 14. [查找元素位置](http://www.nowcoder.com/practice/0a9af9cb20c34babb6232126e019c74d?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)
	
	function findAllOccurrences(arr, target) {
		var pos = arr.indexOf(target);
    	var result = [];
    	while(pos !== -1) {
    		result.push(pos);
        	pos = arr.indexOf(target, pos+1);
    	}
    	return result;
	}

# 编码规范

## 1. 避免全局变量

## 2. [正确的函数定义](http://www.nowcoder.com/practice/a5de760a7cf24c0e890eb02eed34bc02?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

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
      var getValue = function(){};  //可有可无
      if (flag) {
        getValue = function() { return 'a'; }
      } else {
        getValue = function() { return 'b'; }
      }
      return getValue();
    }
    
## 3. [正确的使用 parseInt](http://www.nowcoder.com/practice/a14f83473c384abba1bb51017d0dbd42?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

    function parse2Int(num) {
      return parseInt(num, 10);
    }


# 计数

## 1. [计时器](http://www.nowcoder.com/practice/72c661d926494bd8a50608506915268c?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	// setInterval
    function count(start, end) {
		console.log(start++);

		var interval = 100;

		var timer = setInterval(function() {
        	if(start <= end) {
            	console.log(start++);
        	}
    	}, interval);
    
    	var o = {
        	cancel: function() {
            	clearInterval(timer);
        	}
    	}
    
    	return o;
	}
	
	// setTimeout 尚未测试通过
	function count(start, end) {
		console.log(start++);

		var interval = 100;
		var timer = null;
    	if(start <= end) {
        	timer = setTimeout(function() {
            	count(start, end); // arguments.callee
    		}, interval);
    	}
    	var o = {
        	cancel: function() {
            	clearTimeout(timer);
        	}
    	}
    
    	return o;
	}


# 流程控制

## 1. [流程控制](http://www.nowcoder.com/practice/8a7bff7ab0d345d5ac5c82e41d9f7115?rp=1&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function fizzBuzz(num) {
		if(num % 3 ===0 && num % 5 ===0) {
        	return 'fizzbuzz';
	    } else if(num % 3 === 0) {
    	    return 'fizz';
	    } else if(num % 5 === 0) {
    	    return 'buzz';
	    } else if(arguments.length === 0 || typeof num !== 'number') {
    	    return false;
	    } else {
    	    return num;
	    }
	}
	
	function fizzBuzz(num) {
    	if(isNaN(num)){
        	return false;
    	}
    	var str='';
    	if(num%3===0){
	        str+='fizz';
    	}
	    if(num%5===0){
    	    str+='buzz';
	    }
    	return str||num;
	}
 
---

以下为之前的部分，待完善。

### 逻辑操作

### Number

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
    
#### 3.二进制转换——数字转换二进制字符串

##### 题目描述

将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。 

**输入例子:**

convertToBinary(65)

**输出例子:**

01000001

##### 分析

字符串追加实现方法很多，从最简单的“+”，或者`concat`、字符串`split`成数组后`unshift`再`join`等等。代码如下：

    //最开始想到的笨方法，前导0实现较复杂
    function convertToBinary(num) {
      var result = num.toString(2);
      var len = result.length;
      var tmp = '0'
      if(len < 8){
        for(var i=0; i<8-len-1; i++) {
            tmp = tmp.concat('0');
        }
        result = tmp.concat(result);
      }
      return result;
    }
    
    //优化前导0实现，通过unshfit
    function convertToBinary(num) {
      var result = num.toString(2);
      var len = result.length;
      result = result.split('');
      for(var i=0; i<8-len; i++) {
        result.unshift('0');  //数组从头插入
      }
      return result.join('');
    }
    
    //参考其他提交记录，如下实现也很巧妙
    function convertToBinary(num) {
 
      var zero=[0,0,0,0,0,0,0,0],bit=num.toString(2);
      if(bit.length>=8){
        return bit;
      }
      return zero.slice(bit.length-8).join("")+bit;
    }
    
### 对象

#### 1.改变上下文

##### 题目描述

将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值 

**输入例子:**

alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' })

**输出例子:**

Yo, Rebecca!

##### 分析

用到apply，直接贴代码

    function alterContext(fn, obj) {
      return fn.apply(obj);
    }
    
#### 2.批量改变对象的属性

##### 题目描述

给定一个构造函数 constructor，请完成 alterObjects 方法，将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。
 
**输入例子:**

var C = function(name) {this.name = name; return this;}; var obj1 = new C('Rebecca'); alterObjects(C, 'What\'s up'); obj1.greeting;

**输出例子:**

What's up

##### 分析

用到`prototype`，直接贴代码


    function alterObjects(constructor, greeting) {
      constructor.prototype.greeting=greeting;
    }
    
#### 3.属性遍历

##### 题目描述

找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)

1. 返回数组，格式为 key: value
2. 结果数组不要求顺序 

**输入例子:**

var C = function() {this.foo = 'bar'; this.baz = 'bim';}; C.prototype.bop = 'bip'; iterate(new C());

**输出例子:**

["foo: bar", "baz: bim"]

##### 分析

用到了`hasOwnProperty`和for循环`for(var key in obj)`形式，代码如下：

    function iterate(obj) {
      var arr = [];
      for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            arr.push(key + ': ' + obj[key]);
        }
      }
      return arr;
    }
    
### 模块

#### 1.模块

##### 题目描述

完成函数 createModule，调用之后满足如下要求：

1. 返回一个对象
2. 对象的 greeting 属性值等于 str1， name 属性值等于 str2
3. 对象存在一个 sayIt 方法，该方法返回的字符串为 greeting属性值 + ', ' + name属性值

##### 分析

返回函数中调用属性前得加`this`，代码如下：
    
    function createModule(str1, str2) {
      return {
        greeting: str1,
        name    : str2,
        sayIt   : function() {
            return this.greeting + ', ' + this.name;
        }
      }
    }