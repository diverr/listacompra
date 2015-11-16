angular.module('starter.controllers.lists', [])

.controller('ListsCtrl', function($scope, $location, Lists) {
	
	$scope.newlist = {};
	
	$scope.productsList = [];
	
	$scope.gotoNewList = function() {
		$location.path('/tab/newlist');	
	};
	
	$scope.newList = function() {
		Lists.add({name: $scope.newlist.name});
		$location.path('/tab/lists');
	};
	
	
	var load = function() {
		$scope.lists = Lists.all();
	}
	
	
	load();
	
});