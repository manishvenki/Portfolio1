// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle display of nav links
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'rgba(10, 25, 47, 0.98)';
            navLinks.style.padding = '20px';
            navLinks.style.textAlign = 'center';
        }
    });

    // --- Smooth Scrolling ---
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    console.log("Manish Portfolio Loaded");
});