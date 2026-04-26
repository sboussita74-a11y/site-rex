// --- Dictionnaire de traduction FR / EN ---
const translations = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_video: "Présentation",
        nav_networks: "Réseaux",
        hero_title: "Salut, je suis <span class='highlight'>Rex</span>",
        hero_subtitle: "Monteur Vidéo & Créateur YouTube",
        hero_desc: "Récemment lancé dans le montage, j'accompagne les créateurs dans la dynamisation de leurs vidéos tout en développant mon propre contenu sur YouTube.",
        hero_btn: "Découvrir mes services <i class='fas fa-arrow-down'></i>",
        about_title: "À propos de <span class='highlight'>moi</span>",
        about_p1: "Je suis un <strong>monteur vidéo récent</strong>, passionné par l'écosystème YouTube. Plutôt que d'en faire trop, j'aime les montages propres et efficaces, avec une vraie réflexion sur le rythme de la vidéo.",
        about_p2: "Au-delà du montage pour d'autres, je suis <strong>également créateur de contenu</strong>. Cela m'aide à bien comprendre les attentes de l'audience et les besoins techniques pour rendre une vidéo fluide, naturelle et agréable à regarder.",
        about_p3: "J'aime apprendre, m'adapter à différents styles et échanger avec les créateurs pour leur proposer un montage qui correspond vraiment à leur identité.",
        services_title: "Mes <span class='highlight'>Services</span>",
        services_desc: "Des prestations simples, flexibles et pensées pour le format YouTube.",
        srv1_title: "Montage YouTube",
        srv1_desc: "Dynamisation de vos vidéos, suppression des temps morts et adaptation totale à votre style de création.",
        srv2_title: "Spécialisé Gaming",
        srv2_desc: "Mise en valeur de vos gameplays, let's plays ou best-of avec un rythme adapté pour garder l'audience engagée.",
        srv3_title: "Classique & Shorts",
        srv3_desc: "Format horizontal classique ou format vertical très nerveux (Shorts, TikTok, Reels) selon vos besoins.",
        srv4_title: "Miniatures (Option)",
        srv4_desc: "Création de miniatures accrocheuses, claires et secondaires, pour maximiser le taux de clic de vos vidéos.",
        portfolio_title: "Mon <span class='highlight'>Portfolio</span>",
        portfolio_desc: "Un aperçu de mes réalisations.",
        portfolio_empty: "Aucun projet disponible pour le moment.",
        video_title: "Vidéo de <span class='highlight'>Présentation</span>",
        video_desc: "Un aperçu direct de mon travail et de mon univers de montage.",
        networks_title: "Mes <span class='highlight'>Réseaux</span>",
        networks_desc: "Pour me contacter ou suivre mon travail.",
        footer_text: "&copy; 2026 Rex. Tous droits réservés."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_video: "Showcase",
        nav_networks: "Socials",
        hero_title: "Hi, I'm <span class='highlight'>Rex</span>",
        hero_subtitle: "Video Editor & YouTube Creator",
        hero_desc: "Recently started video editing, I help creators make their videos more dynamic while developing my own content on YouTube.",
        hero_btn: "Discover my services <i class='fas fa-arrow-down'></i>",
        about_title: "About <span class='highlight'>me</span>",
        about_p1: "I am a <strong>recent video editor</strong>, passionate about the YouTube ecosystem. Rather than overdoing it, I like clean and effective edits, with real thought put into the video's pacing.",
        about_p2: "Beyond editing for others, I am <strong>also a content creator</strong>. This helps me understand audience expectations and the technical needs to make a video fluid, natural, and enjoyable to watch.",
        about_p3: "I love learning, adapting to different styles, and discussing with creators to offer them an edit that truly matches their identity.",
        services_title: "My <span class='highlight'>Services</span>",
        services_desc: "Simple, flexible services designed for the YouTube format.",
        srv1_title: "YouTube Editing",
        srv1_desc: "Making your videos dynamic, removing dead air, and fully adapting to your creative style.",
        srv2_title: "Gaming Specialized",
        srv2_desc: "Highlighting your gameplays, let's plays, or best-ofs with suitable pacing to keep the audience engaged.",
        srv3_title: "Classic & Shorts",
        srv3_desc: "Classic horizontal format or highly energetic vertical format (Shorts, TikTok, Reels) depending on your needs.",
        srv4_title: "Thumbnails (Add-on)",
        srv4_desc: "Creation of catchy, clear, and secondary thumbnails to maximize your video's click-through rate.",
        portfolio_title: "My <span class='highlight'>Portfolio</span>",
        portfolio_desc: "A glimpse of my work.",
        portfolio_empty: "No projects available at the moment.",
        video_title: "Video <span class='highlight'>Showcase</span>",
        video_desc: "A direct look at my work and editing universe.",
        networks_title: "My <span class='highlight'>Socials</span>",
        networks_desc: "To contact me or follow my work.",
        footer_text: "&copy; 2026 Rex. All rights reserved."
    }
};

// --- Gestion du Lang Switcher ---
const langSwitch = document.getElementById('langSwitch');

langSwitch.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[selectedLang][key]) {
            el.innerHTML = translations[selectedLang][key];
        }
    });
});

// --- Menu Mobile ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- Gestion du Header et Scroll Intelligent ---
const header = document.getElementById('header');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    // Ombre du header
    if(window.scrollY > 30) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Scroll Intelligent (Active Link)
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});

// --- Gestion du Bouton Retour en Haut ---
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// --- Animations d'apparition ---
const reveals = document.querySelectorAll('.reveal');
const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -40px 0px" };

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