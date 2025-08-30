    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    mobileCloseBtn.addEventListener('click', function() {
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target) || mobileMenuBtn.contains(event.target);
        if (!isClickInsideNav && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Animation on scroll
    document.addEventListener('DOMContentLoaded', function() {
        const branchRows = document.querySelectorAll('.branch-row');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        branchRows.forEach(row => {
            row.style.opacity = 0;
            row.style.transform = 'translateY(50px)';
            row.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(row);
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
        const branchCarousel = document.querySelector('.branch-carousel-inner');
        const branchCards = document.querySelectorAll('.branch-contact-card');
        const branchDots = document.querySelectorAll('.branch-dot');
        const branchPrevBtn = document.querySelector('.branch-prev-btn');
        const branchNextBtn = document.querySelector('.branch-next-btn');
        let branchCurrentIndex = 0;
        
        // Function to update carousel
        function updateBranchCarousel() {
            branchCarousel.style.transform = `translateX(-${branchCurrentIndex * 100}%)`;
            
            // Update active card
            branchCards.forEach((card, index) => {
                card.classList.toggle('active', index === branchCurrentIndex);
            });
            
            // Update active dot
            branchDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === branchCurrentIndex);
            });
        }
        
        // Next button event
        branchNextBtn.addEventListener('click', function() {
            branchCurrentIndex = (branchCurrentIndex + 1) % branchCards.length;
            updateBranchCarousel();
        });
        
        // Previous button event
        branchPrevBtn.addEventListener('click', function() {
            branchCurrentIndex = (branchCurrentIndex - 1 + branchCards.length) % branchCards.length;
            updateBranchCarousel();
        });
        
        // Dot navigation
        branchDots.forEach(dot => {
            dot.addEventListener('click', function() {
                branchCurrentIndex = parseInt(this.getAttribute('data-index'));
                updateBranchCarousel();
            });
        });
        
        // Auto slide every 5 seconds
        setInterval(function() {
            branchCurrentIndex = (branchCurrentIndex + 1) % branchCards.length;
            updateBranchCarousel();
        }, 5000);
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Animation on scroll
        const insightCards = document.querySelectorAll('.insight-card');
        const missionSection = document.querySelector('.mission-section');
        
        // Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Function to handle scroll animation
        function handleScroll() {
            insightCards.forEach(card => {
                if (isInViewport(card)) {
                    card.classList.add('visible');
                    
                    // Animate progress bars
                    const progressFill = card.querySelector('.progress-fill');
                    if (progressFill) {
                        const width = progressFill.style.width;
                        progressFill.style.width = '0';
                        setTimeout(() => {
                            progressFill.style.width = width;
                        }, 300);
                    }
                }
            });
            
            if (isInViewport(missionSection)) {
                missionSection.classList.add('visible');
            }
        }
        
        // Initial check on load
        handleScroll();
        
        // Check on scroll
        window.addEventListener('scroll', handleScroll);
        
        // Animate numbers
        function animateValue(element, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                element.innerHTML = Math.floor(progress * (end - start) + start) + "+";
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        // Animate values when in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const valueElement = entry.target;
                    const finalValue = parseInt(valueElement.getAttribute('data-value'));
                    animateValue(valueElement, 0, finalValue, 2000);
                    observer.unobserve(valueElement);
                }
            });
        }, { threshold: 0.5 });
        
        // Observe value elements
        document.querySelectorAll('.insight-value').forEach(value => {
            const currentText = value.textContent;
            const numericValue = parseInt(currentText);
            value.setAttribute('data-value', numericValue);
            value.textContent = "0+";
            observer.observe(value);
        });
    });