var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
	return window._;
});

var mugilnyApp = angular.module('mugilnyApp', [
    'ui.bootstrap',
    'leaflet-directive',
    'karttaController',
    'mugiService',
    'underscore',
    'ngGeolocation'
  ])
  .run(['$rootScope', function ($rootScope) {
    $rootScope.appName = 'mugilnyApp';
  }]);
