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

if (contactForm) contactForm.addEventListener('submit', handleFormSubmit);
if (quoteForm) quoteForm.addEventListener('submit', handleFormSubmit);

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

// Typing effect for BIO section
const bioText = document.querySelector('#bio p');
if (bioText) {
    const bioContent = bioText.textContent;
    bioText.textContent = '';
    let bioIndex = 0;

    function typeWriterBio() {
        if (bioIndex < bioContent.length) {
            bioText.textContent += bioContent.charAt(bioIndex);
            bioIndex++;
            setTimeout(typeWriterBio, 20);
        }
    }

    const bioObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            typeWriterBio();
            bioObserver.disconnect();
        }
    }, { threshold: 0.5 });

    bioObserver.observe(document.querySelector('#bio'));
}

// Typing effect for HEADER name
const headerText = "SENZOKUHLE INNOCENT NKOSI - THE ANALYST";
let headerIndex = 0;

function typeWriterHeader() {
    if (headerIndex < headerText.length) {
        document.getElementById("typewriter").innerHTML += headerText.charAt(headerIndex);
        headerIndex++;
        setTimeout(typeWriterHeader, 100);
    }
}

window.onload = typeWriterHeader;

// Scroll Reveal
function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let r of reveals) {
        let windowHeight = window.innerHeight;
        let elementTop = r.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            r.classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
