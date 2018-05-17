var projectsApp = angular.module('projectsApp', ['rittdevCore']);

projectsApp.controller('ProjectsCtrl', function($scope, projectRetriever) {

		projectRetriever.getProjects().then(function(projects) {

			$scope.projects = projects;
		});
});

projectsApp.filter('urlBuilderFilter', function() {

		return function(project, artifact) {

			var urlPrefix = 'projects/';

			var url = urlPrefix + project.name + '/';

			url = url + project.shortName + (artifact || project.artifacts[0]);

			return url; 
		};
});


projectsApp.filter('humanizeFormatFilter', function() {

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

