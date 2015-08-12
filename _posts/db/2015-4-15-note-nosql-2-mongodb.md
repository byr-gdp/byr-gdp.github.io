---
layout: post
title: NoSql数据库入门（2）——MongoDB（面向文档的数据库）
category: DB
tags: NoSQL MongoDB database
description: NoSql数据库入门（2）——MongoDB（面向文档的数据库）
---
### 1. 特征  
1. MongoDB的最大特征就是无表结构，MongoDB在保存数据的时候会把数据和数据结构都完整地以BSON（JSON的二进制化产物）的形式保存起来，并把它作为值和特定的键进行关联。
2. MongoDB跟关系型数据库不同之处在于它无法进行**JOIN**查询，但它可以再标准的对象中事先嵌入（embed）其他对象，这样也能获得同样的效果
3. 由于MongoDB在保存数据时需要预留出很大的空间，因此对硬盘的空间需求量呈逐渐增大的趋势

### 2. 优势
1. MongoDB给我们最大的便利就是不必再去关心表结构和程序之间的一致性
2. MongoDB的另一个优势，是可以灵活地指定查询条件。比如正则表达式查询，或者对数组中特定数据的判断都可以完成

### 3. 不足
1. MongoDB不支持JOIN查询和事务处理
2. 使用MongoDB创建和更新数据的时候，数据不会实时写入到硬盘中