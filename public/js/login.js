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

const redirect = document.querySelector('#logar')

function Redirect() {
  redirect.addEventListener("click", function() {
    location.href = "page-landing.html"
  })
}