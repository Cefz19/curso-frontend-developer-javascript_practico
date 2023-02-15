const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.navbar-email');
const dmobie = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}