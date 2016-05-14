"use strict";


module.exports = {
		searchPlaces:(locationpoint) => {
			return new Promise(function (resolve, reject) {
				var params = {
						location: locationpoint,
						radius: 50,
				};
				GoogleMapAPIFacade.map.placeSearch(params, function(err, result){
					if(err) {
						reject(new Error(err));
					}
					sails.log( '件数：' + result.results.length );
					resolve(result);
			});	
		});
}	
};
