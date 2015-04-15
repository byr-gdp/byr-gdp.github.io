---
layout: post
title: Git学习笔记（2）
category: 技术
tags: Git
description: Git学习笔记（2）
---

#### 教程来源：[廖雪峰的官方网站](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000 "廖雪峰的官方网站")
---
1. 远程仓库
	1. 添加远程库
		- 要关联一个远程库，使用命令**git remote add origin git@github.com:user-name/repo-name.git**
		- 关联后，使用命令**git push -u origin master**第一次推送master分支的所有内容
		- 此后，每次本地提交可以使用命令**git push origin master**推送最新修改
	2. 从远程库克隆  
		使用命令**git clone git@github.com:user-name/repo-name.git**。GIt支持多种协议，包括**Https**，但通过**ssh**支持的原生git协议速度最快
2. 分支管理
	1. 创建与合并分支
		1. 查看分支：`git branch`
		2. 创建分支：`git branch <name>`
		3. 切换分支：`git checkout <name>`
		4. 创建+切换分支：`git checkout -b <name>`
		5. 合并某分支到当前分支：`git merge <name>`，快进模式（Fast-forward)
		6. 删除分支：`git branch -d <name>`
	2. 解决冲突  
		- 只能试图把各自的冲突合并起来，需手动解决
		- 用`git log --graph`命令可以看到分支合并图，如使用`git log --graph --pretty=oneline --abbrev-commit`
	3. 分支管理策略  
		通常，合并分支时，如果可能，Git会用`Fast forward`模式，但这种模式下，删除分支后会丢掉分支信息。如果要强制禁用Fast forward模式，即使用**--no-ff方式的git merge**，Git就会在merge时生成一个新的commit，这样从分支历史上就可以看出分支信息。
	4. Bug分支  
		1. Git还提供了一个stash功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作
		2. 恢复一下，有两个办法：
			1. 用`git stash apply`恢复，但是恢复后，stash内容并不删除，你需要用git stash drop来删除
			2. 用`git stash pop`，恢复的同时把stash内容也删了
	5. Feature分支  
		丢弃一个没有被合并过的分支，可以通过`git branch -D <name>`强行删除
	6. 多人协作（待补充）