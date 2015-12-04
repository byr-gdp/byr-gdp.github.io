---
layout: post
title: Git学习笔记（1）
category: 技术
tags: Git
description: Git学习笔记（1）
---

#### 教程来源：[廖雪峰的官方网站](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000 "廖雪峰的官方网站")
---
1. 创建版本库

	- 初始化一个Git仓库，使用`git init`命令。
	- 添加文件到Git仓库，分两步：
		- 第一步，使用命令`git add <file>`，可反复使用。
		- 第二步，使用命令`git commit -m "xxx"`，`-m`后面输入的是本次提交的说明，可以输入任意内容，非强制但推荐。

2. 时光机穿梭

	1. 预备知识
		- 工作区状态：`git status`。
		- 查看修改内容：`git diff`。
	
	2. 版本回退
		- 查看从最近到最远的三次提交日志：`git log`，简化输出，加上参数`--pretty=oneline`。
		- 使用命令`git reset --hard commit_id`在不同版本穿梭。`commit_id`可以用类似于`HEAD`的形式代替。`HEAD`指向当前版本，上一个版本是`HEAD^`，上上版本就是`HEAD^^`,往上100个版本可以写作`HEAD~100`。
		- 要重返回来，用`git reflog`查看命令历史，通过获得具体`commit_id`来确定要回到哪个版本上。
	
	3. 工作区和暂存区
	
		- 工作区（Working Directory）：就是在你电脑里能看到的目录。
		- 版本库（Repository）：工作区里的隐藏目录`.git`。
		- 暂存区：版本库中的`index`。
		
	4. 管理修改
	  
		Git比其他版本控制系统设计得优秀，因为Git跟踪并管理的是修改，而非文件  
		每次修改，如果不add到暂存区，那就不会加入到commit中  
	
	5. 撤销修改
	
		1. 尚未执行 `git add`，使用 `git checkout [filename]`。
		2. 已执行 `git add`，使用 `git reset HEAD [filename]`，将暂存区的修改退回到工作区。
	
	6. 删除文件
	
		分以下两种情况：
		
		1. 直接在文件管理器中删除文件，或者用**rm**命令。此时工作区和版本库就不一致，可用`git status`查看，进而有以下两种情况：
			- 确认删除：需要从版本库中删除该文件，使用命令`git rm`，并且`git commit`。
			- 文件恢复：因为文件**修改尚未放到暂存区**，所以使用命令`git checkout file`。
		
		2. 使用git命令`git rm`删除文件，同时**自动将修改加入暂存区**。同理有以下两种情况：
			- 确认删除：只需提交即可。
			- 文件恢复：因为已将修改加入暂存区，首先使用`git reset HEAD file`把暂存区的修改退回到工作区，再使用`git checkout file`丢弃修改来恢复。
			
---			
			
(最后修改于 2015-12-04)