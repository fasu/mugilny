var karttaController = angular.module('karttaController', []);

karttaController.controller("KarttaController", [ '$scope', function($scope) {
    angular.extend($scope, {
        futuCenter: {
          lat: 61.498707,
          lng: 23.756789,
            zoom: 12
        },
        markers: {
            futuCenter: {
                lat: 61.498707,
                lng: 23.756789,
                message: "The Futurice is here",
                focus: true,
                draggable: false
            }
        },
        defaults: {
            scrollWheelZoom: true
        }
    });
}]);
