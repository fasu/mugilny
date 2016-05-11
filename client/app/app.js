var mugilnyApp = angular.module('mugilnyApp', [
    'ui.bootstrap',
    'leaflet-directive',
    'karttaController'
  ])
  .run(['$rootScope', function ($rootScope) {
    $rootScope.appName = 'mugilnyApp';
  }]);
