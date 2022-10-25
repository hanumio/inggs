$(function(){
	setInterval("time()", 1000);
	getMsg();
	fitcube();
});

window.onresize = function () {fitcube();}

function fitcube(){
	var el = $('.el span').width();
	$('.el span').css('height',el+'px');
}
function getMsg(){
	var slogan = [
		"寒蝉黎明之时，便是重生之日。",
		"当你在凝视着网页的时候<br>网页也正在凝视着你",
		"也许我所失去的，<br>正是我生命中绝不该放手的东西。",
		"堕落是不需要理由的。",
		"正因为不会发生，所以才叫奇迹。",
		"世界是美丽的<br>就算充满悲伤和泪水<br>也请睁开你的双眼<br>去做你想要做的事<br>去成为你想要成为的人",
		"每个人<br>都有一个世界<br>安静而孤独",
		"连接遥远的过去与未来,<br>我们为此而存在……。",
		"梦总是有会醒来的时候，不会醒的梦总有一天会变成悲伤。",
	];
	var r = random(0,slogan.length-1);
	$("#slogan").html(slogan[r])
}
function random(Min,Max){
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.round(Rand * Range);
      return num;
}
function time() {
	var time = '#' + (new Date()).toTimeString().match(/\d{2}:\d{2}:\d{2}/)[0].replace(/:/g, '');
	$('.time').text(time);
	$('.background').css('background-color', time);
};