document.addEventListener('DOMContentLoaded', function() {
    // Background slideshow
    const slides = document.querySelectorAll('.bg-slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Add laser effects dynamically
    function createLaser() {
        const laser = document.createElement('div');
        laser.classList.add('laser-effect');
        
        // Random position and width
      // Random position and width
const top = Math.random() * 80 + 10; // 10% to 90%
const width = Math.random() * 50 + 30; // 30% to 80%
const delay = Math.random() * 4; // 0 to 4 seconds

laser.style.top = `${top}%`;
laser.style.width = `${width}%`;
laser.style.animationDelay = `${delay}s`;

document.querySelector('.research-section').appendChild(laser);
}

// Create multiple laser effects
for (let i = 0; i < 3; i++) {
createLaser();
}

// Create shining dots
function createShiningDot() {
const dot = document.createElement('div');
dot.classList.add('shining-dot');

// Random position
const top = Math.random() * 100;
const left = Math.random() * 100;
const delay = Math.random() * 4;
const size = Math.random() * 8 + 4; // 4px to 12px

dot.style.top = `${top}%`;
dot.style.left = `${left}%`;
dot.style.animationDelay = `${delay}s`;
dot.style.width = `${size}px`;
dot.style.height = `${size}px`;

document.querySelector('.research-section').appendChild(dot);
}

// Create multiple shining dots
for (let i = 0; i < 8; i++) {
createShiningDot();
}

// Counter animation for stats
const counters = document.querySelectorAll('.stat-number');
const speed = 200; // The lower the slower

function updateCounters() {
counters.forEach(counter => {
const target = +counter.getAttribute('data-count');
const count = +counter.innerText;
const inc = Math.ceil(target / speed);

if (count < target) {
counter.innerText = count + inc;
setTimeout(() => updateCounters(), 1);
} else {
counter.innerText = target;
}
});
}

// Run counter animation when stats section is in view
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
updateCounters();
observer.unobserve(entry.target);
}
});
}, { threshold: 0.5 });

observer.observe(document.querySelector('.stats-section'));
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;

const targetElement = document.querySelector(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - 90,
behavior: 'smooth'
});
}
});
});



document.addEventListener('DOMContentLoaded', function() {
    // Animation for timeline items
    const events = document.querySelectorAll('.quranic-event');
    
    function checkScroll() {
        events.forEach(event => {
            const eventTop = event.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (eventTop < windowHeight * 0.85) {
                event.classList.add('visible');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Add hover effect to event contents
    const eventContents = document.querySelectorAll('.quranic-event-content');
    eventContents.forEach(content => {
        content.addEventListener('mouseenter', () => {
            content.style.transform = 'translateY(-5px)';
            content.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });
        
        content.addEventListener('mouseleave', () => {
            content.style.transform = 'translateY(0)';
            content.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.getElementById('overlay');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Toggle body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu when clicking on overlay
    overlay.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            // Ensure menu is closed on desktop
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
