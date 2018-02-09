<?php
	require('connect.php');
	
	$sql = "select * from list" ;

	// 获取查询结果
	$data = $conn->query($sql);
	
	$row = $data->fetch_all(MYSQLI_ASSOC);
	
	$page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
	//每页商品数
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 20;
	
	// 根据分页截取数据
	$res = array(
		'data'=>array_slice($row, ($page_no-1)*$qty,$qty),
		'total'=>count($row),
		'qty'=>$qty,
		'pageNo'=>$page_no*1,
	);
	
	echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>
