const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1IjoidHJldm9yc3RvcmV5IiwiYSI6ImNqOGJyeGZ1bjAxNnkyd2xiYXRlb2lpMTIifQ.nzn2Dwl1aPDs3EZCveHOpA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", [-74.009, 40.705]);
marker.addTo(map);
