const navBtn = document.querySelector('.header__nav-btn');
const navIcon = document.querySelector('.nav-icon');
const topInner = document.querySelector('.header__top-inner');
const headerMenu = document.querySelector('.header-menu');
const basket = document.querySelector('.menu-link__basket');



navBtn.addEventListener('click', ()=>{
    navIcon.classList.toggle('nav-icon--active');
    // topInner.classList.toggle('header__top-inner--mobile');
    headerMenu.classList.toggle('header-menu__active');
    basket.classList.toggle('menu-link__basket--none');
});
