var toggle = true;
 
//导航栏按钮
$('.btnImg').click(function() {
	if (toggle) {
		$('.btnImg').css("border", "1px solid #b0ccf3");
		toggle = false
	} else {
		$('.btnImg').css("border", "1px solid transparent");
		toggle = true;
	}
	$(".show").slideToggle(300);
})
 
//窗口大小发生改变
$(window).resize(function() {
	//获取窗口宽度
	var windSize = $(window).width();
 
	if (windSize > 576) {
		$(".show").slideDown(0);
	} else {
		$(".show").slideUp(0);
	}
});

document.querySelector('img#dx1[src]').onclick = function(){
    alert('努力奋进的有效回报，理想的发展与见识之所')
}
document.querySelector('img#dx2[src]').onclick = function(){
    alert('目前的最高目标，欢呼雀跃的圣地，渴望但需付出')
}
document.querySelector('img#dx3[src]').onclick = function(){
    alert('得以满足之地，实现生活目标的舒适大学')
}


