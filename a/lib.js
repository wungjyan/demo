function getStyle(obj,attr){    //获取样式
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,false)[attr];
		}
	}

	//运动框架   完整框架
	function startMove(obj,json,fn){
		clearInterval(obj.iTimer);
		var cur=0;
		var iSpeed=0;
		obj.iTimer=setInterval(function(){
			var on_off=true;
			for(var attr in json){

				var iTarget=json[attr];


				//判断是否是透明度
				if(attr=='opacity'){
					cur=Math.round(getStyle(obj,'opacity')*100);
				}else{
					cur=parseInt(getStyle(obj,attr));
				}

				//根据与目标点的距离改变速度（缓冲运动）
				iSpeed=(iTarget-cur)/8;
				iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				
				if(cur!=iTarget){     //当同一对象有多个属性时，判断是否有属性未达目标，未达到继续执行
					on_off=false;
					if(attr=='opacity'){
						obj.style.opacity=(cur+iSpeed)/100;
						obj.style.filter='alpha(opacity='+(cur+iSpeed)+')';
					}else{
						obj.style[attr]=cur+iSpeed+'px';
					}
				}
			}

			if(on_off){  //当全部执行完，清除定时器 ，如果有回调函数，执行回调
				clearInterval(obj.iTimer);
				fn && fn.call(obj);
			}

			
		},30);
	}
