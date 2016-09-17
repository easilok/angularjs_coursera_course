(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";
  $scope.dinamicStyle = {};
  $scope.textboxStyle = {};

  $scope.displayMessage = function () {
    var message = calculateMessage($scope.lunchMenu);
    $scope.message = message;
  };


  function calculateMessage(string) {
    var returnString = "";

    if (string.length === 0) {
      $scope.dinamicStyle = {color:"red"};
      $scope.textboxStyle = {"border-color":"red"};
      returnString = "Please enter data first!";

    } else {

      $scope.dinamicStyle = {color:"green"};
      $scope.textboxStyle = {"border-color":"green"};
      var lunchArray = countLunchItems(string);
      if (lunchArray.length < 4) {
        returnString = "Enjoy!";
      } else {
        returnString = "Too much!";
      }
    }
    return returnString;
  };

  function countLunchItems (string) {
    var returnArray = string.split(",");
    return returnArray;
  }
};


})();
