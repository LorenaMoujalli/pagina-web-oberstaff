const WEBHOOK_URL = 'https://n8n.obertrack.com/webhook-test/contacto';   

// Seleccionar también el formulario del modal
const formModal = document.getElementById('webhookFormModal');

// Si existe el formulario del modal, le aplicamos el mismo comportamiento
if (formModal) {
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
