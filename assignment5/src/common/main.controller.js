angular.module('common')
.controller('MainController', MainController);

MainController.$inject = ['UserService', '$scope'];
function MainController(UserService, $scope) {
  var main = this;
  $scope.$on('userDataUpdated', function () {
    main.userServiceData = UserService.getData();
  });
  main.userServiceData = UserService.getData();
}