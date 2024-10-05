document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('planForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission for demonstration purposes
      const selectedCategories = [];
  
      const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      checkboxes.forEach((checkbox) => {
        selectedCategories.push(checkbox.value);
      });
  
      if (selectedCategories.length > 0) {
        alert(`You have selected: ${selectedCategories.join(', ')}.\nThank you for planning your trip with us!`);
        form.reset();
      } else {
        alert('Please select at least one category.');
      }
    });
  
    // Navbar Toggle for Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  
    // Close navbar menu when a link is clicked (optional)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      });
    });
  });
  