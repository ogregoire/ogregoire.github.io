(function() {
  'use strict';
  
  angular
    .module('library')
    .config(config);
  
  config.$inject = ['$routeProvider']
  
  function config($routeProvider) {
    $routeProvider
      .when('/books', {
        templateUrl: 'app/library/book-list.html',
        controller: 'BookListController',
        controllerAs: vm
      })
      .when('/books/:bookId', {
        templateUrl: 'app/library/book-detail.html',
        controller: 'BookDetailController',
        controllerAs: vm
      })
      .otherwise({
        redirectTo: '/books'
      });
  }
  
})();
