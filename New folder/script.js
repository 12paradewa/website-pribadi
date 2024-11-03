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

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formResponse = document.getElementById('form-response');

    // Simulate form submission
    formResponse.style.display = 'block';
    formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;

    // Reset the form
    document.getElementById('contact-form').reset();

    // Hide the response message after 5 seconds
    setTimeout(() => {
        formResponse.style.display = 'none';
    }, 5000);
});
