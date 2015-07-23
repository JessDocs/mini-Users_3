var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  this.getUsers = function() {
      var deferred = $q.defer()
      $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    }).then(function(response) {
          //if you want to pick out specific info from data from api
//          var dataObj = {};
//          for in(loop) {
//              dataObj.names = loop[i]
//          }
//          for in(loop) {
//              dataObj.birthdays = loop[i]
//          }
//          var response = dataObj;
          //play with data, then resolve $q promise
          var res = response.data.data;
          for(var i = 0; i < res.length; i++) {
              res[i]. first_name = 'Jess'
          }
          deferred.resolve(res)
      })
   return deferred.promise;
  }
});
