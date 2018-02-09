require(['config'], function() {
	require(['jquery'], function($) {
		var $glt = $('.glt');
		var $glc = $('.glc');
		var $glb = $('glb');

		function goodslist(a) {
			$.ajax({
				url: '../api/list.php',
				dataType: 'json',
				data: {
					pageNode: a,
				},
				success: function(data) {
//					console.log(data.pageNode)	
//					$glb.on('click', 'button', function(e) {
//						if($(this).className.toLowerCase() === 'btn1') {
//							if(pageNode != 1) { pageNode = 1 };
//						}
//						if($(this).className.toLowerCase() === 'btn2') {
//							if(pageNode < data.total) { pageNode += 1 };
//						}
//						if($(this).className.toLowerCase() === 'btn3') {
//							if(pageNode > 1) { pageNode -= 1 };
//						}
//						if($(this).className.toLowerCase() === 'btn4') {
//							if(pageNode != data.total) { { pageNode = 7 };
//							}
//						}
//					})
					
					$('.i1')[0].innerHTML = data.total;
					$('.i3')[0].innerHTML = data.qty;
					$('.l1')[0].innerHTML = data.total;
					$('.l3')[0].innerHTML = data.qty;
					$('.i2')[0].innerHTML = data.pageNo;
					$('.l2')[0].innerHTML = data.pageNo;
					var $glc = $('.glc');
					var $glstr = $.map(data.data, function(item) {
						return `
							<div class="goods" data-id="${item.id}">
								<a href="../html/datalist.html"><img src="../img/${item.img}.jpg"  /></a>
								<p>依谷（精品）${item.name}</p>
								<div >￥${item.price}</div>
								<div class="s1">已有<span>${item.peopleqty}+</span>人购买</div>
							</div>
						`
					}).join('\n');

					$glc.html($glstr);
					//点击跳转
					var $gds = $('.goods');
					$gds.on('click', function() {
						var $id = this.dataset.id;
						window.location = "datalist.html?id=" + $id;
					})
				}
			})
		}
		goodslist(3);
		
		

	});
});