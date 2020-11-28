import mapboxgl from 'mapbox-gl';
console.log('works again~');
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// mapboxgl.accessToken = 'pk.eyJ1IjoiYW5jbGF1ZHlzIiwiYSI6ImNraHV1NHh6YzE5NjcyeXFwZzZjdno0MHUifQ.M_fusuuoaF5VHSOwOTJOcw';

// const map = new mapboxgl.Map({
//     container: "map",
//     center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//     zoom: 12, // starting zoom
//     style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
// });

mapboxgl.accessToken =
  'pk.eyJ1IjoiYW5jbGF1ZHlzIiwiYSI6ImNraHV1NHh6YzE5NjcyeXFwZzZjdno0MHUifQ.M_fusuuoaF5VHSOwOTJOcw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div'); // Create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
