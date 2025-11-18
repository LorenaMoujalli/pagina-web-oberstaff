export function initContacto() {
  (function() {
    const WEBHOOK_URL = 'https://n8n.obertrack.com/webhook-test/contacto';   

    const form = document.getElementById('webhookForm');
    const statusModal = document.getElementById('statusModal');
    const statusModalText = document.getElementById('statusModalText');
    const closeStatusModal = document.getElementById('closeStatusModal');

    if (!form || !statusModal || !statusModalText || !closeStatusModal) return;

    form.addEventListener('submit', async function(event) {
      event.preventDefault();

      statusModalText.textContent = 'Enviando...';
      statusModal.classList.add('show');
      document.body.style.overflow = 'hidden';

      const telefonoCompleto = form.codigoPais.value + form.telefono.value;

      const data = {
        nombres: form.nombre.value,
        apellidos: form.apellidos.value,
        email: form.email.value,
        telefono: telefonoCompleto,
        mensaje: form.mensaje.value
      };

      try {
        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          statusModalText.textContent = 'Datos enviados exitosamente';
          form.reset();
        } else {
          statusModalText.textContent = 'Error al enviar los datos. Código ' + response.status;
        }
      } catch (error) {
        statusModalText.textContent = 'Error de red o en la URL del Webhook: ' + error.message;
        console.error('Error:', error);
      }
    });

    // Cerrar modal
    closeStatusModal.addEventListener('click', () => {
      statusModal.classList.remove('show');
      document.body.style.overflow = '';
    });

    // Cerrar al hacer clic fuera del contenido
    statusModal.addEventListener('click', (e) => {
      if (e.target === statusModal) {
        statusModal.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  })();
}
