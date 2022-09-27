const btnSwitch = document.querySelector('#active');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('.dark');
    btnSwitch.classList.toogle('.active');
});