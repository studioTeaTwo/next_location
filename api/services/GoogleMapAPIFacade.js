"use strict";

const _config = require('../../config/googlemap');
const gm = require('googlemaps');

class GoogleMapAPIFacade{
  constructor(config) {
    this.config = config;
    this.map = new gm(config);
  }
}

module.exports = new GoogleMapAPIFacade(_config);
