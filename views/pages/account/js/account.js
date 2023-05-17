// Forgot Password Form Validation

$(document).ready(function() {
    // Validate email format
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    // Form submission
    $(".forgot-form").submit(function(e) {
      e.preventDefault();
      
      // Get email input value
      var email = $("input[name='email']").val().trim();
      
      // Validate email format
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
      
      // Send reset password email (code for sending email not included)
      alert("Password reset email sent to " + email);
      // Code for sending email goes here
      
      // Clear form input
      $("input[name='email']").val("");
    });
  });
  
  // Login Form Validation
  
  $(document).ready(function() {
    // Form submission
    $(".login-form").submit(function(e) {
      e.preventDefault();
      
      // Get input values
      var username = $("input[name='username']").val().trim();
      var password = $("input[name='password']").val().trim();
      
      // Check if inputs are not empty
      if (username === "" || password === "") {
        alert("Please enter a username and password.");
        return false;
      }
      
      // Check if password meets complexity requirements (minimum length 8 characters)
      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
      }
      
      // Authenticate user (code for authentication not included)
      alert("Logged in successfully as " + username);
      // Code for authentication goes here
      
      // Clear form inputs
      $("input[name='username']").val("");
      $("input[name='password']").val("");
    });
  });
  
  // Sign Up Form Validation
  $(document).ready(function() {
    // Validate email format
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    // Form submission
    $("#signup-form").submit(function(e) {
      e.preventDefault();
  
      // Get input values
      var username = $("input[name='username']").val().trim();
      var email = $("input[name='email']").val().trim();
      var newPassword = $("input[name='new-password']").val();
      var confirmPassword = $("input[name='confirm-password']").val();
      var role = $("#role").val();
  
      // Check if inputs are not empty
      if (username === "" || email === "" || newPassword === "" || confirmPassword === "") {
        $("#message").html("Please fill in all the fields.");
        return false;
      }
  
      // Validate email format
      if (!isValidEmail(email)) {
        $("#message").html("Please enter a valid email address.");
        return false;
      }
  
      // Check if password meets complexity requirements (minimum length 8 characters)
      if (newPassword.length < 8) {
        $("#message").html("Password must be at least 8 characters long.");
        return false;
      }
  
      // Check if passwords match
      if (newPassword !== confirmPassword) {
        $("#confirm-password").addClass("error");
        $("#message").html("Passwords do not match.");
        return false;
      } else {
        $("#confirm-password").removeClass("error");
        $("#message").html("");
      }
  
      // Save user data to database (code for database interaction not included)
      $("#message").html("User data saved successfully.");
  
      // Clear form inputs
      $("input[name='username']").val("");
      $("input[name='email']").val("");
      $("input[name='new-password']").val("");
      $("input[name='confirm-password']").val("");
      $("#role").val("");
    });
  });
  