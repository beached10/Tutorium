const form = document.querySelector('#signup-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Regular expressions for validation
const usernameRegex = /^[a-zA-Z0-9]{6,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

// Function to show an error message
function showError(input, message) {
  const formGroup = input.parentElement;
  const errorText = formGroup.querySelector('.error-text');
  formGroup.classList.add('error');
  errorText.innerText = message;
}

// Function to show a success message
function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove('error');
}

// Function to validate the username
function validateUsername() {
  const value = usernameInput.value.trim();
  if (!value) {
    showError(usernameInput, 'Username is required');
  } else if (!usernameRegex.test(value)) {
    showError(usernameInput, 'Username must be 6-20 characters and contain only letters and numbers');
  } else {
    showSuccess(usernameInput);
  }
}

// Function to validate the email
function validateEmail() {
  const value = emailInput.value.trim();
  if (!value) {
    showError(emailInput, 'Email is required');
  } else if (!emailRegex.test(value)) {
    showError(emailInput, 'Email is invalid');
  } else {
    showSuccess(emailInput);
  }
}

// Function to validate the password
function validatePassword() {
  const value = passwordInput.value.trim();
  if (!value) {
    showError(passwordInput, 'Password is required');
  } else if (!passwordRegex.test(value)) {
    showError(passwordInput, 'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number');
  } else {
    showSuccess(passwordInput);
  }
}

// Event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  validateUsername();
  validateEmail();
  validatePassword();
});
