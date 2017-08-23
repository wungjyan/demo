		var s1=document.getElementById('s1');
		var s2=document.getElementById('s2');
		var num=document.getElementById('num');
		var img1=document.getElementsByTagName('img')[0];
		var text=document.getElementById('text');
		var f1=document.getElementById('f1');
		var f2=document.getElementById('f2');
		var img_arr=['1.jpg','2.jpg','3.png','4.jpg','5.jpg'];
		var text_arr=['第一张图片','第二张图片','第三张图片','第四张图片','第五张图片'];
		var n=0;
		var onoff=true; //true：顺序切换  false：循环切换;默认为顺序切换

		//通过点击改变onoff值，切换两种模式
		s1.onclick=function(){
			onoff=true;
			s2.style.backgroundColor="#696969";
			s1.style.backgroundColor="red";
		}
		s2.onclick=function(){
			onoff=false;
			s1.style.backgroundColor="#696969";
			s2.style.backgroundColor="red";
		}

		//下一张
		f2.onclick=function(){
			n++;
			if (n>4) 
			{
				if (onoff) 
				{
					alert('这是最后一张了');
					n=4;
				}else{
					n=0;
				}
			}

			change();
		}

		//上一张
		f1.onclick=function(){
			n--;
			if (n<0)
			{
				if (onoff) 
				{
					alert('这是第一张了');
					n=0;
				}else{
					n=4;
				}

			}
			change();
		}

		function change(){
			num.innerHTML=(n+1)+'/'+img_arr.length;
			img1.src=img_arr[n];
			text.innerHTML=text_arr[n];
		}
		
