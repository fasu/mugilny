var karttaController = angular.module('karttaController', []);

karttaController.controller("KarttaController", [ '$scope', 'Mugit', '_', '$geolocation', function($scope, Mugit, _, $geolocation) {

  $scope.markers = new Array();
  $scope.markers.push({
    lat: 61.498707,
    lng: 23.756789,
    message: "The Futurice is here",
    focus: false,
    draggable: false
  });

  $geolocation.getCurrentPosition().then(function(position) {
    $scope.vectorit["searchRadius"] = circlePath(position.coords.latitude, position.coords.longitude);
    $scope.vectorit["userPosition"] = circleMarkerPath(position.coords.latitude, position.coords.longitude);
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
      },
      vectorit: {
        searchRadius: circlePath(61.498707, 23.756789),
        userPosition: circleMarkerPath(61.498707, 23.756789)
      }

  });

  function circleMarkerPath(latitude, longitude) {
    return {
      type: "circleMarker",
      latlngs: {
          lat: latitude,
          lng: longitude
      },
      radius: 5
    }
  }
  function circlePath(latitude, longitude) {
    return {
      type: "circle",
      radius: 1000,
      latlngs: {
          lat: latitude,
          lng: longitude
      },
      weight: 1
    }
  }

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
