/**
 * MapController
 *
 * @description :: Server-side logic for managing maps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
"use strict";

module.exports = {
  index: (req, res) => {
    sails.log("Hello!"); //user情報など
    res.view("pages/map/home.swig");
  }
};

