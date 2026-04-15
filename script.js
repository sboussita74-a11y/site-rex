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
    threshold: 0.1, // Apparaît quand 10% de l'élément est visible
    rootMargin: "0px 0px -30px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
});

// --- Ombre sous le header au scroll ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 20) {
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)";
    } else {
        header.style.boxShadow = "none";
    }
});