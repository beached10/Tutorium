// Get the "view All" button element
const viewAllButton = document.querySelector('.view-all-btn');

// Get all category elements
const categoryList = document.querySelectorAll('.category');

// Set the initial number of visible categories
const initialVisibleCategories = 6;

// Hide categories after the initial visible ones
for (let i = initialVisibleCategories; i < categoryList.length; i++) {
  categoryList[i].style.display = 'none';
}

// Add event listener to the "view All" button
viewAllButton.addEventListener('click', () => {
  // view all categories
  categoryList.forEach(category => {
    category.style.display = 'block';
  });
  
  // Hide the "view All" button and view the "view less" button
  viewAllButton.style.display = 'none';
  document.querySelector('.view-less-btn').style.display = 'block';
});

// Add event listener to the "view less" button
document.querySelector('.view-less-btn').addEventListener('click', () => {
  // Hide categories after the initial visible ones
  for (let i = initialVisibleCategories; i < categoryList.length; i++) {
    categoryList[i].style.display = 'none';
  }
  
  // view the "view All" button and hide the "view less" button
  viewAllButton.style.display = 'block';
  document.querySelector('.view-less-btn').style.display = 'none';
});
