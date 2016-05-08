/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
"use strict";

const co = require('co');
var map = require('../services/GoogleStaticMapAPI');
const option = 'url';

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
    	  map.getImage(locationpoint, option).then(function(value){
    		  res.view('pages/admin/detail.swig', {
    			  location: location, 
    			  imageurl: value
    		  });
    	  }).catch(function(error){
    		  sails.log.error(error);
    	  });
      }
      else{
        res.notFound();
      }
    }).catch((err) => {
      return res.serverError(err);
    });
  }
};