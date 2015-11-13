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

  return {
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
    }
  };
});
