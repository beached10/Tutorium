$(document).ready(function() {
    $('.login-form').submit(function(event) {
      event.preventDefault(); // prevent form submission
      var username = $('input[name="username"]').val(); // get the value of the username input
      var password = $('input[name="password"]').val(); // get the value of the password input
      // validate username and password here
      // if valid, redirect user to dashboard page
      window.location.href = '../../views/pages/signup.html';
    });
  });
  