/* Definir la clase Sucursal */
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
