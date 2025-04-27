// Toggle Dropdown Menu for Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the dropdown menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Alert for contact section (triggered on email click)
document.querySelector('.contact-item a[href*="mailto"]').addEventListener('click', () => {
    alert('Thanks for reaching out!');
});

// Certificate Modal Functionality (for PDFs)
const certificateItems = document.querySelectorAll('.certificate-item');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

certificateItems.forEach(item => {
    item.addEventListener('click', () => {
        const pdfSrc = item.getAttribute('data-pdf');
        const pdfAlt = item.querySelector('.certificate-img').alt;

        modal.innerHTML = `
            <span class="close">×</span>
            <iframe class="modal-content" src="${pdfSrc}" title="${pdfAlt}"></iframe>
        `;
        modal.style.display = 'flex';

        const closeModal = modal.querySelector('.close');
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside the iframe
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

// Back to Top Button Functionality
const backToTop = document.createElement('button');
backToTop.id = 'back-to-top';
backToTop.textContent = 'Back to Top';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});