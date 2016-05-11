var mugiService = angular.module('mugiService', []);

mugiService.service('Mugit', ['$http', function($http) {
	// var url = http://api.untappd.com/v4/thepub/local
	this.viimeisimmat = function() {
		return $http.get('app/mockdata/localcheckins.json');
	}
}]);
