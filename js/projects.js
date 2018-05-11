var projectsApp = angular.module('projectsApp', ['rittdevCore']);

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

projectsApp.filter('humanizeFormat', function() {

	var map = {
		'build':'Build Diagram',
		'etch':'Etch Template',
		'schematic': 'Schematic',
		'buildetch': 'Build/Etch Diagram',
		'inside': 'Interior Photo',
		'outside': 'Exterior Photo',
		'front': 'Interior Photo'
	};

	return function(format) {

		var i = format.lastIndexOf('.');

		return map[format.slice(0,i)];
	};
});

projectsApp.factory('projectRetriever', ['jsonRetriever', function(jsonRetriever) {

		var o = {};

		o.getProjects = function() {

			return jsonRetriever.get('projects.js');
		};

		return o;
}]);

