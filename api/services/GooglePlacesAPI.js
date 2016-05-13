"use strict";

const map = require('googlemaps');
const config = require('../../config/googlemap');

module.exports = {
		searchPlaces:(locationpoint) => {
			return new Promise(function (resolve, reject) {
				var gmAPI = new map(config);
				var params = {
						location: locationpoint,
						radius: 50,
				};
				gmAPI.placeSearch(params, function(err, result){
					if(err) {
						reject(new Error(err));
					}
					sails.log( '件数：' + result.results.length );
					resolve(result);
			});	
		});
}	
};
