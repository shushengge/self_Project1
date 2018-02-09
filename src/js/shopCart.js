require(['config'], function() {
	require(['jquery'], function($) {
		var $cartop = $('.car_top');

		function shop() {
			$.ajax({
				url: '../api/shopcart.php',
				dataType: 'json',
				success: function(data) {
					var	alltotal = 0;
					var opriceTotal = 0;
					var $shopsrc = $.map(data, function(item) {
						var total = item.qty * item.price;
						
						alltotal+=item.price * item.qty;
						
						opriceTotal+=(item.oprice - item.price) * item.qty;
						return `
								<ul class="shoplist" data-id="${item.id}">
									<li class="car_top1"><input type="checkbox" id="che" /><label for="che"></label><img src="${item.img}"/><span>${item.name}</span></li>
									<li>￥${item.price}</li>
									<li class="changqty"><button class="sbtn1">-</button><div>${item.qty}</div><button class="sbtn2">+</button></li>
									<li>￥${total}</li>
									<li>${item.weight}kg</li>
									<li><p><span>移入收藏</span></p><p><span class="sdel">删除</span></p></li>
								</ul>		
						`
					}).join('\n');
					
					$shopsrc+=`<div class="sbottom">
									<div class="slast">
										去结算
									</div>
									<div>
										<span>
											<h1>￥${alltotal}</h1>
											<span>已节省￥${opriceTotal}</span>
										</span>
									</div>
									<div >
										<span>商品总价：</span>										
									</div>
									
								</div>`;
					$cartop.append($shopsrc);
					
					var $shoplist = $('.shoplist');
					var $sbottom = $('.sbottom');
					for(var i=0;i<$shoplist.length;i++){
						$($($shoplist[i]).children('li')[1]).css({
							color:'red',
						})
						$($($shoplist[i]).children('li')[3]).css({
							color:'red',
						})					
						
					}
					
					
					$sbottom.find('div').css({
						height:'52px',
						float:'right',
						width:'145px',
						lineHeight:'52px',
						textAlign:'center',
						
					}).find('h1').css({
						height:'52px',
						lineHeight:'52px'
						
					});
					$('.slast').css({
						background:'#FC7309',
						color:'white',
						fontSize:'20px'
					})
	
				}
			})			
		}
		shop();

	});
});