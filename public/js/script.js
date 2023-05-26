document.addEventListener('DOMContentLoaded', () => {
    const htmlDocument = document.querySelector('html');
    console.log(htmlDocument);
    const btnDarkDesk = document.getElementById('btnDarkDesk');
    const btnDarkMob = document.getElementById('btnDarkMob');

    btnDarkDesk.addEventListener('click', () => htmlDocument.classList.toggle('dark'));

    btnDarkMob.addEventListener('click', () => htmlDocument.classList.toggle('dark'));
});