require(['config'], function() {
	require(['jquery'], function($) {
		//样式
		$('i').find('img').css({
			height: '20px',
			width: '20px'
		})

		//用户名、密码正则
		var $name = $('.name');
		var $word = $('.word');
		var val1 = 0;
		var val2 = 0;
		var val3 = 0;

		//用户名
		$name.on('blur', function() {
			var $nval = $name.val();
			if(!/^1[34578]\d{9}$/.test($nval) || $nval == "") {
				$('.yonghumingyz').find('span').css({
					display: 'block',
				})
				val1 = 1;
			} else {
				$('.yonghumingyz').find('span').css({
					display: 'none',
				})
				val1 = 0;
			}
			//				console.log($('.yonghumingyz').find('span'))
			//				console.log(888);
		})

		//密码
		$word.on('blur', function() {
			var $wvalue = $word.val();
			if(!/^[^\s]{6,16}$/.test($wvalue) || $wvalue == "") {
				$('.mimayz').find('span').css({
					display: 'block',
				})
				val2 = 1;
			} else {
				$('.mimayz').find('span').css({
					display: 'none',
				})
				val2 = 0;
			}

		})

		//验证码 
		var code;

		function createCode() {
			code = '';
			var codeLength = 4;
			var codeV = $(".suijiyma");
			//设置随机字符 
			var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
			for(var i = 0; i < codeLength; i++) {
				//4次  循环codeLength
				//设置随机数范围,这设置为0 ~ 36 
				var index = Math.floor(Math.random() * 36);
				//字符串拼接 将每次随机的字符 进行拼接 
				code += random[index];
			}
			//将拼接好的字符串赋值给展示的Value 
			codeV.text(code);
		}
		//页面开始加载验证码 
		createCode();
		//验证码Div加载点击事件 
		$(".suijiyma").bind('click', function() {
			createCode();
		}).css({
			lineHeight: '46px',
			textAlign: 'center',
			backgroundColor: '#333',
			color: 'white'
		});

		$('#in1').on('blur', function() {

			var oValue = $("#in1").val().toUpperCase();

			var $i = $('.inyanzheng').find('i');
			if(oValue == "") {

				$i.css({
					background: 'url(../img/cuowuzhucw.png) -3px',
				})
				val3 = 1;
			} else if(oValue != code) {
				$i.css({
					background: 'url(../img/cuowuzhucw.png) -3px',
				})
				oValue = "";
				createCode();
				val3 = 1;
			} else {
				$i.css({
					background: 'url(../img/zhengquezhucw.png) -3px',
				})
				val3 = 0;
			}
		});

		$('#b1').on('click', function() {
			var vall = val1 + val2 + val3;
			if(vall == 0) {
				$.ajax({
					url: '../api/login.php',
					data: {
						username: $('#username').val(),
						password: $('#password').val()
					},
					dataType: 'text',
					success:function(data) {
						console.log(data);
						if(data === 'success') {
							location.href = '../html/index.html';
						} else if(data === 'fail') {
							alert(444)
						}
					}
				})
			}else{
				alert('登录失败，请重新登录')
			}

		})

	});
});