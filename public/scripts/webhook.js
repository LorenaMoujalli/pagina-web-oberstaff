const WEBHOOK_URL = 'https://n8n.obertrack.com/webhook-test/contacto'; 

  document.getElementById('webhookForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const form = event.target;
    const statusMessage = document.getElementById('status');
    statusMessage.textContent = 'Enviando...'; 

    // Combinar código de país + número
    const telefonoCompleto = form.codigoPais.value + form.telefono.value;

    const data = {
      nombres: form.nombre.value,
      apellidos: form.apellidos.value,
      email: form.email.value,
      telefono: telefonoCompleto,
      mensaje: form.mensaje.value,
      //codigoVerificacion: form.codigoVerificacion.value
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        statusMessage.textContent = 'Datos enviados exitosamente al Webhook';
        form.reset();
      } else {
        statusMessage.textContent = 'Error al enviar los datos. Código ' + response.status;
      }
    } catch (error) {
      statusMessage.textContent = 'Error de red o en la URL del Webhook: ' + error.message;
      console.error('Error:', error);
    }
  });