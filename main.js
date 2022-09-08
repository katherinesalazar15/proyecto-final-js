
const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
let cantidadesProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
const total = carrito.reduce((acumulador, producto) => acumulador + (producto.price * producto.cantidad), 0);
document.getElementById("cart-total").innerHTML = `${cantidadesProductos}  - $${total}`;


let productos = []

//FUNCION QUE CREA LAS CARDS QUE VIENEN DEL JSON
const buscarProductosJson = () => {
  fetch('productos.json')
    .then((response) => response.json())
    .then(informacion => {
      crearCards(informacion),
      agregarAlCarrito(informacion)
      productos.push(...informacion)
    })
  }
buscarProductosJson();


//FUNCION QUE CREA LAS CARDS en la pantalla principal

function crearCards(productos){
    productos.forEach(({id,title,img,price}) => {
      const idButton = `add-cart${id}` 
      document.getElementById("seccion-card").innerHTML += `<div class="col mb-5">
      <div class="card h-100">
          <!-- Product image-->
          <img class="card-img-top" style="height:210px" src="${img}"/>
          <!-- Product details-->
          <div class="card-body p-4">
              <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">
                    ${title}
                  </h5>
                  <!-- Product price-->
                  <div class="precio">
                    <p>$${price}</p>
                  </div>
              </div>
          </div>
          <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                  <a id="${idButton}" class="btn btn-outline-dark mt-auto" data-id="${id}">
                      Agregar al carrito
                  </a>
              </div>
          </div>
        </div>
      </div>`   
    })
  }
  

//FUNCION QUE PERMITE AGREGAR PRODUCTOS AL CARRITO Y LOS MUESTRA EN EL MODAL

function agregarAlCarrito(catalogo){  
    for(const producto of catalogo) {  
          const idButton = `add-cart${producto.id}`  
          document.getElementById(idButton).addEventListener('click', () => {
            let existeElProducto = carrito.some((prod) => prod.id == producto.id)
                if(existeElProducto){
                    let prodFind = carrito.find((prod) => prod.id == producto.id)
                    prodFind.cantidad++;
                }else{
            carrito.push(producto);
                }
            Swal.fire(
              'Se agregó tu producto al carrito!',
              'Vuelve a la página para seguir comprando',
              'success'
            )
            
            localStorage.setItem("carrito", JSON.stringify(carrito));
                let cantidadesProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
                const total = carrito.reduce((acumulador, producto) => acumulador + (producto.price * producto.cantidad), 0);             
                document.getElementById("cart-total").innerHTML = `${cantidadesProductos} - $${total}`;
                
          });
        
      
    }
    console.log(carrito)
}


// FUNCION QUE BORRA PRODUCTOS DEL CARRITO

const eliminarDelCarrito = (productoId) => {
  const producto = carrito.find((prod) => prod.id === productoId)
  const i = carrito.indexOf(producto)
  producto.cantidad--
  if(producto.cantidad <= 0){
      carrito.splice(i, 1)
      producto.cantidad = 1
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  let cantidadesProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    const total = carrito.reduce((acumulador, producto) => acumulador + (producto.price * producto.cantidad), 0);
    document.getElementById("cart-total").innerHTML = `${cantidadesProductos} - $${total}`;
    document.getElementById("items").innerHTML = `${cantidadesProductos}`;
    document.getElementById("checkout").innerHTML = `${cantidadesProductos} - $${total}`;
    generarCardsCarrito()
    {Swal.fire({
        icon: 'success',
        title: 'Producto eliminado!',
    })}
}



// FILTRAR PRODUCTOS SEGUN CATEGORIAS PARTE DE ABAJO Y PARTE DE ARRIBA

for (const nodoHTML of document.getElementsByClassName('filtrar-categoria')){
    nodoHTML.onclick = (event) => {
        const categoria = event.target.getAttribute('data-categoria')
        filtrarProductosPorCategoria(categoria)
    }
  }
  
  function filtrarProductosPorCategoria(categoria) {
    document.getElementById("seccion-card").innerHTML = "";
    const productosFiltrados = productos.filter((producto) => producto.category === categoria);
    crearCards(productosFiltrados) // CREA LAS CARDS DE PRODUCTOS FILTADOS
    agregarAlCarrito(productosFiltrados) // FUNCION QUE AGREGA PRODUCTOS FILTRADOS AL CARRITO
  
  }
  
  
  //FUNCION QUE PERMITE RECARGAR LA PÁGINA CON EL BOTÓN DE INICIO

const reload = document.getElementById('reload');

reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});



