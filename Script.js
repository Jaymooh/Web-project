// toggle

const hamburger = document.querySelector('.hamburger');
const navlink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
    navlink.classList.toggle('hide');
});

