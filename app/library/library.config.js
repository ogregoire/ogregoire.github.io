(function() {
  'use strict';
  
  angular
    .module('app.library')
    .config(config);
  
  config.$inject = ['$routeProvider']
  
  function config($routeProvider) {
    $routeProvider
      .when('/books', {
        templateUrl: 'app/library/book-list.html',
        controller: 'BookList',
        controllerAs: 'books'
      })
      .when('/books/:bookId', {
        templateUrl: 'app/library/book-detail.html',
        controller: 'BookDetail',
        controllerAs: 'book'
      })
      .otherwise({
        redirectTo: '/books'
      });
  }
  
})();
