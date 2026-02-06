// ============================================
// Mouse-Tracking Background Orbs
// ============================================

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 100;
    mouseY = (e.clientY / window.innerHeight) * 100;
});

function animateOrbs() {
    // Smooth easing for natural movement
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    const orbs = document.querySelectorAll('.orb');

    orbs.forEach((orb, index) => {
        // Different parallax speeds for each orb
        const speed = (index + 1) * 0.3;
        const xOffset = (currentX - 50) * speed;
        const yOffset = (currentY - 50) * speed;

        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });

    requestAnimationFrame(animateOrbs);
}

// Start animation and show orbs after page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    animateOrbs();
});

// ============================================
// Navigation & Scroll Effects
// ============================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Close mobile menu if open
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');

            // Scroll to section
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Update active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ============================================
// Intersection Observer for Fade-in Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Trigger skill bar animations
            if (entry.target.classList.contains('skill-item')) {
                const progressBar = entry.target.querySelector('.skill-progress');
                if (progressBar) {
                    const progress = progressBar.style.getPropertyValue('--progress');
                    progressBar.style.width = progress;
                }
            }
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in, .timeline-item, .skill-item');
    fadeElements.forEach(el => observer.observe(el));
});

// ============================================
// Animated Counters
// ============================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toFixed(target % 1 === 0 ? 0 : 2);
            clearInterval(timer);
        } else {
            element.textContent = current.toFixed(target % 1 === 0 ? 0 : 2);
        }
    }, 16);
}

// Counter Observer
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseFloat(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

// Observe all counters
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => counterObserver.observe(counter));
});

// ============================================
// Contact Card Interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const contactCards = document.querySelectorAll('.contact-card');

    contactCards.forEach(card => {
        card.addEventListener('click', () => {
            const contactValue = card.querySelector('.contact-value');
            const link = contactValue.querySelector('a');

            if (link) {
                // If there's a link, open it
                window.open(link.href, '_blank');
            } else {
                // Otherwise, copy to clipboard
                const text = contactValue.textContent.trim();

                // Create temporary input
                const tempInput = document.createElement('input');
                tempInput.value = text;
                document.body.appendChild(tempInput);
                tempInput.select();

                try {
                    document.execCommand('copy');

                    // Visual feedback
                    const originalBg = card.style.background;
                    card.style.background = 'rgba(184, 134, 11, 0.2)';
                    card.style.transition = 'background 0.3s ease';

                    setTimeout(() => {
                        card.style.background = originalBg;
                    }, 500);

                    // Show tooltip (optional)
                    showTooltip(card, 'Copied!');
                } catch (err) {
                    console.error('Copy failed:', err);
                }

                document.body.removeChild(tempInput);
            }
        });
    });
});

// Simple tooltip function
function showTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -150%);
        background: var(--color-accent-brass);
        color: var(--color-text-primary);
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
    `;

    element.style.position = 'relative';
    element.appendChild(tooltip);

    setTimeout(() => tooltip.style.opacity = '1', 10);
    setTimeout(() => {
        tooltip.style.opacity = '0';
        setTimeout(() => element.removeChild(tooltip), 300);
    }, 1500);
}

// ============================================
// Scroll Indicator Animation
// ============================================

const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Hide scroll indicator when user scrolls
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// ============================================
// Hero Section Fade-Out on Scroll
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero) {
        const heroHeight = hero.offsetHeight;
        const fadeStart = 0;
        const fadeEnd = heroHeight * 0.8; // Fade completes at 80% of hero height

        if (scrolled <= fadeStart) {
            // At top - fully visible
            hero.style.opacity = '1';
        } else if (scrolled >= fadeEnd) {
            // Past fade point - fully invisible
            hero.style.opacity = '0';
        } else {
            // In between - gradual fade
            const fadeProgress = (scrolled - fadeStart) / (fadeEnd - fadeStart);
            const opacity = 1 - fadeProgress;
            hero.style.opacity = opacity.toString();
        }
    }
});

// ============================================
// Dynamic Year in Footer
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const footerText = document.querySelector('.footer-text');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = footerText.innerHTML.replace('2026', currentYear);
    }
});

// ============================================
// Smooth Loading Effect
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// Download CV Button Analytics (Optional)
// ============================================

const downloadBtn = document.querySelector('.download-cv-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
        // Check if CV file exists
        const cvPath = 'assets/cv/Sourav_Singh_CV.pdf';

        // You can add analytics tracking here
        console.log('CV download initiated');

        // Optional: Add visual feedback
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';

        setTimeout(() => {
            downloadBtn.innerHTML = originalText;
        }, 2000);
    });
}

// ============================================
// Video Card Click Handlers (for future implementation)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            // Placeholder for video modal or redirect
            console.log('Video card clicked - functionality coming soon');

            // You can implement a modal or redirect to video platform
            const videoTitle = card.querySelector('.video-title').textContent;
            alert(`${videoTitle}\n\nVideo content coming soon!`);
        });
    });
});

// ============================================
// Blog Card Click Handlers (for future implementation)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
        card.addEventListener('click', () => {
            // Placeholder for blog post redirect
            console.log('Blog card clicked - functionality coming soon');

            const blogTitle = card.querySelector('.blog-title').textContent;
            if (!blogTitle.includes('Coming Soon')) {
                // You can implement redirect to blog post page
                // window.location.href = `/blog/${slug}`;
            }
        });
    });
});

// ============================================
// Performance Optimization: Lazy Loading Images
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    });
}

// ============================================
// Keyboard Navigation Enhancement
// ============================================

document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// ============================================
// Accessibility: Skip to Main Content
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add skip link for keyboard users
    const skipLink = document.createElement('a');
    skipLink.href = '#about';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--color-accent-brass);
        color: var(--color-text-primary);
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
    `;

    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });

    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
});

console.log('🚀 Portfolio website loaded successfully!');
console.log('💼 Sourav Singh - Investment Banking Professional');
console.log('📧 Contact: souravsk1920@gmail.com');
