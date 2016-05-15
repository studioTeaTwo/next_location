'use strict';

const _ = require('lodash');

module.exports = {
  create: (owner, name, locationModel) => {
    // TODO Validate
    let params = _.assignIn(locationModel.unapply(), {
      owner: owner,
      name: name
    });
    
    return Locations.create(params) ;
  }
}
