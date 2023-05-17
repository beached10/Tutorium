// Wait for the DOM to finish loading before accessing elements
document.addEventListener('DOMContentLoaded', function() {

	// Select all radio buttons and their corresponding labels
	const radioButtons = document.querySelectorAll('.payment-radio');
	const labels = document.querySelectorAll('.payment-label');
  
	// Add click event listener to each label
	labels.forEach(label => {
	  label.addEventListener('click', () => {
		// Find the associated radio button
		const radioButton = label.previousElementSibling;
  
		// Get the target URL from the label's data attribute
		const targetURL = label.dataset.target;
  
		// Check the associated radio button
		radioButton.checked = true;
  
		// Navigate to the target URL
		window.location.href = targetURL;
	  });
	});
  
	// Select the message and the rest of the page
	const message = document.querySelector('.confirm-message, .success-message, .error-message');
	const restOfPage = document.querySelector('body > *:not(.confirm-message):not(.success-message):not(.error-message)');
  
	// Show the message and fade out the rest of the page
	message.classList.add('show');
	restOfPage.classList.add('fade-out');
  
	// Hide the message and fade in the rest of the page
	message.classList.remove('show');
	restOfPage.classList.remove('fade-out');
  
	// Select all payment methods and payment forms
	const paymentMethods = document.querySelectorAll('.payment-radio');
	const paymentForms = document.querySelectorAll('.payment-form');
  
	// Select the confirmation message, success message, and error message
	const confirmMessage = document.querySelector('.confirm-message');
	const successMessage = document.querySelector('.success-message');
	const errorMessage = document.querySelector('.error-message');
  
	// Select all submit payment buttons
	const submitPaymentButtons = document.querySelectorAll('.submit-payment');
  
	// Store the selected payment method
	let selectedPaymentMethod = 'card';
  
	// Listen for payment method change
	paymentMethods.forEach(function(paymentMethod) {
	  paymentMethod.addEventListener('change', function(event) {
		// Hide all payment forms
		paymentForms.forEach(function(paymentForm) {
		  paymentForm.style.display = 'none';
		});
  
		// Show the selected payment form
		const target = event.target.getAttribute('data-target');
		document.querySelector(`#${target}`).style.display = 'block';
  
		// Update the selected payment method
		selectedPaymentMethod = event.target.id;
	  });
	});
  
	// Listen for submit payment button click
	submitPaymentButtons.forEach(function(submitPaymentButton) {
	  submitPaymentButton.addEventListener('click', function(event) {
		// Prevent the default form submission behavior
		event.preventDefault();
  
		// Show the confirmation message
		confirmMessage.style.display = 'block';
  
		// Listen for confirmation message button click
		confirmMessage.querySelectorAll('button').forEach(function(button) {
		  button.addEventListener('click', function(event) {
			// Hide the confirmation message
			confirmMessage.style.display = 'none';
  
			if (button.classList.contains('yes-button')) {
			  // Simulate the payment submission
			  setTimeout(function() {
				// Show the success message
				successMessage.style.display = 'block';
  
				// Wait for a few seconds before redirecting to the homepage
				setTimeout(function() {
				  window.location.href = "./subscription.html";
				}, 3000);
  
			  }, 2000);
			} else if (button.classList.contains('no-button')) {
			  // Refresh the current page
			  location.reload();
			}
		  });
		});
	  });
	});
  });
  