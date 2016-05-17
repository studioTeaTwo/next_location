/**
 * Portal.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'portals',
  autoCreatedAt: true,
  autoUpdatedAt: true,
    
  attributes: {
    portalId: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      columnName: 'portal_id'
    },
    
    locationId: {
      type: 'string',
      required: true,
      columnName: 'location_id'
    },
    
    hp:{
      type: 'string',
      defaultsTo: 100,
      columnName: 'hp'
    },
    
    nickname:{
      type: 'string',
      columnName: 'nickname'
    },
    
    ownerId:{
      type: 'integer',
      columnName: 'owner_id'
    }
  }
};

