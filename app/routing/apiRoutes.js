//var path = require("path");
var friends = require("../data/friends");

module.exports = function(app){
   
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        
        var newUserInfo = req.body;
    
        newUserInfo.routeName = newUserInfo.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(newUserInfo);
    
        //gonna need to then push to an array
      });
    
};

