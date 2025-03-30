document.getElementById('registro-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombreUsuario = document.getElementById('nombre-usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    // Validar y procesar el registro (por ejemplo, guardar en una base de datos)
    // Redirigir a la página de inicio de sesión
    window.location.href = 'inicio-sesion.html';
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombreUsuarioLogin = document.getElementById('nombre-usuario-login').value;
    const contrasenaLogin = document.getElementById('contrasena-login').value;
    // Validar y procesar el inicio de sesión (por ejemplo, verificar credenciales)
    // Redirigir a la página principal si las credenciales son correctas
    // O mostrar un mensaje de error si no lo son
});
