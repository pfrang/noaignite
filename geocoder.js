// TODO: Write your JS code in here
import mapboxgl from 'mapbox-gl';

const apikey = "pk.eyJ1IjoicGVmZiIsImEiOiJja3d3bjQxbmgwNWR4MnZxMWJub25yZXc4In0.OHql2CO2vCja5LzugCaaCg";
const submit = document.querySelector("body > div > div > div > form > input.btn.btn-primary");
const input = document.querySelector("body > div > div > div > form > input.form-control.flex-grow-1.mr-2");
const baseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const inputcoord = document.querySelector("body > div > div > div > p");

const populateMap = (coordinates) => {
  mapboxgl.accessToken = apikey;
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [parseFloat(coordinates[0]), parseFloat(coordinates[1])],
    zoom: 12
  });
  const marker = new mapboxgl.Marker()
    .setLngLat([parseFloat(coordinates[0]), parseFloat(coordinates[1])])
    .addTo(map);
};

const getCoordinates = (data) => {
  const coordinates = data.features[0].geometry.coordinates;
  inputcoord.innerHTML = `${coordinates[0]}  ${coordinates[1]}`;
  populateMap(coordinates);
};

const APICall = () => {
  const url = `${baseUrl}${input.value}.json?access_token=${apikey}`;
  fetch(url)
    .then(res => res.json())
    .then(getCoordinates);
};

submit.addEventListener(("click"), (event) => {
  event.preventDefault();
  APICall();
});
