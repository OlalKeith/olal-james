/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.querySelector('.header');
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== TYPING ANIMATION ===============*/
document.addEventListener('DOMContentLoaded', function () {
    const typingElement = document.querySelector('.hero__typing');
    const words = ["exceptional digital experiences", "performant web applications", "beautiful user interfaces"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = '';
    let isDeleting = false;

    function type() {
        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        currentWord = words[wordIndex];

        if (isDeleting) {
            letterIndex--;
        } else {
            letterIndex++;
        }

        typingElement.textContent = currentWord.substring(0, letterIndex);

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && letterIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animation');
        }
    });
});

const hiddenElements = document.querySelectorAll('.section__title, .about__bio, .tech-stack, .project__card, .contact__text, .contact__socials');
hiddenElements.forEach((el) => observer.observe(el)); 