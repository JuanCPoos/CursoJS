//import {cargarProductos, renderizarProductos} from './productos';

// inicioSesion.js

document.getElementById('btn-InicioSesion').addEventListener('click', () => {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    let usuarioValido = false;

    if (usuario === 'admin' && contrasena === '123') {
        inicioCorrecto();
        usuarioValido = true;
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('contraseña', contrasena);

        /** toast incio correcto */
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Inicio de correcto de sesión"
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "mmm...",
            text: "Usuario o contraseña inválidas"
        });
    }
});

function inicioCorrecto() {
    desbloquearBotones();
}
/** desbloqueo de botones al iniciar correctamente */
/* function desbloquearBotones() {
    document.getElementById("btn-CargarProducto").disabled = false;
    document.getElementById("btn-AgregarProducto").disabled = false;
    document.getElementById("btn-CrearPedido").disabled = false;
    document.getElementById("btn-GenerarReporte").disabled = false;
} */
