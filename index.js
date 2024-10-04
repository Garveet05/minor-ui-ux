// Simple smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carousel functionality for testimonials
let testimonials = document.querySelectorAll('.testimonial');
let index = 0;

setInterval(() => {
    testimonials[index].style.display = 'none';
    index = (index + 1) % testimonials.length;
    testimonials[index].style.display = 'block';
}, 3000);
