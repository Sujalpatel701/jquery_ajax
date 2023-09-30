$(document).ready(function () {
    
    function fetchExistingData() {
        $.ajax({
            type: "GET",
            url: "server2.php", 
            success: function (response) {
               
                $("#existingData").empty();
                for (var i = 0; i < response.length; i++) {
                    $("#existingData").append("<p>Name: " + response[i].name + "<br>Email: " + response[i].email + "<br>Message: " + response[i].message + "</p>");
                }
            },
            error: function (xhr, status, error) {
                console.error("Ajax request failed: " + error);
            }
        });
    }

    
    function checkEmailExists(email) {
        $.ajax({
            type: "POST",
            url: "server3.php", 
            data: { email: email },
            success: function (response) {
                if (response === "exists") {
                    $("#emailExistsMessage").html("Email already exists!");
                } else {
                    $("#emailExistsMessage").html("");
                }
            },
            error: function (xhr, status, error) {
                console.error("Ajax request failed: " + error);
            }
        });
    }


    $("#email").keyup(function () {
        var email = $(this).val();
        checkEmailExists(email);
    });


    function autoUpdateData() {
      
        setInterval(function () {
            fetchExistingData();
        }, 1000); 
    }

    
    fetchExistingData();

  
    autoUpdateData();

   
    $("#myForm").submit(function (e) {
        e.preventDefault();
       
    });
});
