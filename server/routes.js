'use strict';

var path = require('path');
var errors = require('./components/errors');

module.exports = function (app) {

  app.route('/:url(app|components|bower_components)/*')
   .get(errors[404]);

  app.route('/*')
    .get(function (req, res) {
      res.sendFile(path.join(app.get('appPath'), 'index.html'));
    });
};
