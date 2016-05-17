/**
 * CheckinController
 *
 * @description :: Server-side logic for managing checkins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

"use strict";

const co = require('co');

module.exports = {
  create: (req, res) => {
    co(function *() {
      let locationId = req.param('locationId', undefined);
      // TODO ユーザー情報を作ったら追加する
      //let userId = req.param('userId', undefined);
      sails.log(req.allParams());
      
      if (_.isUndefined(locationId)) {
        return Promise.reject('パラメータがFXXK');
      };
      
      // TODO issue#12 の後にlocationIdに差し替え
      let place = yield Locations.findOne({ name: locationId.name});
      
      let portal = yield Portal.findOrCreate( { portalId: place.getLocationId() }, {portalId: locationId.place_id});
      let checkinHistory = yield Checkin.create({portalId: locationId.place_id});
      
      return yield Checkin.create(locationId);
    }).then((checkin) => {
      sails.log(checkin);
      return res.redirect('/map');
    }).catch((err) => {
      sails.log.error("＼(^o^)／");
      sails.log.error(err);
      return res.badRequest();
    });
  }
};

