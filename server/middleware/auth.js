const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  console.log('this is req', req);
  res.send();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

