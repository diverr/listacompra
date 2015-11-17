angular.module('starter.directives.lists', [])

.directive('listadoProductos', listadoProductos);

function listadoProductos() {
	return {
		scope: {},
		controller: listCtrl,
		controllerAs: 'c',
		template: [
			
			'<div class="list">',
				'<a ng-repeat="list in c.lists" class="item" href="#/tab/newproduct">',
					'{{list.name}}',
				'</a>',
			'</div>',
			'<div class="padding">',
				'<button class="button button-full button-positive" ng-click="c.gotoNewList();">',
				'Nueva lista',
				'</button>',  
			'</div>'
			
		].join('')
	};	
};

function listCtrl($location, Lists) {
	
	this.newlist = {};
	
	this.productsList = [];
	this.lists = [];
	
	this.gotoNewList = function() {
		$location.path('/tab/newlist');	
	};
	
	this.newList = function() {
		Lists.add({name: this.newlist.name});
		$location.path('/tab/lists');
	};
	
	var parent = this;
	
	var load = function() {
		parent.lists = Lists.all();
	}
	
	load();
	
	
}