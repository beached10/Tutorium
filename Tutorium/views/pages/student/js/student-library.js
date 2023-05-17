// Selecting elements
const logo = document.querySelector(".header-logo img");
const categories = document.querySelector(".header-navigation-link");
const courses = document.querySelector(".header-sub-navigation-list");
const searchIcon = document.querySelector(".header-search-button img");
const searchInput = document.querySelector(".header-search-input");
const accountLink = document.querySelector(".header-account-link");
const profileIcon = document.querySelector(".header-account-link img");
const getStartedLink = document.querySelector(".header-get-started-link");
const followIcon = document.querySelector(".header-get-followers-link img");

// Adding event listeners
logo.addEventListener("click", () => {
  window.location.href = "https://example.com"; // Replace with the desired URL for the logo click
});

categories.addEventListener("click", (event) => {
  event.preventDefault(); // prevent the default behavior of following the link
  courses.style.display = "block"; // display the courses sub-menu
});

courses.addEventListener("mouseleave", () => {
  courses.style.display = "none"; // hide the courses sub-menu when mouse leaves
});

const dashboard= document.querySelector('.header-account-link');
const dropdownMenu = document.querySelector('.dropdown-menu');

dashboard.addEventListener('click', (event) => {
  event.preventDefault(); // prevent the default behavior of following the link
  dropdownMenu.classList.toggle('show'); // toggle the visibility of the dropdown menu
});


searchIcon.addEventListener("click", () => {
  // Add code here to define what happens when search icon is clicked
  window.location.href = "https://example.com/search"; // Replace with the desired URL for the search icon click
});



// Function to update the notification count
function updateNotificationCount(count) {
  const notificationCountElement = document.querySelector(".header-notification-count");
  notificationCountElement.textContent = count.toString();
}

// Example usage to update the notification count to 2
updateNotificationCount(1);

accountLink.addEventListener("click", () => {
  // Add code here to define what happens when account link is clicked
  window.location.href = "https://example.com/account"; // Replace with the desired URL for the account link click
});

getStartedLink.addEventListener("click", () => {
  // Add code here to define what happens when get started link is clicked
  window.location.href = "https://example.com/get-started"; // Replace with the desired URL for the get started link click
});

followIcon.addEventListener("click", () => {
  // Add code here to define what happens when follow icon is clicked
  window.location.href = "https://example.com/followers"; // Replace with the desired URL for the follow icon click
});

// Adding functionality to the search input
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Add code here to define what happens when the enter key is pressed in the search input
    window.location.href = `https://example.com/search?q=${searchInput.value}`; // Replace with the desired URL for the search query
  }
});

// Adding functionality to the categories sub-menu
const subMenuItems = courses.querySelectorAll("li");
subMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Add code here to define what happens when a sub-menu item is clicked
    window.location.href = `https://example.com/courses/${item.dataset.category}`; // Replace with the desired URL for the sub-menu item click
  });
});

// Adding functionality to the get started link
const signUpButton = getStartedLink.querySelector("button");
signUpButton.addEventListener("click", () => {window.location.href = "https://example.com/sign-up"; // Replace with the desired URL for the sign up button click
});

// Adding functionality to the account link for login/logout
let isLoggedIn = false;

const loginButton = document.createElement("button");
loginButton.textContent = "Log in";
loginButton.addEventListener("click", () => {
isLoggedIn = true;
loginButton.style.display = "none"; // Hide login button after user logs in
profileIcon.style.display = "block"; // Show profile icon after user logs in
});

accountLink.appendChild(loginButton);

const logoutButton = document.createElement("button");
logoutButton.textContent = "Log out";
logoutButton.addEventListener("click", () => {
isLoggedIn = false;
profileIcon.style.display = "none"; // Hide profile icon after user logs out
logoutButton.style.display = "none"; // Hide logout button after user logs out
loginButton.style.display = "block"; // Show login button after user logs out
});

accountLink.appendChild(logoutButton);
 
