// 
// Author: [Your Name]
// Description: Script for the yoga studio website.

// Get all elements
const hero = document.querySelector('.hero');
const classes = document.querySelector('.classes');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in animation to hero section
  hero.classList.add('fade-in');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});