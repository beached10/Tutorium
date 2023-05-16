// Validate email format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
  
// Function to check if username is available
function isUsernameAvailable(username) {
// Predefined array of existing usernames (example data)
const existingUsernames = ['user1', 'user2', 'user3'];

return !existingUsernames.includes(username);
}

// Function to check if email is already in use
function isEmailInUse(email) {
    // Predefined array of user credentials (example data)
    const users = [
      { email: 'user1@example.com', password: 'password1' },
      { email: 'user2@example.com', password: 'password2' },
    ];
  
    const userWithEmail = users.find(user => user.email === email);
  
    return !!userWithEmail;
}

$(document).ready(function() {

    // Email validation
    $("input[name='email']").on("focusout", function() {
      var email = $(this).val().trim();
      var errorMessage = "";
  
      if (email !== "" && !isValidEmail(email)) {
        $("#email").addClass("error");
        errorMessage = "Please enter a valid email address.";
      } else {
        $("#email").removeClass("error");
      }
  
      $(this).next(".error-message").text(errorMessage);
    });
  
    // Real-time username availability check
    $("input[name='username']").on("input", function() {
      var username = $(this).val().trim();
      var errorMessage = "";
  
      if (username !== "") {
        if (!isUsernameAvailable(username)) {
            $("#username").addClass("error");
            errorMessage = "Username is unavailable";
        } else {
            $("#username").removeClass("error");
        }
      }
  
      // Display error message
      $(this).next(".error-message").text(errorMessage);
    });
  
    // Real-time password matching check
    $("input[name='confirm-password']").keyup(function() {
      var newPassword = $("input[name='new-password']").val();
      var confirmPassword = $(this).val();
      var errorMessage = "";
  
      if (newPassword !== confirmPassword) {
        $("#confirm-password").addClass("error");
        errorMessage = "Password does not match";
      } else {
        $("#confirm-password").removeClass("error");
      }

      $(this).next(".error-message").text(errorMessage);
    });
  
  
    // Form submission
    $("#signup-form").submit(function(e) {
      e.preventDefault();
  
      var username = $("input[name='username']").val().trim();
      var email = $("input[name='email']").val().trim();
      var newPassword = $("input[name='new-password']").val();
      var confirmPassword = $("input[name='confirm-password']").val();
      var role = $("#role").val();
  
      if (newPassword.length < 8) {
        $("#message").html("Password must be at least 8 characters long.");
        return false;
      }
  
      if (isEmailInUse(email)) {
        $("#message").html("Email is already in use. Please login instead.");
        return false;
      }
  
      // Save user data to database (code for database interaction not included)
      $("#message").html("User data saved successfully.");
  
      $("input[name='username']").val("");
      $("input[name='email']").val("");
      $("input[name='new-password']").val("");
      $("input[name='confirm-password']").val("");
      $("#role").val("");
    });
  });