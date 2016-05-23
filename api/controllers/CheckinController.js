/**
 * CheckinController
 *
 * @description :: Server-side logic for managing checkins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
"use strict";

const co = require('co');
const _ = require('lodash');

module.exports = {
  create: (req, res) => {
    co(function *() {
      let locationId = req.param('locationId', undefined);
      let lat = req.param('lat', undefined);
      let lng = req.param('lng', undefined);
      let name = req.param('name', undefined);
      let userId = req.param('userId', undefined);
      sails.log('allParams: %s',req.allParams());
      
      if (_.isUndefined(locationId) || 
          _.isUndefined(lat) ||
          _.isUndefined(lng) ||
          _.isUndefined(name) ||
          _.isUndefined(userId)) {
        return Promise.reject('パラメータがFXXK');
      };
      
      // TODO issue#12 の後にlocationIdに差し替え
      let params = {
          locationId: locationId,
          latitude: lat,
          longitude: lng,
          name: name
      };
      // TODO transaction対応
      let location = yield Locations.findOrCreate({ locationId: locationId }, params );
      sails.log('location: %s',location);
      let portal = yield Portal.findOrCreate({ locationId: locationId }, { locationId: locationId });
      sails.log('portal: %s',portal);
      
      return yield Checkin.create({ userId: userId, portalId: portal.portalId });
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

