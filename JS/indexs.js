
// Create particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
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

// Background image rotation
function rotateBackgrounds() {
    const backgrounds = document.querySelectorAll('.hero-bg');
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

// Custom cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .nav-links li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.querySelector('.custom-cursor').classList.add('hover');
    });
    
    item.addEventListener('mouseleave', () => {
        document.querySelector('.custom-cursor').classList.remove('hover');
    });
    
    item.addEventListener('click', () => {
        document.querySelector('.custom-cursor').classList.add('click');
        setTimeout(() => {
            document.querySelector('.custom-cursor').classList.remove('click');
        }, 300);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Initialize everything when page loads
window.addEventListener('load', () => {
    createParticles();
    rotateBackgrounds();
    
    // Typewriter effect for additional text if needed
    setTimeout(() => {
        document.querySelector('.typewriter').style.borderRight = 'none';
    }, 3500);
});





  // Create particles
  function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
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

// Background image rotation
function rotateBackgrounds() {
    const backgrounds = document.querySelectorAll('.hero-bg');
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

// Button hover effect with jQuery
$(document).ready(function() {
    $('.hero-btn').hover(
        function() {
            $(this).addClass('animate-bounce');
        },
        function() {
            $(this).removeClass('animate-bounce');
        }
    );
    
    // Button click effect
    $('.hero-btn').click(function() {
        $(this).addClass('transform scale-95');
        setTimeout(() => {
            $(this).removeClass('transform scale-95');
           
        }, 200);
    });
});

// Initialize everything when page loads
window.addEventListener('load', () => {
    createParticles();
    rotateBackgrounds();
    
    // Typewriter effect for additional text if needed
    setTimeout(() => {
        document.querySelector('.typewriter').style.borderRight = 'none';
    }, 3500);
});


  // Simple animation on scroll
  document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.vision-item, .implementation-item');
    
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
});


document.addEventListener('DOMContentLoaded', function() {
    // Create wires between central hub and posts
    function createWires() {
        const centralHub = document.querySelector('.central-hub');
        const posts = document.querySelectorAll('.post-card');
        const hubRect = centralHub.getBoundingClientRect();
        const hubCenterX = hubRect.left + hubRect.width / 2;
        const hubCenterY = hubRect.top + hubRect.height / 2;
        
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
            
            document.querySelector('.central-dars-section').appendChild(wire);
        });
    }
    
    // Animate posts on scroll
    function animateOnScroll() {
        const posts = document.querySelectorAll('.post-card');
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
    window.addEventListener('resize', function() {
        // Remove existing wires
        document.querySelectorAll('.wire').forEach(wire => wire.remove());
        // Create new wires
        createWires();
    });
});


$(document).ready(function() {
    // Initialize carousel with custom interval
    $('#motivationCarousel').carousel({
        interval: 5000,
        pause: 'hover'
    });
    
    // Handle feedback form submission
    $('#feedbackForm').on('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const feedback = $('#feedback').val().trim();
        
        if (name && email && feedback) {
            // Here you would typically send the data to a server
            alert('Thank you for your feedback! We appreciate your thoughts.');
            $('#feedbackForm')[0].reset();
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });
    
    // Add hover effect to carousel controls
    $('.carousel-control-prev, .carousel-control-next').hover(
        function() {
            $(this).css('background', 'rgba(255, 255, 255, 0.5)');
        },
        function() {
            $(this).css('background', 'rgba(255, 255, 255, 0.3)');
        }
    );
});