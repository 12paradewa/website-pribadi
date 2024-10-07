function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Skill Bar Animation
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-fill');
    skillBars.forEach(bar => {
        const skillWidth = bar.parentElement.dataset.skill;
        bar.style.width = skillWidth;
    });

    // Fade-in Animation for Sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});
