/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
"use strict";

const co = require('co');
const map = require('googlemaps');
var config = require('../../config/googlemap');

module.exports = {
  index: (req, res) => {
    res.view("pages/admin/locations.swig");
  },
  createRoom: (req, res) => {
    co(function *(){
      res.view("pages/admin/create.swig");
    });
  },
  locationDetail: (req, res) => {
    co(function *(){
      let locationId = req.params.location_id;
      return yield Locations.findOne({where: {locationId:locationId}});
    }).then((location) => {
      sails.log(location);
      if(location){
    	  var locationpoint = [ location.latitude,location.longitude ].toString();
    	  var gmAPI = new map(config);
    	  var params = {
    	    center: locationpoint,
    	    zoom: 15,
    	    size: '500x400',
    	    maptype: 'roadmap',
    	    style: [
    	      {
    	        feature: 'road',
    	        element: 'all',
    	        rules: {
    	          hue: '0x00ff00'
    	        }
    	      }
    	    ]
    	  };
    	  var imageurl = gmAPI.staticMap(params); // return static map URL
    	  /*gmAPI.staticMap(params, function(err, binaryImage) {
    	    // fetch asynchronously the binary image
    	  });*/
    	  sails.log(imageurl);
    	  res.view('pages/admin/detail.swig', {location: location,imageurl: imageurl});
      }
      else
        res.notFound();

    }).catch((err) => {
      return res.serverError(err);
    });
  }
};
