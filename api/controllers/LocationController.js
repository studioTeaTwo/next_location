/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

"use strict";

const co = require('co');
const Promise = require('bluebird');
const _ = require('lodash');
const DomainLocation = require('../valueObjects/Location')


module.exports = {
  create: (req, res) => {
    let ownerName = req.param('owner', undefined);
    let locationName = req.param('name', undefined);
    co(function *() {
      let latitude = req.param('latitude', undefined);
      let longitude = req.param('longitude', undefined);

      sails.log(req.allParams());

      if (_.isUndefined(latitude) || _.isUndefined(longitude)) {
        return Promise.reject('パラメータがFXXK');
      }

      let domain =  new DomainLocation(latitude, longitude);
      return yield LocationRepository.create(ownerName, locationName, domain);
    }).then((location) => {
      sails.log(location);
      return res.redirect('/admin/locations/' + location.locationId);
    }).catch((err) => {
      sails.log.error("＼(^o^)／");
      sails.log.error(err);
      return res.badRequest();
    });
  }
};
