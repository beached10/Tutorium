// Get references to the links
const aboutLink = document.querySelector('#about-link');
const experienceLink = document.querySelector('#experience-link');
const educationLink = document.querySelector('#education-link');
const skillsLink = document.querySelector('#skills-link');

// Get references to the sections
const aboutSection = document.querySelector('#about-section');
const experienceSection = document.querySelector('#experience-section');
const educationSection = document.querySelector('#education-section');
const skillsSection = document.querySelector('#skills-section');

// Add event listeners to the links
aboutLink.addEventListener('click', () => {
  // Show the about section and hide the other sections
  aboutSection.classList.add('edit-mode');
  experienceSection.classList.remove('edit-mode');
  educationSection.classList.remove('edit-mode');
  skillsSection.classList.remove('edit-mode');
});

experienceLink.addEventListener('click', () => {
  // Show the experience section and hide the other sections
  aboutSection.classList.remove('edit-mode');
  experienceSection.classList.add('edit-mode');
  educationSection.classList.remove('edit-mode');
  skillsSection.classList.remove('edit-mode');
});

educationLink.addEventListener('click', () => {
  // Show the education section and hide the other sections
  aboutSection.classList.remove('edit-mode');
  experienceSection.classList.remove('edit-mode');
  educationSection.classList.add('edit-mode');
  skillsSection.classList.remove('edit-mode');
});

skillsLink.addEventListener('click', () => {
  // Show the skills section and hide the other sections
  aboutSection.classList.remove('edit-mode');
  experienceSection.classList.remove('edit-mode');
  educationSection.classList.remove('edit-mode');
  skillsSection.classList.add('edit-mode');
});
