'use strict';

var app = angular.module('MyApp', []);


app.controller('MainCtrl', function ($scope, $http) {
	$scope.method = ["GET", "POST", "PUT", "DELETE"];
	$scope.selectedMethod = "GET";
	$scope.url = 'https://www.youtube.com/';
	$scope.params = [];
	$scope.addParams = function(){
		if ($scope.key && $scope.value){
			$scope.params.push({
				'key': $scope.key,
				'value': $scope.value
			});
			$scope.key ='';
			$scope.value = '';
			};
		}

	$scope.fetch = function (){
		if ($scope.params.length) {
			var config = {
					params: $scope.params
				};
			$http({
				method: $scope.selectedMethod,
				url: $scope.url,
				params: config
			}).then(function(response){
					$scope.data = response.data;
			  }, function(response){
			  		$scope.data = "Invalid request" ;
			 });
		}
		else{
			$http({
				method: $scope.selectedMethod,
				url: $scope.url
			}).then(function(response){
					$scope.data = response.data;
			  }, function(response){
			  		$scope.data = "Invalid request" ;
			});
		}
	};

});