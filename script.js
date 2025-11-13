// Typewriter effect for slogan
const slogan = document.querySelector('#hero h2');
const text = slogan.textContent;
slogan.textContent = '';
let i = 0;
function typeWriter() {
    if (i < text.length) {
        slogan.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}
setTimeout(typeWriter, 1000);

// Smooth scrolling for anchor links
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

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// Simple blink effect for hero
const hero = document.getElementById('hero');
setInterval(() => {
    hero.style.borderColor = hero.style.borderColor === 'white' ? 'yellow' : 'white';
}, 1000);