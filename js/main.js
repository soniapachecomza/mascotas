const btnSwitch = document.querySelector('#active');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('.dark');
    btnSwitch.classList.toogle('.active');
});
//carrusel D:
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".sliderSection");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".sliderSection")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement(`beforeend`, sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
function Prev() {
    let sliderSection = document.querySelectorAll(".sliderSection");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnRight.addEventListener('click', function () {
    Next();
});
btnLeft.addEventListener('click', function () {
    Prev();
});