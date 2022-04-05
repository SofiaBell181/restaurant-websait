const menu = document.querySelectorAll('.menu');
const buttonListMobile = document.querySelector('.list_mobile');

buttonListMobile.addEventListener('click', showList)
function showList() {
    menu.forEach(item => {
        item.style.display = 'block';
    })
    buttonListMobile.style.display = 'none';
}


const button = document.querySelector('.reservedButton');
button.addEventListener('click', check)

function check(e) {
    e.preventDefault();
    const nameGuest = document.querySelector('#nameGuest').value;
    const surname = document.querySelector('#surname').value;
    const tel = document.querySelector('#tel').value;
    const date = document.querySelector('#date').value;
    const guest = document.querySelector('#guest').value;
    const containerResult = document.querySelector('#container-result');
    const btnAlert  = document.querySelector('#btnAlert');
    const parBooking  = document.querySelector('#par_booking');

    if (nameGuest === '' || surname === '' || tel === '' || date === '' || guest === '') {
        containerResult.style.display = 'block';
        btnAlert.addEventListener('click', () => {
            containerResult.style.display = 'none';
        })
    }

    else {
        parBooking.textContent = 'Ваша заявка успешно отправлена'
        btnAlert.textContent = 'Закрыть'
        containerResult.style.display = 'block';
        btnAlert.addEventListener('click', () => {
            containerResult.style.display = 'none';
            location.reload();
        })
    }
    
}

gsap.from('#navbar', {y:-30, duration:3.5, delay:.1});
gsap.from('h1', {y:-50, duration:1.5, delay:.5, opacity:0});
gsap.from('.picture', {duration: 5, delay:.7, opacity: 0, ease: "slow(0.5, 0.9, true)"});
gsap.to('.telephone', {duration:3, scale:1.5, ease: "slow"});
gsap.from('.container_forms', {duration:3.5, delay:.5, ease: "slow", opacity:0})
