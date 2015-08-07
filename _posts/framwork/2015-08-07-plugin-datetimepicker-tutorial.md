---
layout: post
title: datetimepicker Tutorial 中文版
category: 框架、库、插件
tags: bootstrap jquery datetimepicker
description: datetimepicker Tutorial 中文版

---

翻译参考了[官网](http://www.bootcss.com/p/bootstrap-datetimepicker/)，但原文内容有部分夹杂英文，故有了尝试全文翻译的想法。翻译仍在进行中。

<hr>

# 依赖

可通过lessc编译器运行`build/build_standalone.less`来生成独立的.css文件，包括一些必要的下拉菜单样式和基于文本的箭头图标

	$ lessc build/build_standalone.less datetimepicker.css
	
# 选项

所有需要“Date”的选项都可以处理`Date`对象，字符串会根据给定的格式来格式化，或者相对于今天变化，比如“-1d”（减一天），“+6m +1y”（加6个月，加1年），但只有“d”（天）、“w”（周）、“m”（月）和“y”（年）这些单位是有效的。

你也可以指定一个符合ISO-8601格式的日期时间，就可以忽略下面的格式：

* yyyy-mm-dd
* yyyy-mm-dd hh:ii
* yyyy-mm-ddThh:ii
* yyyy-mm-dd hh:ii:ss
* yyyy-mm-ddThh:ii:ssZ

## format

类型：String

默认值：‘mm/dd/yyyy’

日期格式：p, P, h, hh, i, ii, s, ss, d, dd, m, mm, M, MM, yy, yyyy 的任意组合

* p: 小写子午线时间（am或pm）表示当地时间
* P: 大写子午线时间（AM或PM）表示当地时间
* s: 不带前导0的秒
* ss: 带有前导0的两位数表示秒
* i: 不带前导0的分钟
* ii: 带有前导0的两位数表示分钟
* h: 不带前导0的小时——24小时制
* hh: 带有前导0的两位数表示小时——24小时制
* H: 不带前导0的小时——12小时制
* HH: 带有前导0的两位数表示小时——12小时制
* d: 表示当月多少号，不带前导0
* dd: 两位数表示当月多少号，带有前导0
* m: 不带前导0的数字表示月份
* mm: 带有前导0的两位数字表示月份
* M: 三个字母缩写月份
* MM: 全拼表示月份，例如January、March
* yy: 两位数表示年份
* yyyy: 四位数表示年份

## weekStart

类型：Integer
默认值：0
说明：一周从周日开始，依次分别是0到6

## startDate

类型：Date

默认值：开始时间

说明：可以选择的最早日期，在这之前的所有时间不能选择

## endDate

类型：Date

默认值：结束时间

说明：可以选择的最晚日期，在这之后的所有时间不能选择

## daysOfWeekDisabled

类型：String, Array

默认值：'',[]

说明：指明一周中的哪些天不能被选中。0对应Sunday，6对应Saturday。当有多个值时用逗号隔开。例如：周末不能选中：'0, 6'或者[0, 6]

## autoclose

类型：Boolean

默认值：false

说明：当选择一个日期之后是否立即关闭此日期时间选择器。

## startView

类型：Number, String

默认值：2，'month'

说明：日期时间选择器打开之后首先显示的视图。 可接受的值：

* 0 或者 'hour' 代表小时视图
* 1 或者 'day' 代表日视图
* 2 或者 'month' 代表月视图（默认）
* 3 或者 'year' 代表年视图
* 4 或者 'decade' 代表十年视图，对于生日选择特别有用

## minView

类型：Number, String

默认值：0, 'hour'

说明：日期时间选择器所能够提供的最精确的时间选择视图。

## maxView

类型：Number, String

默认值：4, 'decade'

说明：日期时间选择器最高能展示的选择范围视图。

## todayBtn

类型：Boolean, "linked"

默认值：false

说明：如果此值为true 或 "linked"，则在日期时间选择器组件的底部显示一个 "Today" 按钮用以选择当前日期。如果是true的话，"Today" 按钮仅仅将视图转到当天的日期，如果是"linked"，当天日期将会被选中。

## todayHighlight

类型：Boolean

默认值：false

说明：如果为true，高亮当前日期

## keyboardNavigation

类型：Boolean

默认值：true

说明：是否允许通过方向键改变日期

## language

类型：String

默认值：'en'

说明：两个字母的语言代码主要用于月份和天的名字表示，主要用于输入框的值（以及随后表单提交发送给服务器）。Currently ships with English ('en'), German ('de'), Brazilian ('br'), and Spanish ('es') translations, but others can be added (see I18N below).如果给定一个未知的语言代码，英语将生效而替换之。

## forceParse

类型：Boolean

默认值：true

说明：当选择器关闭的时候，是否强制解析输入框中的值。也就是说，当用户在输入框中输入了不正确的日期，选择器将会尽量解析输入的值，并将解析后的正确值按照给定的格式`format`设置到输入框中。

## minuteStep

类型：Number 

默认值: 5

说明：此数值被当做步进值用于构建小时视图。对于每个 minuteStep 都会生成一组预设时间（分钟）用于选择。

## pickerReferer : 不建议使用

类型：String

默认值：‘default'(其他可选项：'input')

说明：略

## pickPosition

类型：String

默认值：'bottom-right'（还支持:'bottom-left''top-left''top-right'）

说明：此选项当前只在**组件实现**中提供支持。通过设置选项可以讲选择器放倒输入框下方。

## viewSelect

类型：Number 或者 String

默认值：和minView一致

说明：通过这个选项，你可以决定到哪一个视图时日期会被选中。默认是最后一个，即小时，然而你可以设定为第一个，之后每一次点击日期都会更新。

## showMeridian

类型：Boolean

默认值：false

说明：针对天和小时启用子午线视图

## initialDate

类型：Date 或者 String

默认值：new Date()

说明：可以用一个日期来初始化视图，默认是现在，所以你可以指定昨天还是今天午夜。
