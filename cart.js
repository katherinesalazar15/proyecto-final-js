
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
                <button class="btn-minus"><i class="fa fa-minus"></i></button>
                <input type="text" id="cantidad-producto" value="${producto.cantidad}">
                <button class="btn-plus"><i class="fa fa-plus"></i></button>
            </div>
        </td>
        <td>${producto.price}</td>
        <td>
            <button class="delete" onclick="eliminarDelCarrito(${producto.id})"><i class="fa fa-trash"></i></button>
        </td>
    </tr>`
    $('.qty button').on('click', function () {
        let $button = $(this);
        let oldValue = $button.parent().find('input').val();
        if ($button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1; 
            let existeElProducto = carrito.some((prod) => prod.id == producto.id)
            if(existeElProducto){
                let prodFind = carrito.find((prod) => prod.id == producto.id)
                prodFind.cantidad++;
            }else{
              carrito.push(producto);
            }
              checkout()
              localStorage.setItem("carrito", JSON.stringify(carrito))
              let cantidadesProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
              const total = carrito.reduce((acumulador, producto) => acumulador + (producto.price * producto.cantidad), 0);
              document.getElementById("cart-total").innerHTML = `${cantidadesProductos} - $${total}`;
              document.getElementById("items").innerHTML = `${cantidadesProductos}`;
              document.getElementById("checkout").innerHTML = `$${total}`;
          } else {
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
                const borrado = carrito.find((producto) => producto.cantidad == producto.cantidad)
                let i = carrito.indexOf(borrado)
                console.log(i)
                producto.cantidad--
                if(producto.cantidad <= 0){
                    carrito.splice(i, 1)
                    producto.cantidad = 1
                }
                localStorage.setItem("carrito", JSON.stringify(carrito))
                const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
                document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
                document.getElementById("cantidad-producto").innerHTML = `${carrito.length} - $${total}`;
                document.getElementById("items").innerHTML = `${carrito.length}`;
                document.getElementById("checkout").innerHTML = `$${total}`;
                generarCardsCarrito();
            } else {
                newVal = 1;
            }
        }
        $button.parent().find('input').val(newVal);
    });    
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




  



