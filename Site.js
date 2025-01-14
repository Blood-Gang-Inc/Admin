// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dynamically update the footer with the current year
document.addEventListener("DOMContentLoaded", function() {
    const footerYear = new Date().getFullYear();
    const footerText = document.querySelector('footer p');
    if (footerText) {
        footerText.innerHTML = `&copy; ${footerYear} Blood Gang™️, Inc`;
    }

    // Responsive navigation menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.top-bar nav');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }
});

// Prompt user before navigating to an external link
document.querySelectorAll('.top-bar a').forEach(link => {
    link.addEventListener('click', (e) => {
        const proceed = confirm('You are about to visit an external site. Do you wish to continue?');
        if (!proceed) {
            e.preventDefault();
        } else {
            // Optional: Add a loading spinner or visual feedback
            document.body.classList.add('loading');
        }
    });
});

// Add a basic loading indicator
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .loading::before {
            content: 'Loading...';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.5em;
            color: #007bff;
            background: rgba(255, 255, 255, 0.8);
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 1000;
        }
    `;
    document.head.appendChild(style);
});
