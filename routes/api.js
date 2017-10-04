const express = require('express');
const router = express.Router();
const models = require("../models");
const db = models.db;
const Place = models.Place;
const Hotel = models.Hotel;
const Activity = models.Activity;
const Restaurant = models.Restaurant;



router.get('/', (req, res, next) => {
    var allAttractions = {};

    Hotel.findAll({ include: [{ all: true }] })
    .then(function(hotels) {
      allAttractions.hotels = hotels;
      return Restaurant.findAll({ include: [{ all: true }] });
    })
    .then(function(restaurants) {
      allAttractions.restaurants = restaurants;
      return Activity.findAll({ include: [{ all: true }] });
    })
    .then(function(activities) {
      allAttractions.activities = activities;
    })
    .then(function() {
      return res.json(allAttractions);
    })
    .catch(next);
});


module.exports = router;
