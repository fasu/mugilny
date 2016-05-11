var karttaController = angular.module('karttaController', []);

karttaController.controller("KarttaController", [ '$scope', 'Mugit', '_', function($scope, Mugit, _) {
  $scope.markers = new Array();
  $scope.markers.push({
    lat: 61.498707,
    lng: 23.756789,
    message: "The Futurice is here",
    focus: true,
    draggable: false
  });

  Mugit.viimeisimmat().success(function(data) {
    console.log(data);
    _.forEach(data.checkins.items, function(venue) {
      console.log(venue);
      $scope.markers.push({
        lat: venue.venue.location.lat,
        lng: venue.venue.location.lng,
        message: "The Futurice is here",
        draggable: false
      });
    });
  });

  angular.extend($scope, {
      futuCenter: {
        lat: 61.498707,
        lng: 23.756789,
        zoom: 12
      },
      defaults: {
        scrollWheelZoom: true
      }
  });
}]);
