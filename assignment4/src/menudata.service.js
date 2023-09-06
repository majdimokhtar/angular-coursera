;(function () {
  angular
    .module("data")
    .constant("ApiBasePath", "https://coursera-jhu-default-rtdb.firebaseio.com")
    .service("MenuDataService", MenuDataService)

  MenuDataService.$inject = ["$http", "ApiBasePath"]
  function MenuDataService($http, ApiBasePath) {
    let service = this

    service.getAllCategories = function () {
      return new Promise((resolve, reject) => {
        $http({
          method: "GET",
          url: ApiBasePath + "/categories.json",
        })
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }

    service.getItemsForCategory = function (categoryShortName) {
      return new Promise((resolve, reject) => {
        $http({
          method: "GET",
          url: ApiBasePath + "/menu_items/" + categoryShortName + ".json",
        })
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }
})()
