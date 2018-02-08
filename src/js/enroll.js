require(['config'], function() {
	require(['jquery'], function($) {

		var $phone = $('.phone');
		var $ynumber = $('.ynumber');
		var $mima1 = $('.mima1');
		var $mima2 = $('.nima2');
		var val1 = 0;
		var val2 = 0;
		var val3 = 0;
		//手机号
		$phone.on('blur', function() {
			var $phoneval = $phone.val();
			if(!/^1[34578]\d{9}$/.test($phoneval)) {
				$('.phoneWarn').css({
					display: 'block',
				})
				$('.phoneWarn1').css({
					background: 'url(../img/cuowuzhucw.png) -3px',
				});
				val1 = 1;
				
				return false;
			} else {
				$('.phoneWarn').css({
					display: 'none',
				})
				$('.phoneWarn1').css({
					background: 'url(../img/zhengquezhucw.png) -3px',
				})
				val1 = 0;
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
//				if(!/^\d{6}$/.test($ynumberval)) {
//					$('.messageWarn').css({
//						display: 'block',
//					})
//					
//
//					return false;
//				} else {
//					$('.messageWarn').css({
//						display: 'none',
//					})
//					
//				}
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
				val2 = 1; 
				return false;
			} else {
				$('.passwordWarn').css({
					display: 'none',
				});
				$('.passwordWarn1').css({
					background: 'url(../img/zhengquezhucw.png) -3px'
				})
				val2 = 0;
			};

		})

		//确认密码
		$mima2.on('blur', function() {
			let $mimaTwoval = $mima2.val();
			let $mimaOneval = $mima1.val();
			

			if(!($mimaTwoval === $mimaOneval) || $mimaTwoval == ''||$mimaTwoval.length<6) {
				$('.querenWarn').css({
					display: 'block',
				});
				$('.querenWarn1').css({
					background: 'url(../img/cuowuzhucw.png) -3px'
				});
				val3 = 1;
				return false;
			} else {
				$('.querenWarn').css({
					display: 'none',
				});
				$('.querenWarn1').css({
					background: 'url(../img/zhengquezhucw.png) -3px'
				});
				val3 = 0;
			}
		});
		
		//注册成功
		$('.subm').on('click',function(){
			var vall = val1 + val2 + val3 ;
			console.log(val3);
			if(vall == 0){
				console.log(666);
				$.ajax({
					url:'../api/enroll.php',
					data:{
						username:$('.phone').val(),
						password:$('#mima1').val()
					},
					dataType:'text',
					success:function(data){
						console.log(data)
						if(data === 'success'){
							location.href = '../html/login.html';
						}else if(data === 'fail'){
							alert(444)
						}
					}
				});	
//				$.get('../mysql/enroll.php',{username:$('.phone').val(),password:$('#mima1').val()},function(data){
//					console.log(data)
//				},'text')
			}else{
				alert('未注册成功，请重新注册！');
			}	
		});
	});

});