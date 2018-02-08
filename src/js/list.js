require(['config'], function() {
	require(['jquery'], function($) {
		var $glt = $('.glt');
		var $glc = $('.glc');
		var $glb = $('glb');

		function goodslist() {
			$.ajax({
				url: '../api/index.php',
				dataType: 'text',
				success: function(data) {
					var $glc = $('.glc');
					var $glstr = $.map(data, function(item){
						return `
							<div class="goods" data-id="${item.id}">
								<a href="../html/datalist.html"><img src="${item.img}"  /></a>
								<p>依谷（精品）${item.name}</p>
								<div>￥${item.price}</div>
								<div>已有<span>${item.peopleqty}+</span>人购买</div>
							</div>
						`
					}).join('\n');
					

				}
			})
		}
		goodslist();
	});
});