require(['config'], function() {
	require(['jquery','zoom'], function($) {
		var $va = window.location.search.slice(1).split('=')[1];
		var $maintl = $('.main_tl');
		$.ajax({
			url: '../api/datalist.php',
			data: {
				id: $va,
			},
			dataType: 'json',
			success: function(data) {
				console.log(data);
				$dimg = `<img src="../img/${data.img}.jpg" />`;
				$maintl.html($dimg);
				$maintl.llZoom({
					position:'right'
				})
			}
		});
		
		
		
		
	});
});