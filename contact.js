let section = document.getElementById("contact");


// CREA EL FORMULARIO DE CONTACTO 

function formContact() {
    section.innerHTML = `<div class="u-wrapper">
    <div class="contact-content">
      <form id="form" action="" class="form">
        <label for="name">Nombre Completo <span>*</span></label>
        <input name="name" required type="text" id="name">
        <label for="email">Correo electrónico <span>*</span></label>
        <input name="email" type="text" id="email" required>
        <label for="message">Mensaje</label>
        <textarea id="message" name="message" id="" cols="30" rows="10"></textarea>
        <button type="submit" class="btn primary full">enviar mensaje</button>
      </form>
      <a href="mailto:katherineslzr0@gmail.com" id="trucazo"></a>

    </div>
  </div>`
  }
  formContact()
  
// FUNCION QUE ENVIA EL FORMULARIO DE CONTACTO A MI EMAIL


  const $form = document.querySelector('#form')
  const $buttonMailto = document.querySelector('#trucazo')

  $form.addEventListener('submit', handleSubmit)

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:katherineslzr0@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
    {Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado!',
  })}
  }