/**
 * PlaceController
 *
 * @description :: Server-side logic for managing Places
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

"use strict";

const co = require('co');
const map = require('../services/GooglePlacesAPI');

module.exports = {
		search: (req, res) => {
			co(function *(){
				//ToDo: GPS取得
				let latitude = 35.111111;
				let longitude = 140.111111;
				//GoogleAPI取得
				let locationpoint = [ latitude, longitude ].toString();
				let places = yield map.searchPlaces(locationpoint);
				return {list: places.results};
			}).then((result) => {
				//View生成
				sails.log(result);
				res.view('pages/places/list.swig', result);
			}).catch((err) => {
				return res.serverError(err);
			});
		}
};

