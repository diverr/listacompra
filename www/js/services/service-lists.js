angular.module('starter.services.lists', [])

.factory('Lists', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [{
    id: 0,
    name: 'Mercadona'
  }, {
    id: 1,
    name: 'Lidl'
  }, {
    id: 2,
    name: 'Eroski'
  }];

  // productos de una lista
  var products = [
    
      {
        id: 0,
        cat: 0,
        list: 0,
        name: 'Magdalenas'
      }, 
      {
        id: 1,
        cat: 0,
        list: 0,
        name: 'Leche'
      }, 
      {
        id: 2,
        cat: 0,
        list: 0,
        name: 'Cereales'
      }
    
  ];  

  return {
    
    // metodos de listas
    all: function() {
      return items;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(id) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(id)) {
          return items[i];
        }
      }
      return null;
    },
    add: function(item) {
      items.push(item);
    },
    
    
    // métodos para los productos de una lista
    allProducts: function(list) {
      return products;
    },
    removeProduct: function(item) {
      products.splice(products.indexOf(item), 1);
    },
    getProduct: function(id) {
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(id)) {
          return products[i];
        }
      }
      return null;
    },
    addProduct: function(item) {
      products.push(item);
    }
    
    
  };
});
