angular.module('starter')
.directive('listadoProductos', listadoProductos)


function listadoProductos() {
	return {
		
		scope: {},
		controller: function(Products) {
            var vm = this;
            
            var all = Products.all();
            
            vm.buscando = false;
            vm.search = '';
            vm.cats = Products.allCats();
            vm.products = all;
            vm.buscar = buscar;
            
            function buscar() {
                vm.products = all;
                vm.buscando = false;
                
                if(vm.search != '') {
                    var temp = [];
                    
                    angular.forEach(all, function(value, key) {
                        if(value.name.toLowerCase().indexOf(vm.search.toLowerCase()) != -1) {
                            temp.push(value);
                        }
                    })
                    
                    vm.products = temp;
                    vm.buscando = true;
                }    
            }
            
            
            
        },
		controllerAs: 'vm',
		template: [
            
            '<div class="list list-inset">',
                '<label class="item item-input">',
                    '<i class="icon ion-search placeholder-icon"></i>',
                    '<input type="text" placeholder="Buscar" ng-model="vm.search" ng-change="vm.buscar()">',
                '</label>',
            '</div>',
            
            
            '<div class="list">',
                '<span ng-repeat="cat in vm.cats">',
                    '<div class="item item-divider" ng-hide="vm.buscando">{{cat.name}}</div>',
                    '<div class="item" ng-repeat="product in vm.products | filter: {cat: cat.id}">{{product.name}}</div>',
                '</span>',
            '</div>',
            
            
            '<div class="padding">',
                '<button class="button button-full button-positive">',
                'Nuevo producto',
                '</button>',  
            '</div>'
            
        ].join('')
		
	};
}