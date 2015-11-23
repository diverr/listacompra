angular.module('starter')

  .service('Products', serviceProducts);


function serviceProducts($http, CONSTANT) {
    // Might use a resource here that returns a JSON array
  
    var cats = [];
    var items = [];
    
    return {
      
      // productos
      all: function () {
        var promise = $http.get(CONSTANT.url + 'products')
          .success(function(result) {
            result.data;
          });
          
        return promise;
      },
      remove: function (item) {
        items.splice(items.indexOf(item), 1);
      },
      get: function (id) {
        for (var i = 0; i < items.length; i++) {
          if (items[i].id === parseInt(id)) {
            return items[i];
          }
        }
        return null;
      },
      add: function (item) {
        items.push(item);
      },
      
      
      // categorías
      allCats: function () {
        // cargamos las categorías
        var promise = $http.get(CONSTANT.url + 'cats')
          .success(function(result) {
            return result.data;
          });
          
        return promise;
      },
      removeCat: function (cat) {
        cats.splice(cats.indexOf(cat), 1);
      },
      getCat: function (id) {
        for (var i = 0; i < cats.length; i++) {
          if (cats[i].id === parseInt(id)) {
            return cats[i];
          }
        }
        return null;
      },
      addCat: function (cat) {
        cats.push(cat);
      }
      
      
    };
  }