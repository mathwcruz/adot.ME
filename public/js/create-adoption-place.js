// Criando objeto que desativa algumas opções do mapa
const opcoes = {
  zoomControl: false
}

// MAPA
const map = L.map('mapid', opcoes).setView([-25.4430978,-49.2854497], 15) //objeto "L {}" foi criado pela biblioteca leaflet. O array contém a latitude e a longitude

// Exibindo mapa na tela
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

// Criando um ícone
const icon = L.icon({
  iconUrl: "../images/logo.svg",
  iconSize: [85, 85],
  iconAnchor: [29, 68]
})

// Criando um marcador no mapa
let marcador // iniciando a variavel vazia, mas será atribuida um valor posteriormente
map.on('click', (event) => {
  const latitude = event.latlng.lat // passando a latitude para o mapa
  const longitude = event.latlng.lng //passando a longitude para o mapa

  document.querySelector('[name=lat]').value = latitude // passando o valor da latitude para o input
  document.querySelector('[name=lng]').value = longitude // passando o valor da longitude para o input

  marcador && map.removeLayer(marcador) // caso já tenha um marcador (icone) no mapa, irá remover esse marcador apra que possa mudar sua posição no mapa, caso contrário, não entrará nessa funcionalidade e passará para a de baixo, que adiciona um ícone no mapa

  marcador = L.marker([latitude, longitude], { icon: icon }).addTo(map) // ao clciar no local desejado, irá adionar um ícone da minha logo naquele local que contém a latitude e a longitude
})

// Upload de imagens
function adicionarCampoDeFotos(event) {
  const campoDeFotos = document.querySelector('#images') // pegando o container que contém as fotos

  const campoParaDuplicacao = document.querySelectorAll('.new-images') // pegando o campo que irá duplicar as imagens

  const novoCampoDeFotos = campoParaDuplicacao[campoParaDuplicacao.length - 1].cloneNode(true) // pegando a ultima imagem adicionada e clonando-a

  const verificarSeEstaVazio = novoCampoDeFotos.children[0] // atribuindo o input
  if (verificarSeEstaVazio.value === "") { // verificando se o input está vazio, se estiver vazio, não irá fazer nada
    return
  }

  verificarSeEstaVazio.value = "" // limapando o campo após adicionar uma foto

  campoDeFotos.appendChild(novoCampoDeFotos)
}

// Deletar imagens
function deletarCampo(event) {
  const deletarImagem = event.currentTarget
  const campoParaDuplicacao = document.querySelectorAll('.new-images') // pegando o campo que irá duplicar as imagens
  if(campoParaDuplicacao.length <= 1) { // caso só tenha uma imagem adicionada, não é possível removê-la
    deletarImagem.parentNode.children[0].value = "" // se deletar a primeira imagem, irá limpar o conteúdo do input(que está na posição [0])
    return
  }
  
  deletarImagem.parentNode.remove() // removendo a imagem ao clicar no "x"
}

// Atendimento no final de semana [S/N]
function atendeFinalDeSemana(event) {
  document.querySelectorAll('.button-select button').forEach((botao) => { //  para cada botão, irá remover a classe ".active"
    botao.classList.remove('active') //removendo a classe ".active"
  })

  const botaoAtendeFinalDeSemana = event.currentTarget // o botao que foi clciado
  botaoAtendeFinalDeSemana.classList.add('active') // adicionando a classe ".active" àquele botao que foi clicado

  const inputAtendeFinalDeSemana = document.querySelector('[name=open_on_weekends]')
  inputAtendeFinalDeSemana.value = botaoAtendeFinalDeSemana.dataset.value // o input do botao de Sim ou Não irá receber o valor de 1 ou 0 caso aquele botão tenha sido clicado ou não
}