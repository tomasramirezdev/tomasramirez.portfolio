document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    e.target.reset();
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((el, index) => {
        const speed = 0.1 + (index * 0.05);
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});