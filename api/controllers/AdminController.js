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
		  //DB取得
		  let locationId = req.params.location_id;
		  let location = yield Locations.findOne({where: {locationId:locationId}});
		  //画像取得
		  let locationpoint = [ location.latitude,location.longitude ].toString();
		  let imageurl = yield map.getImage(locationpoint, option);

		  return {location: location, imageurl: imageurl};
	  }).then((result) => {
		  //View生成
		  sails.log(result);
		  res.view('pages/admin/detail.swig', result);
	  }).catch((err) => {
		  return res.serverError(err);
	  });
  }
};