$(function(){
	//数据库
			//-------------------------------------
			var arrs=[{
				title:'饮品',
				data:'url(../temp/1.png) no-repeat',
				wz:['可','口','可','乐'],
				gs:4
			},
			{
				title:'人名',
				data:'url(../temp/2.png) no-repeat',
				wz:['爱','因','斯','坦'],
				gs:4
			},
			{
				title:'饮品',
				data:'url(../temp/3.png) no-repeat',
				wz:['雪','碧'],
				gs:2
			},
			{
				title:'企业',
				data:'url(../temp/4.png) no-repeat',
				wz:['中','国','石','化'],
				gs:4
			},
			{
				title:'人物',
				data:'url(../temp/5.png) no-repeat',
				wz:['罗','纳','尔','多'],
				gs:4
			},
			{
				title:'电影&电视剧',
				data:'url(../temp/6.png) no-repeat',
				wz:['金','刚'],
				gs:2
			},
			{
				title:'电影&电视剧',
				data:'url(../temp/7.png) no-repeat',
				wz:['泰','坦','尼','克','号'],
				gs:5
			},
			{
				title:'企业',
				data:'url(../temp/8.png) no-repeat',
				wz:['南','孚'],
				gs:2
			},
			{
				title:'人物',
				data:'url(../temp/9.png) no-repeat',
				wz:['希','特','勒'],
				gs:3
			},
			{
				title:'电影&电视剧',
				data:'url(../temp/10.png) no-repeat',
				wz:['忍','者','神','龟'],
				gs:4
			},
			{
				title:'电影&电视剧',
				data:'url(../temp/11.png) no-repeat',
				wz:['大','白','鲨'],
				gs:3
			},
			{
				title:'企业',
				data:'url(../temp/12.png) no-repeat',
				wz:['亚','马','逊'],
				gs:3
			},
			{
				title:'电影&电视剧',
				data:'url(../temp/13.png) no-repeat',
				wz:['侏','罗','纪','公','园','大'],
				gs:6
			},
			{
				title:'人物',
				data:'url(../temp/14.png) no-repeat',
				wz:['乔','布','斯'],
				gs:3
			},
			{
				title:'电影&电视剧',
				data:'url(../temp/15.png) no-repeat',
				wz:['星','球','大','战'],
				gs:4
			},
			{
				title:'人物',
				data:'url(../temp/17.png) no-repeat',
				wz:['马','三','立'],
				gs:3
			},
			{
				title:'人物',
				data:'url(../temp/18.png) no-repeat',
				wz:['金','正','恩'],
				gs:3
			},
			{
				title:'电影&电视剧',
				data:'url(../temp/19.png) no-repeat',
				wz:['冰','河','世','纪','丽','酱'],
				gs:6
			},
			{
				title:'企业',
				data:'url(../temp/20.png) no-repeat',
				wz:['老','干','妈'],
				gs:3
			},
			{
				title:'人物',
				data:'url(../temp/24.png) no-repeat',
				wz:['科','比'],
				gs:2
			},
			{
				title:'电影&电视',
				data:'url(../temp/25.png) no-repeat',
				wz:['断','背','山'],
				gs:3
			},
			{
				title:'品牌',
				data:'url(../temp/26.png) no-repeat',
				wz:['阿','迪','达','斯'],
				gs:4
			},
			{
				title:'人物',
				data:'url(../temp/27.png) no-repeat',
				wz:['蒋','介','石'],
				gs:3
			},
			{
				title:'品牌',
				data:'url(../temp/28.png) no-repeat',
				wz:['宝','马'],
				gs:2
			},
			{
				title:'电影&电视',
				data:'url(../temp/29.png) no-repeat',
				wz:['杀','死','比','尔'],
				gs:4
			},
			{
				title:'人物',
				data:'url(../temp/30.png) no-repeat',
				wz:['刘','翔'],
				gs:2
			},
			{
				title:'食物',
				data:'url(../temp/31.png) no-repeat',
				wz:['奥','利','奥'],
				gs:3
			},
			{
				title:'电影&电视',
				data:'url(../temp/32.png) no-repeat',
				wz:['阿','甘','正','传'],
				gs:4
			},
			{
				title:'人物',
				data:'url(../temp/33.png) no-repeat',
				wz:['郭','德','钢'],
				gs:3
			},
			{
				title:'电影&电视',
				data:'url(../temp/34.png) no-repeat',
				wz:['皮','卡','丘'],
				gs:3
			},
			{
				title:'人物',
				data:'url(../temp/35.png) no-repeat',
				wz:['林','书','豪'],
				gs:3
			},
			{
				title:'品牌',
				data:'url(../temp/36.png) no-repeat',
				wz:['奔','驰'],
				gs:2
			},
			{
				title:'电影&电视',
				data:'url(../temp/37.png) no-repeat',
				wz:['盗','梦','空','间','电','影'],
				gs:6
			},
			{
				title:'电影&电视',
				data:'url(../temp/38.png) no-repeat',
				wz:['哈','利','波','特'],
				gs:4
			},
			{
				title:'品牌',
				data:'url(../temp/39.png) no-repeat',
				wz:['科','达'],
				gs:2
			},
			{
				title:'人物',
				data:'url(../temp/40.png) no-repeat',
				wz:['关','羽'],
				gs:2
			},
			{
				title:'电影&电视',
				data:'url(../temp/41.png) no-repeat',
				wz:['黑','客','帝','国','任','众'],
				gs:6
			},
			{
				title:'人物',
				data:'url(../temp/42.png) no-repeat',
				wz:['萨','达','姆'],
				gs:3
			},
			{
				title:'电影&电视',
				data:'url(../temp/43.png) no-repeat',
				wz:['南','方','公','园'],
				gs:4
			},
			{
				title:'品牌',
				data:'url(../temp/44.png) no-repeat',
				wz:['因','特','尔'],
				gs:3
			},
			{
				title:'电影&电视',
				data:'url(../temp/46.png) no-repeat',
				wz:['复','仇','者','联','盟'],
				gs:5
			},
			{
				title:'电影&电视',
				data:'url(../temp/47.png) no-repeat',
				wz:['特','洛','伊'],
				gs:3
			},
			{
				title:'电影&电视',
				data:'url(../temp/49.png) no-repeat',
				wz:['生','活','大','爆','炸'],
				gs:5
			},
			{
				title:'人物',
				data:'url(../temp/48.png) no-repeat',
				wz:['达','芬','奇'],
				gs:3
			},
			{
				title:'电影&电视',
				data:'url(../temp/50.png) no-repeat',
				wz:['黑','鹰','坠','落'],
				gs:4
			}]
		//jq代码
		var arrsuiji=new Array();
		for (var i = 0; i < arrs.length; i++) {
			arrsuiji[i]=i;
		}
		 arrsuiji.sort(function(){
		 return 0.5-Math.random();

		})	
		var arr=[];
		for (var i = 0; i < arrsuiji.length; i++) {
		arr.push(arrs[arrsuiji[i]])
			
		}
//---------------------------------
//本地缓存

	// var strKey = "strKey";  
 //    var storage = window.localStorage;  
       	  
    //-------------------
    
			var sz=[];
			var b=0;
			var bb=0;
			var fenshu=0;
			function len(bb){
				sz=arr[bb].wz.slice();
				sz.length=21;
			};
			// $('body')[0].onload=onStart();
			
			//-------------------------------------
			
				function onStart(){  
		            if(storage.getItem(strKey)!=null){  
		            	// bb=Number.parseInt(storage.getItem(strKey));
		            }
		    	}
				
		        function bendihuancun(){  	
		           	// storage.setItem(strKey, bb);    
		        }	
		    //-------------------------------------
			//上面的li生成函数
			function scWz(bb){
				for(var i=0;i<arr[bb].gs;i++){
					$('.wz').append('<li></li>');
					var wzwidth= Math.ceil(($('.wz').width())/2);
					console.log($('.wz').width())
					$('.wz').css('marginLeft',-wzwidth+'px');
				}
				
			};
			function bt(bb){
				$('.heder').html(arr[bb].title)
			};
		//图片地址切换
			function img(bb){
				$('.sl').html(bb+1)
				$('.img').css('background',arr[bb].data)
				$('.img').css('background-size','100% 100%')
			};
			
			//下面的html点击总函数
			function scWz1(bb){
				var str='<li></li>'
				for(var i=0;i<21;i++){
					$('.wz1').append(str);
				}
				
				for(var i=0;i<sz.length;i++){
					if(typeof sz[i]=='undefined'){
						// sz[i]=randomText()
						var arr2=['我','们','是','共','产','党','习','近','平','爱','国','家','主','席','接','班','人','棉','白','糖','真','的','语','无','轮','船','飞','机','二','真','陈','辰'];
						sz[i]=arr2[i];
					}
				}
			//数组随机数
			sz.sort(function (){
				return 0.5-Math.random()
			})
			//随机结果存储到下面的所有html中
			for(var i=0;i<sz.length;i++){
					$('.wz1 li').eq(i).html(sz[i]);
				}
			//随机产生汉字
			function randomText(){
				var _str = "";
				var _base = 18000;
				var _range = 1999;
				var _lower = parseInt(Math.random() * _range);
				_str = String.fromCharCode(_base + _lower);
				return _str;	
			}
			}
			
			ffn()
			//整个ffn文件是  包括各种小事件 全部封装到一起直接调用
			function ffn(){
				len(bb)
				bt(bb)
				scWz(bb)
				scWz1(bb)
				img(bb)
				if($('.sl').text()>'5'){
					if(fenshu>=3){
						console.log(fenshu)
						$('.riddle').css('display','none');
						$('.riddles_prize').css('display','block');
						// location.href='win.html';
					}else{
						// location.href='wrong.html';
						$('.riddle').css('display','none');
						$('.riddles_wrong').css('display','block');
					}
				 return false;

			}
			//点击下面文字，发生相应变化，并且提升到上面的html中
			$(".wz1 li").on('touchstart',function (){
				if(b<$('.wz li').length){
					$(this).css('visibility','hidden');
					var _thisHtml=$(this).html()
					for(var i=0;i<$('.wz li').length;i++){
						if($('.wz li').eq(i).html()==''){
							$('.wz li').eq(i).css({'background':"url(./images/text-back_s.png) no-repeat",'background-size': '100% 100%'});
							$('.wz li').eq(i).addClass('active')
							$('.wz li').eq(i).html(_thisHtml);
							b++;
							break
						}
					}
				}
				
				$('.next').click(function (){
						pd()

					// $('div').remove('.zg')
					// $('div').remove('.next')
					
				})
					
				
				//判断所有当前上面文字的内容是不是和数组内部文字相等，如果相等就通关调用fn
				function pd(){
					if(b==$(".wz li").length){
					for(var i=0;i<$(".wz li").length;i++){
						if($(".wz li").eq(i).html()==arr[bb].wz[i]){
							if(i==$(".wz li").length-1){
								// var str='<div class="zg"></div>'
								// var div=$('<div class="next">下一关</div>')
								// $('body').append(str)
								// $('body').append(div)
								// $('.fenshu').text(fenshu);
								$('.tips1').css('display','block');
									bb=bb*1+1;
									bendihuancun();
									b=0
									sz=[]
									fenshu++;
									$('.fenshu').html(fenshu);
									// console.log(fenshu)
								$('.tips1 .next_wenzi').click(function(){
									$('.tips1').css('display','none');
									$('.wz').empty();
									$('.wz1').empty();
									ffn()
								})
								
								}
							}else{
								$('.tips2').css('display','block');
								$('.tips2 .next_wenzi').click(function(){
									$('.tips2').css('display','none');
									$('.wz').empty();
									$('.wz1').empty();
									ffn();
									
								})
									bb=bb*1+1
									bendihuancun();
									$('.fenshu').html(fenshu);
									b=0
									sz=[]
								/*$('.wz li').css('color','red')
								$('.wz li').animate({'left':'+=30px'},50)
								$('.wz li').animate({'left':'-=60px'},100)
								$('.wz li').animate({'left':'+=30px'},50)*/
								
							break;
							}
						}
					}
				};
				
			})
			//点击上面小文字  点击那个就把对应的内容清空把下面文字还原
			$(".wz li").click(function (){
				var _thisHtml=$(this).html()
				$('.wz li').css('color','')
				$(this).html('');
				$(this).removeClass('active');
				$(this).css({'background':""});
				b--
				for(var i=0;i<$(".wz1 li").length;i++){
					if($(".wz1 li").eq(i).html()==_thisHtml){
						$('wz li').eq(i).html('');
						$(".wz1 li").eq(i).css('visibility','visible');
						break
					}
				}
			})
			
			}
			//重置所有变量，删除原来多余的内容
			function fn(){
				
			}
			$('.deltel').click(function(){
				if($('.wz .active:last').length<=0){
					return false;
				}
				var _thisHtml=$('.wz .active:last').html();
				$('.wz .active:last').html('');
				$('.wz .active:last').css({'background':""});
				$('.wz .active:last').removeClass('active');
				b--
				for(var i=0;i<$(".wz1 li").length;i++){
					if($(".wz1 li").eq(i).html()==_thisHtml){
						$('wz li').eq(i).html('');
						$(".wz1 li").eq(i).css('visibility','visible');
						break
					}
				}
			})
})