const productos = [];

function eliminarProducto(productoEliminado) {

    const indice = productos.indexOf(productoEliminado);

    if (indice === -1) {
        pedido = prompt(`El producto ingresado no se encuentra en la lista.\nPor favor ingrese el producto que desea eliminar de la lista\n-` + productos.join("\n-"));

    } else {
        productos.splice(indice, 1);
        if (productos.length===0){
            pedido = prompt(`El listado se encuentra vacio.\nSi desea agregar un producto a la lista de compras ingrese "A"\nSi desea salir ingrese "SALIR"`);
            pedido = pedido.toUpperCase();
        }else{
        alert("Listado de compras:\n" + productos.join("\n"))
        pedido = prompt(`Si desea agregar un producto a la lista de compras ingrese "A"\nSi desea eliminar un producto ingrese "E"\nSi desea salir ingrese "SALIR"`);
        pedido = pedido.toUpperCase();
    }
    }
}


let pedido = prompt(`Si desea agregar un producto a la lista de compras ingrese "A"\nSi desea eliminar un producto ingrese "E"\nSi desea salir ingrese "SALIR"`);
pedido = pedido.toUpperCase();

while (pedido != "SALIR") {

    if (pedido == "A") {
        const nuevoProducto = prompt("Ingrese el producto que desea agregar a la lista");
        productos.push(nuevoProducto)
        alert(`Listado de compras:\n-`+ productos.join("\n-"))
        pedido = prompt(`Si desea agregar un producto a la lista de compras ingrese "A"\nSi desea eliminar un producto ingrese "E"\nSi desea salir ingrese "SALIR"`);
        pedido = pedido.toUpperCase();
    } else if (pedido == "E") {
        if (productos.length <= 0) {

            pedido = prompt(`No hay productos agregados en la lista\nSi desea agregar un producto a la lista de compras ingrese "A"\nSi desea salir ingrese "SALIR"`)
            pedido = pedido.toUpperCase();

        } else {
            const productoEliminado = prompt("Ingrese el producto que desea eliminar")
            eliminarProducto(productoEliminado)
        }

    } else {
        pedido = prompt(`Por favor ingrese un valor existente.\nSi desea agregar un producto a la lista de compras ingrese "A"\nSi desea eliminar un producto ingrese "E"\nSi desea salir ingrese "SALIR"`);
        pedido = pedido.toUpperCase();
    }
}

