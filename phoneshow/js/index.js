//当资源加载完成后，退出动画
var shade=document.getElementById('shade');
	document.onreadystatechange=function(){
		if(document.readyState=='complete'){
			shade.style.display='none';
		}
	}



//获取元素
var getElem = function (selector){
	return document.querySelector(selector);
}

var getAllElem = function (selector){
	return document.querySelectorAll(selector);
}

//获取元素class
var getCls = function (element){
	return element.getAttribute('class');
}
//设置元素class
var setCls = function (element,cls){
	return element.setAttribute('class',cls);
}

//为元素添加class
var addCls = function (element,cls){
	var baseCls=getCls(element);
	if (baseCls.indexOf(cls) === -1) {
		setCls(element,baseCls+' '+cls);
	}
}
//为元素删除class
var delCls = function (element,cls){
	var baseCls=getCls(element);
	if (baseCls.indexOf(cls) != -1) {
		setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '));
	}
}



//第一步：当页面加载完成后 初始化样式 init

//需要设置动画的样式
var screenAnimateElements = {
	'.screen-1': [
		'.screen-1_heading',
		'.screen-1_phone',
		'.screen-1_shadow'
	],
	'.screen-2': [
		'.screen-2_heading',
		'.screen-2_phone',
		'.screen-2_subheading',
		'.screen-2_point',
		'.screen-2_point_i_1',
		'.screen-2_point_i_2',
		'.screen-2_point_i_3'
	],
	'.screen-3': [
		'.screen-3_heading',
		'.screen-3_phone',
		'.screen-3_subheading',
		'.screen-3_features'
	],
	'.screen-4': [
		'.screen-4_heading',
		'.screen-4_subheading',
		'.screen-4_type_item_i_1',
		'.screen-4_type_item_i_2',
		'.screen-4_type_item_i_3',
		'.screen-4_type_item_i_4'
	],
	'.screen-5': [
		'.screen-5_heading',
		'.screen-5_subheading',
		'.screen-5_bg'
	]

};

//设置屏内元素为初始状态

var setScreenAnimateInit = function (screenCls){
	var screen = document.querySelector(screenCls);  //获取当前屏的元素
	var animateElements = screenAnimateElements[screenCls];   //需要设置动画的元素

	for(var i=0;i<animateElements.length;i++){
		var element = document.querySelector(animateElements[i]);
		var baseCls = element.getAttribute('class')
		element.setAttribute('class',baseCls+' '+animateElements[i].substr(1)+'_animate_init');
	}
}

//设置播放屏内的元素动画
var playScreenAnimateDone = function (screenCls){
	var animateElements = screenAnimateElements[screenCls];   //需要设置动画的元素
	for(var i=0;i<animateElements.length;i++){
		var element = document.querySelector(animateElements[i]);
		var baseCls = element.getAttribute('class');
		element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
	}
}

window.onload = function (){

	for(var k in screenAnimateElements){
		if (k === '.screen-1') {
			continue;
		}
		setScreenAnimateInit(k);
	}

}


//第二部：滚动加载动画
var navItems = getAllElem ('.header_nav-item');
var outlineItems = getAllElem ('.outline_item');


//导航切换时对应样式
var switchNavItemsActive = function (idx){
	//顶部导航
	for(var i=0;i<navItems.length;i++){
		delCls(navItems[i],'header_nav-item_status_active');
	}
	addCls(navItems[idx],'header_nav-item_status_active');

	//侧边导航
	for(var i=0;i<outlineItems.length;i++){
		delCls(outlineItems[i],'outline_item_status_active');
	}
	addCls(outlineItems[idx],'outline_item_status_active');
}

switchNavItemsActive(0); //默认首页导航添加样式


var navTip = getElem('.header_nav-tip');  //获取滑动门元素

window.onscroll=function(){
	var top = document.body.scrollTop || document.documentElement.scrollTop;
	if(top>80){
		addCls(getElem('.header'),'header_status_back');
		addCls(getElem('.outline'),'outline_status_in');
	}else{
		delCls(getElem('.header'),'header_status_back');
		delCls(getElem('.outline'),'outline_status_in');
		switchNavItemsActive(0);
	}

	if (top>1) {
		playScreenAnimateDone('.screen-1');
		navTip.style.left=0+'px';
	}
	if (top>700) {
		playScreenAnimateDone('.screen-2');
		switchNavItemsActive(1);
		navTip.style.left=70+'px';
	}
	if (top>1500) {
		playScreenAnimateDone('.screen-3');
		switchNavItemsActive(2)
		navTip.style.left=140+'px';
	}
	if (top>2300) {
		playScreenAnimateDone('.screen-4');
		switchNavItemsActive(3);
		navTip.style.left=210+'px';
	}
	if (top>3100) {
		playScreenAnimateDone('.screen-5');
		switchNavItemsActive(4);
		navTip.style.left=280+'px';
	}
}



//双向定位


var setNavJump = function (i,lib){
	var item = lib[i];
	item.onclick=function(){
		document.body.scrollTop = i*800;
		document.documentElement.scrollTop=i*800;
	}
}

for(var i=0;i<navItems.length;i++){
	setNavJump(i,navItems);
}
for(var i=0;i<outlineItems.length;i++){
	setNavJump(i,outlineItems);
}


//滑动门特效
var slideElems = getAllElem('.slide');
var setTip = function(idx,lib){
	lib[idx].onmouseover=function(){
		navTip.style.left=(idx * 70)+'px';
	}

	var activeIdx = 0;
	lib[idx].onmouseout=function(){
		for(var i=0;i<lib.length;i++){
			if(getCls(lib[i]).indexOf('header_nav-item_status_active')>-1){
				activeIdx = i;
				break;
			}
		}
		navTip.style.left=(activeIdx * 70)+'px';
	}
} 

for(var i=0;i<slideElems.length;i++){
	setTip(i,slideElems);
}



/*第一屏在页面载入200ms后播放*/
setTimeout(function(){
	playScreenAnimateDone('.screen-1');
},200);


