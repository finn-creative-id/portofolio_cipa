// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let mobileNavbar = document.querySelector('.mobile-navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    mobileNavbar.classList.toggle('hidden');
    mobileNavbar.classList.toggle('flex');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-link');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add active class to corresponding links
            document.querySelectorAll('a[href*=' + id + ']').forEach(link => {
                link.classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (for mobile)
    menuIcon.classList.remove('bx-x');
    mobileNavbar.classList.add('hidden');
    mobileNavbar.classList.remove('flex');
};

// Typed.js Animation
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Web Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: Remove class when element goes out of view for repeatable animations
            // entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-fade, .hidden-right, .hidden-left, .hidden-up');
hiddenElements.forEach((el) => observer.observe(el));
