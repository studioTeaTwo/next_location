"use strict";

module.exports =  {
  search(latitude, longitude) {
    let locationpoint = [ latitude, longitude ].toString();
    return GooglePlacesAPI.searchPlaces(locationpoint);
  }
}
