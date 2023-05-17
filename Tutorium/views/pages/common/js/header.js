// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the dropdown elements
  var dashboardDropdown = document.getElementById('dashboard-dropdown');
  var userDropdown = document.getElementById('user-dropdown');

  // Get references to the icon elements
  var dashboardIcon = document.getElementById('dashboard-icon');
  var userIcon = document.getElementById('user-icon');

  // Close the dropdowns when clicking elsewhere on the page
  document.addEventListener('click', function(event) {
    var target = event.target;

    // Close dashboard dropdown
    if (!target.matches('#dashboard-icon') && !target.closest('#dashboard-dropdown')) {
      dashboardDropdown.style.display = 'none';
    }

    // Close user dropdown
    if (!target.matches('#user-icon') && !target.closest('#user-dropdown')) {
      userDropdown.style.display = 'none';
    }
  });

  // Toggle dashboard dropdown
  dashboardIcon.addEventListener('click', function() {
    userDropdown.style.display = 'none'; // Close user dropdown
    dashboardDropdown.style.display = (dashboardDropdown.style.display === 'block') ? 'none' : 'block';
  });

  // Toggle user dropdown
  userIcon.addEventListener('click', function() {
    dashboardDropdown.style.display = 'none'; // Close dashboard dropdown
    userDropdown.style.display = (userDropdown.style.display === 'block') ? 'none' : 'block';
  });
});

 
