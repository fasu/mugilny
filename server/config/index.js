'use strict';

var path = require('path');

module.exports = {
  env: process.env.NODE_ENV,

  root: path.normalize(path.join(__dirname, '../..')),

  port: 9080
};
