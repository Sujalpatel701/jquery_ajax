$(document).ready(function () {
    $("#myForm").submit(function (e) {
        e.preventDefault(); 

   
        var formData = $(this).serialize();

       
        $.ajax({
            type: "POST",
            url: "server.php", 
            data: formData,
            success: function (response) {
                $("#verificationResult").html(response); 
            },
            error: function (xhr, status, error) {
                console.error("Ajax request failed: " + error);
            }
        });
    });
});



