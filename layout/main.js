const myMap = L.map('mapid').setView([37.786617, -122.404654], 13);

// const myMap = new L.map('mapid');
// myMap.setView(new L.LatLng(51.505, -0.09), 13);

const polygon = L.polygon([
    [37.786617, -122.404654],
    [37.797843, -122.407057],
    [37.798962, -122.398260],
    [37.794299, -122.395234]
]).addTo(myMap);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
}).addTo(myMap);

