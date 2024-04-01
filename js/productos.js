[
    {
        "id": 1,
        "nombre": 'cuchara albañileria',
        "precio": 17570
    },
    {
        "id": 1,
        "nombre": 'cuchara albañileria',
        "precio": 17570
    },
    {
        "id": 1,
        "nombre": 'cuchara albañileria',
        "precio": 17570
    },
]

/** función para cargar productos desde el almacenamiento local */
function cargarProductos() {
    return new Promise((resolve, reject) => {
        const productos = localStorage.getItem("productos");
        if (productos) {
            resolve(JSON.parse(productos));
        } else {
            reject("No hay productos almacenados");
        }
    });
}

/** prueba inicio de sesion*/
/* iniciarSesion(usuario, contrasena)
    .then((mensaje) => {
        console.log(mensaje);
        return cargarProductos();
    })
    .then((productos) => {
        console.log("Productos cargados:", productos);
        // Otros pasos, como mostrar los productos en la página
    })
    .catch((error) => {
        console.error("Error:", error);
    }); */



// Event listener para cargar productos predefinidos al cargar la página
window.addEventListener('load', () => {
    // Verifica si ya hay productos en el almacenamiento local
    const productosGuardados = localStorage.getItem('productos');
    if (productosGuardados) {
        // Si hay productos guardados, los cargamos en el array productos
        productos = JSON.parse(productosGuardados);
    } else {
        // Si no hay productos guardados, agregamos algunos productos predefinidos
        productos = [
            { nombre: 'Martillo', id: '001', stock: 10, precio: 15 },
            { nombre: 'Destornillador', id: '002', stock: 20, precio: 10 },
            { nombre: 'Sierra', id: '003', stock: 5, precio: 30 }
        ];
        // Guardamos los productos predefinidos en el almacenamiento local
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    // Renderizamos la lista de productos en la página
    renderizarProductos(productos);
});


/** ******************** ALMACENAR PRODUCTOS *************************************/
// Array para almacenar los productos
let productos = [];

// Event listener para cargar productos predefinidos al cargar la página
window.addEventListener('load', () => {
    // Verifica si ya hay productos en el almacenamiento local
    const productosGuardados = localStorage.getItem('productos');
    if (productosGuardados) {
        // Si hay productos guardados, los cargamos en el array productos
        productos = JSON.parse(productosGuardados);
    } else {
        // Si no hay productos guardados, agregamos algunos productos predefinidos
        productos = [
            { nombre: 'Martillo', id: '001', stock: 10, precio: 15 },
            { nombre: 'Destornillador', id: '002', stock: 20, precio: 10 },
            { nombre: 'Sierra', id: '003', stock: 5, precio: 30 }
        ];
        // Guardamos los productos predefinidos en el almacenamiento local
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    // Renderizamos la lista de productos en la página
    renderizarProductos(productos);
});

// Función para renderizar la lista de productos en la página
function renderizarProductos(productos) {
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = '';

    productos.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - Stock: ${producto.stock} - Precio: ${producto.precio}`;
        listaProductos.appendChild(li);
    });
}