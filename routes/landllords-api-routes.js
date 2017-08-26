// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/landlords", function(req, res) {
    var query = {};
    if (req.query.LLID) {
      query.LandlordID = req.query.LLID;
    }
    // 1. Add a join here to include all of the Authors to these posts
    db.Landlords.findAll({
      where: query,
      include: [kubo_db.Landlord]
    }).then(function(dbLandlord) {
      res.json(dbLandlord);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/landlords/:id", function(req, res) {
    // 2. Add a join here to include the Author who wrote the Post
    db.Landlords.findOne({
      where: {
        id: req.params.id
      },
      include: [kubo_db.Landlords]
    }).then(function(dbLandlord) {
      console.log(dbLandlord);
      res.json(dbLandlord);
    });
  });

  // POST route for saving a new post
  app.post("/api/landlords", function(req, res) {
    db.Landlords.create(req.body).then(function(dbLandlord) {
      res.json(dbLandlord);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/landlords/:id", function(req, res) {
    db.Landlords.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbLandlord) {
      res.json(dbLandlord);
    });
  });

  // PUT route for updating posts
  app.put("/api/landlords", function(req, res) {
    db.Landlords.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbLandlord) {
        res.json(dbLandlord);
      });
  });
};
