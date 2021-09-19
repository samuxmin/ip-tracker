var map = L.map('map').setView([0,0], 2);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=shA42BbXOJpxZDNEjKow', {
    attributtion:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map)
var blackIcon = L.icon({
    iconUrl: './../images/icon-location.svg',
});