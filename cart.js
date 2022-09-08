
let table = document.getElementById("cart");
let div = document.getElementById("carrito-footer");
let p = document.getElementById("final");


  // FUNCIÓN QUE CREA EL CARRITO

function generarCardsCarrito() {
  document.getElementById("cart-elements").innerHTML = ""
  carrito.forEach((producto) => {
    document.getElementById("cart-elements").innerHTML += `<tr>
        <td>${producto.title}</td>
        <td><img src="${producto.img}" style="width:130px"></td>
        <td>
            <div class="qty">
              <input type="text" id="cantidad-producto" value="${producto.cantidad}">
            </div>
        </td>
        <td>$${producto.price}</td>
        <td>
            <button class="delete" onclick="eliminarDelCarrito(${producto.id})"><i class="fa fa-trash"></i></button>
        </td>
    </tr>`
  })
}
generarCardsCarrito()

// FUNCION QUE VACIA CARRITO COMPLETO

function botonVaciado(producto) {
    div.innerHTML = `<div>
         <button id="boton-vaciar" class="btn btn-danger" onclick="vaciarCarrito(${producto})">Vaciar carrito</button>
       </div>`
  }
  botonVaciado()
  
  // FUNCION QUE VACIA EL CARRITO COMPLETO
  
  function vaciarCarrito() {
    const vaciar = carrito.find((producto) => producto == producto)
      let i = carrito.indexOf(vaciar)
      carrito.splice(i)
      localStorage.setItem("carrito", JSON.stringify(carrito))
      let cantidadesProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
      const total = carrito.reduce((acumulador, producto) => acumulador + (producto.price * producto.cantidad), 0);
      document.getElementById("cart-total").innerHTML = `${cantidadesProductos} - $${total}`;
      document.getElementById("items").innerHTML = `${cantidadesProductos}`;
      document.getElementById("checkout").innerHTML = `${cantidadesProductos} - $${total}`;
    generarCardsCarrito();
    {Swal.fire({
      icon: 'success',
      title: 'Carrito Vacio!',
    })}
  }

  // FUNCION CHECKOUT

function checkout() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
    let cantidadesProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    const total = carrito.reduce((acumulador, producto) => acumulador + (producto.price * producto.cantidad), 0);
    document.getElementById("items").innerHTML = `${cantidadesProductos}`;
    document.getElementById("checkout").innerHTML = `$${total}`;
}
checkout()

function finalizarCompra() {
  Swal.fire(
    'Gracias por su compra!',
    'Pronto recibirá su pedido!',
    'success'
  )
}




  



