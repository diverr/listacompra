angular.module('starter.services.products', [])

  .factory('Products', function () {
    // Might use a resource here that returns a JSON array
  
    var cats = [
      {
        id: 0,
        name: "Desayuno"
      },
      {
        id: 1,
        name: "Limpieza"
      }
    ];

    var items = [
      {
        id: 0,
        cat: 0,
        name: 'Magdalenas'
      }, 
      {
        id: 1,
        cat: 0,
        name: 'Leche'
      }, 
      {
        id: 2,
        cat: 0,
        name: 'Cereales'
      },
      {
        id: 3,
        cat: 1,
        name: 'Pronto Jabonoso'
      }, 
      {
        id: 4,
        cat: 1,
        name: 'Fregasuelos'
      }, 
      {
        id: 5,
        cat: 1,
        name: 'Volvone'
      },
    ];
    
    return {
      
      // productos
      all: function () {
        return items;
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
        return cats;
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
  });
