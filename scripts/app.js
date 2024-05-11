const navBtn = document.getElementsByClassName('nav__btn')[0]
const navMenu = document.getElementsByClassName('nav-menu')[0]
let btnOpen = false

navBtn.addEventListener('click', function(){
    if(btnOpen){
        navBtn.classList.remove('nav__btn--open');
        navMenu.classList.remove('nav-menu--open');
        btnOpen = false;
    }
    else{
        navBtn.classList.add('nav__btn--open')
        navMenu.classList.add('nav-menu--open')
        btnOpen = true;
    }
})
