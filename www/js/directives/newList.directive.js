angular.module('starter')

.directive('newList', newList);

function newList() {
	return {
		
		scope: {},
		controller: function($location, Lists) {
			
			var vm = this;
	
			vm.list = {};
			vm.newList = newList;
			
			function newList() {
				Lists.add({name: vm.list.name});
				$location.path('/tab/lists');
			};
			
		},
		controllerAs: 'vm',
		template: [
			
			'<div class="list">',
				'<label class="item item-input">',
					'<input type="text" placeholder="Nombre de la lista" ng-model="vm.list.name">',
				'</label>',
				'</div>',
			
				'<div class="padding">',
				'<button class="button button-full button-positive" ng-click="vm.newList();">',
					'Nueva lista',
				'</button>',
			'</div>'
			
		].join('')
		
	};
}