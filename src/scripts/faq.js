
export function initPreguntasFrecuentes() {
  (function () {
    // CACHES y comprobaciones
    const modal = document.getElementById('faq-modal');
    const modalContent = document.querySelector('.faq-modal-content');
    const modalText = document.getElementById('faq-modal-text');
    const closeBtn = document.querySelector('.close-modal');
    const faqButtons = document.querySelectorAll('.faq-item');

    if (!modal || !modalContent || !modalText || !closeBtn) {
      console.error('FAQ modal: falta algún elemento requerido (faq-modal, faq-modal-content, faq-modal-text o close-modal).');
      return;
    }

   faqButtons.forEach(item => {
  item.addEventListener('click', (e) => {
    const answerDiv = item.querySelector('.faq-answer'); 
        if (!answerDiv) {
          console.warn('FAQ: no se encontró .faq-answer junto al botón', btn);
          return;
        }
        const answer = answerDiv.getAttribute('data-answer') || answerDiv.textContent || 'No hay respuesta.';
        modalText.textContent = answer;

        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');

        setTimeout(() => { closeBtn.focus(); }, 250);
      });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (ev) => {
      if (ev.target === modal) closeModal();
    });

    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    });

    function closeModal() {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      setTimeout(() => { modalText.textContent = ''; }, 400);
    }

    const debugCheck = () => {
      console.log('DEBUG FAQ:', {
        modalExists: !!modal,
        modalHasShow: modal.classList.contains('show'),
        computedTransform: window.getComputedStyle(modalContent).transform
      });
    };

    document.addEventListener('click', () => { });
  })();
}
