var express = require('express');
var router = express.Router();
var mmodel = require('../models/main_model.js');

console.log("Made it to main_controller.js");

router.get('/', function(req,res) {
  console.log("main_controller.js - router.get(/)");
  mmodel.toWorktickets(function(data){
    res.render('index', {data});
  });
});

router.post('/tenant', function(req, res){
  console.log(req.body.id);
  mmodel.toTenant(function(data){
    console.log(data);
    res.render('ten', {data});
    // res.redirect('/tenant');
  });
});

router.post('/landlord', function(req, res) {
  mmodel.toLandlord(function(data){
    console.log(data);
    res.render('lan', {data});
    // res.redirect('/landlord');
  });
}); 

module.exports = router;