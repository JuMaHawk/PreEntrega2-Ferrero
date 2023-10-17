const productos = [];

function eliminarProducto(productoEliminado) {
    const indice = productos.indexOf(productoEliminado);
    productos.splice(indice, 1);
    console.log(indice)
}

let pedido = prompt(`Si desea agregar un producto a la lista de compras ingrese "A", si desea eliminar un producto ingrese "E", si desea salir ingrese "SALIR"`);
pedido = pedido.toUpperCase();

while (pedido != "SALIR"){

if (pedido == "A") {
    const nuevoProducto = prompt("Ingrese el producto que desea agregar a la lista");
    productos.unshift(nuevoProducto)
    alert(productos)
    pedido = prompt(`Si desea agregar un producto a la lista de compras ingrese "A", si desea eliminar un producto ingrese "E", si desea salir ingrese "SALIR"`);
    pedido = pedido.toUpperCase();
} else if (pedido == "E") {
    const productoEliminado = prompt("Ingrese el producto que desea eliminar")
    eliminarProducto(productoEliminado)
    alert(productos)
    pedido = prompt(`Si desea agregar un producto a la lista de compras ingrese "A", si desea eliminar un producto ingrese "E", si desea salir ingrese "SALIR"`);
    pedido = pedido.toUpperCase();
} else {
    pedido = prompt(`Por favor ingrese un valor existente.
    Si desea agregar un producto a la lista de compras ingrese "A", si desea eliminar un producto ingrese "E", si desea salir ingrese "SALIR"`);
    pedido = pedido.toUpperCase();
}
}

/* let entrada = prompt ("ingrese algo");

while (entrada != "SALIR"){
     alert(`El usuario ingreso ${entrada}`);

     entrada = prompt("Ingresar dato ")
} */

//Esto es nuevo.