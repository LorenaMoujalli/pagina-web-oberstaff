var container = document.querySelector('.carrusel-container');
var cards = document.querySelectorAll('.card');
var leftArrow = document.querySelector('.arrow.left');
var rightArrow = document.querySelector('.arrow.right');
var activeIndex = 0;

function updateCarousel() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].className = 'card';
    if (i === activeIndex) cards[i].className += ' active';
  }

  // Centrar la card activa
  var wrapper = document.querySelector('.carrusel-wrapper');
  var wrapperWidth = wrapper.offsetWidth;
  var cardWidth = cards[activeIndex].offsetWidth;
  var offset = (wrapperWidth / 2) - (cardWidth / 2) - (cards[activeIndex].offsetLeft);
  container.style.transform = 'translateX(' + offset + 'px)';
}

leftArrow.onclick = function() {
  activeIndex--;
  if (activeIndex < 0) activeIndex = 0;
  updateCarousel();
};

rightArrow.onclick = function() {
  activeIndex++;
  if (activeIndex >= cards.length) activeIndex = cards.length - 1;
  updateCarousel();
};

updateCarousel();