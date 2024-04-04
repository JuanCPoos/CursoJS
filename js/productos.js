
// Array para almacenar los productos
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














/***************** CAMBIOS PARA BORRAR SI NO SIRVE *****************/

// Event listener para cargar productos predefinidos al cargar la página
/* window.addEventListener('load', () => {
    // Verifica si ya hay productos en el almacenamiento local
    const productosGuardados = localStorage.getItem('productos');
    if (productosGuardados) {
        // Si hay productos guardados, los cargamos en el array productos
        producto = JSON.parse(productosGuardados);
    } else {
        // Si no hay productos guardados, agregamos algunos productos predefinidos
        producto = [
            { nombre: 'Cuchara Albañil N°6', id: '100', stock: 10, precio: 17550, imagen: '/assets/img/cuchara albañileria N6.jpg' },
            { nombre: 'Cuchara Albañil N°6', id: '100', stock: 10, precio: 17550, imagen: '/assets/img/cuchara albañileria N6.jpg' },
            { nombre: 'Cuchara Albañil N°6', id: '100', stock: 10, precio: 17550, imagen: './assets/img//pala' }
        ];
        // Guardamos los productos predefinidos en el almacenamiento local
        localStorage.setItem('productos', JSON.stringify(producto));
    }

     Renderizamos la lista de productos en la página
    renderizarProductos(producto);
}); */

// renderizar la lista de productos en la página
/* function renderizarProductos(producto) {
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = '';

    producto.forEach(producto => {
        const card = document.createElement('ion-card');

        const img = document.createElement('ion-img');
        img.src = producto.imagen;

        const cardHeader = document.createElement('ion-card-header');
        const cardTitle = document.createElement('ion-card-title');
        cardTitle.textContent = producto.nombre;


        const cardContent = document.createElement('ion-card-content');
        const precioParrafo = document.createElement('p');
        precioParrafo.textContent = 'Precio: ' + producto.precio;
        const stockParrafo = document.createElement('p');
        stockParrafo.textContent = 'Stock: ' + producto.stock;

        cardHeader.appendChild(cardTitle);
        cardContent.appendChild(precioParrafo);
        cardContent.appendChild(stockParrafo);

        card.appendChild(img);
        card.appendChild(cardHeader);
        card.appendChild(cardContent);

        listaProductos.appendChild(card);
    });
} */

// Otras funciones relacionadas con la gestión de productos...
