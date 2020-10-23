function typeWriter (element) {
  const textArray = element.innerHTML.split('')
  element.innerHTML = ''
  textArray.forEach((letter, i) => {
    setTimeout(() => element.innerHTML += letter, 240 * i)
  })
}

const machine_effect = document.querySelector('#titulo')
typeWriter(machine_effect)