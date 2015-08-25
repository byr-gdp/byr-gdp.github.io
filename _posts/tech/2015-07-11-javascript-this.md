---
layout: post
title: 关于JavaScript中this
category: 技术
tags: JavaScript this
description:  关于JavaScript中this

---

> when a function of an object was called, the object will be passed into the execution context as this value.
	
据说理解了这句话，this也就明白了。

<del>当然我并没有理解</del>

this 永远指向函数运行时所在的对象，而不是函数被创建时所在的对象。

匿名函数或不处于任何对象中的函数指向 window 。

---

函数中的this的值取决于函数调用的模式

1. 方法调用模式

	当函数被保存为对象的一个属性时，成该函数为该对象的方法。函数中this的值为该对象。

		var foo = {
    		name: 'fooname',
    		getName: function (){
     	  		return this.name  
    		}
		}
		foo.getName();  // this => foo

2. 函数调用模式

	当函数并不是对象的属性。函数中this的值为全局对象
	注意：某个方法中的内部函数中的this的值也是全局对象，而非外部函数的this

		function foo(){
    		this.name = 'fooname';  
		}
		foo();  // this => window

3. 构造器调用模式

	即使用new调用的函数，则其中this将会被绑定到那个新构造的对象。
		function Foo(){
    		this.name = 'fooname';
		}
		var foo = new Foo();  // this => foo

4. 使用apply或call调用模式

	该模式调用时，函数中this被绑定到apply或call方法调用时接受的第一个参数。

		function getName(name){
    		this.name = name;
		}
		var foo = {};
		getName.call(foo, name);  // this =>foo
	
---
	
参考资料：
	1. 知乎[JavaScript 中 this 是如何工作的？](http://www.zhihu.com/question/19624483)
	
(最后修改于2015-08-25)