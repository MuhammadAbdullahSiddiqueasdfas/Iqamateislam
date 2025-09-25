// Main JavaScript file for Iqmat e Islam website
// Initialize everything when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create particles
    createParticles();
    
    // Rotate background images
    rotateBackgrounds();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize navbar scroll effect
    initNavbarScroll();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize typewriter effect
    initTypewriter();
    
    // Initialize vision and implementation animations
    initScrollAnimations();
    
    // Initialize central dars section
    initCentralDars();
    
    // Initialize carousel
    initCarousel();
    
    // Initialize feedback form
    initFeedbackForm();
    
    // Initialize guidance slider
    initGuidanceSlider();
    
    // Initialize enhanced stats counter
    initEnhancedStatsCounter();
    
    // Add click event to "Explore More" button
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', function() {
            // Scroll to the next section (Vision & Mission)
            const visionSection = document.querySelector('.vision-mission-section');
            if (visionSection) {
                visionSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Create particles for the hero section
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 10 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 15;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}vw`;
        particle.style.top = `${posY}vh`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Background image rotation for hero section
function rotateBackgrounds() {
    const backgrounds = document.querySelectorAll('.hero-bg');
    if (backgrounds.length === 0) return;

    let current = 0;
    
    // Set initial active background
    backgrounds.forEach((bg, index) => {
        if (index === 0) {
            bg.classList.add('active');
        } else {
            bg.classList.remove('active');
        }
    });

    // Rotate backgrounds every 3 seconds
    setInterval(() => {
        backgrounds[current].classList.remove('active');
        current = (current + 1) % backgrounds.length;
        backgrounds[current].classList.add('active');
    }, 3000);
}

// Initialize custom cursor
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .nav-links li').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
        
        item.addEventListener('click', () => {
            cursor.classList.add('click');
            setTimeout(() => {
                cursor.classList.remove('click');
            }, 300);
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (!menuBtn) return;

    menuBtn.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
}

// Typewriter effect
function initTypewriter() {
    const typewriter = document.querySelector('.typewriter');
    if (!typewriter) return;

    setTimeout(() => {
        typewriter.style.borderRight = 'none';
    }, 3500);
}

// Animation for vision and implementation items on scroll
function initScrollAnimations() {
    const items = document.querySelectorAll('.vision-item, .implementation-item');
    if (items.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    items.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Central Dars section functionality
function initCentralDars() {
    const centralDarsSection = document.querySelector('.central-dars-section');
    if (!centralDarsSection) return;

    // Create wires between central hub and posts
    function createWires() {
        const centralHub = document.querySelector('.central-hub');
        const posts = document.querySelectorAll('.post-card');
        if (!centralHub || posts.length === 0) return;

        const hubRect = centralHub.getBoundingClientRect();
        const hubCenterX = hubRect.left + hubRect.width / 2;
        const hubCenterY = hubRect.top + hubRect.height / 2;

        // Remove existing wires
        document.querySelectorAll('.wire').forEach(wire => wire.remove());

        posts.forEach(post => {
            const postRect = post.getBoundingClientRect();
            const postTopX = postRect.left + postRect.width / 2;
            const postTopY = postRect.top;

            // Calculate distance and angle
            const deltaX = postTopX - hubCenterX;
            const deltaY = postTopY - hubCenterY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

            // Create wire element
            const wire = document.createElement('div');
            wire.className = 'wire';
            wire.style.width = distance + 'px';
            wire.style.top = hubCenterY + 'px';
            wire.style.left = hubCenterX + 'px';
            wire.style.transform = `rotate(${angle}deg)`;
            centralDarsSection.appendChild(wire);
        });
    }

    // Animate posts on scroll
    function animateOnScroll() {
        const posts = document.querySelectorAll('.post-card');
        if (posts.length === 0) return;

        const options = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, options);

        posts.forEach(post => {
            observer.observe(post);
        });
    }

    // Initialize functions after a slight delay to ensure DOM is fully rendered
    setTimeout(() => {
        createWires();
        animateOnScroll();
    }, 100);

    // Recalculate wires on window resize
    window.addEventListener('resize', createWires);
}

// Carousel initialization
function initCarousel() {
    const carousel = document.getElementById('motivationCarousel');
    if (!carousel) return;

    // Initialize with jQuery if available
    if (typeof $ !== 'undefined' && $.fn.carousel) {
        $('#motivationCarousel').carousel({
            interval: 5000,
            pause: 'hover'
        });

        // Add hover effect to carousel controls
        $('.carousel-control-prev, .carousel-control-next').hover(function() {
            $(this).css('background', 'rgba(255, 255, 255, 0.5)');
        }, function() {
            $(this).css('background', 'rgba(255, 255, 255, 0.3)');
        });
    }
}

// Feedback form handling
function initFeedbackForm() {
    const feedbackForm = document.getElementById('feedbackForm');
    if (!feedbackForm) return;

    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const feedback = document.getElementById('feedback').value.trim();

        if (name && email && feedback) {
            // Here you would typically send the data to a server
            alert('Thank you for your feedback! We appreciate your thoughts.');
            feedbackForm.reset();
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });
}

// Guidance Slider functionality
function initGuidanceSlider() {
    let currentIndex = 0;
    const cards = document.querySelectorAll('.guidance-card');
    const totalCards = cards.length;
    const slider = document.getElementById('sliderWrapper');
    const dots = document.querySelectorAll('.dot');
    
    if (!slider || cards.length === 0) return;

    function getCardsToShow() {
        const width = window.innerWidth;
        if (width >= 992) return 3;  // Always show 3 on desktop
        if (width >= 768) return 2;  // 2 on tablet
        return 1;  // 1 on mobile
    }

    function updateSlider() {
        const cardsToShow = getCardsToShow();
        const cardWidth = 100 / cardsToShow; // Percentage width
        const maxIndex = Math.max(0, totalCards - cardsToShow);

        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }

        const translateX = -(currentIndex * cardWidth);
        slider.style.transform = `translateX(${translateX}%)`;

        // Update dots
        const totalDots = Math.ceil((totalCards - cardsToShow + 1));
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function moveSlider(direction) {
        const cardsToShow = getCardsToShow();
        const maxIndex = Math.max(0, totalCards - cardsToShow);

        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = maxIndex;
        } else if (currentIndex > maxIndex) {
            currentIndex = 0;
        }

        updateSlider();
    }

    function currentSlide(n) {
        currentIndex = n - 1;
        updateSlider();
    }

    // Add event listeners for navigation buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) prevBtn.addEventListener('click', () => moveSlider(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => moveSlider(1));

    // Add event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });

    // Auto-slide functionality
    setInterval(() => {
        moveSlider(1);
    }, 4000);

    // Update on window resize
    window.addEventListener('resize', updateSlider);

    // Initialize
    updateSlider();
}

// Enhanced Stats Counter with smooth animation
function initEnhancedStatsCounter() {
    const counters = document.querySelectorAll('.stat-number');
    let animationStarted = false;

    function updateCounters() {
        if (animationStarted) return;
        animationStarted = true;

        counters.forEach((counter, index) => {
            const target = +counter.getAttribute('data-count');
            const duration = target > 1000 ? 4000 : 3000; // Longer duration for larger numbers
            const startTime = performance.now();
            
            // Add counting class for glow effect
            counter.classList.add('counting');

            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Different easing for different types of numbers
                let easeFunction;
                if (target === 2018) { // For year, use linear
                    easeFunction = progress;
                } else { // For other numbers, use smooth easing
                    easeFunction = 1 - Math.pow(1 - progress, 3);
                }
                
                const currentValue = Math.floor(target * easeFunction);
                counter.innerText = currentValue;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    counter.innerText = target;
                    counter.classList.remove('counting');
                }
            }
            
            // Stagger the start of each counter
            setTimeout(() => {
                requestAnimationFrame(animate);
            }, index * 200);
        });
    }

    // Intersection Observer with better settings
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationStarted) {
                setTimeout(() => {
                    updateCounters();
                }, 500); // Half second delay
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.4,
        rootMargin: '0px 0px -100px 0px'
    });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Button hover effect with jQuery if available
if (typeof $ !== 'undefined') {
    $(document).ready(function() {
        $('.hero-btn').hover(function() {
            $(this).addClass('animate-bounce');
        }, function() {
            $(this).removeClass('animate-bounce');
        });

        // Button click effect
        $('.hero-btn').click(function() {
            $(this).addClass('transform scale-95');
            setTimeout(() => {
                $(this).removeClass('transform scale-95');
            }, 200);
        });
    });
}
