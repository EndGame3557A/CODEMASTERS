const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
})
btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
})


function loguear(){
    let user=document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    
        if(user=="juan" && pass=="1234")
        {
            location.href="normal.html";
        }

        else if(user=="admin" && pass=="272007")
        {
            window.location="admin.html";
        }

        else
        {
            alert("Datos Incorrectos");
            window.location.href="login.html";
        }


    // document.getElementById('form-register').addEventListener('submit', function (e) {
    //     e.preventDefault();
    //     const nombreUsuario = document.getElementById('nombre-usuario').value;
    //     const contrasena = document.getElementById('contrasena').value;
    //     // Validar y procesar el registro (por ejemplo, guardar en una base de datos)
    //     // Redirigir a la página de inicio de sesión
    //     window.location.href = 'inicio-sesion.html';
    // });
    
    // document.getElementById('form').addEventListener('submit', function (e) {
    //     e.preventDefault();
    //     const nombreUsuarioLogin = document.getElementById('nombre-usuario-login').value;
    //     const contrasenaLogin = document.getElementById('contrasena-login').value;
    //     // Validar y procesar el inicio de sesión (por ejemplo, verificar credenciales)
    //     // Redirigir a la página principal si las credenciales son correctas
    //     // O mostrar un mensaje de error si no lo son
    // });
}
