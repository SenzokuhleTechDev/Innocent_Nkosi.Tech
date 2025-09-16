// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
const quoteForm = document.querySelector('.quote-form');

function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Add loading state to button
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        submitBtn.textContent = 'Sent Successfully!';
        e.target.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
        }, 2000);
    }, 1500);
}

contactForm.addEventListener('submit', handleFormSubmit);
quoteForm.addEventListener('submit', handleFormSubmit);

// Animate service cards on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Typing effect for bio section
const bioText = document.querySelector('#bio p');
const text = bioText.textContent;
bioText.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        bioText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 20);
    }
}

// Start typing when bio section is in view
const bioObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        typeWriter();
        bioObserver.disconnect();
    }
}, { threshold: 0.5 });

bioObserver.observe(document.querySelector('#bio'));