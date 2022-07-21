
// FUNCION QUE AGREGA PRODUCTOS //

let productos = [];


function agregarAlCarrito(producto){


    productos.push(producto);   
}
console.log(productos)

agregarAlCarrito({id: 1, name: "Pollera Sofia", price: 1200})
agregarAlCarrito({id: 2, name: "Remera Umma", price: 1000})
agregarAlCarrito({id: 3, name: "Pantalón Berlin", price: 2500})
agregarAlCarrito({id: 4, name: "Short Melina", price: 2000})

// FUNCION QUE BORRA PRODUCTOS DEL CARRITO //

function borrarProductoDelCarrito(idDelProducto){
    const index = productos.findIndex(producto => producto.id === idDelProducto);
    if(index !== -1) { 
        productos.splice(index, 1);
    }
}

borrarProductoDelCarrito(2)

// FUNCION QUE BUSCA PRODUCTOS //

let busqueda = prompt("Ingrese el producto que desea buscar:")
const resultadoBusqueda = productos.find((el) => el.name == busqueda) 
console.log(resultadoBusqueda)

//FUNCION QUE SUMA EL TOTAL DEL CARRITO //
 
const totalDeCompra = productos.reduce((acc,el) => acc + el.price, 0)
console.log("el total de su compra es de: $" + totalDeCompra)