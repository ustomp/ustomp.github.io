angular.module('rittdevCore', [])
.factory('jsonRetriever', ['$http','$q',function($http, $q) {

	var o = {};

	o.get = function(url) {

		var deferred = $q.defer();

		$http.get('projects.json').then(function(response) {

			deferred.resolve(response.data);
		});

		return deferred.promise;
	};

	return o;
}]);
