window.addEventListener('load', () => {
    // responible navbar
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    const navSlide = () => {        
        burger.addEventListener('click', () => {
            navbarToggle();
        })
    }

    navSlide();

    function navbarToggle() {
        navbar.classList.toggle('nav-active');
    
        navLinks.forEach((link, index)=> {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`;
            }
        })
        burger.classList.toggle('toggle');
    }


    // slider
    const nav = document.querySelector('nav');
    const homeNav = document.getElementById('homeNav');
    const aboutNav = document.getElementById('aboutNav');
    const goToAbout = document.getElementById('goToAbout');
    const goToHome = document.getElementById('goToHome');
    const blogNav = document.getElementById('blogNav');
    const contactNav = document.getElementById('contactNav');

    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const logoParallaxSection = document.getElementById('logoParallax');
    const blogSection = document.getElementById('blog');
    const contactSection = document.getElementById('contact');

    homeNav.addEventListener('click', () => {
        if(document.body.offsetWidth <= "768") {
            navbarToggle();
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
    
    blogNav.addEventListener('click', () => {
        if(document.body.offsetWidth <= "768") {
            navbarToggle();
        }
        if (window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight+ 1,
                left: 0,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: homeSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
        }
    })


    aboutNav.addEventListener('click', () => {
        if(document.body.offsetWidth <= "768") {
            navbarToggle();
        }
        if(window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight + blogSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: homeSection.clientHeight + blogSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
        }  
    })

    goToAbout.addEventListener('click', () => {
        if(window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight + blogSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: homeSection.clientHeight + blogSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
        }  
    })

    goToHome.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })

    contactNav.addEventListener('click', () => {
        if(document.body.offsetWidth <= "768") {
            navbarToggle();
        }
        if (window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight + blogSection.clientHeight + aboutSection.clientHeight + logoParallaxSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: homeSection.clientHeight + blogSection.clientHeight + aboutSection.clientHeight + logoParallaxSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
        } 
    })

})