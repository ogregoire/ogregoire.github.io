(function() {
  angular
      .module('app')
      .factory('logger', logger);

  logger.$inject = ['$log'];

  function logger($log) {
    var service = {
      error: error,
      info: info,
      success: success,
      warning: warning,
      log: $log.log
    };
    return service;

    ////////////

    function error(message, data) {
      $log.error('Error: ' + message, data);
    };
  }
})();
