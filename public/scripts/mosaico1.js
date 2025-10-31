const desktopCards = document.querySelectorAll('.mosaico-card'); 

desktopCards.forEach(card => {
  card.addEventListener('click', () => {
    // Cerrar todas las demás cards
    desktopCards.forEach(c => {
      if (c !== card) {
        c.classList.remove('open');
      }
    });

    // Alternar la card clickeada
    card.classList.toggle('open');
  });
});
