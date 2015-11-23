var express = require('express');
var router = express.Router();


var mongojs = require('mongojs');
// Conection String
var url = 'mongodb://localhost:27017/listacompra';
// Array de colecciones
var collections = ['cats', 'products', 'list', 'listproducts'];
// Conexión a mongodb
var db = mongojs(url, collections);


/* GET home page. */

router.get('/', function(req, res) {
  db.products.find(function(err, docs) {
    res.json(docs);
  });
});

router.get('/products', function(req, res) {
  db.products.find(function(err, docs) {
    res.json(docs);
  });
});

router.get('/cats', function(req, res) {
  db.cats.find(function(err, docs) {
    res.json(docs);
  });
});

module.exports = router;
