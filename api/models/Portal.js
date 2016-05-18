/**
 * Portal.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'portals',
    
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
      type: 'integer',
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
    },
    
    createdAt: {
      type: 'datetime',
      required: true,
      //defaultsTo: ,
      columnName: 'created_at'
    },
    
    updatedAt: {
      type: 'datetime',
      required: true,
      //defaultsTo: ,
      columnName: 'updated_at'
    }
  }
};

