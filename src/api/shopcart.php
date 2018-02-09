<?php
	require('connect.php');
	
	$sql = "select * from shopcart" ;

	// 获取查询结果
	$data = $conn->query($sql);
	
	$row = $data->fetch_all(MYSQLI_ASSOC);
	
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>
