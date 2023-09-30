<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "testproject";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$sql = "SELECT * FROM user_data WHERE email = '$email'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo "Email already exists.";
} else {
    $insertSql = "INSERT INTO user_data (name, email, message) VALUES ('$name', '$email', '$message')";
    if ($conn->query($insertSql) === TRUE) {
        echo "Data verified and inserted successfully.";
    } else {
        echo "Error: " . $insertSql . "<br>" . $conn->error;
    }
}
$conn->close();
?>
