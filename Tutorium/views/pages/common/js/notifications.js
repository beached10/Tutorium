// Get the buttons
const selectAllButton = document.querySelector('.select-all-notifications');
const markAsReadButton = document.querySelector('.mark-as-read');
const hideButton = document.querySelector('.hide');
const deleteNotificationsButton = document.querySelector('.delete-notifications');

// Get the notification items
const notificationItems = document.querySelectorAll('.notification-item');
const checkboxes = document.querySelectorAll('.notification-item input[type="checkbox"]');

// Add event listeners to the buttons
selectAllButton.addEventListener('click', selectAllNotifications);
markAsReadButton.addEventListener('click', markAsRead);
hideButton.addEventListener('click', hideNotifications);
deleteNotificationsButton.addEventListener('click', deleteNotifications);

// Function to select all notifications
function selectAllNotifications() {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
}

// Function to mark selected notifications as read
function markAsRead() {
  const selectedItems = getSelectedItems();

  selectedItems.forEach((item) => {
    // Mark the item as read
    item.classList.add('read');
  });

  // Display success message
  displayMessage('Notifications marked as read');
}

// Function to hide selected notifications
function hideNotifications() {
  const selectedItems = getSelectedItems();

  selectedItems.forEach((item) => {
    // Hide the item
    item.style.display = 'none';
  });

  // Display success message
  displayMessage('Notifications hidden');
}

// Function to delete selected notifications
function deleteNotifications() {
  const selectedItems = getSelectedItems();

  selectedItems.forEach((item) => {
    // Remove the item
    item.remove();
  });

  // Display success message
  displayMessage('Notifications deleted');
}

// Function to get the selected notification items
function getSelectedItems() {
  const selectedItems = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const item = checkbox.closest('.notification-item');
      selectedItems.push(item);
    }
  });

  return selectedItems;
}

// Function to display a message
function displayMessage(message) {
  const notificationMessage = document.createElement('div');
  notificationMessage.classList.add('notification-message');
  notificationMessage.textContent = message;
  document.body.appendChild(notificationMessage);

  // Remove the message after 3 seconds
  setTimeout(() => {
    notificationMessage.remove();
  }, 3000);
}
