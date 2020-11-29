import mapboxgl from 'mapbox-gl';

const category = {
  restaurant: 'http://i.imgur.com/cqR6pUI.png',
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
};

function buildMarker(type, location) {
  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${category[type]})`;
  return new mapboxgl.Marker(markerDomEl).setLngLat(location);
}

export default buildMarker;
