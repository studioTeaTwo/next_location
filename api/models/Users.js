/**
 * Models.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
  tableName: 'users',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    userId: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      columnName: 'user_id'
    },

    userName:{
      type: 'string',
      columnName: 'username',
      required:true
    },

    signupDate:{
      type: "datetime",
      columnName: "signup_date"
    },

    isActive: {
      type: 'boolean',
      columnName: "is_active",
      defaultsTo: true,
      boolean: true
    }
  }
};

