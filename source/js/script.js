/* в этот файл добавляет скрипты*/
const header = document.querySelector('.header');
const navigationToggle = document.querySelector('.navigation__toggle');
header.classList.add('header--js-enable');

navigationToggle.addEventListener('click', () => {
  header.classList.toggle('header--menu-open')
})

const map = L.map('map').setView([59.968322, 30.317359], 33);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const customIcon = L.icon({
  iconUrl: 'img/map/map_pin.svg',
  iconSize: [38, 50],
  iconAnchor: [22, 50],
  popupAnchor: [-3, -76]
});

const marker = L.marker([59.968322, 30.317458], { icon: customIcon }).addTo(map);
marker.bindPopup('Интернет-магазин кофейных напитков «Drink2Go»');
