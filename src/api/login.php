<?php
	require('connect.php');
	
	// 获取前端数据
	$username = isset($_GET['username']) ? $_GET['username'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';

	// 密码md5加密
	$password = md5($password);

	$sql = "select * from user where username='$username' and password='$password'";


	// 获取查询结果
	$data = $conn->query($sql);

	if($data->num_rows > 0){
		echo 'success';
	}else{
		echo 'fail';
	}
	// 释放查询内存
	$result->free();

	//关闭连接
	$conn->close();
?>