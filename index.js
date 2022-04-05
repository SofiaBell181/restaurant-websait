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
    if (window.innerWidth >= 1070) {
        gsap.from(".georgian", {x:1500, duration: .8, ease:"power1.out", delay:.1});
        gsap.from(".georgianTwo", {x:1500, duration: .8, ease:"power1.out", delay:.5});
        gsap.from(".georgianThree", {x:1500, duration: .8, ease:"power1.out", delay:.9});
    }

    else 
    gsap.from(".georgian", {y:-500, duration: .8, ease:"power1.out", delay:.1});
    gsap.from(".georgianTwo", {y:-500, duration: .8, ease:"power1.out", delay:.5});
    gsap.from(".georgianThree", {y:-500, duration: .8, ease:"power1.out", delay:.9});
}

title();

gsap.from(".prg", {x: 100, opacity:0, duration:1, ease:"power1.out", delay:1.5})

function resevation() {
    if (window.innerWidth >= 1370) {
        gsap.registerPlugin(ScrollTrigger);
            gsap.to('.reservationButton', {
                scrollTrigger: {
                    trigger:'.reservationButton', 
                    toggleActions: 'restart none none none',
                    start: '10px 90%',
                    end: 'bottom 100px', 
                    scrub:2,
                    pin:true
                },

                x:500,
                duration:3,
                ease:'none'
            })
        }
    }

    resevation()


let colors = ['#3c342f', '#e0e0e0', '#3c342f'];
gsap.registerPlugin(ScrollTrigger);
gsap.to('#contact_inner', {
    scrollTrigger: {
        trigger:'#contact_inner',
        toggleActions: 'restart none resume none', 
},

duration:4, 
backgroundColor: function(i){
    return colors[i%3]}
})
