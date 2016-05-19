   		var app = angular.module('sample', []);
			app.controller("sController", sController);

			sController.$inject = [ '$scope', '$http', '$window' ];
			function sController($scope, $http, $window) {
				
				$scope.save = function(){
					alert("Saved values: (key:value)  = " + $scope.key + ":=" $scope.value);
				};							
			}		
 