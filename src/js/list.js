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
						
				
				}
			})
		}
		goodslist();
	});
});