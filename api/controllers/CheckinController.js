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
      let lat = req.param('lat', undefined);
      let lng = req.param('lng', undefined);
      let name = req.param('name', undefined);
      // TODO ユーザー情報を作ったら追加する
      let userId = req.param('userId', 1000);
      let createdDate = {createdAt: new Date(), updatedAt: new Date()};
      sails.log('allParams: %s',req.allParams());
      
      if (_.isUndefined(locationId)) {
        return Promise.reject('パラメータがFXXK');
      };
      
      // TODO issue#12 の後にlocationIdに差し替え
      let params = {
          //locationId: locationId,
          latitude: lat,
          longitude: lng,
          name: name
      };
      let location = yield Locations.findOrCreate({ name: name}, params );
      sails.log('location: %s',location);
      let portal = yield Portal.findOrCreate({ locationId: locationId }, { locationId: locationId, createdDate });
      sails.log('portal: %s',portal);
      
      return yield Checkin.create({ userId: userId, portalId: portal.portalId , createdDate });
    }).then((checkin) => {
      sails.log('checkin: %s',checkin);
      return res.redirect("/map");
    }).catch((err) => {
      sails.log.error("＼(^o^)／");
      sails.log.error(err);
      return res.badRequest();
    });
  }
};

