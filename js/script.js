import {cargarProductos, renderizarProductos} from './productos';

/* INICIO DECLARACION DE VARIABLES */
let inventarioProductos = [];

/* FIN DECLARACION DE VARIABLES */

document.getElementById('btn-CargarProducto').addEventListener('click', () => {
    btnAgregarProducto(
        document.getElementById('nombre-producto').value,
        document.getElementById('id-producto').value,
        document.getElementById('stock-producto').value,
        document.getElementById('precio-producto').value
    );
});

window.addEventListener('load', () => {
    const storedInventory = localStorage.getItem('inventory');
    if (storedInventory) {
        inventarioProductos = JSON.parse(storedInventory);
        renderizarProductos();
    }
});

function btnAgregarProducto(nombreParam, idParam, stockParam, precioParam) {
    if (nombreParam && idParam) {
        const producto = {
            nombre: nombreParam,
            id: idParam,
            stock: stockParam,
            precio: precioParam
        };
        inventarioProductos.push(producto);
        guardarInventario();
        renderizarProductos();
        mostrarMensaje('Se agregó correctamente a la tienda el producto');
    } else {
        mostrarMensaje('Por favor, complete todos los campos.');
    }
}



function guardarInventario() {
    localStorage.setItem('inventory', JSON.stringify(inventarioProductos));
}

function mostrarMensaje(mensaje) {
    Swal.fire({
        title: 'Mensaje',
        text: mensaje,
        icon: 'info',
        confirmButtonText: 'Aceptar'
    });
}

/** INICIO DE SESION */
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
})

function desbloquearBotones() {
    document.getElementById("btn-CargarProducto").disabled = false;
    document.getElementById("btn-AgregarProducto").disabled = false;
    document.getElementById("btn-CrearPedido").disabled = false;
    document.getElementById("btn-GenerarReporte").disabled = false;
}

