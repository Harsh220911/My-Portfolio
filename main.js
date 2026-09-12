/*============================== toggle icon navbar ========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };
}

/*============================== scroll section active link ========================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });

    /*============================== sticky navbar ========================*/
    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }
};

/*============================== Scroll reveal ========================*/
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .skills-column, .achievement-box, .project-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}

/*============================== typed text ========================*/
if (document.querySelector('.multiple-text') && typeof Typed !== 'undefined') {
    const typed = new Typed('.multiple-text', {
        strings: ['Graphic Designer', 'Full Stack Developer', 'UI/UX Specialist', 'CSE-AIML Student'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1200,
        loop: true,
    });
}

/*============================== work filtering ========================*/
const filterBtns = document.querySelectorAll('.filter-btn');
const projectBoxes = document.querySelectorAll('.project-box');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectBoxes.forEach(box => {
            if (filterValue === 'all' || box.getAttribute('data-category') === filterValue) {
                box.style.display = 'flex';
            } else {
                box.style.display = 'none';
            }
        });
    });
});
