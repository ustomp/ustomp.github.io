var projectsApp = angular.module('projectsApp', []);

projectsApp.controller('ProjectsCtrl', function($scope, projectRetriever) {

		projectRetriever.getProjects().then(function(projects) {

			$scope.projects = projects;
		});

});

projectsApp.filter('urlBuilder', function() {

		return function(project, artifact, format) {

			var githubFormat = format || 'blob';

			var urlPrefix = 'https://github.com/ustomp/pedals/' + githubFormat + '/master/';

			var url = urlPrefix + project.name + '/';

			if(artifact) {

				url = url + project.shortName + artifact;
			}

			return url; 
		};
});

projectsApp.service('projectRetriever', function($http, $q) {

		var deferred = $q.defer();


		$http.get('projects.json').then(function(response) {
		
			deferred.resolve(response.data);

		}).catch(function(response) {
		
			console.error(response);

			deferred.resolve([]);
		});

		this.getProjects = function() {

			return deferred.promise;
		}
	
});


