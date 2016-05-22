/**
 * Checkin.js
 * 
 * @description :: TODO: You might write a short summary of how this model works
 *              and what it represents here.
 * @docs :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'checkins',

  attributes: {
    checkinId: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      columnName: 'checkin_id'
    },
    
    portalId: {
      type: 'integer',
      required: true,
      columnName: 'portal_id'
    },
    
    userId: {
      type: 'integer',
      required: true,
      columnName: 'user_id'
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

