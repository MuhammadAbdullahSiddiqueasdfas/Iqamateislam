
$(document).ready(function() {
    // Navbar scroll effect
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });
    
    // Mobile menu toggle
    $('.mobile-menu-btn').on('click', function() {
        $('.nav-links').toggleClass('active');
    });
    
    // Background slideshow
    let currentSlide = 0;
    const slides = $('.bg-slide');
    
    function nextSlide() {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides.eq(currentSlide).addClass('active');
    }
    
    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);
    
    // Video controls functionality
    const playPauseBtn = $('.play-pause');
    const muteBtn = $('.mute');
    const fullscreenBtn = $('.fullscreen');
    
    playPauseBtn.on('click', function() {
        const icon = $(this).find('i');
        if (icon.hasClass('fa-play')) {
            icon.removeClass('fa-play').addClass('fa-pause');
            // In a real implementation, you would trigger play on the video
        } else {
            icon.removeClass('fa-pause').addClass('fa-play');
            // In a real implementation, you would trigger pause on the video
        }
    });
    
    muteBtn.on('click', function() {
        const icon = $(this).find('i');
        if (icon.hasClass('fa-volume-up')) {
            icon.removeClass('fa-volume-up').addClass('fa-volume-mute');
        } else {
            icon.removeClass('fa-volume-mute').addClass('fa-volume-up');
        }
    });
    
    fullscreenBtn.on('click', function() {
        // In a real implementation, this would toggle fullscreen mode
        alert('Fullscreen mode would be activated here with a real video player');
    });
    
    // Create particles
    function createParticles() {
        const particlesContainer = $('#particles');
        const particleCount = 50; // Increased particle count
        
        for (let i = 0; i < particleCount; i++) {
            const size = Math.random() * 6 + 2;
            const posX = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = Math.random() * 10 + 15;
            
            $('<div>')
                .addClass('particle')
                .css({
                    width: size + 'px',
                    height: size + 'px',
                    left: posX + '%',
                    top: '100%',
                    animationDelay: delay + 's',
                    animationDuration: duration + 's'
                })
                .appendTo(particlesContainer);
        }
    }
    
    createParticles();
    
    // Animate features on scroll
    $(window).on('scroll', function() {
        $('.feature-card').each(function() {
            const position = $(this).offset().top;
            const scrollPosition = $(window).scrollTop() + $(window).height();
            
            if (position < scrollPosition) {
                $(this).addClass('visible');
            }
        });
    });
    
    // Trigger scroll event to check initial visibility
    $(window).trigger('scroll');
});


$(document).ready(function() {
    // Create shining dots
    function createShiningDots() {
        const container = $('.shining-dots-container');
        const dotCount = 15;
        
        for (let i = 0; i < dotCount; i++) {
            const size = Math.random() * 15 + 5;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 3 + 2;
            
            $('<div>')
                .addClass('shining-dot')
                .css({
                    width: size + 'px',
                    height: size + 'px',
                    left: posX + '%',
                    top: posY + '%',
                    animation: `shine ${duration}s infinite ${delay}s`
                })
                .appendTo(container);
        }
    }
    
    createShiningDots();
    
    // Animate points on scroll
    $(window).on('scroll', function() {
        $('.point').each(function() {
            const position = $(this).offset().top;
            const scrollPosition = $(window).scrollTop() + $(window).height();
            
            if (position < scrollPosition - 50) {
                $(this).addClass('visible');
            }
        });
    });
    
    // Trigger scroll event to check initial visibility
    $(window).trigger('scroll');
});

$(document).ready(function() {
    // FAQ toggle functionality
    $('.faq-question').click(function() {
        const faqItem = $(this).parent('.faq-item');
        const isActive = faqItem.hasClass('active');
        
        // Close all FAQ items
        $('.faq-item').removeClass('active');
        $('.faq-icon').html('<i class="fas fa-plus"></i>');
        
        // If clicked item wasn't active, open it
        if (!isActive) {
            faqItem.addClass('active');
            faqItem.find('.faq-icon').html('<i class="fas fa-minus"></i>');
        }
    });
    
    // Animate elements on scroll
    function animateOnScroll() {
        $('.benefit-card, .quran-verse').each(function() {
            const position = $(this).offset().top;
            const scrollPosition = $(window).scrollTop() + $(window).height();
            
            if (position < scrollPosition - 50) {
                $(this).addClass('animate-fadeIn');
            }
        });
    }
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    $(window).on('scroll', animateOnScroll);
});