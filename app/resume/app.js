angular.module("resumeApp", [])
.controller("resumeController", function($scope, resumeService){
	
	$scope.person = {};
	$scope.summary = "";
	$scope.works = [];
	$scope.education = [];
	$scope.trainings = [];
	$scope.languages = [];
	$scope.skills = [];
	
	this.getResume = function() {
		resumeService.getResume("app/resume/olivier-gregoire.en.json")
			.success(function(resume) {
				$scope.person = resume.person;
				$scope.summary = resume.summary;
				$scope.works = resume.works;
				$scope.education = resume.education;
				$scope.trainings = resume.trainings;
				$scope.languages = resume.languages;
				$scope.skills = resume.skills;
			})
			.error(function() {
				console.log("resume retrieval failed");
			});
	};
	this.getResume();
})
.factory("resumeService", function($http, $q) {
	// interface
	var service = {
		resume: {},
		getResume: getResume
	};
	return service;
	
	function getResume(jsonFile) {
		return $http.get(jsonFile)
			.success(function(data){
				service.resume = data;
			});
	}
})
;

