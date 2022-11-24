// initialize wow JS

new WOW().init();

// initialize swipers
var aboutswiper = new swiper( ".aboutswiper", {
    slidesPerview: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is =>599px
        599: {
            slidesPerview: 2,
            spaceBetweenSlides: 50,
        },
    }
} );

var planeswier = new swiper( ".planeswiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextel: ".swiper-button-next",
        prevel: ".swiper-button-prev",
    },
} );

// get the element 
const menu = document.querySelector( ".menu" );
const menubtn = document.querySelector( ".menu-btn" );

// toggle the navbar menu on click open/close 
menubtn.addEventListener( "click", () => {
    menu.classList.toggle( 'nav-toggle' );
} );

// get the current year and add it into html

document.querySelector( ".year" ).innerHTML = new Date().getFullYear();
