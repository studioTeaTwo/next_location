/**
 * PlaceController
 *
 * @description :: Server-side logic for managing Places
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

"use strict";

const co = require('co');
const dummyLatitude = 35.681368;
const dummyLongitude = 139.766076;

module.exports = {
		search: (req, res) => {
			co(function *(){
				// ToDo: GPS取得
        // GPSからの取得はクライアントにやらせた方が疎結合かと思います.
				let latitude = req.param('latitude', dummyLatitude);
				let longitude = req.param('longitude', dummyLongitude);
				//GoogleAPI取得
        let places = yield LocationService.search(latitude, longitude);
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

