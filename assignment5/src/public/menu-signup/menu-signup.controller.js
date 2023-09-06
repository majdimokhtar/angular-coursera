(function () {
  "use strict";

  angular.module('public')
    .controller('MenuSignupController', MenuSignupController);

  MenuSignupController.$inject = ['$scope', '$http', 'UserService', '$state'];
  function MenuSignupController($scope, $http, UserService, $state) {
    var reg = this;
    var userService = UserService;

    reg.validateItem = function () {
      if (typeof reg.short_name === 'string') {
        var categoryShortName = (reg.short_name.replace(/[0-9]/g, '')).toUpperCase();  // remove digits from short_name
        var menuNumber = reg.short_name.replace(/\D/g, '') - 1;  // remove non-digits and subtract 1
        var url = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" +
          categoryShortName + "/menu_items/" + menuNumber + ".json";
        $http.get(url)
          .then(function (response) {
            if (response.data === null) {
              reg.error = 'No such menu number exists';
              $scope.regForm.$setValidity('short_name', false);
            } else {
              reg.error = '';
              reg.menu_item = response.data;
              $scope.regForm.$setValidity('short_name', true);
            }
          }, function (error) {
            reg.error = 'Error occurred: ' + error.statusText;
            $scope.regForm.$setValidity('short_name', false);
          });
      };
    }

    reg.submit = function () {
      if ($scope.regForm.$valid && reg.menu_item) {
        userService.setData({
          first_name: reg.first_name,
          last_name: reg.last_name,
          email: reg.email,
          phone: reg.phone,
          menu_item: reg.menu_item
        });
        reg.completed = true;
        $state.go('myInfo');
      };
    }
  }

})();