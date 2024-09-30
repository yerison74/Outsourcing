document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí típicamente enviarías los datos del formulario a un servidor
    console.log('Formulario enviado');
    // Restablecer los campos del formulario
    this.reset();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
});
