/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
"use strict";

const co = require('co');

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
      if(location)
        res.view('pages/admin/detail.swig', {location: location});
      else
        res.notFound();

    }).catch((err) => {
      return res.serverError(err);
    });
  }
};
