require(['config'], function() {
	require(['jquery'], function($) {

		var $phone = $('.phone');
		var $ynumber = $('.ynumber');
		var $mima1 = $('.mima1');
		var $mima2 = $('.nima2');
		

		//手机号
		$phone.on('blur', function() {
			var $phoneval = $phone.val();
			if(!/^1[34578]\d{9}$/.test($phoneval)) {
				console.log(94);
				$('.phoneWarn').css({
					display: 'block',
				})
				$('.phoneWarn1').css({
					background: 'url(../img/cuowuzhucw.png) -3px',
				})
				return false;
			} else {
				$('.phoneWarn').css({
					display: 'none',
				})
				$('.phoneWarn1').css({
					background: 'url(../img/zhengquezhucw.png) -3px',
				})
			}
		})

		//验证码
		//发送
		var timer = "";
		var nums = 60;
		var validCode = true;

		$('#getCode').on('click', function() {

			var code = $(this);
			if(validCode) {
				validCode = false;
				timer = setInterval(function() {
					if(nums > 0) {
						nums--;
						code.text(nums + "秒后重新发送");
						code.addClass("gray-bg");
					} else {
						clearInterval(timer);
						//重置
						nums = 60;
						validCode = true;
						code.removeClass("gray-bg");
						code.text("发送验证码");
					}
				}, 1000)
			};
		});

		//验证
		$ynumber.on('blur', function() {

			var $ynumberval = $ynumber.val();

			$ynumber.on('blur', function() {
				console.log(999)
				if(!/^\d{6}$/.test($ynumberval)) {
					$('.messageWarn').css({
						display: 'block',
					})
					

					return false;
				} else {
					$('.messageWarn').css({
						display: 'none',
					})
					
				}
			})
		})

		//密码
		$mima1.on('blur', function mima() {
			var $mimaOneval = $mima1.val();
			if(!/^[^\s]{6,16}$/.test($mimaOneval)) {
				$('.passwordWarn').css({
					display: 'block',
				})
				$('.passwordWarn1').css({
					background: 'url(../img/cuowuzhucw.png) -3px'
				})

				return false;
			} else {
				$('.passwordWarn').css({
					display: 'none',
				});
				$('.passwordWarn1').css({
					background: 'url(../img/zhengquezhucw.png) -3px'
				})
			};

		})

		//确认密码
		$mima2.on('blur', function() {
			let $mimaTwoval = $mima2.val();
			let $mimaOneval = $mima1.val();
			console.log($mimaOneval)
			console.log($mimaTwoval)

			if(!($mimaTwoval === $mimaOneval) || $mimaTwoval == ''||$mimaTwoval.length<6) {
				$('.querenWarn').css({
					display: 'block',
				});
				$('.querenWarn1').css({
					background: 'url(../img/cuowuzhucw.png) -3px'
				});
				console.log(888)
			} else {
				$('.querenWarn').css({
					display: 'none',
				});
				$('.querenWarn1').css({
					background: 'url(../img/zhengquezhucw.png) -3px'
				});
			}
		})

	});

});