const menu = document.querySelectorAll('.menu');
const buttonListMobile = document.querySelector('.list_mobile');

buttonListMobile.addEventListener('click', showList)
function showList() {
    menu.forEach(item => {
        item.style.display = 'block';
    })
    buttonListMobile.style.display = 'none';
}

gsap.from('#navbar', {y:-30, duration:3.5, delay:.1});

function title() {
    if (window.innerWidth >= 1370) {
        gsap.from(".georgian", {x:800, y:-200, duration: .8, ease:"power1.out", delay:.1});
    }

    else 
    gsap.from(".georgian", {y:-500, duration: .8, ease:"power1.out", delay:.1});
}

title()

const images = ['1.png', '2.png', '3.png', '4.png','5.png', '6.png', '7.png', '8.png','9.png', '10.png','11.png', '12.png'];
const next = document.querySelector('#next');
const back = document.querySelector('#back');
let i = 0;

next.addEventListener('click', () => {
    i++;
    if (i > images.length - 1) 
    i = 0;
    document.querySelector('#pictures').src = images[i];
})

back.addEventListener('click', () => {
    i--;
    if (i < 0) 
    i = images.length - 1;
    document.querySelector('#pictures').src = images[i]
})

const photo = ['13.png', '14.png', '15.png'];
const nextTwo = document.querySelector('#nextTwo');
const backTwo = document.querySelector('#backTwo');

nextTwo.addEventListener('click', () => {
    i++;
    if (i > photo.length - 1) 
    i = 0;
    document.querySelector('#drink_pictures').src = photo[i];
})

backTwo.addEventListener('click', () => {
    i--;
    if (i < 0) 
    i = photo.length - 1;
    document.querySelector('#drink_pictures').src = photo[i]
})

