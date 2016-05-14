var karttaController = angular.module('karttaController', []);

karttaController.controller("KarttaController", [ '$scope', 'Mugit', '_', '$geolocation', function($scope, Mugit, _, $geolocation) {

  $scope.markers = new Array();
  $scope.markers.push({
    lat: 61.498707,
    lng: 23.756789,
    message: "The Futurice is here",
    focus: true,
    draggable: false
  });

  $geolocation.getCurrentPosition().then(function(position) {
    $scope.mapCenter = { lat: position.coords.latitude, lng: position.coords.longitude, zoom: 13 };
  });

  Mugit.viimeisimmat().success(function(data) {
    _.forEach(data.checkins, function(checkin) {
      $scope.markers.push(checkinAsMarker(checkin));
    });
  });

  angular.extend($scope, {
      mapCenter: {
        lat: 61.498707,
        lng: 23.756789,
        zoom: 13
      },
      defaults: {
        scrollWheelZoom: true
      }
  });

  function checkinAsMarker(checkin) {
    return {
      lat: checkin.location.lat,
      lng: checkin.location.lng,
      message: "Checkinid: " + checkin.checkinid,
      draggable: false,
      icon: {
        type: "awesomeMarker",
        icon: "fa-beer",
        markerColor: "orange"
      }
    }
  }

}]);
