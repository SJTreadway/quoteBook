(function () {

angular.module('quoteBook')
	   .controller('mainCtrl'
	   , function($scope, dataService) {

	   		$scope.addQuote = {text: ''};

	   		$scope.inputForm = false;
	   		$scope.getData = dataService.getData();
	   		console.log($scope.getData);
	   		$scope.addData = function() {
	   			dataService.addData($scope.addQuote);
	   			$scope.addQuote = {text: ''};
	   			$scope.getData = dataService.getData();
	   		};
	   		$scope.removeData = function() {
	   			dataService.removeData($scope.removeQuote);
	   			$scope.removeQuote = '';
	   			$scope.getData = dataService.getData();
	   		};

	   	});



})();
