<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "testproject";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$email = $_POST["email"];


$sql = "SELECT * FROM user_data WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "exists";
} else {
    echo "not_exists";
}

$conn->close();
?>
