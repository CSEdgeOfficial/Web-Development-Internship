// header toggle

let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
    // body...
});

// typing effect 
let typed = new Typed('.auto-input', {
    strings: ['Web Developer!!'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 200,
    loop: true,
});
let typeds = new Typed('.auto-inputs', {
    strings: ['together!!'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 200,
    loop: true,
});
//active links 
//get all links
let navLinks = document.querySelectorAll('nav ul li a');
//get all sections
let sections = document.querySelectorAll('section');
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY + 20;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
    // body...
});