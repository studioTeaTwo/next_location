/**
 * Models.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
// GooglePlacesAPIのミラー的な
module.exports = {
  tableName: 'locations',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    locationId: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      columnName: 'location_id'
    },
    // TODO postgres の geometory 型使いたい(T_T)
    // TODO せめて複合Unique制約つけたい

    // 緯度
    latitude: {
      type: 'string',
      required: true,
      columnName: 'latitude'
    },

    // 経度
    longitude: {
      type: 'string',
      required: true,
      columnName: 'longitude'
    },
    name:{
      type: 'string',
      required: true,
      columnName: 'name'
    },
    
    // Attribute methods
    getLocationId: function (){
      return this.locationId;
    }
  }
};

