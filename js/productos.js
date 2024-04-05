/* Array almacena productos */
const productos = [];
/* Definir una clase Producto para representar cada producto */
class Producto {
    constructor(nombre, precio, stock, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.image = imagen;
    }
}

/* Obtener referencia al formulario de agregar producto */
const formAgregarProducto = document.getElementById('formAgregarProducto');

// Obtener referencia al contenedor de lista de productos
const listaProductos = document.getElementById('listaProductos');

/**productos que se cargan con la página */
const productosPredefinidos = [
    new Producto('Cuchara Albañileria N° 6', 15000, 12, 'assets\img\cuchara albanileria N6.jpg'),
    new Producto('Cuchara albañileria N° 8', 16250, 12, 'assets\img\cuchara albanileria N8.jpg'),
    new Producto('Cuchara Albañileria N° 6', 15000, 12, 'assets\img\cuchara albanileria N6.jpg'),
    new Producto('Cuchara albañileria N° 8', 16250, 12, 'assets\img\cuchara albanileria N8.jpg'),
    new Producto('Cuchara Albañileria N° 6', 15000, 12, 'assets\img\cuchara albanileria N6.jpg'),
    new Producto('Cuchara albañileria N° 8', 16250, 12, 'assets\img\cuchara albanileria N8.jpg')
]
/**cargar productos predefinidos con un recorrido forEarch agregandolos al array Productos */
function agregarProductosPredefinidos(){
    productosPredefinidos.forEach(producto => {
        productos.push(producto)
    });
}

agregarProductosPredefinidos();


// Función para agregar un nuevo producto
function agregarProducto(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const stock = parseInt(document.getElementById('stock').value);

    // Crear un nuevo objeto Producto
    const nuevoProducto = new Producto(nombre, precio, stock);

    // Agregar el nuevo producto al array de productos
    productos.push(nuevoProducto);

    // Limpiar el formulario
    formAgregarProducto.reset();

    // Actualizar la lista de productos en la página
    renderizarProductos();
}

// Función para renderizar la lista de productos en la página
function renderizarProductos() {
    // Limpiar el contenido anterior de la lista de productos
    listaProductos.innerHTML = '';

    // Recorrer el array de productos y agregar cada uno a la lista
    productos.forEach(producto => {
        const productoElemento = document.createElement('div');
        productoElemento.classList.add('producto');
        productoElemento.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <p>Stock: ${producto.stock}</p>
        `;
        listaProductos.appendChild(productoElemento);
    });
}

// Agregar un evento de escucha para el formulario de agregar producto
formAgregarProducto.addEventListener('submit', agregarProducto);

// Llamar a la función renderizarProductos inicialmente para mostrar cualquier producto existente
renderizarProductos();


//export { productos }



/* ********* ENVIAR AL ARCHIVO sucursal.js (por qué no funciona?) */
class Sucursal {
    constructor(nombre) {
        this.nombre = nombre;
        this.inventario = [];
        /* En este array estan los productos del inventario de la sucursal */
    }
}

/* Sucursales */
const sucursales = [
    new Sucursal('Sucursal A'),
    new Sucursal('Sucursal B'),
    
];

/* movemos el stock a otra sucursal */
function moverStock(productoId, cantidad, sucursalOrigen, sucursalDestino) {
    // Encontrar el producto en la sucursal de origen    
    const producto = sucursalOrigen.inventario.find(item => item.id === productoId);

    // Verificar si hay suficiente stock disponible
    if (producto && producto.stock >= cantidad) {
        // Restar la cantidad de productos de la sucursal de origen
        producto.stock -= cantidad;

        // Buscar el mismo producto en la sucursal de destino
        const productoDestino = sucursalDestino.inventario.find(item => item.id === productoId);

        // Si el producto no existe en la sucursal de destino, lo agregamos
        if (!productoDestino) {
            sucursalDestino.inventario.push({ ...producto, stock: cantidad });
        } else {
            // Si el producto ya existe en la sucursal de destino, simplemente sumamos la cantidad
            productoDestino.stock += cantidad;
        }

        // Mostrar un mensaje de éxito o realizar otras acciones necesarias
        console.log(`Se han enviado ${cantidad} unidades del producto ${producto.nombre} a ${sucursalDestino.nombre}`);
    } else {
        // Mostrar un mensaje de error si no hay suficiente stock disponible
        console.log('No hay suficiente stock disponible para enviar');
    }
}

/* Completar la info para el movimiento de stock
* y obtener la referencia al elemento selector en el formulario 
*/
const selectorProducto = document.getElementById('producto');

// Función para generar dinámicamente las opciones de productos
function generarOpcionesProductos() {
    // Limpiar el select para evitar duplicados
    selectorProducto.innerHTML = '';

    // Agregar una opción por cada producto en el array
    productos.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.nombre;
        option.textContent = producto.nombre;
        selectorProducto.appendChild(option);
    });
}

// Llamar a la función para generar las opciones al cargar la página
window.addEventListener('load', generarOpcionesProductos);




