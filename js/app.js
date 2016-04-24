'use strict';

var app = angular.module('MyApp', []);


app.controller('MainCtrl', function ($scope, $http) {
	$scope.method = ["GET", "POST", "PUT", "DELETE"];
	$scope.selectedMethod = "GET";
	$scope.url = 'http://www.youtube.com/';
	$scope.params = [];
	$scope.addParams = function(){
		$scope.params.push({
			'key': $scope.key,
			'value': $scope.value
		});
		$scope.name ='';
		$scope.value = '';
	};
	$scope.fetch = function (){
		$http({
			method: $scope.selectedMethod,
			url: $scope.url
		}).then(function(response){
				$scope.data = response.data;
		  }, function(response){
		  		$scope.data = response.data;
		 });
	};
});