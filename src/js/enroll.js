require(['config'], function() {
		require(['jquery'], function($) {

				var $phone = $('.phone');
				var $ynumber = $('.ynumber');
				var $mima1 = $('.mima1');
				var $mima2 = $('.mima2');
				
				//手机号
				$phone.on('blur', function() {
					var $phoneval = $phone.val();
					if(!/^1[34578]\d{9}$/.test($phoneval)) {
						$phone.next().next().find('span').css({
							display:'block',
						})
						return false;
					}else{
						$phone.next().next().find('span').css({
							display:'block',
						})
					}
					console.log(888)
				})

				//验证码
				$ynumber.on('blur', function() {
					var $ynumberval = $ynumber.val();

				})

				//密码
				$mima1.on('blur', function() {
					var $mimaOneval = $mima1.val();

				})

				//确认密码
				$mima2.on('blur', function() {
					var $mimaTwoval = $phone.val();

				})

			
		});
	
});