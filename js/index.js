$(function(){
	var game_guize=$('.game_guize');
	game_guize.click(function(){
		$('.riddles_background').css('display','none');
		$('.riddles_guize').css('display','block');
	})
	var return_btmR=$('.return_btmR');
	return_btmR.click(function(){
		$('.riddles_guize').css('display','none');
		$('.riddles_background').css('display','block');
	})
	var next_btmY=$('.next_btmY');
	next_btmY.click(function(){
		$('.tips').css('display','none');
	})
	$('.riddles_start').click(function(){
		location.href='riddle.html';
	})
	$('.try_again').click(function(){
		 window.location.reload();
	})
	$('.yanzheng_btn').click(function(){
	var numVal=$('.number').val();
	// console.log(numVal);
	if(numVal=='123'||numVal=='456'||numVal=='789'){
		
	}else{
		$('.yan_tips').css('display','block');
	}
	})
	$(".number").focus(function(){
		$('.yan_tips').css('display','none');
	})
	$('.return_btn').click(function(){
		location.href='index.html';
	})
	$('.lose_try_again').click(function(){
		location.href='index.html';
	})
	$('.my_gifts').click(function(){
		 $('.tips3').css('display','block');
	})
	$('.return_index').click(function(){
		 $('.tips3').css('display','none');
	})
	
})