var express = require('express');
var router = express.Router();
var mmodel = require('../models/main_model.js');

console.log("Made it to main_controller.js");

router.get('/', function(req,res) {
  console.log("main_controller.js - router.get(/)");
  res.render('index');
  // mmodel.toWorktickets(function(data){
  //   res.render('index', {data});
  // });
});

//Creates a security breach
// router.get('/dashboard-landlord', function(req,res) {
//   console.log("--------main_controller.js - router.get(/)");
//   mmodel.toWorktickets(function(data){
//     console.log(data);
//   });
// });

/* router.get('/tenant-signin', function(req, res){
  console.log(req.body.id);
  mmodel.toTenant(function(data){
    // console.log(data);
    res.render('tenant-signin', {data});
    // res.redirect('/tenant');
  });
});

router.get('/landlord-signin', function(req, res) {
  mmodel.toLandlord(function(data){
    // console.log(data);
    res.render('landlord-signin', {data});
    // res.redirect('/landlord');
  });
});  */

module.exports = router;