/* 
   HAVELI RESTAURANT - Main JavaScript
   Interactive Backdrop, Scroll Reveal, and Genie Animations
   Built by BeatLabs
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Page Loading Screen
    initLoader();

    // 2. Mobile Menu Toggle
    initMobileMenu();

    // 3. Scroll Effects & Scroll-to-Reveal
    initScrollReveal();

    // 4. Interactive Canvas Particles (Golden Sparks)
    initCanvasParticles();

    // 5. Genie Animation Modal / Reservation Drawer
    initGenieModal();

    // 6. Lightbox Gallery Viewer
    initLightbox();

    // 7. Dynamic Hero Typing Title
    initHeroTyping();

    // 8. Testimonials Review Slider
    initTestimonialSlider();

    // 9. Sticky Zomato Banner Trigger
    initZomatoStickyBanner();
});

// Page Loader
function initLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('fade-out');
            }, 600); // Small delay for seamless experience
        });
    }
}

// Mobile Menu
function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            links.classList.toggle('active');
        });

        // Close menu when clicking links
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                toggle.classList.remove('active');
                links.classList.remove('active');
            });
        });
    }
}

// Scroll Reveal
function initScrollReveal() {
    const header = document.querySelector('header');
    
    // Header Scroll class
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, observerOptions);

    reveals.forEach(el => observer.observe(el));
}

// Interactive Particles Background (Golden Sparks rising like embers)
function initCanvasParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 120 };

    // Set Canvas Size
    function setSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setSize();
    window.addEventListener('resize', setSize);

    // Track Mouse
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Particle Class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.5 + 0.5;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 15;
            // Float upwards: speedY should be negative
            this.speedX = (Math.random() * 0.6) - 0.3;
            this.speedY = -(Math.random() * 0.8 + 0.3); // moving up
            this.alpha = Math.random() * 0.6 + 0.1;
            this.sparkleSpeed = Math.random() * 0.02 + 0.01;
            this.sparkleDir = Math.random() > 0.5 ? 1 : -1;
        }

        draw() {
            ctx.fillStyle = `rgba(212, 175, 55, ${this.alpha})`;
            ctx.shadowBlur = this.size * 2;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.shadowBlur = 0; // reset
        }

        update() {
            // Float upwards and drift sideways
            this.baseY += this.speedY;
            this.baseX += this.speedX;

            // Sparkle effect (pulsing opacity)
            this.alpha += this.sparkleSpeed * this.sparkleDir;
            if (this.alpha > 0.8) {
                this.alpha = 0.8;
                this.sparkleDir = -1;
            } else if (this.alpha < 0.1) {
                this.alpha = 0.1;
                this.sparkleDir = 1;
            }

            // Loop edges (when rise off-screen, spawn at bottom)
            if (this.baseY < -10) {
                this.baseY = canvas.height + 10;
                this.baseX = Math.random() * canvas.width;
            }
            if (this.baseX < -10) this.baseX = canvas.width + 10;
            if (this.baseX > canvas.width + 10) this.baseX = -10;

            this.x = this.baseX;
            this.y = this.baseY;

            // Mouse repulsion interactive physics
            if (mouse.x != null && mouse.y != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let maxDistance = mouse.radius;
                    let force = (maxDistance - distance) / maxDistance;
                    let directionX = forceDirectionX * force * this.density;
                    let directionY = forceDirectionY * force * this.density;
                    this.x -= directionX;
                    this.y -= directionY;
                }
            }
        }
    }

    // Populate particles (responsive quantity)
    function init() {
        particles = [];
        const quantity = Math.floor((canvas.width * canvas.height) / 15000);
        const maxParticles = Math.min(quantity, 90); // Cap it to ensure top performance
        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Particle());
        }
    }
    init();
    window.addEventListener('resize', init);

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// Genie Morphing Modal Animation
function initGenieModal() {
    const fab = document.getElementById('genie-fab');
    const overlay = document.getElementById('genie-overlay');
    const closeBtn = document.getElementById('genie-close');
    const form = document.getElementById('genie-reservation-form');

    if (!fab || !overlay || !closeBtn) return;

    // Open Genie drawer
    fab.addEventListener('click', () => {
        // Calculate where to morph from (the FAB's center coordinate)
        const rect = fab.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;
        
        const drawer = overlay.querySelector('.genie-drawer');
        
        // Define transform origin relative to window for the genie effect
        drawer.style.transformOrigin = `${originX}px ${originY}px`;
        
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scroll
    });

    // Close Genie drawer
    const closeDrawer = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Unlock scroll
    };

    closeBtn.addEventListener('click', closeDrawer);
    
    // Close on overlay outer click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeDrawer();
        }
    });

    // Handle Reservation Form Submit
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('reserve-name').value;
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = "Summoning table... 🌌";
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.style.background = 'var(--success)';
                submitBtn.style.color = '#fff';
                submitBtn.textContent = "Calling Haveli... 📞";
                
                setTimeout(() => {
                    form.reset();
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    closeDrawer();
                    
                    // Dial the restaurant number directly
                    window.location.href = "tel:07281092285";
                }, 1000);
            }, 800);
        });
    }
}

// Lightbox modal zoom logic
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
    const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
    const lightboxCaption = lightbox ? lightbox.querySelector('.lightbox-caption') : null;
    const zoomableImages = document.querySelectorAll('.zoomable');

    if (!lightbox || !lightboxImg || !lightboxClose) return;

    zoomableImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.getAttribute('src') || img.src;
            if (lightboxCaption) {
                lightboxCaption.textContent = img.getAttribute('alt') || 'Haveli Restaurant';
            }
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxClose) {
            closeLightbox();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Typing Text Effect for Hero Header
function initHeroTyping() {
    const heading = document.getElementById('hero-heading');
    if (!heading) return;

    const phrases = [
        "A Feast Fit For Royalty",
        "Taste Authentic Bihari Spices",
        "Experience Patna's Dining Landmark"
    ];
    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = false;
    let typingSpeed = 80;

    // Wrap text in a span and append a blinking caret
    heading.innerHTML = `<span class="typing-text">${phrases[0]}</span><span class="typing-cursor"></span>`;
    const textSpan = heading.querySelector('.typing-text');

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            charIndex--;
            typingSpeed = 40; // faster deletion
        } else {
            charIndex++;
            typingSpeed = 80;
        }

        textSpan.textContent = currentPhrase.substring(0, charIndex);

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2500; // wait 2.5s at full text
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // wait 0.5s before typing next
        }

        setTimeout(type, typingSpeed);
    }

    // Start after initial delay
    setTimeout(type, 2000);
}

// Testimonials Slider (Auto-scrolls, pauses on hover)
function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (!track || slides.length === 0 || !dotsContainer) return;

    let currentIndex = 0;
    let slideInterval;

    // Create navigation dots
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = `dot ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            goToSlide(idx);
            resetTimer();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function goToSlide(index) {
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active dot
        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        let nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex);
    }

    function startTimer() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }

    // Start slide loop
    startTimer();

    // Pause on hover
    const sliderContainer = document.querySelector('.testimonial-slider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
        sliderContainer.addEventListener('mouseleave', startTimer);
    }
}

// Sticky Zomato Banner Trigger for Menu Page
function initZomatoStickyBanner() {
    const banner = document.getElementById('zomato-sticky-banner');
    const closeBtn = document.getElementById('zomato-banner-close');
    if (!banner) return;

    // Trigger banner appearance after 3 seconds on the menu page
    setTimeout(() => {
        banner.classList.add('active');
    }, 3000);

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            banner.classList.remove('active');
        });
    }
}
