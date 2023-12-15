setInterval(function () {
    $.ajax({
        url: 'get_user_counts.php',
        success: function (data) {
            $('#onlineUsers').html(data);
        }
    });
}, 5000); // Fetch data every 5 seconds