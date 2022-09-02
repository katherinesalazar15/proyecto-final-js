let section = document.getElementById("contact");


// CREA EL FORMULARIO DE CONTACTO 

function formContact() {
    section.innerHTML = `<div>
        
    <form id="form" action="" class="form">
      <label for="name">Nombre Completo<span>*</span></label>
      <input name="name" required type="text" id="name">
      <label for="email">Correo electrónico<span>*</span></label>
      <input name="email" type="text" id="email" required>
      <label for="message">Mensaje</label>
      <textarea id="message" name="message" id="" cols="30" rows="10"></textarea>
      <button type="submit" class="btn primary full">Enviar mensaje</button>
    </form>
    <a href="mailto:katherineslzr0@gmail.com" id="email"></a>
  </div>`
  }
  formContact()
  
// FUNCION QUE ENVIA EL FORMULARIO DE CONTACTO A MI EMAIL (SI PONES TU EMAIL DEBERIA LLEGAR AL TUYO)

const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#email')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      console.log(form.get('name'))
      $buttonMailto.setAttribute('href', `mailto:katherineslzr0@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
      $buttonMailto.click()
    }