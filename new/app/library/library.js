(function() {
  'use strict';

  angular
    .module('app.library')
    .controller('Library', Library);

  Library.$inject = [];
    
  function Library() {
    var vm = this;
    vm.books = [];
    vm.title = 'Books';

    activate();

    function activate() {
      return getBooks().then(function() {
        //logger.info('Activated Books View');
      });
    }

    function getBooks() {
      return dataservice.getBooks().then(function(data) {
        vm.books = data;
        return vm.books;
      });
    }
  }
})();
