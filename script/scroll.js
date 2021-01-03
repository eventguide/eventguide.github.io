window.addEventListener('load', () => {

    const nav = document.querySelector('nav');
    const homeNav = document.getElementById('homeNav');
    const aboutNav = document.getElementById('aboutNav');
    const blogNav = document.getElementById('blogNav');
    const contactNav = document.getElementById('contactNav');

    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const blogSection = document.getElementById('blog');
    const contactSection = document.getElementById('contact');

    homeNav.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });


    aboutNav.addEventListener('click', () => {
        if(window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight + 1,
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

    blogNav.addEventListener('click', () => {
        if (window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
        }
    })

    contactNav.addEventListener('click', () => {
        if (window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + blogSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + blogSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
        } 
    })

})