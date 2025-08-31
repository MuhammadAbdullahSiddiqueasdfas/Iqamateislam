
        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.getElementById('navbar');
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');
            const navOverlay = document.getElementById('navOverlay');
            
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
                navOverlay.classList.toggle('active');
            });
            
            // Close menu when clicking overlay
            navOverlay.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                navOverlay.classList.remove('active');
            });
            
            // Animation for timeline items
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            function checkScroll() {
                timelineItems.forEach(item => {
                    const itemTop = item.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (itemTop < windowHeight * 0.85) {
                        item.classList.add('visible');
                    }
                });
            }
            
            // Initial check
            checkScroll();
            
            // Check on scroll
            window.addEventListener('scroll', checkScroll);
        });
    