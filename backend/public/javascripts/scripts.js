// Function to toggle a mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('active');
    }
  }
  
  // Event listener for mobile menu toggle button
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-toggle');
    if (menuButton) {
      menuButton.addEventListener('click', toggleMobileMenu);
    }
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation example (basic)
  document.querySelector('form').addEventListener('submit', function (e) {
    const emailInput = document.getElementById('email');
    if (emailInput && !validateEmail(emailInput.value)) {
      e.preventDefault();
      alert('Please enter a valid email address.');
    }
  });
  
  // Basic email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // Example of a function to display a greeting message
  function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
      const currentHour = new Date().getHours();
      let greeting;
  
      if (currentHour < 12) {
        greeting = 'Good Morning!';
      } else if (currentHour < 18) {
        greeting = 'Good Afternoon!';
      } else {
        greeting = 'Good Evening!';
      }
  
      greetingElement.textContent = greeting;
    }
  }
  
  // Call the displayGreeting function when the page loads
  document.addEventListener('DOMContentLoaded', displayGreeting);
  