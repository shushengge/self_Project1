<?php
	// 引入其他文件
	require('connect.php');//include 'connect.php'

	$id = isset($_GET['id']) ? $_GET['id'] : '';

	$sql = "select * from list where id='$id'";

	$data = $conn->query($sql);

	$row = $data->fetch_assoc();

	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>