var sliderImg = document.querySelectorAll('.slider-img');
var itemLinks = document.querySelectorAll('.menu-item-link');
var headerBackground = document.querySelector('.header__wrapper-bot')
var logoCafeColor = document.querySelector('.logo-cafe-color')
var logoWhite = document.querySelector('.logo-white')
logoCafeColor.style.display = 'none';

window.onscroll = function (e) {
    if (this.scrollY > 500) {
        headerBackground.style.backgroundColor = "white";
        logoWhite.style.display = 'none';
        logoCafeColor.style.display = 'block';

        for (let itemLink of itemLinks) {
            itemLink.style.color = 'black';
        }
    } else {
        headerBackground.style.backgroundColor = "transparent";
        logoCafeColor.style.display = 'none';
        logoWhite.style.display = 'block';
        for (let itemLink of itemLinks) {
            itemLink.style.color = 'white';
        }
    }
}


