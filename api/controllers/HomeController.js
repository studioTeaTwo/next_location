/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
"use strict";

const co = require('co');
const Promise = require('bluebird');

module.exports = {
  index: (req, res) => {
    co(function *(){
      res.view("homepage.swig");
    });
  }
};
