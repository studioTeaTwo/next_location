"use strict";
const _ = require('lodash');

// DomainModel
class Location {
  constructor(latitude, longitude){
    this.latitude = latitude;
    this.longitude = longitude;
  }

  unapply() {
    return {
      'latitude' : this.latitude,
      'longitude' : this.longitude,
    }
  }
}

module.exports = Location;
