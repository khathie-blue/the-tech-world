// Learn More Button Alert
function learnMore() {
    alert("Welcome to TheTechWorld! Discover exciting courses, tools, and resources.");
    window.location.href="/courses.html";
}

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Year Update in Footer
document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = `&copy; ${year} TheTechWorld | All Rights Reserved`;
});