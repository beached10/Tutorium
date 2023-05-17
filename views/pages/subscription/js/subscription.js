// Get DOM elements
const selectPlanBtns = document.querySelectorAll('.select-plan');
const cardMethod = document.querySelector('.card-method');
const paypalMethod = document.querySelector('.paypal-method');
const paymentForms = document.querySelectorAll('.payment-form');
const cardTypeSelect = document.querySelector('#card-type');
const cardNameInput = document.querySelector('#card-name');
const cardNumberInput = document.querySelector('#card-number');
const cardExpiryInput = document.querySelector('#card-expiry');
const cardCvcInput = document.querySelector('#card-cvc');
const paypalEmailInput = document.querySelector('#paypal-email');
const paypalPasswordInput = document.querySelector('#paypal-password');
const submitPaymentBtns = document.querySelectorAll('#submit-payment');
const confirmationModal = document.querySelector('.confirmation-modal');
const confirmMessage = document.querySelector('.confirm-message');
const yesBtn = document.querySelector('#yes-btn');
const noBtn = document.querySelector('#no-btn');
const paymentStatus = document.querySelector('#payment-status');

// Hide payment methods and confirmation modal
cardMethod.style.display = 'none';
paypalMethod.style.display = 'none';
confirmationModal.style.display = 'none';

// Add event listeners
selectPlanBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Hide all payment forms
    paymentForms.forEach(form => {
      form.style.display = 'none';
    });

    // Show selected payment form
    const plan = btn.dataset.plan;
    const paymentMethod = document.querySelector(`#${plan}-method`);
    paymentMethod.style.display = 'block';
  });
});

submitPaymentBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const paymentMethod = btn.dataset.method;
    let valid = true;

    // Validate payment form fields
    const form = btn.parentElement;
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        input.classList.add('invalid');
        valid = false;
      } else {
        input.classList.remove('invalid');
      }
    });

    // If all fields are valid, show confirmation modal
    if (valid) {
      confirmMessage.textContent = `Confirm ${paymentMethod} payment`;
      confirmationModal.style.display = 'block';
      yesBtn.dataset.method = paymentMethod;
    }
  });
});

yesBtn.addEventListener('click', () => {
  const paymentMethod = yesBtn.dataset.method;
  confirmationModal.style.display = 'none';

  // Perform payment using selected payment method
  if (paymentMethod === 'card') {
    const cardType = cardTypeSelect.value;
    const cardName = cardNameInput.value;
    const cardNumber = cardNumberInput.value;
    const cardExpiry = cardExpiryInput.value;
    const cardCvc = cardCvcInput.value;

    // TODO: Perform payment using card details
    paymentStatus.textContent = 'Processing payment...';
    setTimeout(() => {
      paymentStatus.textContent = 'Payment successful!';
    }, 2000);
  } else if (paymentMethod === 'paypal') {
    const paypalEmail = paypalEmailInput.value;
    const paypalPassword = paypalPasswordInput.value;

    // TODO: Perform payment using PayPal account
    paymentStatus.textContent = 'Processing payment...';
    setTimeout(() => {
      paymentStatus.textContent = 'Payment successful!';
    }, 2000);
  }
});

noBtn.addEventListener('click', () => {
  confirmationModal.style.display = 'none';
});

// Clear input field on focus
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('focus', () => {
    input.value = '';
    input.classList.remove('invalid');
  });
});

// Display/hide password on click
document.querySelectorAll('.toggle-password').
forEach(toggle => {
    const input = toggle.previousElementSibling;
    toggle.addEventListener('click', () => {
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    toggle.classList.toggle('fa-eye-slash');
    });
    });
    
    // Validate card number input
    cardNumberInput.addEventListener('input', () => {
    const cardNumber = cardNumberInput.value.replace(/\s/g, '');
    const cardType = getCardType(cardNumber);
    if (cardType === 'unknown') {
    cardNumberInput.setCustomValidity('Invalid card number');
    } else {
    cardNumberInput.setCustomValidity('');
    }
    });
    
    // Get card type based on card number
    function getCardType(cardNumber) {
    const visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegEx = /^5[1-5][0-9]{14}$/;
    const amexRegEx = /^3[47][0-9]{13}$/;
    const discoverRegEx = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
    if (visaRegEx.test(cardNumber)) {
    return 'visa';
    } else if (mastercardRegEx.test(cardNumber)) {
    return 'mastercard';
    } else if (amexRegEx.test(cardNumber)) {
    return 'amex';
    } else if (discoverRegEx.test(cardNumber)) {
    return 'discover';
    } else {
    return 'unknown';
    }
    }
    
    // Validate card expiry input
    cardExpiryInput.addEventListener('input', () => {
    const cardExpiry = cardExpiryInput.value;
    const [month, year] = cardExpiry.split('/');
    const today = new Date();
    const expiryDate = new Date(parseInt(20${year}), parseInt(month), 0);
    if (expiryDate < today) {
    cardExpiryInput.setCustomValidity('Card has expired');
    } else {
    cardExpiryInput.setCustomValidity('');
    }
    });
    
    // Validate card CVC input
    cardCvcInput.addEventListener('input', () => {
    const cardCvc = cardCvcInput.value;
    if (cardCvc.length < 3 || cardCvc.length > 4) {
    cardCvcInput.setCustomValidity('Invalid CVC');
    } else {
    cardCvcInput.setCustomValidity('');
    }
    });