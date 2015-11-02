---
layout: post
title: curl命令登录校园网官关
category: 技术
tags: curl
description: curl命令登录校园网关

---

最近在看《Web安全测试》，接触到许多Linux环境下的东西，其中就有`curl`。之前在安装`homebrew`和阮一峰博文[curl网扎开发指南](http://www.ruanyifeng.com/blog/2011/09/curl.html)等地方均有所接触，并有总结[curl 指令小结](http://if-true.com/2015/09/16/curl-command-summary.html)。这次我们通过curl发送post请求以达到登录校园网的目的。

首先需要分析`form`，这是最重要的一个环节，通过分析可以得出需要提交的字段及其键值对，这里缺一不可。

![QQ20151102-0@2x.png](https://ooo.0o0.ooo/2015/11/02/56371db402c30.png)

从图可清楚地看到表单共有4个`input`，除了显而易见的**账号**和**密码**外，还有**是否保存密码**和**登录按钮**。值得注意的是**登录按钮**，它作为POST传输数据中必不可少的一部分，若缺少则登录失败。

我们将需要的三个字段的`name`值记录下来，就有了登录的curl指令

> curl -d "DDDDD=userId" -d "upass=pwd" -d "0MKKey=" http://10.3.8.211

类似的语法也同样生效

> curl --data "DDDDD=userId&upass=pwd&0MKKey=" http://10.3.8.211

其中，`userId`和`pwd`分别代表你的学号和密码。

至于登出...

你可以同样使用登录指令，此时只需更改`userId`或`pwd`，总之使二者不能成功匹配即可。即，我们的校园网关验证的逻辑是：验证通过，登陆成功；验证失败，下线，即使之前已成功登录。

当然，还有一个方法就是直接访问`http://10.3.8.211/F.htm`同样可以达到登出的目的，指令如下

> curl http://10.3.8.211/F.htm

最后，至于说这个究竟有什么好处，我也不知道...毕竟敲打这么多字符挺累的。若能保存为脚本，那应该会好一点点...





