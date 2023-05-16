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