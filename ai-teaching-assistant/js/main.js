// ===== Mobile Navigation Toggle =====
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ===== Animate elements on scroll =====
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

    // Observe feature cards, grade cards, testimonials
    document.querySelectorAll('.feature-card, .grade-card, .testimonial-card, .resource-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== Animate stat numbers =====
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber(entry.target);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => statsObserver.observe(el));
    }
});

function animateNumber(element) {
    const text = element.textContent;
    const number = parseInt(text.replace(/[^0-9]/g, ''));
    const suffix = text.replace(/[0-9,]/g, '');
    const hasComma = text.includes(',');
    let current = 0;
    const step = Math.ceil(number / 50);
    const interval = setInterval(() => {
        current += step;
        if (current >= number) {
            current = number;
            clearInterval(interval);
        }
        let displayNum = hasComma ? current.toLocaleString() : current;
        element.textContent = displayNum + suffix;
    }, 30);
}
