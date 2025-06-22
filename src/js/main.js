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

document.addEventListener('DOMContentLoaded', () => {

  // --- Helper Function ---
  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

  // --- Modals ---
  const rootEl = document.documentElement;
  const allModals = getAll('.modal');
  const modalButtons = getAll('.modal-trigger');
  const modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

  if (modalButtons.length > 0) {
    modalButtons.forEach(el => {
      el.addEventListener('click', () => {
        const targetId = el.dataset.target;
        if (targetId) {
          const target = document.getElementById(targetId);
          if (target) {
            rootEl.classList.add('is-clipped');
            target.classList.add('is-active');
          }
        }
      });
    });
  }

  if (modalCloses.length > 0) {
    modalCloses.forEach(el => {
      el.addEventListener('click', () => {
        closeModals();
      });
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === "Escape") {
      closeModals();
    }
  });

  function closeModals() {
    rootEl.classList.remove('is-clipped');
    allModals.forEach(el => {
      el.classList.remove('is-active');
    });
  }

  // --- Carousels ---
  const carousels = getAll('.carousel');
  if (typeof Flickity !== 'undefined') {
    carousels.forEach(carousel => {
      new Flickity(carousel, {
        imagesLoaded: true,
        percentPosition: false,
        wrapAround: true,
        pageDots: false,
      });
    });
  }

  // --- Show More/Less Projects ---
  const showMoreBtn = document.getElementById('show-more-btn');
  if (showMoreBtn) {
    const hiddenProjects = getAll('.project-card.is-hidden');

    showMoreBtn.addEventListener('click', () => {
      hiddenProjects.forEach(project => {
        project.classList.toggle('is-hidden');
      });

      if (showMoreBtn.textContent.trim() === 'Show More') {
        showMoreBtn.textContent = 'Show Less';
      } else {
        showMoreBtn.textContent = 'Show More';
      }
    });
  }

}); 