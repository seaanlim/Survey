<?php
$conn = mysqli_connect('127.0.0.1', '', '');
$database = mysqli_select_db($conn, 'Structure');

$encodedData = file_get_contents('php://input');  // take data from react native fetch API
$decodedData = json_decode($encodedData, true);
