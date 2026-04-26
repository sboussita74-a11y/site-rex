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

// --- Gestion du Header au Scroll ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 30) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- Gestion du Bouton Retour en Haut ---
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    // Affiche le bouton après 300px de défilement vers le bas
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    // Remonte en haut de la page de manière fluide
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// --- Animations d'apparition (Intersection Observer) ---
const reveals = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15, 
    rootMargin: "0px 0px -40px 0px"
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