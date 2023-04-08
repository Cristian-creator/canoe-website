// -----------    Hamburger Menu    -----------------
const btn = document.getElementById('menu-btn');
const hamburgerLines = document.querySelectorAll('.hamburger > div');
const mobileMenu = document.getElementById('mobile-menu');
const nextSection = document.getElementById('next-section');

let buttonClicks = 0;

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    document.body.classList.toggle('stop-scrolling');
    
    buttonClicks++;
    
    if(buttonClicks % 2 === 0) {
        mobileMenu.style.display = 'none';
        for(let i=0; i < hamburgerLines.length; i++) {
            hamburgerLines[i].style.background = 'white';
        } 
    } else {
        mobileMenu.style.display = 'flex';
        for(let i=0; i < hamburgerLines.length; i++) {
            hamburgerLines[i].style.background = 'black';
        } 
    }
}
        
// -----------    Scroll down button    -----------------
const scrollSpan = document.querySelector('.next-section-scroll');

scrollSpan.addEventListener('click', () => {
    nextSection.scrollIntoView({ behavior: 'smooth' });
});

// -----------    Video Modal    -----------------
// const modal = document.getElementById('videoModal');
// const modalBtn = document.getElementById('modalBtn'); 
// const closeBtn = document.getElementsByClassName('closeBtn')[0];

// modalBtn.addEventListener('click', openModal);

// closeBtn.addEventListener('click', closeModal);

// window.addEventListener('click', closeModal);

// function openModal() {
//     modal.style.display = 'block';
//     document.body.classList.add('stop-scrolling');
// }
 
// function closeModal(e) {
//     if(e.target === modal || e.target === closeBtn) {
//         modal.style.display = 'none';
//         document.body.classList.remove('stop-scrolling');
//     }
// }

//-----------    Scroll Page    -----------------

document.addEventListener('scroll', scrollPage);

function scrollPage() {
    const scrollPos = window.scrollY;

    if(scrollPos > 159) {
        nextSection.style.opacity = '1';
        nextSection.style.transform = 'translateY(0px)';
    }

    // console.log(scrollPos);
}


// -----------    Carousel-slider   -----------------
const owlCarousel = document.querySelector('.owl-carousel');

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        center: true,
        margin: 12,
        responsive: {
            575: {
                margin: 10
            }
        }
    });
});