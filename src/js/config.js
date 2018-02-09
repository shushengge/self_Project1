require.config({
	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'zoom':'../lib/jquery.llZoom/jquery.llZoom',
		'common':'../lib/common.js',
		'lunbo':'../lib/jquery.tree_lunbo/jquery.tree_lunbo'
	},

	shim:{
		// 设置依赖
		'zoom':['jquery'],
		'common':['jquery'],
		'lunbo':['jquery']	
	}
});
