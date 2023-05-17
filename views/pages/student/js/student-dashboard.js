document.addEventListener('DOMContentLoaded', function() {
    const dashboardToggle = document.getElementById('dashboard-toggle');
    const dashboardDropdown = document.getElementById('dashboard-dropdown');
    const closeButton = document.querySelector('.close-button');
  
    dashboardToggle.addEventListener('click', function() {
      dashboardDropdown.style.display = (dashboardDropdown.style.display === 'block') ? 'none' : 'block';
    });
  
    closeButton.addEventListener('click', function() {
      dashboardDropdown.style.display = 'none';
    });
  });
  