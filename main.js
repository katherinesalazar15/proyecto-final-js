
// // FUNCION QUE AGREGA PRODUCTOS //

// let productos = [];


// function agregarAlCarrito(producto){


//     productos.push(producto);   
// }
// console.log(productos)

// agregarAlCarrito({id: 1, name: "Pollera Sofia", price: 1200})
// agregarAlCarrito({id: 2, name: "Remera Umma", price: 1000})
// agregarAlCarrito({id: 3, name: "Pantalón Berlin", price: 2500})
// agregarAlCarrito({id: 4, name: "Short Melina", price: 2000})

// // FUNCION QUE BORRA PRODUCTOS DEL CARRITO //

// function borrarProductoDelCarrito(idDelProducto){
//     const index = productos.findIndex(producto => producto.id === idDelProducto);
//     if(index !== -1) { 
//         productos.splice(index, 1);
//     }
// }

// borrarProductoDelCarrito(2)

// // FUNCION QUE BUSCA PRODUCTOS //

// let busqueda = prompt("Ingrese el producto que desea buscar:")
// const resultadoBusqueda = productos.find((el) => el.name == busqueda) 
// console.log(resultadoBusqueda)

// //FUNCION QUE SUMA EL TOTAL DEL CARRITO //
 
// const totalDeCompra = productos.reduce((acc,el) => acc + el.price, 0)
// console.log("el total de su compra es de: $" + totalDeCompra)

const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length}  - $${total}`;



const productos = [ 
    {
        id: 1, 
        title: "Pollera Sofia",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBalmNIoUdA2eAc0tCwnAlNZHAtJelc3dyVA&usqp=CAU",
        price: 1200
    },
    {
        id: 2, 
        title: "Remera Umma",
        img: "https://img.ar.class.posot.com/es_ar/2017/09/14/Remeras-Gucci-Levis-Fila-Tommy-tendencia-20170914112949.jpg", 
        price: 1000,
    },
    {
        id: 3, 
        title: "Pantalón Berlin", 
        img: "https://ae01.alicdn.com/kf/H18e87f3254df48118a6432ca7f8a3bd0w/Pantalones-de-sastre-con-detalles-plisados-para-mujer.jpg_Q90.jpg_.webp",
        price: 3500
    },
    {
        id: 4, 
        title: "Short Melina", 
        img: "https://images-na.ssl-images-amazon.com/images/I/51ztXJf3M-S._AC_UL604_SR604,400_.jpg",
        price: 2000
    },
];



productos.forEach((producto) => {
  const idButton = `add-cart${producto.id}` 
  document.getElementById("seccion-card").innerHTML += `<div class="col mb-5">
  <div class="card h-100">
      <!-- Product image-->
      <img class="card-img-top" style="height:210px" src="${producto.img}"/>
      <!-- Product details-->
      <div class="card-body p-4">
          <div class="text-center">
              <!-- Product name-->
              <h5 class="fw-bolder">
                ${producto.title}
              </h5>
              <!-- Product price-->
              <div class="precio">
                <p>$${producto.price}</p>
              </div>
          </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
              <a id="${idButton}" class="btn btn-outline-dark mt-auto" data-id="${producto.id}">
                  Agregar al carrito
              </a>
          </div>
      </div>
    </div>
  </div>` 
})


productos.forEach((producto) => {
  const idButton = `add-cart${producto.id}`  
  document.getElementById(idButton).addEventListener('click', () => {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
        document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
        document.getElementById("cart-elements").innerHTML = ""
        carrito.forEach((producto) => {
            document.getElementById("cart-elements").innerHTML += `<tr>
                <th scope="row">${producto.id}</th>
                <td>${producto.title}</td>
                <td><img src="${producto.img}" style="width:130px"></td>
                <td>${producto.price}</td>
                <td>
                    <button>Sacar del carrito</button>
                </td>
            </tr>`
        })
  })
});

console.log(carrito)




