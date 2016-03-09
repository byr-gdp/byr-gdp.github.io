---
layout: post
title: 50道js能力测评经典题(3)
category: 技术
tags: js 测评
description: 50道js能力测评经典题

---

[50道js能力测评经典题](http://www.nowcoder.com/ta/js-assessment) 正则部分，目前的重心不在正则上，故没有进一步维护。

# 正则

## 1.判断是否包含数字

### 题目描述

给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false 

#### 输入例子:

containsNumber('abc123')

#### 输出例子:

true

### 代码

	function containsNumber(str) {
	  var reg = /\d/;
      return reg.test(str);
	}
	
## 2.检查重复字符串

### 题目描述

给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false 

#### 输入例子:

containsRepeatingLetter('rattler')

#### 输出例子:

true

### 分析

用到[后向引用](http://deerchao.net/tutorials/regex/regex.htm)

### 代码

	function containsRepeatingLetter(str) {
	  var reg = /([a-zA-Z])\1/;		// 括号不能省去
      return reg.test(str);
	}

## 3.判断是否以元音字母结尾

### 题目描述

给定字符串 str，检查其是否以元音字母结尾

1. 元音字母包括 a，e，i，o，u，以及对应的大写
2. 包含返回 true，否则返回 false 

#### 输入例子:

endsWithVowel('gorilla')

#### 输出例子:

true

### 代码

	function endsWithVowel(str) {
	  var reg = /[a,e,i,o,u]$/i;	// var reg = /[a,e,i,o,u]\i/;
      return reg.test(str);
	}
	
## 4.获取指定字符串

### 题目描述

给定字符串 str，检查其是否包含 3 个连续的数字

1. 如果包含，返回最新出现的 3 个数字的字符串
2. 如果不包含，返回 false 

#### 输入例子:

captureThreeNumbers('9876543')

#### 输出例子:

987

### 分析

关于match与正则`\g`是否联合使用输出结果存有疑问。倘若不带`\g`，match()方法就只能在stringObject中执行一次匹配，输出结果是否必须加[0]?，在console测试不必要，此处存疑。

### 代码

	function captureThreeNumbers(str) {
      var reg = /[0-9]{3}/;
      if(reg.test(str)){
        return str.match(reg)[0];
      } else {
        return false;
      }
	}
	
## 5.判断是否符合指定格式

### 题目描述

给定字符串 str，检查其是否符合如下格式

1. XXX-XXX-XXXX
2. 其中 X 为 Number 类型 

#### 输入例子:

matchesPattern('800-555-1212')

#### 输出例子:

true

### 代码

	function matchesPattern(str) {
      var reg = /^\d{3}-\d{3}-\d{4}$/
      return reg.test(str);
	}
	
## 6.判断是否符合 USD 格式

### 题目描述

给定字符串 str，检查其是否符合美元书写格式

1. 以 $ 开始
2. 整数部分，从个位起，满 3 个数字用 , 分隔
3. 如果为小数，则小数部分长度为 2
4. 正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3 

#### 输入例子:

isUSD('$20,933,209.93')

#### 输出例子:

true

### 代码

	function isUSD(str) {
      var reg = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/
      return reg.test(str);
	}
