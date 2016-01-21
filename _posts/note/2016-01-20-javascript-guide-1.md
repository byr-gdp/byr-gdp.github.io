---
layout: post
title: 《JavaScript 权威指南》笔记（一）
category: 笔记
tags: JavaScript JS 
description: 《JavaScript 权威指南》

---

（Chapter 3 —— Chapter 7）

---

# 第3章 基本概念

1. 严格模式

	`"use strict";`
	
2. 数据类型

	 5种简单数据类型：Undefined Null Boolean Number String。1种复杂数据类型 Object。
	 
3. typeof 操作符

	可能的返回值，6种数据类型（小写）
	
	* "undefined"
	* "boolean"
	* "string"
	* "number"
	* "object"
	* "function"
	
	注意：
	
	* typeof null 返回值 'object'
	* typeof 未声明变量和未初始化变量，均返回 undefined
	
4. Null 类型

	表示空对象指针，所以 typeof null 返回 object
	
5. 0/0返回 NaN，正数除以0返回 Infinity，负数除以0返回 -Infinity
6. isNaN() 适用于对象。先调用 valueOf()，若不行，再调用 toString()
7. 数值转换

	Number() parseInt() parseFloat()
	
	1. parseInt() 第二个参数表示按照 X 进制进行解析，即基数。
	2. parseFloat() 只解析十进制
	
8. toString()

	1. null 和 undefined 没有该方法。可以使用转型函数 String()。
	2. 可传递一个参数：输出数值的技术。默认情况下，toString()以十进制格式返回数值的字符串表示。
	
9. Object 类型

	Object 的每个实例都有下列的属性和方法：
	
	1. constructor: 构造函数。
	2. hasOwnProperty(propertyName): 用于检查给定的属性是否在当前对象的实例中（而不是实例的原型中）。
	3. isPrototypeOf(object): 用于检查传入的对象是否是传入对象的原型。
	4. propertyIsEnumerable(propertyName): 用于检查给定的属性是否能够使用 for-in 语句。
	5. toLocaleString(): 返回对象的字符串表示，与执行环境的地区对应。
	6. toString(): 返回对象的字符串表示。
	7. valueOf(): 返回对象的字符串、数值或布尔值表示
	
10. switch 语句在比较值时使用的是全等操作符

# 第4章 变量、作用域和内存问题

1. 基本类型和引用类型

	* 基本类型：Undefined、Null、Boolean、Number、String
	* 引用类型：Object
	
2. 只能给引用类型值动态地添加属性
3. ECMAScript 中所有函数的参数都是按值传递的（P71）
4. 检测类型

	* typeof
	* instanceof: 检测引用类型的值是什么类型的对象
	
5. 执行环境及作用域

	1. 延长作用域链
	
		* try-catch 语句的 catch 块
		* with 语句
		
6. 垃圾收集

	1. 标记清楚
	2. 引用计数
	
7. 基本类型值在内存中占据固定大小的空间，被保存在栈空间中
8. 引用类型的值是对象，保存在堆内存中

# 第5章 引用类型

1. 创建 Object 实例的方式有2种。第一种是使用 new 操作符后跟 Object构造函数，另一种是使用对象字面量表示法。
2. 一般来说，访问对象属性时使用**点表示法**，不过也可以使用**方括号表示法**来访问对象的属性
3. Array 类型

	1. 创造数组的两种方式：Array 构造函数（可以省略 new 操作符）、数组字面量表示法。
	2. 检测数组： Array.isArray(value)
	3. 栈方法：push() pop()
	4. 队列方法： push() shift()
	5. 重排序方法：reverse() sort()。sort() 方法可以接受一个比较函数作为参数。
	6. 操作方法：concat() slice() splice()
	
		splice() 主要有3种用法
		
		1. 删除：可以删除任意数量的项，指定2个参数：要删除的第一项的位置和要删除的项数。
		2. 插入：可以向指定位置插入任意数量的项，指定3个参数：起始位置、0（要删除的项数）和要插入的项。
		3. 替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，指定三个参数：起始位置、要删除的项数和要插入的任意数量的项。
		
	7. 位置方法：indexOf() lastIndexOf()，两个参数：要查找的项和起始位置
	8. 迭代方法：every() filter() forEach() map() some()
	9. 归并方法：reduce() reduceRight()
	
4. Date 类型

	1. Date.parse() Date.UTC()
	2. 日期格式化方法（P101）
	
5. RegExp 类型（略）
6. Function 类型

	1. 初始化三种方法：函数声明、函数表达式，第三种是使用 Function 构造函数，理解"函数是对象，函数名是指针"
	2. 没有重载
	3. 函数内部属性：arguments this
	4. 函数的属性和方法：两个属性：length prototype，length 表示函数希望接受的命名参数的个数
	5. 每个函数都包含两个非继承而来的方法：apply()和call()，区别仅仅是接受参数的方式不同，真正强大的地方是扩充函数赖以运行的作用域。
	
7. 基本包装类型

	3 个特殊的引用类型：Boolean Number String
	
8. 单体内置对象

	开发人员不必显式地实例化内置对象。例如 Object Array String Global Math
	
	1. Global 对象
	
		1. URI 编码方法
		
			* encodeURI、encodeURIComponent：encodeURI()不会对本身属于 URI 的特殊字符进行编码，例如冒号、正斜杠、问号和井字号；而 encodeURIComponent()则会对它发现的任何非标准字符进行编码。
			* decodeURI、decodeURIComponent：对应使用
			
		2. eval()方法：只接受一个参数,即要执行的ECMAScrip(t或JavaScript) 字符串。
		3. Global 对象属性
		4. window 对象
		
	2. Math 对象
	
		1. Math 的对象属性：Math.E Math.LN10 Math.LN2 Math.LOG2E Math.LOG10E Math.PI Math.SQRT1_2 Math.SQRT2
		2. min()和max()
			
			这两个方法经常用于避免多余的循环和在 if 语句中确定一组数的最大值，通过使用 `apply()`方法
			
				var values = [1, 2, 3, 4, 5, 6, 7];
				var max = Math.max.apply(Math, values);
				
		3. 舍入方法
		
			* Math.ceil()
			* Math.floor()
			* Math.round()
			

# 第6章 面向对象的程序设计

1. 属性类型

	1. 数据类型（Object.defineProperty）
	
		* configurable: 表示能否通过 delete 删除
		* writable: 表示能否修改
		* enumerable: 表示能否通过 for-in 循环返回
		* value: 属性的数据值
		
	2. 访问器属性（只能通过 Object.defineProperty 定义）
	
		* configurable
		* enumerable
		* get
		* set
	
2. 定义多个属性（Object.defineProperties）
3. 读取属性的特性（Object.getOwnPropertyDescriptor()）
4. 创建对象

	1. 工厂模式
	
		用函数来封装以特定接口创建对象的细节
		
			function createPerson(name, age, job){        		var o = new Object();		        o.name = name;        		o.age = age;		        o.job = job;		        o.sayName = function(){		            alert(this.name);        		};				return o; 
			}
		
		工厂模式虽然解决了创建多个相似对象的问题,但却没有解决**对象识别**的问题(即怎样知道一个对象的类型)。
		
	2. 构造函数模式
	
		之前的例子重写如下：
		
			function Person(name, age, job){        		this.name = name;		        this.age = age;		        this.job = job;		        this.sayName = function(){		            alert(this.name);				}; 
			}		    var person1 = new Person("Nicholas", 29, "Software Engineer");		    var person2 = new Person("Greg", 27, "Doctor");
		    
		对象的 constructor 属性最初是用来标识对象类型的。创建自定义的构造函数意味着将来可以将它的实例标识为一种特定的类型。而这正是构造函数模式胜过工厂模式的地方。
		使用构造函数的主要问题，就是每个方法都要在每个实例上重新创建一遍。虽然可以通过把函数定义转移到构造函数外部来解决这个问题，但丝毫没有封装性可言。
		
	3. 原型模式
	
		我们创建的每个函数都有一个 prototype(原型)属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。
		
		实例通过使用 hasOwnProperty()方法,可以确认什么时候访问的是实例属性（true）,什么时候访问的是原型属性(false)。
		
		原型与 in 操作符：有两种方式使用 in 操作符:单独使用和在 for-in 循环中使用。在单独使用时,in 操作符会在通 过对象能够访问给定属性时返回 true,无论该属性存在于实例中还是原型中。
		
		封装 hasPrototypeProperty() 确定该属性到底是存在于对象中,还是存在于原型中。
		
			function hasPrototypeProperty(object, name){		        return !object.hasOwnProperty(name) && (name in object);			}
			
		Object.keys()和 Object.getOwnPropertyNames()方法都可以用来替代 for-in 循环。
		更简单的原型语法：用一个包含所有属性和方法的 对象字面量来重写整个原型对象。
		
			function Person(){			}			
			Person.prototype = {			    name : "Nicholas",			    age : 29,			    job: "Software Engineer",			    sayName : function () {			        alert(this.name);	    		}			};
			
		注意：constructor 属性不再指向 Person 了。除非显示地设置。
		原型的动态性：重写整个原型对象会出现问题（P156）
		
		**原型模式的最大问题是由其共享的本性所导致的。**
		
	4. 组合使用构造函数模式和原型模式
	
		构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。		
	5. 动态原型模式
		可以通过检查某个应该存在的方法是否有效，来决定是否需要初始化原型。
	6. 寄生构造函数模式（感觉像是工厂模式和构造函数模式的结合）
	7. 稳妥构造函数模式
	
5. 继承

	许多 OO 语言都支持两种继承方式:**接口继承**和**实现继承**。接口继承只继承方法签名，而实现继承则继承实际的方法。如前所述，由于函数没有签名, 在 ECMAScript 中无法实现接口继承。**ECMAScript 只支持实现继承**,而且其实现继承主要是依靠**原型链**来实现的。
	
6. 原型链

	1. 确定原型和实例的关系
		
		1. instanceof 操作符
		2. isPrototypeOf() 方法
		
	2. 原型链的问题
	
		1. 最主要的问题来自包含引用类型值的原型。包含引用类型值的原型属性会被所有实例共享。
		2. 在创建子类型的实例时,不能向超类型的构造函数中传递参数。（不懂）
		
7. 借用构造函数
8. 组合继承

	组合继承(combination inheritance)，有时候也叫做伪经典继承，指的是将原型链和借用构造函数的技术组合到一块，从而发挥二者之长的一种继承模式。
	
9. 原型式继承

		function object(o) {
			function F() {}
			F.prototype = o;
			return new F();
		}
		
10. 寄生式继承
11. 寄生组合式继承（寄生继承部分依旧不懂）	
# 第7章 函数表达式

1. 函数声明的重要特征是**函数声明提升**，也是函数声明与函数表达式的区别。
2. `arguments.callee` 是一个指向正在执行的函数的指针，可以用它来实现对函数的递归调用。递归阶乘函数使用前后：

		function factorial(num) {
			if(num <= 1) {
				return 1;
			} else {
				return num * factorial(num-1);
			}
		}
		
		function factorial(num) {
			if(num <= 1) {
				return 1;
			} else {
				return num * arguments.callee(num - 1);
			}
		}
		
3. **闭包**是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式，就是在一个函数内部创建另一个函数。因为内部函数的作用域链会包含外部函数。
4. this 对象是在运行时基于函数的执行环境绑定的。两个很典型的例子：

		var name = "The Window";		var object = {    		name : "My Object",		    getNameFunc : function(){		        return function(){		            return this.name;        		};			} 
		};		alert(object.getNameFunc()()); //"The Window"
		
		var name = "he Window";
		var object = {
			name : "My Object",
			getNameFunc: function() {
				var that = this;
				return function() {
					return that.name;
				}
			}
		};
		alert(object.getNameFunc()());  //"My Object" 5. 模仿块级作用域：匿名函数立即调用
6. 私有变量

	1. 特权方法：有权访问私有变量和私有函数的共有方法。缺点是必须使用构造函数模式来达到这个目的。构造函数模式的缺点是每个实例都会创建同样一组新方法，而使用**静态私有变量**来实现特权方法可以避免这个问题
	
	2. 静态私有变量
	3. 模块模式（单例模式）（不懂）
	
	
# 第8章 BOM

1. window 对象

	1. 双重角色：表示浏览器的一个实例，是通过 JavaScript 访问浏览器窗口的一个借口，又是 ECMAScript 规定的 Global 对象。

	2. 全局作用域

		定义全局变量与在 window 对象上直接定义属性差别：全局变量不能通过 `delete` 操作符删除，而直接在 window 对象上的定义属性可以。
	
	3. 尝试访问未声明的变量会抛出错误，但是通过查询 window 对象，可以知道某个可能未声明的变量是否存在。
	4. 窗口关系及框架（略）
	5. 窗口位置

		screenLeft screenTop screenX screenY 
	
		移动：moveTo() moveBy()

	6. 窗口大小

		innerWidth innerHeight outerWidth outerHeight
	
		document.documentElement.clienWidth(clientHeight) 		document.body.clientWidth(Height)
	
	7. 导航和打开窗口

		window.open() 导航到一个特定 URL 或者打开一个新的浏览器窗口。
	
		调用 close() 方法可以关闭通过 window.open() 打开的弹出窗口。
	
8. location 对象

	1. 既是 window 对象的属性，也是 document 对象的属性。window.location 和 document.location 引用的是同一个对象。
	
	9. 查询字符串参数 location.search
	10. 位置操作 window.location 或 location.href

		replace() 方法避免生成新纪录。
		reload() 重新加载。location.reload(true) 从服务器加载，否则可能从缓存中加载。

11. navigator 对象

12. screen 对象

	基本只用来表明客户端的能力，其中包括浏览器窗口外部的显示器的信息。
	
13. history 对象

	go() back() forward()
	
# 第9章 客户端检测

1. 能力检测（又称特性检测）

	1. 两个概念
	
		* 先检测达成目的的最常用的特性
		* 必须测试实际要用到的特性。一个特性存在，不一定意味着另一个特性也存在。
		
	2. 更可靠的能力检测
	
		尽量使用 `typeof`
		
	3. 能力检测，不是浏览器检测
	
2. 怪癖检测
3. 用户代理检测：万不得已的做法

	1. 用户代理字符串检测技术
	
		1. 识别呈现引擎：主要检测五大呈现引擎：IE Gecko Webkit KHTML 和 Opera


  


















