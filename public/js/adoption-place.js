// Criando objeto que desativa algumas opções do mapa
const opcoes = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
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
  iconSize: [95, 95],
  iconAnchor: [29, 68],
  popupAnchor: [170, 20]
})

// POP-UP
L.marker([-25.4430978,-49.2854497], {icon}).addTo(map)