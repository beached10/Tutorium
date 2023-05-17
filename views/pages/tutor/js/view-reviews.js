// Get all the reply buttons
const replyButtons = document.querySelectorAll('.reply');

// Add click event listeners to each reply button
replyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the closest comment section to the clicked button
    const commentSection = button.closest('.review-section').querySelector('.comment-section');
    // Toggle the comment section's visibility
    commentSection.classList.toggle('show-comment-section');
  });
});
