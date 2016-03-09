---
layout: post
title: 50道js能力测评经典题(1)
category: 技术
tags: javascript, js, 评测, 练习
description: 50道js能力测评经典题

---

在线测评：[牛客网](http://www.nowcoder.com/ta/js-assessment?page=1)，该练习的目的主要在于复习原生js。去年（2015）夏天在南京的时候我大概过了一遍，当时也发现很多问题，近半年时间算是把《JavaScript 权威指南》选择性地看了一遍，春节（2016）期间重做一次该练习，看看是否有长进。

在50个练习中，<del>我会选择性地挑选完成有难度或有意思的题目来记录。</del>我除了按照基本要求完成外，每道题会看看其他人的答案，如果有**精彩**的代码我也会在本文附上。

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

# 逻辑操作

## 1. [或运算](http://www.nowcoder.com/practice/77f1e6e2f54044d0ad47ab14e3711489?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

## 2. [且运算](http://www.nowcoder.com/practice/608780935ae44babb9785485bb650a76?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

# Number

## 1. [二进制转换——十进制转二进制](http://www.nowcoder.com/practice/2c7f25d532aa4e20b67af9d3c93dc65f?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	// toStirng
	function valueAtBit(num, bit) {
		return num.toString(2)[num.toString(2).length - bit];
	}
	
	// 移位操作
	function valueAtBit(num, bit) {
		return (num>>(bit-1)) % 2;
	}

## 2. [二进制转换——二进制转十进制](http://www.nowcoder.com/practice/4123561150114d119ba41f28219a454f?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function base10(str) {
		return parseInt(str, 2);
	}

## 3. [二进制转换——数字转换二进制字符串](http://www.nowcoder.com/practice/7b74386695cc48349af37196f45e62a8?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

    // 字符串拼接
    function convertToBinary(num) {
		var binary = num.toString(2);
    	var len = binary.length;
    
    	for(var i=len; i < 8; i++) {
        	binary = '0' + binary;
    	}
    	return binary;
	}
	
    // 字符串 - 数组 - 字符串
    function convertToBinary(num) {
    	var n = num.toString(2).split('');
    	if(n.length<8){
       		n.unshift('0');
    	}
    	return n.join('');
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
    
## 4. [乘法](http://www.nowcoder.com/practice/6429776e4630435cbc3eeb36bdf41f83?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

# 对象

## 1. [改变上下文](http://www.nowcoder.com/practice/dfcc28bf243642b795eaf5a2a621acc5?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

    function alterContext(fn, obj) {
      return fn.apply(obj);
    }
    
## 2. [批量改变对象的属性](http://www.nowcoder.com/practice/4f7d25a30eb1463cbf1daac39ec04f8d?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

    function alterObjects(constructor, greeting) {
      constructor.prototype.greeting=greeting;
    }
    
## 3. [属性遍历](http://www.nowcoder.com/practice/0158a4f165154f2eaf27d1907aa55e57?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)

	function iterate(obj) {
		var result = [];
    	for(var item in obj) {
        	if(obj.hasOwnProperty(item)) {
            	result.push(item + ': ' + obj[item]);
        	}
    	}
    	return result;
	}
    
### 模块

#### 1.[模块](http://www.nowcoder.com/practice/48e53feaabe94506a61300edadb5496d?rp=2&ru=/ta/js-assessment&qru=/ta/js-assessment/question-ranking)
    
    function createModule(str1, str2) {
      return {
        greeting: str1,
        name    : str2,
        sayIt   : function() {
            return this.greeting + ', ' + this.name;
        }
      }
    }
    
---

(最后修改于 2016-03-09)