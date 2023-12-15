<?php
// Assuming you have a MySQL database connection
$conn = mysqli_connect("your_host", "your_username", "your_password", "your_database");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Query to get online users count per country
$result = mysqli_query($conn, "SELECT country, COUNT(*) as count FROM user_activity WHERE timestamp > (UNIX_TIMESTAMP() - 300) GROUP BY country");

$userCounts = array();
while ($row = mysqli_fetch_assoc($result)) {
    $userCounts[$row['country']] = $row['count'];
}

// Output data as JSON
echo json_encode($userCounts);

mysqli_close($conn);
?>
