/* INICIO DECLARACION DE VARIABLES */
let inventarioProductos = [];

/* FIN DECLARACION DE VARIABLES */

document.getElementById('btn-agregarProducto').addEventListener('click', () => {
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

function renderizarProductos() {
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = '';
    inventarioProductos.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaProductos.appendChild(li);
    });
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
