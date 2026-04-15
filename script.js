// --- Menu Mobile ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fermer le menu si on clique sur un lien (sur mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- Animations au Scroll (Intersection Observer) ---
const reveals = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15, // L'élément apparaît quand 15% de celui-ci est visible
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // On arrête d'observer une fois affiché
        }
    });
}, revealOptions);

reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
});

// --- Fond dynamique header au scroll ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)";
        header.style.padding = "15px 5%";
    } else {
        header.style.boxShadow = "none";
        header.style.padding = "20px 5%";
    }
});