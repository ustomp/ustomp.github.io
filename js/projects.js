angular.module('projectsApp', [])
	.controller('ProjectsListController', function() {

		var projectList = this;

		projectList.projects = [
			{name:'Ampeg Scrambler', shortName:'scrambler'},
			{name:'Boss FA-1', shortName:'fa1'},
			{name:'TS-808', shortName:'808'},
			{name:'Boss SD-1', shortName:'sd1'},
			{name:'Dr Quack', shortName:'drquack'},
			{name:'Dual Orange Squeezer', shortName:'dualsqueeze'},
			{name:'Kay Fuzztone', shortName:'kayfuzz'},
			{name:'MXR Dyna-Comp', shortName:'dynacomp'},
			{name:'Maestro FSH-1A', shortName:'fsh'},
			{name:'PT-80 Delay', shortName:'pt80'},
			{name:'Peppermill', shortName:'peppermill'},
			{name:'Rat', shortName:'rat'},
			{name:'Shin-Ei Fuzz', shortName:'shinei'},
			{name:'Unicord Super-Fuzz', shortName:'superfuzz'}
		];


	})
	.filter('urlBuilder', function() {

		return function(project, type, extension, format) {

			var githubFormat = format || 'blob';

			var urlPrefix = 'https://github.com/ustomp/pedals/' + githubFormat + '/master/';

			var url = urlPrefix + project.name + '/';

			if(type && extension) {

				url = url + project.shortName + type + '.' + extension;
			}

			return url; 
		};
	});


