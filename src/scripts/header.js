export function initHeader() {
  (function() {
    // --- MODALES ---
    const openMenuBtn = document.getElementById("openMenuBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");
    const menuModal = document.getElementById("menuModal");
    const backdropMenu = document.getElementById("modalBackdropMenu");

    const openContactBtn = document.getElementById("openContactBtn");
    const closeContactBtn = document.getElementById("closeContactBtn");
    const contactModal = document.getElementById("contactModal");
    const backdropContact = document.getElementById("modalBackdropContact");

    if (openMenuBtn && closeMenuBtn && menuModal && backdropMenu &&
        openContactBtn && closeContactBtn && contactModal && backdropContact) {

      function openModal(modal) {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
      }

      function closeModal(modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "";
      }

      // Eventos menú
      openMenuBtn.addEventListener("click", () => openModal(menuModal));
      closeMenuBtn.addEventListener("click", () => closeModal(menuModal));
      backdropMenu.addEventListener("click", () => closeModal(menuModal));

      // Eventos contacto
      openContactBtn.addEventListener("click", () => openModal(contactModal));
      closeContactBtn.addEventListener("click", () => closeModal(contactModal));
      backdropContact.addEventListener("click", () => closeModal(contactModal));

      // Cerrar con Escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeModal(menuModal);
          closeModal(contactModal);
        }
      });

      // Cerrar el menú al hacer clic en un link
      const menuLinks = document.querySelectorAll(".modal-links a");
      menuLinks.forEach(link => {
        link.addEventListener("click", () => closeModal(menuModal));
      });
    }

    // --- WEBHOOK FORMULARIO MODAL ---
    const WEBHOOK_URL = 'https://n8n.obertrack.com/webhook-test/contacto';
    const formModal = document.getElementById('webhookFormModal');
    const statusModal = document.getElementById('statusModal');
    const statusModalText = document.getElementById('statusModalText');

    if (formModal && statusModal && statusModalText) {
      formModal.addEventListener('submit', async function (event) {
        event.preventDefault();

        statusModalText.textContent = 'Enviando...';
        statusModal.classList.add('show');
        document.body.style.overflow = 'hidden';

        const telefonoCompleto = formModal.codigoPais.value + formModal.telefono.value;

        const data = {
          nombres: formModal.nombre.value,
          apellidos: '', // no lo pide el modal
          email: formModal.email.value,
          telefono: telefonoCompleto,
          mensaje: formModal.mensaje.value
        };

        try {
          const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });

          if (response.ok) {
            statusModalText.textContent = 'Datos enviados exitosamente';
            formModal.reset();
          } else {
            statusModalText.textContent = 'Error al enviar los datos. Código ' + response.status;
          }
        } catch (error) {
          statusModalText.textContent = 'Error de red o en la URL del Webhook: ' + error.message;
          console.error('Error:', error);
        }
      });
    }

  })(); 
}
