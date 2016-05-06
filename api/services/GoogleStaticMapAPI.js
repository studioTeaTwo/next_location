"use strict";

const map = require('googlemaps');
const config = require('../../config/googlemap');

module.exports = {
		getImage: (locationpoint, option) => {
			return new Promise(function (resolve, reject) {
				if(option != 'url' && option != 'binary'){
					reject(new Error('StaticMapAPI param : ' + option));
				}
				else
				{
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

					if(option == 'url'){
						var imageurl = gmAPI.staticMap(params); // return static map URL
						sails.log(imageurl);
						resolve(imageurl);
					}else{
						// fetch asynchronously the binary image
						gmAPI.staticMap(params, function(err, binaryImage) {
							if(err) reject(new Error(err));
							resolve(binaryImage);
						});
					}
				}
			});
		}
};