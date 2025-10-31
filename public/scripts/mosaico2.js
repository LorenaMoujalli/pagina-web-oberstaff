const variedadCards = document.querySelectorAll('.variedad-card');

variedadCards.forEach(card => {
  card.addEventListener('click', () => {
    // Cerrar las demás
    variedadCards.forEach(c => {
      if (c !== card) c.classList.remove('open');
    });

    // Alternar solo la clickeada
    card.classList.toggle('open');
  });
});
