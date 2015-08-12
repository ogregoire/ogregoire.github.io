'use strict'

//
angular.module('collection-ui', ['collection.services', 'collection.filters'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
		.when('/collection', {templateUrl: 'partials/list.html', controller: ListController})
		.when('/collection/new', {templateUrl: 'partials/add.html', controller: AddController})
		.when('/collection/:audiobookId', {templateUrl: 'partials/details.html', controller: DetailsController})
		.when('/collection/:audiobookId/edit', {templateUrl: 'partials/edit.html', controller: EditController})
		.when('/about', {templateUrl: 'partials/about.html', controller: ListController})
		.otherwise({redirectTo: '/collection'})
  }]);