const filterSelect = document.querySelector('#filter-select');
const markAllReadBtn = document.querySelector('.notification-mark-all-btn');
const deleteAllBtn = document.querySelector('.notification-delete-all-btn');

const notifications = document.querySelectorAll('.notification-item');
const deleteBtns = document.querySelectorAll('.notification-delete-btn');
const markImportantBtns = document.querySelectorAll('.notification-mark-important-btn');
const muteBtns = document.querySelectorAll('.notification-mute-btn');

filterSelect.addEventListener('change', () => {
  const selectedOption = filterSelect.value;

  if (selectedOption === 'name-asc') {
    sortNotificationsByNameAsc();
  } else if (selectedOption === 'name-desc') {
    sortNotificationsByNameDesc();
  } else if (selectedOption === 'date-desc') {
    sortNotificationsByDateDesc();
  } else if (selectedOption === 'date-asc') {
    sortNotificationsByDateAsc();
  }
});

markAllReadBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to mark all notifications as read?')) {
    markAllNotificationsAsRead();
    alert('All notifications have been marked as read.');
  }
});

deleteAllBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to delete all notifications?')) {
    deleteAllNotifications();
    alert('All notifications have been deleted.');
  }
});

deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener('click', (event) => {
    const notificationItem = event.target.closest('.notification-item');
    const notificationTitle = notificationItem.querySelector('.notification-title').textContent;

    if (confirm(`Are you sure you want to delete "${notificationTitle}"?`)) {
      deleteNotification(notificationItem);
      alert(`"${notificationTitle}" has been deleted.`);
    }
  });
});

markImportantBtns.forEach((markImportantBtn) => {
  markImportantBtn.addEventListener('click', (event) => {
    const notificationItem = event.target.closest('.notification-item');
    const notificationTitle = notificationItem.querySelector('.notification-title').textContent;

    if (notificationItem.classList.contains('notification-important')) {
      notificationItem.classList.remove('notification-important');
      event.target.textContent = 'Mark as Important';
      alert(`"${notificationTitle}" is no longer marked as important.`);
    } else {
      notificationItem.classList.add('notification-important');
      event.target.textContent = 'Mark as Unimportant';
      alert(`"${notificationTitle}" has been marked as important.`);
    }
  });
});

muteBtns.forEach((muteBtn) => {
  muteBtn.addEventListener('click', (event) => {
    const notificationItem = event.target.closest('.notification-item');
    const notificationTitle = notificationItem.querySelector('.notification-title').textContent;

    muteNotification(notificationItem);
    alert(`"${notificationTitle}" has been muted.`);
  });
});

function sortNotificationsByNameAsc() {
  const sortedNotifications = Array.from(notifications).sort((a, b) => {
    const aTitle = a.querySelector('.notification-title').textContent.trim();
    const bTitle = b.querySelector('.notification-title').textContent.trim();

    return aTitle.localeCompare(bTitle);
  });

  appendSortedNotifications(sortedNotifications);
}

function sortNotificationsByNameDesc() {
  const sortedNotifications = Array.from(notifications).sort((a, b) => {
    const aTitle = a.querySelector('.notification-title').textContent.trim();
    const bTitle = b.querySelector('.notification-title').textContent.trim();

    return bTitle.localeCompare(aTitle);
  });

  appendSortedNotifications(sortedNotifications);
}

function sortNotificationsByDateDesc() {
  const sortedNotifications = Array.from(notifications).sort((a, b) => {
    const aTime = new Date(a.querySelector('.notification-time').textContent.trim());
    const bTime = new Date(b.querySelector('.notification-time').textContent.trim());

    return bTime - aTime;
  });

  appendSortedNotifications(sortedNotifications);
}

function sortNotificationsByDateAsc() {
  const sortedNotifications = Array.from (notifications).sort((a, b) => {
    const aTime = new Date(a.querySelector('.notification-time').textContent.trim());
    const bTime = new Date(b.querySelector('.notification-time').textContent.trim());
    return aTime - bTime;
  });

  appendSortedNotifications(sortedNotifications);
  }
  
  function appendSortedNotifications(sortedNotifications) {
  const notificationContainer = document.querySelector('.notification-container');
  notificationContainer.innerHTML = '';
  
  sortedNotifications.forEach((notification) => {
  notificationContainer.appendChild(notification);
  });
  }
  
  function markAllNotificationsAsRead() {
    notifications.forEach((notification) => {
      const unreadBtn = notification.querySelector('.notification-unread-btn');
      const readIcon = notification.querySelector('.notification-read-icon');
  
      unreadBtn.textContent = 'Read';
      readIcon.classList.remove('far');
      readIcon.classList.add('fas');
      notification.classList.add('notification-read');
    });
  }
  
  
  function deleteAllNotifications() {
  notifications.forEach((notification) => {
  deleteNotification(notification);
  });
  }
  
  function deleteNotification(notificationItem) {
  notificationItem.remove();
  }
  
  function markNotificationAsImportant(notificationItem) {
  const importantIcon = notificationItem.querySelector('.notification-important-icon');
  importantIcon.classList.toggle('fas');
  importantIcon.classList.toggle('far');
  }
  
  function muteNotification(notificationItem) {
    const muteBtn = notificationItem.querySelector('.notification-mute-btn');
    const isMuted = muteBtn.textContent === 'Muted';
  
    if (isMuted) {
      muteBtn.textContent = 'Mute';
    } else {
      muteBtn.textContent = 'Muted';
    }
  
    // Add code to actually mute the notification
  }
  
  // add this event listener to your code
  function markNotificationAsRead(notificationItem) {
  notificationItem.classList.add('notification-read');

  // update message style
  const messageContent = notificationItem.querySelector('.notification-content');
  const notificationActions = notificationItem.querySelector('.notification-actions');
  messageContent.style.opacity = '0.5';
  notificationActions.querySelector('button').style.opacity = '0.5';
}

function markAllNotificationsAsRead() {
  const notificationItems = document.querySelectorAll('.notification-item');
  notificationItems.forEach((notificationItem) => {
    markNotificationAsRead(notificationItem);
  });
}
const notificationItems = document.querySelectorAll('.notification-item');

notificationItems.forEach((notificationItem) => {
  const unreadBtn = notificationItem.querySelector('.notification-unread-btn');
  const messageContent = notificationItem.querySelector('.notification-content');

  messageContent.addEventListener('click', () => {
    markNotificationAsRead(notificationItem);
  });

  unreadBtn.addEventListener('click', () => {
    markNotificationAsRead(notificationItem);
  });
});

  function markNotificationAsRead(notificationItem) {
    const unreadBtn = notificationItem.querySelector('.notification-unread-btn');
    const messageContent = notificationItem.querySelector('.notification-content');
  
    notificationItem.classList.add('notification-read');
    unreadBtn.textContent = 'Read';
    messageContent.classList.add('notification-read-message');
  }
  
  function markNotificationAsUnread(notificationItem) {
    const unreadBtn = notificationItem.querySelector('.notification-unread-btn');
    const messageContent = notificationItem.querySelector('.notification-content');
  
    notificationItem.classList.remove('notification-read');
    unreadBtn.textContent = 'Unread';
    messageContent.classList.remove('notification-read-message');
  }
  function markNotificationAsUnread(notificationItem) {
    notificationItem.classList.remove('notification-read-message');
    notificationItem.querySelector('.notification-unread-btn').textContent = 'Unread';
  }











  // fetch notifications from server
fetch('/notifications')
.then(response => response.json())
.then(notifications => {
  // get reference to notification list element
  const notificationList = document.getElementById('notification-list');
  
  // loop through notifications and generate HTML for each one
  notifications.forEach(notification => {
    const notificationItem = document.createElement('div');
    notificationItem.classList.add('notification-item');
    
    const notificationLink = document.createElement('a');
    notificationLink.classList.add('notification-link');
    notificationLink.href = notification.link;
    
    const notificationDetails = document.createElement('div');
    notificationDetails.classList.add('notification-details');
    
    const notificationIcon = document.createElement('div');
    notificationIcon.classList.add('notification-icon');
    notificationIcon.innerHTML = `<i class="${notification.icon}"></i>`;
    
    const notificationContent = document.createElement('div');
    notificationContent.classList.add('notification-content');
    
    const notificationTitle = document.createElement('div');
    notificationTitle.classList.add('notification-title');
    notificationTitle.textContent = notification.title;
    
    const notificationDescription = document.createElement('div');
    notificationDescription.classList.add('notification-description');
    notificationDescription.textContent = notification.description;
    
    const notificationTime = document.createElement('div');
    notificationTime.classList.add('notification-time');
    notificationTime.textContent = notification.time;
    
    const notificationActions = document.createElement('div');
    notificationActions.classList.add('notification-actions');
    
    const notificationUnreadBtn = document.createElement('button');
    notificationUnreadBtn.classList.add('notification-unread-btn');
    notificationUnreadBtn.textContent = 'Unread';
    
    const notificationDeleteBtn = document.createElement('button');
    notificationDeleteBtn.classList.add('notification-delete-btn');
    notificationDeleteBtn.textContent = 'Delete';
    
    const notificationMarkImportantBtn = document.createElement('button');
    notificationMarkImportantBtn.classList.add('notification-mark-important-btn');
    notificationMarkImportantBtn.textContent = 'Mark as Important';
    
    const notificationMuteBtn = document.createElement('button');
    notificationMuteBtn.classList.add('notification-mute-btn');
    notificationMuteBtn.textContent = 'Mute';
    
    // assemble HTML code for notification item
    notificationDetails.appendChild(notificationIcon);
    notificationContent.appendChild(notificationTitle);
    notificationContent.appendChild(notificationDescription);
    notificationContent.appendChild(notificationTime);
    notificationDetails.appendChild(notificationContent);
    notificationActions.appendChild(notificationUnreadBtn);
    notificationActions.appendChild(notificationDeleteBtn);
    notificationActions.appendChild(notificationMarkImportantBtn);
    notificationActions.appendChild(notificationMuteBtn);
    notificationLink.appendChild(notificationDetails);
    notificationLink.appendChild(notificationActions);
    notificationItem.appendChild(notificationLink);
    
    // append notification item to notification list
    notificationList.appendChild(notificationItem);
  });
});

  
