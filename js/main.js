/* Array almacena productos */
const productos = [];

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


const listaProductos = document.getElementById('listaProductos');

/**productos que se cargan con la página */
const productosPredefinidos = [
    new Producto('Cuchara Albañileria N° 6', 15000, 12, 'assets\img\cuchara albanileria N6.jpg'),
    new Producto('Cuchara albañileria N° 8', 16250, 12, 'assets\img\cuchara albanileria N8.jpg'),
    new Producto('Cuchara Albañileria N° 6', 15000, 12, 'assets\img\cuchara albanileria N6.jpg'),
    new Producto('Cuchara albañileria N° 8', 16250, 12, 'assets\img\cuchara albanileria N8.jpg'),
    new Producto('Cuchara Albañileria N° 6', 15000, 12, 'assets\img\cuchara albanileria N6.jpg'),
    new Producto('Cuchara albañileria N° 8', 16250, 12, 'assets\img\cuchara albanileria N8.jpg')
];
/**cargar productos predefinidos con un recorrido forEarch agregandolos al array Productos */
function agregarProductosPredefinidos(){
    productosPredefinidos.forEach(producto => {
        productos.push(producto);
    });
}

agregarProductosPredefinidos();



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


formAgregarProducto.addEventListener('submit', agregarProducto);

renderizarProductos();




/**************************** */
/**************************** */
/******** Sucursal ***********/
class Sucursal {
    constructor(nombre) {
        this.nombre = nombre;
        this.inventario = [];
        /* En este array estan los productos del inventario de la sucursal */
    }
}

/* Sucursales */
const sucursales = [
    new Sucursal('Sucursal Crespo'),
    new Sucursal('Sucursal Viale')
];

/* movemos el stock a otra sucursal */
function moverStock(productoId, cantidad, sucursalOrigen, sucursalDestino) {
      
    const producto = sucursalOrigen.inventario.find(item => item.id === productoId);

    
    if (producto && producto.stock >= cantidad) {       
        producto.stock -= cantidad;
        const productoDestino = sucursalDestino.inventario.find(item => item.id === productoId);
        if (!productoDestino) {
            sucursalDestino.inventario.push({ ...producto, stock: cantidad });
        } else {
            productoDestino.stock += cantidad;
        }

        console.log(`Se han enviado ${cantidad} unidades del producto ${producto.nombre} a ${sucursalDestino.nombre}`);
    } else {
        console.log('No hay suficiente stock disponible para enviar');
    }
}

/* Completar la info para el movimiento de stock
* y obtener la referencia al elemento selector en el formulario 
*/
const selectorProducto = document.getElementById('producto');

/* genera las opciones de productos en el envio a sucursales*/
function generarOpcionesProductos() {
    selectorProducto.innerHTML = '';

    productos.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.nombre;
        option.textContent = producto.nombre;
        selectorProducto.appendChild(option);
    });
}

/* generar las opciones de sucursales a enviar*/
function generarOpcionesSucursales() {
    const selectorSucursal = document.getElementById('sucursalDestino');    
    selectorSucursal.innerHTML = '';

    sucursales.forEach(sucursal => {
        const option = document.createElement('option');
        option.value = sucursal.nombre;
        option.textContent = sucursal.nombre;
        selectorSucursal.appendChild(option);
    });
}

/* al cargar la pagina genera las opciones previas */
window.addEventListener('load', generarOpcionesProductos);
window.addEventListener('load', generarOpcionesSucursales);
window.addEventListener('load', mostrarInfoSucursales);



function mostrarInfoSucursales() {
    const infoSucursales = document.getElementById('infoSucursales');

    infoSucursales.innerHTML = '';
    sucursales.forEach(sucursal => {
        const sucursalElemento = document.createElement('div');
        sucursalElemento.innerHTML = `
            <h3>${sucursal.nombre}</h3>
            <p><strong>Inventario:</strong></p>
            <ul>
                ${sucursal.inventario.map(item => `<li>${item.nombre}: ${item.stock}</li>`).join('')}
            </ul>
        `;
        infoSucursales.appendChild(sucursalElemento);
    });
}




/** ACTUALIZAR LOS INVENTARIOS DE LAS SUCUS */
const formMovimiento = document.getElementById('form-movimiento');

formMovimiento.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const productoId = document.getElementById('producto').value; 
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const sucursalOrigen = document.getElementById('sucursalOrigen').value; 
    const sucursalDestino = document.getElementById('sucursalDestino').value; 

    moverStock(productoId, cantidad, sucursalOrigen, sucursalDestino);
});

function moverStock(productoId, cantidad, sucursalOrigen, sucursalDestino) {
    
    const producto = sucursales.find(sucursal => sucursal.nombre === sucursalOrigen)?.inventario.find(item => item.id === productoId);

    if (producto && producto.stock >= cantidad) {
        producto.stock -= cantidad;
        const productoDestino = sucursales.find(sucursal => sucursal.nombre === sucursalDestino)?.inventario.find(item => item.id === productoId);

        if (productoDestino) {
            productoDestino.stock += cantidad;
        } else {
            sucursales.find(sucursal => sucursal.nombre === sucursalDestino)?.inventario.push({ id: productoId, stock: cantidad });
        }
        console.log(`Se han transferido ${cantidad} unidades del producto ${productoId} de ${sucursalOrigen} a ${sucursalDestino}`);
    } else {
        console.log('No hay suficiente stock disponible para transferir');
    }
}


