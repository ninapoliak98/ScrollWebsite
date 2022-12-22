
const menuToggle = document.querySelector("#mobile"); 
const menuLinks = document.querySelector(".navbar__menu"); 
const navLogo = document.querySelector("#navbar__logo")

//Display mobile menu
const mobileMenu = () => {
  menuToggle.classList.toggle("is-active"); 
  menuLinks.classList.toggle("active"); 
}
menuToggle.addEventListener('click', mobileMenu); 

//highlight menu - shows active menu when scrolling

const highlightMenu = () => {
  const currElem = document.querySelector(".highlight"); 
  const home = document.querySelector("#home-page"); 
  const about = document.querySelector("#about-page"); 
  const services = document.querySelector("#services-page"); 
  //position of scroll
  let scrollPos = window.scrollY;

  //adds the highlight class to my current menu item

  //we only want the highlight to work on desktop
  if (window.innerWidth > 960 && scrollPos < 600) {
    home.classList.add('highlight');
    about.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    about.classList.add('highlight');
    home.classList.remove('highlight');
    services.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    services.classList.add('highlight');
    about.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
}
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);