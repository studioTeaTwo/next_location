/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const co = require('co');

module.exports = {
  index: (req, res) => {
    co(function *(){
      res.view("homepage.swig");
    });
  }
};
