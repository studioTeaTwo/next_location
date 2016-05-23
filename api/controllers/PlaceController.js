/**
 * PlaceController
 * 
 * @description :: Server-side logic for managing Places
 * @help :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
"use strict";

const co = require('co');
const dummyUser = 1000;
const dummyLatitude = 35.681368;
const dummyLongitude = 139.766076;

module.exports = {
  searchForm(req, res){
    res.view('pages/places/search_forms.swig');
  },
  search: (req, res) => {
    co(function *(){
      // TODO Validate
      let user = req.param('userId', dummyUser);
      let latitude = req.param('latitude', dummyLatitude);
      let longitude = req.param('longitude', dummyLongitude);
      sails.log('緯度: %d 経度: %d' ,latitude ,longitude );
      // GoogleAPI取得
      let places = yield LocationService.search(latitude, longitude);
      return {list: places.results, user: user};
    }).then((result) => {
      // View生成
      sails.log(result);
      res.view('pages/places/list.swig', result);
    }).catch((err) => {
      return res.serverError(err);
    });
  }
};