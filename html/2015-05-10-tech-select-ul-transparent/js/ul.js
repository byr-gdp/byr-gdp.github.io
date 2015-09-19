function prepare(){
		
		//以下三个下拉菜单可以用for循环来实现，暂时分开处理
		//预处理第一个下拉菜单
		var choice1 = document.getElementsByClassName("choice1");
		var length1 = choice1.length;
		choice1[0].style.borderTop = "1px solid #fff";
		choice1[length1-1].style.borderBottom = "1px solid #fff";

		//预处理第二个下拉菜单
		var choice2 = document.getElementsByClassName("choice2");
		// alert(choice1.length);
		var length2 = choice2.length;
		// alert(length1);
		// alert(length2);
		choice2[0].style.borderTop = "1px solid #fff";
		choice2[length2-1].style.borderBottom = "1px solid #fff";

		// 预处理第三个下拉菜单
		var choice3 = document.getElementsByClassName("choice3");
		var length3 = choice3.length;
		choice3[0].style.borderTop = "1px solid #fff";
		choice3[length3-1].style.borderBottom = "1px solid #fff";
	};
	function clickEvent(i){
		// alert(i)
		var id = "u" + i;
		// alert(id);
		var count = document.getElementsByTagName("ul");
		// alert(count.length);
		if(i <= count.length){
			var obj = document.getElementById(id);
			if(obj.className == "hidden")
				obj.className = "show";
			else{
				obj.className = "hidden";
			}
		}
	};
	function selectLi(text, i){
		// alert(text);
		// alert(i);
		var obj = document.getElementsByTagName("span");
		obj[i].innerHTML = text;
		clickEvent(i);
	}