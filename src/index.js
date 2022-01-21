
import mapboxgl from 'mapbox-gl';

const apikey = "pk.eyJ1IjoicGVmZiIsImEiOiJja3d3bjQxbmgwNWR4MnZxMWJub25yZXc4In0.OHql2CO2vCja5LzugCaaCg";
const ruterUrl = "https://api.entur.io/geocoder/v1/autocomplete?text=";
const yrUrl = "https://api.met.no/weatherapi/locationforecast/2.0/compact?";
const list = document.querySelector("ul")
const input = document.querySelector("#text-input");
const btn = document.querySelector("#btn");
const date = new Date();
const mapSelector = document.querySelector("#map")
const card = document.querySelector(".card")

const unpackData = (data) => {
  data.features.forEach((stop) => {
    list.insertAdjacentHTML("beforeend", `
    <li>${stop.properties.label}</li>`);
  });
};

input.addEventListener('keyup', (event) => {
  list.innerHTML = "";
  mapSelector.innerHTML = "";
  fetch(`${ruterUrl}${input.value}&lang=en`)
    .then(response => response.json()
    .catch(console.log("Error on request")))
    .then((data) => {
      unpackData(data);
    });
})


const populateWeather = (data) => {
  console.log(data)
  const details = data.properties.timeseries[0].data.instant.details;
  const meta = data.properties.meta.units
  card.insertAdjacentHTML("afterbegin",
  `<p>Sist oppdatert: ${data.properties.meta.updated_at}</p>
  <p>Lufttemperatur: ${details.air_temperature} ${meta.air_temperature}</p>
  <p>Relativ(??) fuktighet: ${details.relative_humidity} ${meta.relative_humidity}</p>
  <p>Vindhastighet: ${details.wind_speed} ${meta.wind_speed}</p>`
  )
}


const populateMap = (coordinates) => {
  mapboxgl.accessToken = apikey;
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [parseFloat(coordinates[0]), parseFloat(coordinates[1])],
    zoom: 15
  });
  const marker = new mapboxgl.Marker()
    .setLngLat([parseFloat(coordinates[0]), parseFloat(coordinates[1])])
    .addTo(map);

  fetch(`${yrUrl}lat=${coordinates[1]}&lon=${coordinates[0]}`)
    .then(res => res.json())
    .then(populateWeather);
};



const getCoordinates = (data) => {
  input.value = data.features[0].properties.label
  const coordinates = data.features[0].geometry.coordinates;
  populateMap(coordinates);
  // list.insertAdjacentElement('beforeend', data.name);
};


btn.addEventListener(("click"), (event) => {
  event.preventDefault();
  list.innerHTML = "";
  fetch(`${ruterUrl}${input.value}&lang=en`)
    .then(response => response.json())
    .then(getCoordinates);
});

// input.addEventListener("keyup", (event) => {
//   listResults.innerHTML = "";
//   console.log('yo');
// });

// atag.addEventListener(("click"), (event) => {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition((data) => {
//     console.log(data);
//   });
// });
