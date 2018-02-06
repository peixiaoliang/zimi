$(function(){
	riddles_denglong=$('.riddles_denglong');
	riddles_denglong.click(function(){
		$('.win_prize').css('display','block');
		clearInterval(t);
		li[0].style.display="none";
	})
	linqu_prize=$('.linqu_prize');
	linqu_prize.click(function(){
		location.href='win.html';
	})
	// 灯笼闪烁
	var li=$('.denglong_text li');
	var num=0;  
    var len=li.length;  
  
   t=setInterval(function(){  
        li[num].style.display="none";  
        num=++num==len?0:num;  
        li[num].style.display="inline-block";  
  
	},500);//切换时间
})