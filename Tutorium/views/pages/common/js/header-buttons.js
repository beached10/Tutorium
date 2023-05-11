// Selecting elements
const logo = document.querySelector(".header-logo img");
const categories = document.querySelector(".header-navigation-link");
const courses = document.querySelector(".header-sub-navigation-list");
const searchIcon = document.querySelector(".header-search-button img");
const searchInput = document.querySelector(".header-search-input");
const notificationIconNone = document.querySelector(".header-notification-icon-none");
const notificationIconAvailable = document.querySelector(".header-notification-icon-available");
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

searchIcon.addEventListener("click", () => {
  // Add code here to define what happens when search icon is clicked
  window.location.href = "https://example.com/search"; // Replace with the desired URL for the search icon click
});

notificationIconNone.addEventListener("click", () => {
  // Add code here to define what happens when notification icon (none) is clicked
  window.location.href = "https://example.com/notifications"; // Replace with the desired URL for the notification icon (none) click
});

notificationIconAvailable.addEventListener("click", () => {
  // Add code here to define what happens when notification icon (available) is clicked
  window.location.href = "https://example.com/notifications"; // Replace with the desired URL for the notification icon (available) click
});

accountLink.addEventListener("click", () => {
  // Add code here to define what happens when account link is clicked
  window.location.href = "https://example.com/account"; // Replace with the desired URL for the account link click
});

getStartedLink.addEventListener("click", () => {
  // Add code here to define what happens when get started link is clicked
  window.location.href = "https://example.com/get-started"; // Replace with the desired URL for the get started link click
});

// Adding additional functionality to the account link
let isLoggedIn = false; // Set initial value of isLoggedIn to false
accountLink.addEventListener("mouseenter", () => {
  if (isLoggedIn) {
    profileIcon.style.display = "block"; // Show profile icon when mouse enters if user is logged in
  }
});

accountLink.addEventListener("mouseleave", () => {
  if (isLoggedIn) {
    profileIcon.style.display = "none"; // Hide profile icon when mouse leaves if user is logged in
  }
});

