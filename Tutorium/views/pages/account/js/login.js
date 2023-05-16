// Function to verify user login input
function verifyCredentials(username, password) {
    // Predefined array of user credentials (example data)
    const users = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
    ];
  
    const user = users.find(user => user.username === username);
  
    if (user && user.password === password) {
      return true;
    } else {
      return false;
    }
  }

$(document).ready(function() {

    // Form submission
    $(".login-form").submit(function(e) {
      e.preventDefault();
      
      var username = $("input[name='username']").val().trim();
      var password = $("input[name='password']").val().trim();
      
      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
      }
      
      if (verifyCredentials(username, password)) {
        window.location.href = "../common/notification-view.html";
      } else {
        alert("Invalid username or password.");
        return false;
      }
      
      $("input[name='username']").val("");
      $("input[name='password']").val("");
    });

    $("input[name='password']").on("input", function() {
        var password = $(this).val().trim();
        var errorMessage = "";
    
        if (password !== "") {
          if (password.length > 8) {
              errorMessage = "Username is unavailable";
          } else {
              $("#username").removeClass("error");
          }
        }
    
        // Display error message
        $(this).next(".error-message").text(errorMessage);
      });
  });