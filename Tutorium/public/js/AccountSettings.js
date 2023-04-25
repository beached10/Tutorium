// Get the account security form and input fields
const accountSecurityForm = document.querySelector('#account-security-form');
const emailInput = document.querySelector('#email');
const currentPasswordInput = document.querySelector('#current-password');
const newPasswordInput = document.querySelector('#new-password');
const confirmPasswordInput = document.querySelector('#confirm-password');

// Add an event listener to the form
accountSecurityForm.addEventListener('submit', handleSubmit);

// Function to handle form submission
function handleSubmit(event) {
event.preventDefault();

// Get the email and password values
const email = emailInput.value;
const currentPassword = currentPasswordInput.value;
const newPassword = newPasswordInput.value;
const confirmPassword = confirmPasswordInput.value;

// Validate the email and/or password syntax
if (email && !validateEmail(email)) {
alert('Please enter a valid email address');
return;
}
if (newPassword && !validatePassword(newPassword)) {
alert('Password must be at least 8 characters long and contain at least one letter and one number');
return;
}

// Check if the new password matches the confirmation
if (newPassword && confirmPassword && newPassword !== confirmPassword) {
alert('Passwords do not match');
return;
}

// Check if the current password is correct
if (currentPassword !== 'current_password') {
alert('Current password is incorrect');
return;
}

// TODO: Send verification email and/or update the email and password

// Show a pop-up message and ask the user to continue or cancel
const confirmation = confirm('Are you sure you want to make these changes?');
if (confirmation) {
// TODO: Update the email and/or password
if (email) {
alert('Your email has been updated successfully!');
}
if (newPassword) {
alert('Your password has been updated successfully!');
}
} else {
alert('Your changes have been cancelled.');
}
}

// Regular expressions for email and password validation
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
const passwordRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;

// Function to validate email syntax
function validateEmail(email) {
return emailRegex.test(email);
}

// Function to validate password syntax
function validatePassword(password) {
return passwordRegex.test(password);
}