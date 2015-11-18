angular.module('starter')

.directive('listadoListas', listadoListas);

function listadoListas() {
	return {
		scope: {},
		controller: function($location, Lists) {
			
			var vm = this;
	
			vm.newlist = {};
			
			vm.productsList = [];
			vm.lists = [];
			
			vm.gotoNewList = function() {
				$location.path('/tab/newlist');	
			};
			
			vm.newList = function() {
				Lists.add({name: vm.newlist.name});
				$location.path('/tab/lists');
			};
			
			var load = function() {
				vm.lists = Lists.all();
			}
			
			load();
			
		},
		controllerAs: 'vm',
		template: [
			
			'<div class="list">',
				'<a ng-repeat="list in vm.lists" class="item" href="#/tab/newproduct">',
					'{{list.name}}',
				'</a>',
			'</div>',
			'<div class="padding">',
				'<button class="button button-full button-positive" ng-click="vm.gotoNewList();">',
				'Nueva lista',
				'</button>',  
			'</div>'
			
		].join('')
	};	
}