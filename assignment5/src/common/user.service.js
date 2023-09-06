(function () {
    "use strict";
    
    angular.module('common')
    .service('UserService', UserService);
    
    UserService.$inject = ['$rootScope'];
    function UserService($rootScope) {
        var user;

        this.setData = function(data) {
          user = data;
          $rootScope.$broadcast('userDataUpdated');
        };
      
        this.getData = function() {
          return user;
        };
    }
    })();