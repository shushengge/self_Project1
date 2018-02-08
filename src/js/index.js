require(['config'], function() {
	require(['jquery'], function($) {
		//吸顶菜单
		var down = false;
		//on监听  sctoll滑动  监听到滑动后执行function(){}
		$(window).on("scroll", function() {
			//this指的是window
			if($(this).scrollTop() > 100) {
				$(".header_b").addClass("fixed");
				//!down:非false，就是ture的意思
				if(!down) {
					$(".header_b").css({ "top": "-40px" }).animate({ "top": "0px" }, { duration: 500 })
					down = true;
				}
			} else {
				$(".header_b").removeClass("fixed");
				down = false;
			}
		})		
		//banner
		
//		var $bannerLeft = $('.banner_left');
//		$bannerLeft.parent().on('mouseenter',function(){
//			$bannerLeft.animate()({
//				
//			})
//		})
		
		var $hasMenu = $('.banner_left').parent();			
			var timer3;
//			$hasMenu.children('ul').stop().fadeOut();
			$hasMenu.mouseenter(function(){
				clearTimeout(timer3);
				$(this).siblings().children('ul').stop().fadeOut();
				var $subMenu = $(this).children('ul');
				$subMenu.stop().fadeIn();
			}).mouseleave(function(){				
				timer3 = setTimeout(function(){
					var $subMenu = $(this).children('ul');
					$subMenu.stop().fadeOut();
				}.bind(this),600);
				
			});
		
		
		//轮播
		var $lunbo = $('.lunbo');
		var $imgs = $lunbo.find('img');
		var index = 0;
		var timer;
		var $imglen = $imgs.length;
		var $spans = $('.page').find('span');

		$imgs.not(':first').hide();

		//鼠标移入移出
		$lunbo.on('mouseenter', function() {

			clearInterval(timer);
		}).on('mouseleave', function() {
			timer = setInterval(function() {
				//						$($span[0]).addClass('.active');
				var $img = $($imgs[index]);
				var $span = $($spans[index]);
				index++;
				if(index >= $imglen) {
					index = 0;
				};

				$img.fadeIn().parent().siblings('a').find('img').fadeOut();
				$span.addClass('active').siblings('span').removeClass('active');
			}, 2800)
		}).trigger('mouseleave'); //在每一个匹配的元素上触发某类事件。

		//main_one
		$('.youyi').children().on('mouseenter', function() {
			$(this).css({
				position: 'relative',
			}).stop().animate({
				left: 5,
			})

		}).on('mouseleave', function() {
			$(this).stop().animate({
				left: 0,
			})
		})

		//main_four--backgroundColor
		var $mainTc = $('.main_three_bl').find('div');
		$($mainTc[1]).css({
			backgroundColor: '#FE6506',
		}).find('button').css({
			backgroundColor: '#FE6506',
		})

		//main_five--backgroundColor
		var $mainTc = $('.main_three_bl').find('div');
		$($mainTc[2]).css({
			backgroundColor: '#F2363A',
		}).find('button').css({
			backgroundColor: '#F2363A',
		})

		//main_six--backgroundColor
		var $mainTc = $('.main_three_bl').find('div');
		$($mainTc[3]).css({
			backgroundColor: '#F74C97',
		}).find('button').css({
			backgroundColor: '#F74C97',
		})

		$('.bt2').find('div').css({
			borderBottom: 'none',
		})

		$('.bt2').parent().find('.main_three_brt2').css({
			borderRight: 'none',
		}).parent().parent().next().css({
			borderLeft: '1px solid #CECECE',
		})

		//main_seven--backgroundColor
		var $mainTc = $('.main_three_bl').find('div');
		$($mainTc[4]).css({
			backgroundColor: '#17BB9C',
		}).find('button').css({
			backgroundColor: '#17BB9C',
		})

		//main_eight--backgroundColor
		var $mainTc = $('.main_three_bl').find('div');
		$($mainTc[5]).css({
			backgroundColor: '#88CF2E',
		}).find('button').css({
			backgroundColor: '#88CF2E',
		})

		//main_nine--backgroundColor
		var $mainTc = $('.main_three_bl').find('div');
		$($mainTc[6]).css({
			backgroundColor: '#FE6366',
		}).find('button').css({
			backgroundColor: '#FE6366',
		})

		//main_lunbo
		var $mainLunbo = $('.mainlunbo');
		var $mainImgs = $($mainLunbo).find('div');
		var idx = 0;
		var timer1;
		var $mainImgLen = $mainImgs.length;
		var $mainLeftPlay = $('.mainpage').find('div');

		$mainImgs.not(':first').hide();
		//鼠标移入移出
		$mainLunbo.on('mouseenter', function() {
			clearInterval(timer1);
		}).on('mouseleave', function() {
			timer1 = setInterval(function() {
				var $mainImg = $($mainImgs[idx]);
				var $mainLp = $($mainLeftPlay[idx]);
				idx++;
				if(idx >= $mainImgLen) {
					idx = 0;
				};

				$mainImg.fadeIn().siblings('div').fadeOut();
				$mainLp.addClass('active1').siblings('div').removeClass('active1');
			}, 2000)
		}).trigger('mouseleave'); //在每一个匹配的元素上触发某类事件。
		
		//侧边栏
		$('.box').append(`<div class="side">
				<div class="side_center">
					<span></span>
					<div><span>购物车</span></div>
					<span></span>
					<span></span>
				</div>
				<div class="side_bottom">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>`)
		$('.side').css({
			height:'$(widow).heigth',
			top:'$(window).scollTop()',
				
		}).children('.side_center').css({
			position:'absolute',
			top:'50%',
			transform:'translate(0,-50%)',
			height:'300px',
			width:'100%',
			border:'1px solid red',
		});
		
		$('.side_center').find('div').css({
			height:'130px',
			border:'1px solid lightgrey',
			padding:'30px 0',
		})
		
		$('.side_bottom').css({
			position:'absolute',
			bottom:'0',
			height:'300px',
			width:'100%',
			border:'1px solid red',
			
		})
	
	//传入数据
	
	
	
	});
});