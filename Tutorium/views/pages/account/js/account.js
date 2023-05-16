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

/*###################################################################################*/
/*######################## Forgot Password Form Validation ##########################*/
/*###################################################################################*/

$(document).ready(function() {

    // Form submission
    $(".forgot-form").submit(function(e) {
      e.preventDefault();
      
      var email = $("input[name='email']").val().trim();
      
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
      
      // Send reset password email (code for sending email not included)
      alert("Password reset email sent to " + email);
      // Code for sending email goes here
      
      $("input[name='email']").val("");
    });
  });
  
/*###################################################################################*/
/*################################ Login Validation #################################*/
/*###################################################################################*/
$(document).ready(function() {

  // Form submission
  $(".login-form").submit(function(e) {
    e.preventDefault();
    
    var username = $("input[name='username']").val().trim();
    var password = $("input[name='password']").val().trim();
    
    if (username === "" || password === "") {
      alert("Please enter a username and password.");
      return false;
    }
    
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
});
  
/*###################################################################################*/
/*############################# Sign Up Form Validation #############################*/
/*###################################################################################*/

$(document).ready(function() {

  // Email validation
  $("input[name='email']").on("focusout", function() {
    var email = $(this).val().trim();
    var errorMessage = "";

    if (email !== "" && !isValidEmail(email)) {
      errorMessage = "Please enter a valid email address.";
    }

    $(this).next(".error-message").text(errorMessage);
  });

  // Real-time username availability check
  $("input[name='username']").on("input", function() {
    var username = $(this).val().trim();
    var errorMessage = "";

    if (username !== "") {
      if (!isUsernameAvailable(username)) {
        errorMessage = "Username is already taken. Please choose a different username.";
      }
    }

    // Display error message
    $(this).next(".error-message").text(errorMessage);
  });

  // Real-time password matching check
  $("input[name='confirm-password']").keyup(function() {
    var newPassword = $("input[name='new-password']").val();
    var confirmPassword = $(this).val();

    if (newPassword !== confirmPassword) {
      $("#confirm-password").addClass("error");
      $("#confirm-password-error").html("Passwords do not match.");
    } else {
      $("#confirm-password").removeClass("error");
      $("#confirm-password-error").html("");
    }
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
