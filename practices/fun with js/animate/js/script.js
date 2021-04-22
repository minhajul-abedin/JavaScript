$(document).ready(function(){
	
	$(".one").mouseover(function(){
		$(this).stop().animate({width:"350px"});
	});
	$(".one").mouseout(function(){
		$(this).stop().animate({width:"250px"});
});	
	
});