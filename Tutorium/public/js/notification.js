const notifications = document.getElementById('notifications');

// Function to fetch notifications from the server
const fetchNotifications = async () => {
  const response = await fetch('/notifications');
  const data = await response.json();
  return data;
};

// Function to display notifications
const displayNotifications = async () => {
  const data = await fetchNotifications();

  // Loop through notifications and create HTML for each one
  data.forEach(notification => {
    const notificationHTML = `
      <div class="notification">
        <p>${notification.message}</p>
        <span>${notification.date}</span>
        <span class="close" onclick="deleteNotification('${notification._id}')">&times;</span>
      </div>
    `;
    notifications.insertAdjacentHTML('beforeend', notificationHTML);
  });
};

// Function to delete a notification
const deleteNotification = async id => {
  await fetch(`/notifications/${id}`, { method: 'DELETE' });
  const notification = document.querySelector(`[data-id="${id}"]`);
  notification.remove();
};

// Call displayNotifications function on page load
displayNotifications();
