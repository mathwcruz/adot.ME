// Efeito nos input's de login
const inputs = document.querySelectorAll('.input')

function focusFunc() {
  let parent = this.parentNode.parentNode
  parent.classList.add('focus')
}

function blurFunc() {
  let parent = this.parentNode.parentNode
  if(this.value === "") {
    parent.classList.remove('focus')
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', focusFunc)
  input.addEventListener('blur', blurFunc)
})

//Validação de login
function verificarSeEhVazio() {
  const usuario = document.querySelector('#usuario')
  const senha = document.querySelector('#senha')

  if(usuario.value == "" || senha.value == "") {
    const modalOverlay = document.querySelector('.modal-overlay')
    modalOverlay.classList.add('active')
    return false
  } else{
    usuario.value = ""
    senha.value = ""
  }

  document.querySelector('.close-modal').addEventListener("click", () => {
    const modalOverlay = document.querySelector('.modal-overlay')
    modalOverlay.classList.remove("active")
  })
  
}