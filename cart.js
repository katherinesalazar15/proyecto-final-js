
let table = document.getElementById("cart");
let div = document.getElementById("carrito-footer");
let span = document.getElementById("checkout")


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
                <input type="text" value="1">
                <button class="btn-plus"><i class="fa fa-plus"></i></button>
            </div>
        </td>
        <td>${producto.price}</td>
        <td>
            <button class="delete" onclick="eliminarDelCarrito(${producto.id})"><i class="fa fa-trash"></i></button>
        </td>
    </tr>`
    $('.qty button').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
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
      const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
      document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
    generarCardsCarrito();
    {Swal.fire({
      icon: 'success',
      title: 'Carrito Vacio!',
    })}
  }

  // FUNCION CHECKOUT

function checkout() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
            const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
            document.getElementById("checkout").innerHTML = `${carrito.length} - $${total}`;
            span.innerHTML = `<div class="cart-content">
                <h1>Resumen de la compra</h1>
                <p>Subtotal<span>$99</span></p>
                <p>Costo de envío<span>$100</span></p>
                <h2>Total<span>$100</span></h2>
              </div>
              <div class="cart-btn" style="width:470px">
                <button>Finalizar Compra</button>
    </div>`
}
checkout()


  



