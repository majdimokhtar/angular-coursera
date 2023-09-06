(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['UserService', '$scope'];
    function MyInfoController(UserService, $scope) {
        var ctrl = this;
        ctrl.loadData = function () {
            ctrl.user = UserService.getData();
            console.log(ctrl.user);
          };
  
          $scope.$on('userDataUpdated', function () {
              ctrl.loadData();
              console.log(ctrl.user);
          });
  
          ctrl.loadData(); // Load data when controller is initialized
      }

})();