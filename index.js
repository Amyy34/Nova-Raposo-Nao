document.addEventListener('DOMContentLoaded', function() {

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenuButton.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    

    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

checkReveal();

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);


        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const closeLightbox = document.querySelector('.close-lightbox');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        

        let lightboxImages = [];
        let currentImageIndex = 0;
        

        const clickableImages = document.querySelectorAll('.clickable-image');
        

        clickableImages.forEach((image, index) => {

            const imgSrc = image.dataset.image || 
                         (image.querySelector('img') ? image.querySelector('img').src : '');
            const caption = image.dataset.caption || image.querySelector('p')?.textContent || '';
            
            if (imgSrc) {
                lightboxImages.push({
                    src: imgSrc,
                    caption: caption
                });
                
                image.addEventListener('click', () => {
                    openLightbox(index);
                });
            }
        });
        

        function openLightbox(index) {
            if (lightboxImages.length === 0) return;
            
            currentImageIndex = index;
            updateLightboxImage();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
        

        function updateLightboxImage() {
            const image = lightboxImages[currentImageIndex];
            lightboxImage.src = image.src;
            lightboxCaption.textContent = image.caption;
            

            if (lightboxImages.length <= 1) {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'block';
                nextBtn.style.display = 'block';
            }
        }
        

        function closeLightboxFunc() {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
        

        closeLightbox.addEventListener('click', closeLightboxFunc);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightboxFunc();
            }
        });
        

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            
            if (e.key === 'Escape') {
                closeLightboxFunc();
            } else if (e.key === 'ArrowLeft') {
                navigate(-1);
            } else if (e.key === 'ArrowRight') {
                navigate(1);
            }
        });
        

        prevBtn.addEventListener('click', () => navigate(-1));
        nextBtn.addEventListener('click', () => navigate(1));
        
        function navigate(direction) {
            currentImageIndex += direction;
            
            if (currentImageIndex >= lightboxImages.length) {
                currentImageIndex = 0;
            } else if (currentImageIndex < 0) {
                currentImageIndex = lightboxImages.length - 1;
            }
            
            updateLightboxImage();
        }
    

    function animateCounters() {
        const counters = document.querySelectorAll('.count-item div');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    }

    document.getElementById('downloadBtn').addEventListener('click', function() {

            const fileId = '1DTjy-SZo9ouhVzGJPo16KnxGD2gU2E8K';
            

            const link = document.createElement('a');
            

            link.href = `https://drive.google.com/u/0/uc?id=${fileId}&export=download`;
            

            link.download = 'Jornal_Nova_Raposo.pdf';
            

            document.body.appendChild(link);
            link.click();
            

            document.body.removeChild(link);
            

            this.textContent = 'Download iniciado!';
            this.classList.remove('bg-red-600', 'hover:bg-red-700');
            this.classList.add('bg-green-600', 'hover:bg-green-700');
            
            setTimeout(() => {
                this.textContent = 'Baixar PDF';
                this.classList.remove('bg-green-600', 'hover:bg-green-700');
                this.classList.add('bg-red-600', 'hover:bg-red-700');
            }, 3000);
        });

        document.addEventListener('DOMContentLoaded', function() {
            const header = document.querySelector('header');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const closeMenuButton = document.getElementById('close-menu');
            const mobileMenu = document.getElementById('mobile-menu');
            const navLinks = document.querySelectorAll('.nav-link');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
            

            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.add('open');
            });
            
            closeMenuButton.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
            

            mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('open');
                });
            });
            

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        

                        history.pushState(null, null, targetId);
                    }
                });
            });
            

            function updateActiveLink() {

                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                

                const scrollPosition = window.scrollY + 100;
                
                document.querySelectorAll('section').forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                        
                        mobileNavLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }
            
            window.addEventListener('scroll', updateActiveLink);
            window.addEventListener('load', updateActiveLink);
            

            if (!('scrollBehavior' in document.documentElement.style)) {
                const smoothScroll = function(target) {

                    const offset = -80; // Ajuste este 
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset + offset ;
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 800;
                    let start = null;
                    
                    window.requestAnimationFrame(function step(timestamp) {
                        if (!start) start = timestamp;
                        const progress = timestamp - start;
                        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                        if (progress < duration) window.requestAnimationFrame(step);
                    });
                };
                
                const easeInOutCubic = function(t, b, c, d) {
                    t /= d/2;
                    if (t < 1) return c/2*t*t*t + b;
                    t -= 2;
                    return c/2*(t*t*t + 2) + b;
                };
                
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function(e) {
                        e.preventDefault();
                        const target = document.querySelector(this.getAttribute('href'));
                        if (target) smoothScroll(target);
                    });
                });
            }
        });


document.addEventListener('mousedown', function(e) {

    if (!['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'].includes(e.target.tagName) && 
        !e.target.isContentEditable) {
        e.preventDefault();
        

        window.getSelection().removeAllRanges();
        

        if (document.activeElement) {
            document.activeElement.blur();
        }
    }
}, true); // Usando capture phase para pegar todos os eventos


document.querySelectorAll('.allow-text-selection').forEach(el => {
    el.style.userSelect = 'text';
    el.style.webkitUserSelect = 'text';
});

    

    document.getElementById('counter1').setAttribute('data-target', '1250');
    document.getElementById('counter2').setAttribute('data-target', '350');
    document.getElementById('counter3').setAttribute('data-target', '120');
    document.getElementById('counter4').setAttribute('data-target', '45');
    

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const counterSection = document.querySelector('.bg-[#2E7D32]');
    observer.observe(counterSection);
    

    const mapPoints = document.querySelectorAll('.map-point');
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    mapPoints.forEach(point => {
        point.addEventListener('click', function() {
            const area = this.getAttribute('data-area');
            

            testimonials.forEach(testimonial => {
                testimonial.style.display = 'none';
            });
            

            document.getElementById(`testimonial-${area}`).style.display = 'block';
            

            document.getElementById('testimonial-container').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                

                mobileMenu.classList.remove('block');
                mobileMenu.classList.add('hidden');
            });
        });


        function animateCounter(id, target, duration = 2000) {
            const element = document.getElementById(id);
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                element.textContent = Math.floor(current).toLocaleString();
            }, 16);
        }


        document.getElementById('petition-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado por assinar nossa petição! Sua voz é importante para nós.');
            this.reset();
        });

        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.');
            this.reset();
        });

    

    const petitionForm = document.getElementById('petition-form');
    const contactForm = document.getElementById('contact-form');
    
    if (petitionForm) {
        petitionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado por assinar nossa petição! Sua voz é importante para nós.');
            this.reset();
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }
});