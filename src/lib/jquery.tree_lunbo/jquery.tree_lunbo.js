;
// 插件库建议写法
// $.fn.extend({
// 	lxCarousel:function(){},
//  //拖拽插件
// 	lxDraggable:function(){},
// 	// 倒计时插件
// 	lxCountdown:function(){}
// })
(function($) {
	$.fn.treeLunbo = function(options) {
		//默认参数
		var defualts = {
			width: 500,
			height: 333,
			index: 0,
			page: true,
			autoShow: true,

			//轮播时间间隔
			duration: 2000,

			//轮播类型
			type: 'horizontal', //horizon水平

			//无缝滚动
			wufong: true,
		}
			var spanidx=0;


		return this.each(function() {

			//此处的this为DOM节点
			/*$.extend([d],target,obj1,obj2,…,[objN])：
				扩展对象或jQuery对象本身。用来扩展jQuery全局函数
				深拷贝
			*/
			var opt = $.extend({}, defualts, options);

			opt.len = opt.imgs.length;

			var $this = $(this);
			//获取span
			var $span = $this.find('span');

			// $($span[0]).addClass('.active');
			var $spanlen = $span.length;
			console.log($spanlen)

			//添加特定样式
			$this.addClass('ll-carousel');

			//设定样式
			$this.css({
				width: opt.width,
				height: opt.height
			})

			//初始化
			//获取或生成节点
			//绑定事件
			init();
			var $ul;
			var timer;

			function init() {
				$ul = $('<ul/>');
				var html = $.map(opt.imgs, function(url) {
					return '<li><img src="' + url + '"" /></li>'
				}).join('\n');

				$ul.html(html);

				$this.append($ul);
			}
			

			//鼠标移入移出
			$this.on('mouseenter', function() {
				clearInterval(timer);
			}).on('mouseleave', function() {
				timer = setInterval(function() {
				$($span[0]).addClass('.active');

					show();
					opt.index++;
					spanidx++;
				console.log(opt.index)
				}, opt.duration)

			}).trigger('mouseleave'); //在每一个匹配的元素上触发某类事件。


			//动画
			function show() {
				//最后一张返回第一张
				if(opt.index >= opt.len) {
					opt.index = 1;
					//ul返回初始状态
					$ul.css({left:0});
				}
				//超出第一张返回最后一张 
				else if(opt.index < 0) {
					opt.index = opt.len - 1
					$($span[$spanlen]).addClass('.active');
				}
				//返回到第一span
				if(spanidx >= $spanlen){
					spanidx = 0;
					$($span[0]).addClass('.active');
				}

				//ul向左移动
				var target = -opt.index * opt.width;
				//span跟随
				$($span[spanidx]).addClass('active').siblings('span').removeClass('active')
				//动画效果
				$ul.stop().animate({ left: target });
			}

			function next(){
				index++;
				show();
			}

			function prev(){
				index--;
				show();
			}
		})
	};

})(jQuery);