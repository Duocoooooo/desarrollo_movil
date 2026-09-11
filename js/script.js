document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe sin validar

    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let isValid = true;

    const nombre = document.getElementById('nombre').value.trim();
    if (nombre === "") {
        document.getElementById('error-nombre').textContent = "El nombre es obligatorio.";
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById('error-email').textContent = "El correo es obligatorio.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('error-email').textContent = "Ingrese un correo electrónico válido.";
        isValid = false;
    }

    const producto = document.getElementById('producto').value;
    if (producto === "") {
        document.getElementById('error-producto').textContent = "Por favor, seleccione un producto.";
        isValid = false;
    }

    const mensaje = document.getElementById('mensaje').value.trim();
    if (mensaje.length < 10) {
        document.getElementById('error-mensaje').textContent = "El mensaje debe tener al menos 10 caracteres.";
        isValid = false;
    }

    if (isValid) {
        alert("¡Formulario enviado con éxito! Nos contactaremos pronto.");
        this.reset();
    }
});