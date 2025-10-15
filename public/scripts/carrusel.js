
  const cards = document.querySelectorAll(".carrusel-container .card");
  const btnPrev = document.querySelector(".arrow.left");
  const btnNext = document.querySelector(".arrow.right");

  var current = 0;

  function showCard(index) {
    cards.forEach(function (card, i) {
      var offset = (i - index + cards.length) % cards.length;

      // Reset estilos base
      card.style.transition = "all 0.6s ease";
      card.style.position = "absolute";
      card.style.left = "50%";
      card.style.top = "50%";
      card.style.transformOrigin = "center center";

      if (offset === 0) {
        // Card principal
        card.style.transform = "translate(-50%, -50%) scale(1)";
        card.style.opacity = "1";
        card.style.zIndex = 3;
      } else if (offset === 1 || offset === 2) {
        // Cards siguientes (a la derecha, inclinadas)
        card.style.transform =
          "translate(calc(-50% + " + offset * 35 + "px), -50%) rotate(" + offset * 4 + "deg) scale(0.95)";
        card.style.opacity = "0.8";
        card.style.zIndex = 2;
      } else if (offset === cards.length - 1 || offset === cards.length - 2) {
        // Cards anteriores (a la izquierda, inclinadas)
        card.style.transform =
          "translate(calc(-50% - " +
          (cards.length - offset) * 35 +
          "px), -50%) rotate(-" +
          (cards.length - offset) * 4 +
          "deg) scale(0.95)";
        card.style.opacity = "0.8";
        card.style.zIndex = 1;
      } else {
        // Cards que quedan más atrás (ocultas suavemente)
        card.style.transform = "translate(-50%, -50%) scale(0.8)";
        card.style.opacity = "0";
        card.style.zIndex = 0;
      }
    });
  }

  btnNext.addEventListener("click", function () {
    current = (current + 1) % cards.length;
    showCard(current);
  });

  btnPrev.addEventListener("click", function () {
    current = (current - 1 + cards.length) % cards.length;
    showCard(current);
  });

  // Inicializa el carrusel
  showCard(current);




