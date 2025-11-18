export function initBeneficios() {
  (function() {
    var container = document.querySelector('.carrusel-container');
    var cards = document.querySelectorAll('.card');
    var leftArrow = document.querySelector('.arrow.left');
    var rightArrow = document.querySelector('.arrow.right');
    var dot = document.querySelector('.indicator-dot');
    var activeIndex = 0;

    if (!container || cards.length === 0 || !leftArrow || !rightArrow || !dot) return;

    function updateCarousel() {
      var i;
      for (i = 0; i < cards.length; i++) {
        cards[i].className = 'card';
      }

      var prevIndex = (activeIndex - 1 + cards.length) % cards.length;
      var nextIndex = (activeIndex + 1) % cards.length;

      cards[activeIndex].classList.add('active');
      cards[prevIndex].classList.add('prev');
      cards[nextIndex].classList.add('next');

      var wrapper = document.querySelector('.carrusel-wrapper');
      var wrapperWidth = wrapper.offsetWidth;
      var cardWidth = cards[activeIndex].offsetWidth;
      var offset = (wrapperWidth / 2) - (cardWidth / 2) - (cards[activeIndex].offsetLeft);
      container.style.transform = 'translateX(' + offset + 'px)';

      // mover el punto indicador
      var progress = activeIndex / (cards.length - 1);
      var barWidth = document.querySelector('.indicator-bar').offsetWidth;
      var dotLeft = progress * (barWidth - 12);
      dot.style.left = dotLeft + 'px';
    }

    leftArrow.onclick = function() {
      activeIndex--;
      if (activeIndex < 0) activeIndex = cards.length - 1;
      updateCarousel();
    };

    rightArrow.onclick = function() {
      activeIndex++;
      if (activeIndex >= cards.length) activeIndex = 0;
      updateCarousel();
    };

    window.onresize = updateCarousel;
    updateCarousel();
  })();
}
