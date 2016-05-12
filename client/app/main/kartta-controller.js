var karttaController = angular.module('karttaController', []);

karttaController.controller("KarttaController", [ '$scope', 'Mugit', '_', '$geolocation', function($scope, Mugit, _, $geolocation) {
  $geolocation.getCurrentPosition().then(function(position) {
    $scope.mapCenter = { lat: position.coords.latitude, lng: position.coords.longitude, zoom: 15 };
  });

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
    _.forEach(data.checkins, function(checkin) {
      console.log(checkin);
      $scope.markers.push({
        lat: checkin.location.lat,
        lng: checkin.location.lng,
        message: "Checkinid: " + checkin.checkinid,
        draggable: false
      });
    });
  });

  angular.extend($scope, {
      mapCenter: {
        lat: 61.498707,
        lng: 23.756789,
        zoom: 15
      },
      defaults: {
        scrollWheelZoom: true
      }
  });
}]);
