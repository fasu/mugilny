'use strict';

var express = require('express');
var path = require('path');
var config = require('./index');

module.exports = function(app) {
  app.use(express.static(path.join(config.root, 'client')));
  app.set('appPath', path.join(config.root, 'client'));
};
